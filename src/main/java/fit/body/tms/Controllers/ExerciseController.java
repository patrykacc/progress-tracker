package fit.body.tms.Controllers;

import fit.body.tms.models.Exercise;
import fit.body.tms.services.ExerciseService;
import org.springframework.data.rest.webmvc.BasePathAwareController;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import java.util.List;

@RestController
@BasePathAwareController
@RequestMapping(value = "/exercises")
public class ExerciseController {

    private final ExerciseService exerciseService;

    public ExerciseController(ExerciseService exerciseService) {
        this.exerciseService = exerciseService;
    }

    @PostMapping("/save")
    public Exercise save(@Valid @RequestBody Exercise exercise) {
        return exerciseService.save(exercise);
    }

    @GetMapping("/getAllByTrainingId/{trainingId}")
    public List<Exercise> getAllByTrainingId(@Valid @PathVariable("trainingId") Long trainingId) {
        return exerciseService.getByTrainingId(trainingId);
    }

    @DeleteMapping("/{exerciseId}")
    public void delete(@Valid @PathVariable(value = "exerciseId") Long exerciseId) {
        exerciseService.deleteById(exerciseId);
    }
}
