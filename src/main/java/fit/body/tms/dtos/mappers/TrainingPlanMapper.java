package fit.body.tms.dtos.mappers;

import fit.body.tms.dtos.TrainingPlanDTO;
import fit.body.tms.entities.TrainingPlan;

public class TrainingPlanMapper {

    public static TrainingPlan mapFromDTO(TrainingPlanDTO trainingPlanDTO) {
        TrainingPlan trainingPlan = new TrainingPlan();
        trainingPlanDTO.getTrainingDays().forEach(trainingDayDTO -> {trainingDayDTO.setTrainingPlan(trainingPlanDTO);});
        return null;
    }
}
