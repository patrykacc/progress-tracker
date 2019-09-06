package fit.body.tms.repositories;

import fit.body.tms.models.Exercise;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface ExerciseRepository extends CrudRepository<Exercise, Long> {

    <S extends Exercise>S save(S exercise);
    List<Exercise> findAllByTrainingId(Long training_id);

}
