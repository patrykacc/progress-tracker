package fit.body.tms.repositories;

import fit.body.tms.entities.Training;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;

import java.util.List;

@RepositoryRestResource(path = "Training")
public interface TrainingRepository  extends CrudRepository<Training, String > {

    List<Training> findByPersonId(String id);
}
