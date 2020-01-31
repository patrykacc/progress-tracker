package fit.body.tms.Controllers;

import fit.body.tms.entities.Training;
import fit.body.tms.services.TrainingService;
import fit.body.tms.services.UserService;
import org.springframework.data.rest.webmvc.BasePathAwareController;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@BasePathAwareController
@RequestMapping(value = "/Training")
public class TrainingController {

    private final TrainingService trainingService;

    public TrainingController(TrainingService trainingService) {
        this.trainingService = trainingService;
    }

    /*@GetMapping("/{trainingId}")
    public Training get(@Valid @PathVariable String trainingId) {
        return trainingService.getById(trainingId);
    }*/

    @GetMapping("/getAll")
    public List<Training> getAll() {
        return trainingService.getAllTrainingsByUserId(UserService.getPrincipal().getId());
    }

    /*@PostMapping("/save")
    public Training save(@Valid @RequestBody Training training) {
        return trainingService.save(training);
    }*/

    /*@DeleteMapping("/{trainingId}")
    public void delete(@Valid @PathVariable(value = "trainingId") String trainingId) {
        trainingService.delete(trainingId);
    }*/
}
