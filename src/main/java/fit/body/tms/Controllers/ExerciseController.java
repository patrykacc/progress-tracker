package fit.body.tms.Controllers;

import fit.body.tms.models.Exercise;
import fit.body.tms.services.ExerciseService;
import org.springframework.data.rest.webmvc.BasePathAwareController;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import javax.validation.Valid;

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
        System.out.println(exercise);
        return exerciseService.save(exercise);
    }
}
