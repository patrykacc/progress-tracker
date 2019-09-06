package fit.body.tms;

import fit.body.tms.models.Exercise;
import fit.body.tms.models.Training;
import fit.body.tms.repositories.ExerciseRepository;
import fit.body.tms.repositories.TrainingRepository;
import fit.body.tms.repositories.UserRepository;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;

@SpringBootApplication
public class TmsApplication {



    public static void main(String[] args) {
        SpringApplication.run(TmsApplication.class, args);
    }

    @Bean
    public CommandLineRunner executeOnAppStart(UserRepository userRepository, ExerciseRepository exerciseRepository, TrainingRepository trainingRepository) {
        return (args) -> {
            userRepository.findAll().forEach(System.out::println);
            Training training = new Training();
            training.setDuration(120);
            trainingRepository.save(training);
            Exercise exercise = new Exercise();
            exercise.setName("Wyciskanie na płaskiej");
            exercise.setNumberOfRepetitions(8);
            System.out.println(training.getId());
            System.out.println(training.toString());
            exercise.setTraining(training);
            System.out.println(exercise.toString());
            System.out.println(exercise.getTraining().getId());
            exerciseRepository.save(exercise);
//            System.out.println( SecurityContextHolder.getContext().getAuthentication().getPrincipal());
        };
    }

}
