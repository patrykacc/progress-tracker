package fit.body.tms.repositories;

import fit.body.tms.entities.TrainingDayExercise;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface TrainingDayExerciseRepository extends CrudRepository<TrainingDayExercise, Long> {

     List<TrainingDayExercise> findAllByTrainingDayId(Long trainingId);
}
