package fit.body.tms.services;

import fit.body.tms.entities.Person;
import fit.body.tms.entities.TrainingPlan;
import fit.body.tms.repositories.TrainingPlanRepository;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class TrainingPlanService {

    private final TrainingPlanRepository trainingPlanRepository;
    private final UserService userService;

    public TrainingPlanService(TrainingPlanRepository trainingPlanRepository, UserService userService) {
        this.trainingPlanRepository = trainingPlanRepository;
        this.userService = userService;
    }

    public TrainingPlan save(TrainingPlan trainingPlan) {
        return trainingPlanRepository.save(trainingPlan);
    }

    public TrainingPlan getById(Long id) {
        return this.trainingPlanRepository.findById(id).orElse(null);
    }

    public Optional<TrainingPlan> getActivePlanForUser(Long userId) {
        return userService.getActivePlanByUserId(userId);
    }

    public List<TrainingPlan> getAllByUserId(Long userId) {
        return this.trainingPlanRepository.findAllByPersonId(userId);
    }

    public void delete(Long id) {
        trainingPlanRepository.deleteById(id);
    }

    public void setActiveTrainingPlan(Long trainingPlanId) {
        Person currentPerson = userService.getCurrentPerson().orElseGet(null);
        currentPerson.setActiveTrainingPlan(new TrainingPlan(trainingPlanId));
        userService.save(currentPerson);
    }
}
