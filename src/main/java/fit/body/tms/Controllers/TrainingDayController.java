package fit.body.tms.Controllers;

import fit.body.tms.services.TrainingDayService;
import org.springframework.data.rest.webmvc.BasePathAwareController;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@BasePathAwareController
@RequestMapping(value = "/TrainingDay")
public class TrainingDayController {

    private final TrainingDayService trainingDayService;

    public TrainingDayController(TrainingDayService trainingService) {
        this.trainingDayService = trainingService;
    }

    /*@GetMapping("/{trainingDayId}")
    public TrainingDay save(@Valid @PathVariable(value = "trainingDayId") String trainingDayId) {
        return trainingDayService.getById(trainingDayId);
    }

    @PostMapping("/save")
    public TrainingDay save(@Valid @RequestBody TrainingDay trainingDay) {
        return trainingDayService.save(trainingDay);
    }

    @DeleteMapping("/{trainingDayId}")
    public void delete(@Valid @PathVariable(value = "trainingDayId") String trainingDayId) {
        trainingDayService.delete(trainingDayId);
    }*/
}
