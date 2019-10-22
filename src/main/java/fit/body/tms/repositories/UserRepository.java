package fit.body.tms.repositories;

import fit.body.tms.entities.User;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import javax.validation.constraints.Email;
import java.util.List;

@Repository
public interface UserRepository extends CrudRepository<User, Long> {

    <T extends User> T save(T user);
    List<User> findAll();
    User findByEmail(@Email String email);
    Boolean existsByEmail(@Email String email);
    boolean existsById(Long id);
}
