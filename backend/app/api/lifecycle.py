from fastapi import APIRouter, Depends
from sqlalchemy.orm import Session
from app.db import get_db
from app.models.database import User, FarmState, AdviceHistory

router = APIRouter()

@router.get("/status")
async def get_lifecycle_status(email: str, db: Session = Depends(get_db)):
    user = db.query(User).filter(User.email == email).first()
    if not user or not user.farm_profile:
        return {"error": "No farm profile"}
        
    farm = user.farm_profile
    history = db.query(AdviceHistory).filter(AdviceHistory.farm_id == farm.id).all()
    
    return {
        "crop": farm.crop_type,
        "sowing_date": farm.sowing_date,
        "timeline": [
            {"stage": "Sowing", "status": "Completed"},
            {"stage": "Vegetative", "status": "Active"},
            {"stage": "Flowering", "status": "Upcoming"},
            {"stage": "Harvest", "status": "Upcoming"}
        ],
        "history": [h.recommendation for h in history[-5:]] # Last 5 recommendations
    }
