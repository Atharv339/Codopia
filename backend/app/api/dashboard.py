from fastapi import APIRouter, Depends, HTTPException
from sqlalchemy.orm import Session
from app.db import get_db
from app.models.database import User, FarmProfile, FarmState, AdviceHistory
from app.schemas.schemas import DashboardSummaryResponse
from app.services.agents.farming_agents import FarmingAgents
from app.services.rag.rag_service import RAGService
import datetime

router = APIRouter()
rag_service = RAGService()

@router.get("/summary")
async def get_dashboard_summary(email: str, db: Session = Depends(get_db)):
    user = db.query(User).filter(User.email == email).first()
    if not user or not user.farm_profile:
        raise HTTPException(status_code=404, detail="Farm profile not found. Please onboard first.")
    
    farm = user.farm_profile
    state = db.query(FarmState).filter(FarmState.farm_id == farm.id).first()
    
    # Refresh stage detection
    current_stage = FarmingAgents.get_crop_stage(farm.sowing_date)
    day_count = (datetime.date.today() - farm.sowing_date).days
    
    # Get knowledge for the planner
    knowledge = await rag_service.get_relevant_advice(farm.crop_type, current_stage)
    
    # Agent Brain: Plan today's action
    raw_advice = await FarmingAgents.action_planner(current_stage, "Clear Skies, 32°C", knowledge)
    
    # Multilingual translation
    final_advice = await FarmingAgents.translate_to_language(raw_advice, user.preferred_language)
    
    # Persist advice history
    advice_entry = AdviceHistory(
        farm_id=farm.id,
        recommendation=final_advice,
        stage_at_time=current_stage,
        weather_summary="Sunny"
    )
    db.add(advice_entry)
    
    # Update state
    state.current_stage = current_stage
    state.day_count = day_count
    state.last_action = final_advice
    db.commit()

    return DashboardSummaryResponse(
        current_stage=current_stage,
        day_count=day_count,
        today_action=final_advice,
        weather_summary="Warm and Sunny - Good for growth",
        progress_percentage=min(day_count / 100.0 * 100, 100.0)
    )
