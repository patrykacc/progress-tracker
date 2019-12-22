package fit.body.tms.Controllers;

import fit.body.tms.dtos.TrainingDayDTO;
import fit.body.tms.entities.TrainingDay;
import fit.body.tms.services.TrainingDayService;
import org.springframework.data.rest.webmvc.BasePathAwareController;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;

@RestController
@BasePathAwareController
@RequestMapping(value = "/trainingDay")
public class TrainingDayController {

    private final TrainingDayService trainingDayService;

    public TrainingDayController(TrainingDayService trainingService) {
        this.trainingDayService = trainingService;
    }

    @GetMapping("/{trainingDayId}")
    public TrainingDayDTO save(@Valid @PathVariable(value = "trainingDayId") Long trainingDayId) {
        return new TrainingDayDTO(trainingDayService.getById(trainingDayId));
    }

    @PostMapping("/save")
    public TrainingDayDTO save(@Valid @RequestBody TrainingDayDTO trainingDayDTO) {
        return new TrainingDayDTO(trainingDayService.save(new TrainingDay(trainingDayDTO)));
    }

    @DeleteMapping("/{trainingDayId}")
    public void delete(@Valid @PathVariable(value = "trainingDayId") Long trainingDayId) {
        trainingDayService.delete(trainingDayId);
    }
}
