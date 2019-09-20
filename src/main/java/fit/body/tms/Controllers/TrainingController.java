package fit.body.tms.Controllers;

import fit.body.tms.models.Training;
import fit.body.tms.repositories.ExerciseRepository;
import fit.body.tms.services.TrainingService;
import org.springframework.data.rest.webmvc.BasePathAwareController;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import java.net.URI;
import java.net.URISyntaxException;
import java.util.List;

@RestController
@BasePathAwareController
@RequestMapping(value = "/trainings")
public class TrainingController {

    private final TrainingService trainingService;
    private final ExerciseRepository exerciseRepository;

    public TrainingController(TrainingService trainingService, ExerciseRepository exerciseRepository) {
        this.trainingService = trainingService;
        this.exerciseRepository = exerciseRepository;
    }

    @ResponseBody
    @PostMapping("/save")
    public ResponseEntity<Training> save(@Valid @RequestBody Training training) throws URISyntaxException {
        Training persistedTraining = trainingService.save(training);
        return ResponseEntity.created(new URI("/api/trainings/" + persistedTraining.getId())).body(persistedTraining);
    }

    @ResponseBody
    @GetMapping("/{trainingId}")
    public Training getById(@PathVariable Long trainingId) {
        return trainingService.getById(trainingId);
    }@ResponseBody

    @GetMapping("/getAll")
    public List<Training> getAll() {
        List<Training> trainings = trainingService.getAll();
        return trainings;
    }
}
