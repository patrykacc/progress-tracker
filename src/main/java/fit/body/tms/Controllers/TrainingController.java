package fit.body.tms.Controllers;

import fit.body.tms.models.Training;
import fit.body.tms.services.TrainingService;
import org.springframework.data.rest.webmvc.BasePathAwareController;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import java.net.URI;
import java.net.URISyntaxException;

@RestController
@BasePathAwareController
@RequestMapping(value = "/training")
public class TrainingController {

    private final TrainingService trainingService;

    public TrainingController(TrainingService trainingService) {
        this.trainingService = trainingService;
    }

    @ResponseBody
    @PostMapping("/save")
    public ResponseEntity<Training> save(@Valid @RequestBody Training training) throws URISyntaxException {
        Training persistedTraining = trainingService.save(training);
        return ResponseEntity.created(new URI("/api/training/" + persistedTraining.getId())).body(persistedTraining);

    }

    @ResponseBody
    @GetMapping("/{trainingId}")
    public Training getById(@PathVariable Long trainingId) {
        return trainingService.getById(trainingId);
    }
}
