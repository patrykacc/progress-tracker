package fit.body.tms.repositories;

import fit.body.tms.entities.TrainingDayExercise;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;

import java.util.List;

@RepositoryRestResource(path = "TrainingDayExercise")
public interface TrainingDayExerciseRepository extends CrudRepository<TrainingDayExercise, String > {

     List<TrainingDayExercise> findAllByTrainingDayId(String trainingId);
}
