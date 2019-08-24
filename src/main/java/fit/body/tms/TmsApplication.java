package fit.body.tms;

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
    public CommandLineRunner executeOnAppStart(UserRepository userRepository) {
        return (args) -> {
            userRepository.findAll().forEach(System.out::println);
        };
    }

}
