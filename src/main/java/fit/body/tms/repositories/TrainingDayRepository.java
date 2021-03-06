package fit.body.tms.repositories;

import fit.body.tms.entities.TrainingDay;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;

@RepositoryRestResource(path = "TrainingDay")
public interface TrainingDayRepository extends CrudRepository<TrainingDay, String> {


}
