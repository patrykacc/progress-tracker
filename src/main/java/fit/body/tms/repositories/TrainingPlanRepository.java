package fit.body.tms.repositories;

import fit.body.tms.entities.TrainingPlan;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;

import java.util.List;

@RepositoryRestResource(path = "TrainingPlan")
public interface TrainingPlanRepository extends CrudRepository<TrainingPlan, String > {

    List<TrainingPlan> findAllByPersonId(String userId);

}
