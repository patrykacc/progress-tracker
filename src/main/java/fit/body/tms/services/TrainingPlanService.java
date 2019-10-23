package fit.body.tms.services;

import fit.body.tms.entities.TrainingPlan;
import fit.body.tms.repositories.TrainingPlanRepository;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;
import java.util.List;

@Service
public class TrainingPlanService {

    private final TrainingPlanRepository trainingPlanRepository;

    public TrainingPlanService(TrainingPlanRepository trainingPlanRepository) {
        this.trainingPlanRepository = trainingPlanRepository;
    }

    public TrainingPlan save(TrainingPlan trainingPlan) {
        return trainingPlanRepository.save(trainingPlan);
    }

    @Transactional
    public TrainingPlan getById(Long id) {
        return this.trainingPlanRepository.findById(id).orElse(null);
    }

    public List<TrainingPlan> getAllTrainingsByUserId(Long userId) {
        return this.trainingPlanRepository.findByUserId(userId);
    }

    public void delete(Long id) {
        trainingPlanRepository.deleteById(id);
    }


}
