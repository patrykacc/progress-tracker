package fit.body.tms.Controllers;

import fit.body.tms.dtos.TrainingPlanDTO;
import fit.body.tms.entities.TrainingPlan;
import fit.body.tms.services.TrainingPlanService;
import fit.body.tms.services.UserService;
import org.springframework.data.rest.webmvc.BasePathAwareController;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import java.util.List;

import static java.util.stream.Collectors.toList;

@RestController
@BasePathAwareController
@RequestMapping(value = "/trainingPlans")
public class TrainingPlanController {

    private final TrainingPlanService trainingPlanService;

    public TrainingPlanController(TrainingPlanService trainingPlanService) {
        this.trainingPlanService = trainingPlanService;
    }

    @GetMapping("/{trainingPlanId}")
    public TrainingPlanDTO get(@Valid @PathVariable Long trainingPlanId) {
        return new TrainingPlanDTO(trainingPlanService.getById(UserService.getCurrentUserPrincipal().getId()));
    }

    @GetMapping("/getActiveTrainingPlan")
    public TrainingPlanDTO getActivePlan(@Valid @PathVariable Long trainingPlanId) {
        return new TrainingPlanDTO(trainingPlanService.getActivePlanForUser(UserService.getCurrentUserPrincipal().getId()));
    }

    @GetMapping("/getAll")
    public List<TrainingPlanDTO> getAll() {
        return trainingPlanService.getAllByUserId(UserService.getCurrentUserPrincipal().getId()).stream().map(TrainingPlanDTO::new).collect(toList());
    }

    @PostMapping("/save")
    public TrainingPlanDTO save(@Valid @RequestBody TrainingPlanDTO trainingPlanDTO) {
        return new TrainingPlanDTO(trainingPlanService.save(new TrainingPlan(trainingPlanDTO)));
    }

    @DeleteMapping("/{trainingPlanId}")
    public void delete(@Valid @PathVariable(value = "trainingPlanId") Long trainingId) {
        trainingPlanService.delete(trainingId);
    }
}
