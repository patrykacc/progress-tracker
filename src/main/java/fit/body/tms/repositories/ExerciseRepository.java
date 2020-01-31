package fit.body.tms.repositories;

import fit.body.tms.entities.Exercise;
import org.jetbrains.annotations.NotNull;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;

import java.util.List;

@RepositoryRestResource(path = "Exercise" )
public interface ExerciseRepository extends CrudRepository<Exercise, String> {

     List<Exercise> findAllByTrainingId(String id);
     void deleteById(@NotNull String id);
}
