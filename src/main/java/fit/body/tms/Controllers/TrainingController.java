package fit.body.tms.Controllers;

import fit.body.tms.models.Training;
import fit.body.tms.services.TrainingService;
import fit.body.tms.services.UserService;
import org.springframework.data.rest.webmvc.BasePathAwareController;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import java.util.List;

@RestController
@BasePathAwareController
@RequestMapping(value = "/trainings")
public class TrainingController {

    private final TrainingService trainingService;

    public TrainingController(TrainingService trainingService) {
        this.trainingService = trainingService;
    }

    @GetMapping("/{trainingId}")
    public Training get(@Valid @PathVariable Long trainingId) {
        return trainingService.getById(trainingId);
    }

    @GetMapping("/getAll")
    public List<Training> getAll() {
        return trainingService.getAllTrainingsByUserId(UserService.getCurrentUserPrincipal().getId());
    }

    @PostMapping("/save")
    public Training save(@Valid @RequestBody Training training) {
        return trainingService.save(training);
    }

    @DeleteMapping("/{trainingId}")
    public void delete(@Valid @PathVariable(value = "trainingId") Long trainingId) {
        trainingService.delete(trainingId);
    }
}
