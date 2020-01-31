package fit.body.tms.Controllers;

import fit.body.tms.services.TrainingDayExerciseService;
import org.springframework.data.rest.webmvc.BasePathAwareController;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@BasePathAwareController
@RequestMapping(value = "/TrainingDayExercise")
public class TrainingDayExerciseController {

    private final TrainingDayExerciseService trainingDayExerciseService;

    public TrainingDayExerciseController(TrainingDayExerciseService trainingService) {
        this.trainingDayExerciseService = trainingService;
    }

    /*@PostMapping("/save")
    public TrainingDayExercise save(@Valid @RequestBody TrainingDayExercise trainingDayExercise) {
        return trainingDayExerciseService.save(trainingDayExercise);
    }

    @DeleteMapping("/{trainingDayExerciseId}")
    public void delete(@Valid @PathVariable(value = "trainingDayExerciseId") String trainingDayExerciseId) {
        trainingDayExerciseService.delete(trainingDayExerciseId);
    }*/
}
