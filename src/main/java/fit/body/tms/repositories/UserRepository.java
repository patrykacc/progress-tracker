package fit.body.tms.repositories;

import fit.body.tms.models.User;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import javax.validation.constraints.Email;
import java.util.List;

@Repository
public interface UserRepository extends CrudRepository<User, Long> {

    <T extends User> T save(T user);
    List<User> findAll();
    User findByEmail(@Email String email);
    User findByUsername(String username);
    Boolean existsByEmail(@Email String email);
    boolean existsById(Long id);
    boolean existsByUsername(String username);
}
