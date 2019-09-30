package fit.body.tms.Controllers;

import fit.body.tms.models.Training;
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

    public TrainingController(TrainingService trainingService) {
        this.trainingService = trainingService;
    }

    @PostMapping("/save")
    public ResponseEntity<Training> save(@Valid @RequestBody Training training) throws URISyntaxException {
        Training persistedTraining = trainingService.save(training);
        return ResponseEntity.created(new URI("/api/trainings/" + persistedTraining.getId())).body(persistedTraining);
    }

    @DeleteMapping("/delete/{trainingId}")
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

    @GetMapping("/{trainingId}")
    public Training getById(@Valid @PathVariable Long trainingId) {
        return trainingService.getById(trainingId);
    }

    @GetMapping("/getAll")
    public List<Training> getAll() {
        return trainingService.getAll();
    }


}
