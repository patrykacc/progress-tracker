package fit.body.tms.configuration;

import org.springframework.context.annotation.Configuration;

@Configuration
class DateTimeConfig {

    /*@Bean
    public FormattingConversionService conversionService() {
        DefaultFormattingConversionService conversionService =
                new DefaultFormattingConversionService(false);

        DateTimeFormatterRegistrar registrar = new DateTimeFormatterRegistrar();
        registrar.setDateFormatter(DateTimeFormatter.ofPattern("dd-MM-yyyy"));
        registrar.setDateTimeFormatter(DateTimeFormatter.ofPattern("dd-MM-yyyy HH:mm"));
        registrar.registerFormatters(conversionService);


        return conversionService;
    }*/
}