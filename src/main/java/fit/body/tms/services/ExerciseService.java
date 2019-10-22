package fit.body.tms.services;

import fit.body.tms.entities.Exercise;
import fit.body.tms.repositories.ExerciseRepository;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ExerciseService {

    private final ExerciseRepository exerciseRepository;

    public ExerciseService(ExerciseRepository exerciseRepository) {
        this.exerciseRepository = exerciseRepository;
    }

    public Exercise save(Exercise exercise) {
        return exerciseRepository.save(exercise);
    }

    public void deleteById(Long exerciseId) {
        exerciseRepository.deleteById(exerciseId);
    }

    public List<Exercise> getByTrainingId(Long trainingId) {
        return exerciseRepository.findAllByTrainingId(trainingId);
    }
}
