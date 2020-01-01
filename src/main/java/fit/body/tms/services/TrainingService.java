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

    public Training getById(Long id) {
        return this.trainingRepository.findById(id).orElse(null);
    }

    public List<Training> getAllTrainingsByUserId(Long userId) {
        return this.trainingRepository.findByPersonId(userId);
    }

    public void delete(Long id) {
        trainingRepository.deleteById(id);
    }


}
