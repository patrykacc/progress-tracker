package fit.body.tms.Controllers;

import fit.body.tms.dtos.ExerciseDTO;
import fit.body.tms.entities.Exercise;
import fit.body.tms.services.ExerciseService;
import org.springframework.data.rest.webmvc.BasePathAwareController;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import java.util.List;

import static java.util.stream.Collectors.toList;

@RestController
@BasePathAwareController
@RequestMapping(value = "/exercises")
public class ExerciseController {

    private final ExerciseService exerciseService;

    public ExerciseController(ExerciseService exerciseService) {
        this.exerciseService = exerciseService;
    }

    @PostMapping("/save")
    public ExerciseDTO save(@Valid @RequestBody Exercise exercise) {
        return new ExerciseDTO(exerciseService.save(exercise));
    }

    @GetMapping("/getAllByTrainingId/{trainingId}")
    public List<ExerciseDTO> getAllByTrainingId(@Valid @PathVariable("trainingId") Long trainingId) {
        return exerciseService.getByTrainingId(trainingId).stream().map(ExerciseDTO::new).collect(toList());
    }

    @DeleteMapping("/{exerciseId}")
    public void delete(@Valid @PathVariable(value = "exerciseId") Long exerciseId) {
        exerciseService.deleteById(exerciseId);
    }
}
