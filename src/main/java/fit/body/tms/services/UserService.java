package fit.body.tms.services;

import fit.body.tms.models.User;
import fit.body.tms.repositories.UserRepository;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class UserService {

    private final UserRepository userRepository;

    public UserService(UserRepository userRepository) {
        this.userRepository = userRepository;
    }

    public User save(User u) {
        return userRepository.save(u);
    }

    public List<User> getAll() {
        return userRepository.findAll();
    }

}
