package fit.body.tms.services;

import fit.body.tms.entities.Training;
import fit.body.tms.repositories.TrainingRepository;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class TrainingService {

    private final TrainingRepository trainingRepository;

    public TrainingService(TrainingRepository trainingRepository) {
        this.trainingRepository = trainingRepository;
    }

    public Training save(Training training) {
        return trainingRepository.save(training);
    }

    public Training getById(String id) {
        return this.trainingRepository.findById(id).orElse(null);
    }

    public List<Training> getAllTrainingsByUserId(String userId) {
        return this.trainingRepository.findByPersonId(userId);
    }

    public void delete(String id) {
        trainingRepository.deleteById(id);
    }


}
