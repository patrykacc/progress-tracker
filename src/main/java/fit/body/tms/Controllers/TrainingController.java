package fit.body.tms.Controllers;

import fit.body.tms.models.Exercise;
import fit.body.tms.models.Training;
import fit.body.tms.services.TrainingService;
import org.springframework.data.rest.webmvc.BasePathAwareController;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.transaction.Transactional;
import javax.validation.Valid;
import java.net.URI;
import java.net.URISyntaxException;
import java.util.List;

@RestController
@BasePathAwareController
@RequestMapping(value = "/trainings")
public class TrainingController {

    private final TrainingService trainingService;

    public TrainingController(TrainingService trainingService) {
        this.trainingService = trainingService;
    }

    @PostMapping("/save")
    public ResponseEntity<Training> save(@Valid @RequestBody Training training) throws URISyntaxException {
        Training persistedTraining = trainingService.save(training);
        return ResponseEntity.created(new URI("/api/trainings/" + persistedTraining.getId())).body(persistedTraining);
    }

    @DeleteMapping("/{trainingId}")
    public void delete(@Valid @PathVariable(value="trainingId") Long trainingId) {
        trainingService.delete(trainingId);
    }

    @PostMapping("/echo")
    public void save(@Valid @RequestBody Object o) {
        try {
            System.out.println(o);
        } catch (Exception e) {
            System.out.println(e.getMessage());
        }
    }

    @GetMapping("/getByIdWithExercises/{trainingId}")
    @Transactional
    public Training getByIdWithExercises(@Valid @PathVariable Long trainingId) {
        Training training =  trainingService.getById(trainingId);
        List<Exercise> exercises = training.getExercises();
        exercises.forEach(System.out::println);
        return training;
    }

    @GetMapping("/getAll")
    public List<Training> getAll() {
        return trainingService.getAll();
    }

}
