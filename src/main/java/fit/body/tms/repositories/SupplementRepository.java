package fit.body.tms.repositories;

import fit.body.tms.models.Supplement;
import org.springframework.data.repository.CrudRepository;

import java.util.Optional;

public interface SupplementRepository extends CrudRepository<Supplement, Long> {

    <S extends Supplement> S save(S supplement);

    Optional<Supplement> findById(Long Id);
    Optional<Supplement> findByName(Long Id);
}
