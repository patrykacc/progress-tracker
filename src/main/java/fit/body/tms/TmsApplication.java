package fit.body.tms;

import fit.body.tms.repositories.ExerciseRepository;
import fit.body.tms.repositories.TrainingRepository;
import fit.body.tms.repositories.UserRepository;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.MessageSource;
import org.springframework.context.annotation.Bean;
import org.springframework.context.support.MessageSourceAccessor;
import org.springframework.context.support.ResourceBundleMessageSource;
import org.springframework.web.servlet.LocaleResolver;
import org.springframework.web.servlet.i18n.SessionLocaleResolver;

import java.util.Locale;

@SpringBootApplication
public class TmsApplication {


    public static void main(String[] args) {
        SpringApplication.run(TmsApplication.class, args);
    }

    @Bean
    public CommandLineRunner executeOnAppStart(UserRepository userRepository, ExerciseRepository exerciseRepository, TrainingRepository trainingRepository) {
        return (args) -> {
            /*userRepository.findAll().forEach(System.out::println);
            Training training = new Training();
            training.setDuration(120);
            Exercise exercise = new Exercise();
            exercise.setName("Wyciskanie na płaskiej");
            exercise.setNumberOfRepetitions(8);

            exercise.setTraining(training);

            trainingRepository.save(training);
            training.setId(null);
            training.setDuration(90);
            trainingRepository.save(training);
            exerciseRepository.save(exercise);
            training = trainingRepository.findById(training.getId()).orElse(null);*/
        };
    }

    @Bean
    public LocaleResolver localeResolver() {
        SessionLocaleResolver slr = new SessionLocaleResolver();
        slr.setDefaultLocale(new Locale("pl", "PL"));
        return slr;
    }

    @Bean
    public MessageSource messageSource() {
        ResourceBundleMessageSource messageSource = new ResourceBundleMessageSource();
        messageSource.setFallbackToSystemLocale(false);
        messageSource.setBasename("messages");
        messageSource.setCacheMillis(1);
        messageSource.setDefaultEncoding("UTF-8");
        return messageSource;
    }

    @Bean
    public MessageSourceAccessor getMessageSourceAccessor(final MessageSource messageSource) {
        return new MessageSourceAccessor(messageSource, new Locale("pl", "PL"));
    }
}
