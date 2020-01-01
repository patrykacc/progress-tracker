package fit.body.tms.repositories;

import fit.body.tms.entities.TrainingDay;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface TrainingDayRepository extends CrudRepository<TrainingDay, Long> {


}
