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
import java.time.LocalDateTime;
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

    @PostMapping("/save")
    public ResponseEntity<Training> save(@Valid @RequestBody Training training) throws URISyntaxException {
        System.out.println(training.toString());
        Training persistedTraining = trainingService.save(training);
        return ResponseEntity.created(new URI("/api/trainings/" + persistedTraining.getId())).body(persistedTraining);
    }

    @PostMapping("/echo")
    public void save(@Valid @RequestBody Object o) throws URISyntaxException {
        System.out.println(o);
        try {
            System.out.println(LocalDateTime.parse((String)o).plusDays(1));
        } catch (Exception e) {
            System.out.println(e.getMessage());
        }
    }

    @GetMapping("/{trainingId}")
    public Training getById(@Valid @PathVariable Long trainingId) {
        return trainingService.getById(trainingId);
    }

    @GetMapping("/getAll")
    public List<Training> getAll() {
        return trainingService.getAll();
    }


}
