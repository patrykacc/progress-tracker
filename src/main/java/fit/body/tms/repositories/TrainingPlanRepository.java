package fit.body.tms.repositories;

import fit.body.tms.entities.TrainingPlan;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface TrainingPlanRepository extends CrudRepository<TrainingPlan, String > {

    List<TrainingPlan> findAllByPersonId(String userId);

}
