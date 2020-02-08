package fit.body.tms.Controllers;

import fit.body.tms.entities.TrainingPlan;
import fit.body.tms.services.TrainingPlanService;
import fit.body.tms.services.UserService;
import org.hibernate.Filter;
import org.hibernate.Session;
import org.springframework.data.rest.webmvc.BasePathAwareController;
import org.springframework.web.bind.annotation.*;

import javax.persistence.EntityManager;
import javax.validation.Valid;
import java.util.List;

@RestController
@BasePathAwareController
@RequestMapping(value = "/TrainingPlan")
public class TrainingPlanController {

    private final TrainingPlanService trainingPlanService;
    private final EntityManager entityManager;

    public TrainingPlanController(TrainingPlanService trainingPlanService, EntityManager entityManager) {
        this.trainingPlanService = trainingPlanService;
        this.entityManager = entityManager;
    }

    @GetMapping("/getActiveTrainingPlan")
    public TrainingPlan getActivePlan() {
        return trainingPlanService.getActivePlanForUser(UserService.getPrincipal().getId()).orElse(null);
    }

    @GetMapping("/getAll")
    public List<TrainingPlan> getAll() {
        return trainingPlanService.getAllByUserId(UserService.getPrincipal().getId());
    }

    @PostMapping("/save")
    public TrainingPlan save(@Valid @RequestBody TrainingPlan trainingPlan) {
        return trainingPlanService.save(trainingPlan);
    }

    @DeleteMapping("/{trainingPlanId}")
    public void delete(@Valid @PathVariable(value = "trainingPlanId") String trainingId) {
        trainingPlanService.delete(trainingId);
    }

    @PostMapping("/setActiveTrainingPlan/{trainingPlanId}")
    public void setActiveTrainingPlan(@RequestBody  @PathVariable(value = "trainingPlanId") String trainingPlanId) {
        trainingPlanService.setActiveTrainingPlan(trainingPlanId);
    }

    public void setFilter() {
        Session session = this.entityManager.unwrap(Session.class);
        Filter filter = session.enableFilter("owner");
        filter.setParameter("ownerId", UserService.getPrincipal().getId());
    }
}
