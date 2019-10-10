package fit.body.tms.services;

import fit.body.tms.models.Exercise;
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
        System.out.println(trainingId);
        List<Exercise> allByTrainingId = exerciseRepository.findAllByTrainingId(trainingId);
        System.out.println(allByTrainingId);
        return allByTrainingId;
    }
}
