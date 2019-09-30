package fit.body.tms.repositories;

import fit.body.tms.models.Training;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface TrainingRepository  extends CrudRepository<Training, Long> {

    List<Training> findAll();
}
