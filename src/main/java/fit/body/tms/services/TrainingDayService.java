package fit.body.tms.services;

import fit.body.tms.entities.TrainingDay;
import fit.body.tms.repositories.TrainingDayRepository;
import org.springframework.stereotype.Service;

@Service
public class TrainingDayService {

    private final TrainingDayRepository trainingDayRepository;

    public TrainingDayService(TrainingDayRepository trainingPlanRepository) {
        this.trainingDayRepository = trainingPlanRepository;
    }

    public TrainingDay save(TrainingDay trainingPlan) {
        return trainingDayRepository.save(trainingPlan);
    }

    public TrainingDay getById(Long id) {
        return this.trainingDayRepository.findById(id).orElse(null);
    }

    public void delete(Long id) {
        trainingDayRepository.deleteById(id);
    }
}
