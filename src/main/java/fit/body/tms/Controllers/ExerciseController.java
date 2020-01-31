package fit.body.tms.Controllers;

import fit.body.tms.entities.Exercise;
import fit.body.tms.services.ExerciseService;
import org.springframework.data.rest.webmvc.BasePathAwareController;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import java.util.List;

@RestController
@BasePathAwareController
@RequestMapping(value = "/Exercise")
public class ExerciseController {

    private final ExerciseService exerciseService;

    public ExerciseController(ExerciseService exerciseService) {
        this.exerciseService = exerciseService;
    }

    /*@GetMapping("/{exerciseId}")
    public Optional<Exercise> get(@Valid @PathVariable String exerciseId) {
        return exerciseService.getById(exerciseId);
    }

    @PostMapping("/save")
    public Exercise save(@Valid @RequestBody Exercise exercise) {
        return exerciseService.save(exercise);
    }*/

    @GetMapping("/getAllByTrainingId/{trainingId}")
    public List<Exercise> getAllByTrainingId(@Valid @PathVariable("trainingId") String trainingId) {
        return exerciseService.getByTrainingId(trainingId);
    }

    @DeleteMapping("/{exerciseId}")
    public void delete(@Valid @PathVariable(value = "exerciseId") String exerciseId) {
        exerciseService.deleteById(exerciseId);
    }
}
