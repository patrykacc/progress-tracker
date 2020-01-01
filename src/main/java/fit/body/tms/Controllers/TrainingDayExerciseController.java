package fit.body.tms.Controllers;

import fit.body.tms.dtos.TrainingDayExerciseDTO;
import fit.body.tms.entities.TrainingDayExercise;
import fit.body.tms.services.TrainingDayExerciseService;
import org.springframework.data.rest.webmvc.BasePathAwareController;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;

@RestController
@BasePathAwareController
@RequestMapping(value = "/TrainingDayExercise")
public class TrainingDayExerciseController {

    private final TrainingDayExerciseService trainingDayExerciseService;

    public TrainingDayExerciseController(TrainingDayExerciseService trainingService) {
        this.trainingDayExerciseService = trainingService;
    }

    @PostMapping("/save")
    public TrainingDayExerciseDTO save(@Valid @RequestBody TrainingDayExerciseDTO trainingDayExerciseDTO) {
        return new TrainingDayExerciseDTO((trainingDayExerciseService.save(new TrainingDayExercise(trainingDayExerciseDTO))));
    }

    @DeleteMapping("/{trainingDayExerciseId}")
    public void delete(@Valid @PathVariable(value = "trainingDayExerciseId") Long trainingDayExerciseId) {
        trainingDayExerciseService.delete(trainingDayExerciseId);
    }
}
