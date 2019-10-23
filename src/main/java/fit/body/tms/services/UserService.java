package fit.body.tms.services;

import fit.body.tms.entities.Person;
import fit.body.tms.entities.TrainingPlan;
import fit.body.tms.entities.UserPrincipal;
import fit.body.tms.repositories.UserRepository;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class UserService {

    public static UserPrincipal  getCurrentUserPrincipal() {
        Authentication authentication = SecurityContextHolder.getContext().getAuthentication();
        if (authentication != null) {
            return (UserPrincipal) authentication.getPrincipal();
        } else {
            return null;
        }
    }

    private final UserRepository userRepository;

    public UserService(UserRepository userRepository) {
        this.userRepository = userRepository;
    }

    public Person save(Person u) {
        return userRepository.save(u);
    }

    public List<Person> getAll() {
        return userRepository.findAll();
    }

    public TrainingPlan getActivePlanByUserId(Long id) {
        return userRepository.findById(id).get().getActiveTrainingPlan();
    }

}
