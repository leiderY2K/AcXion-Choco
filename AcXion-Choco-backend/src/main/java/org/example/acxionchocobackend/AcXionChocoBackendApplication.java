package org.example.acxionchocobackend;

import org.example.acxionchocobackend.Services.Config.CorsConfig;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Import;

@Import(CorsConfig.class)
@SpringBootApplication
public class AcXionChocoBackendApplication {

    public static void main(String[] args) {
        SpringApplication.run(AcXionChocoBackendApplication.class, args);
    }

}
