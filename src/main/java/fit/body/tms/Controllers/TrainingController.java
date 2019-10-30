package fit.body.tms.Controllers;

import fit.body.tms.dtos.TrainingDTO;
import fit.body.tms.entities.Training;
import fit.body.tms.services.TrainingService;
import fit.body.tms.services.UserService;
import org.springframework.data.rest.webmvc.BasePathAwareController;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import java.util.List;

import static java.util.stream.Collectors.toList;

@RestController
@BasePathAwareController
@RequestMapping(value = "/components/trainings")
public class TrainingController {

    private final TrainingService trainingService;

    public TrainingController(TrainingService trainingService) {
        this.trainingService = trainingService;
    }

    @GetMapping("/{trainingId}")
    public TrainingDTO get(@Valid @PathVariable Long trainingId) {
        return new TrainingDTO(trainingService.getById(trainingId));
    }

    @GetMapping("/getAll")
    public List<TrainingDTO> getAll() {
        return trainingService.getAllTrainingsByUserId(UserService.getCurrentUserPrincipal().getId()).stream().map(TrainingDTO::new).collect(toList());
    }

    @PostMapping("/save")
    public TrainingDTO save(@Valid @RequestBody TrainingDTO trainingDTO) {
        return new TrainingDTO(trainingService.save(new Training(trainingDTO)));
    }

    @DeleteMapping("/{trainingId}")
    public void delete(@Valid @PathVariable(value = "trainingId") Long trainingId) {
        trainingService.delete(trainingId);
    }
}
