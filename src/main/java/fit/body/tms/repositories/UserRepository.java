package fit.body.tms.repositories;

import fit.body.tms.entities.Person;
import org.jetbrains.annotations.NotNull;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import javax.validation.constraints.Email;
import java.util.List;

@Repository
public interface UserRepository extends CrudRepository<Person, String> {
    @NotNull <T extends Person> T save(@NotNull T user);
    @NotNull List<Person> findAll();
    Person findByEmail(@Email String email);
    Boolean existsByEmail(@Email String email);
    boolean existsById(@NotNull String id);
}
