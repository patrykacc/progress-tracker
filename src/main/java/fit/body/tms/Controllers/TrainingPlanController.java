package fit.body.tms.Controllers;

import fit.body.tms.dtos.TrainingPlanDTO;
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

import static java.util.stream.Collectors.toList;

@RestController
@BasePathAwareController
@RequestMapping(value = "/trainingPlans")
public class TrainingPlanController {

    private final TrainingPlanService trainingPlanService;
    private final EntityManager entityManager;

    public TrainingPlanController(TrainingPlanService trainingPlanService, EntityManager entityManager) {
        this.trainingPlanService = trainingPlanService;
        this.entityManager = entityManager;
    }

    @GetMapping("/{trainingPlanId}")
    public TrainingPlanDTO get(@Valid @PathVariable Long trainingPlanId) {
        return new TrainingPlanDTO(trainingPlanService.getById(UserService.getPrincipal().getId()));
    }

    @GetMapping("/getActiveTrainingPlan")
    public TrainingPlanDTO getActivePlan() {
        return new TrainingPlanDTO(trainingPlanService.getActivePlanForUser(UserService.getPrincipal().getId()));
    }

    @GetMapping("/getAll")
    public List<TrainingPlanDTO> getAll() {
        return trainingPlanService.getAllByUserId(
                UserService.getPrincipal().getId()
        ).stream().map(TrainingPlanDTO::new).collect(toList());
    }

    @PostMapping("/save")
    public TrainingPlanDTO save(@Valid @RequestBody TrainingPlanDTO trainingPlanDTO) {
        TrainingPlan trainingPlan = new TrainingPlan(trainingPlanDTO);
        trainingPlanService.save(trainingPlan);
        return new TrainingPlanDTO(trainingPlan);
    }

    @DeleteMapping("/{trainingPlanId}")
    public void delete(@Valid @PathVariable(value = "trainingPlanId") Long trainingId) {
        trainingPlanService.delete(trainingId);
    }

    @PostMapping("/setActiveTrainingPlan")
    public void setActiveTrainingPlan(@Valid @RequestBody Long id) {
        trainingPlanService.setActiveTrainingPlan(id);
    }

    public void setFilter() {
        Session session = this.entityManager.unwrap(Session.class);
        Filter filter = session.enableFilter("owner");
        filter.setParameter("ownerId", UserService.getPrincipal().getId());
    }
}
