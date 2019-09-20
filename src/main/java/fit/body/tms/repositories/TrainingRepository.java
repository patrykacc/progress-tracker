package fit.body.tms.repositories;

import fit.body.tms.models.Training;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;

@Repository
public interface TrainingRepository  extends CrudRepository<Training, Long> {

    <S extends Training>S save(S t);
    Optional<Training> findById(Long id);
    List<Training> findAll();

}
