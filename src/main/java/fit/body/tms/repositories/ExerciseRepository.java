package fit.body.tms.repositories;

import fit.body.tms.entities.Exercise;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface ExerciseRepository extends CrudRepository<Exercise, String> {

     List<Exercise> findAllByTrainingId(String id);
     void deleteById(String id);
}
