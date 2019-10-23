package fit.body.tms.repositories;

import fit.body.tms.entities.Person;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import javax.validation.constraints.Email;
import java.util.List;

@Repository
public interface UserRepository extends CrudRepository<Person, Long> {

    <T extends Person> T save(T user);
    List<Person> findAll();
    Person findByEmail(@Email String email);
    Boolean existsByEmail(@Email String email);
    boolean existsById(Long id);
}
