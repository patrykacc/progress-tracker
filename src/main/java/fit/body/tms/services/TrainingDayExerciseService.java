package fit.body.tms.services;

import fit.body.tms.entities.TrainingDayExercise;
import fit.body.tms.repositories.TrainingDayExerciseRepository;
import org.springframework.stereotype.Service;

@Service
public class TrainingDayExerciseService {

    private final TrainingDayExerciseRepository trainingDayExerciseRepository;

    public TrainingDayExerciseService(TrainingDayExerciseRepository TrainingDayExerciseRepository) {
        this.trainingDayExerciseRepository = TrainingDayExerciseRepository;
    }

    public TrainingDayExercise save(TrainingDayExercise trainingDayExercise) {
        return trainingDayExerciseRepository.save(trainingDayExercise);
    }

    public void delete(Long id) {
        trainingDayExerciseRepository.deleteById(id);
    }
}
