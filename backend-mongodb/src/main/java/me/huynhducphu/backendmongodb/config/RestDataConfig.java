package me.huynhducphu.backendmongodb.config;

import me.huynhducphu.backendmongodb.models.Account;
import me.huynhducphu.backendmongodb.models.Author;
import me.huynhducphu.backendmongodb.models.User;
import org.springframework.context.annotation.Configuration;
import org.springframework.data.rest.core.config.RepositoryRestConfiguration;
import org.springframework.data.rest.webmvc.config.RepositoryRestConfigurer;
import org.springframework.web.servlet.config.annotation.CorsRegistry;

@Configuration
public class RestDataConfig implements RepositoryRestConfigurer {

    private String theAllowOrigins = "http://localhost:3000";

    @Override
    public void configureRepositoryRestConfiguration(RepositoryRestConfiguration config, CorsRegistry cors) {
        config.exposeIdsFor(User.class);
        config.exposeIdsFor(Account.class);
        config.exposeIdsFor(Author.class);

        // Cấu hình CORS để cho phép các yêu cầu từ frontend (localhost:3000)
        cors.addMapping("/**") // Cho phép tất cả các endpoint
                .allowedOrigins(theAllowOrigins) // Cho phép từ nguồn gốc này (localhost:3000)
                .allowedMethods("GET", "POST", "PUT", "DELETE", "PATCH", "OPTIONS") // Thêm OPTIONS cho preflight request
                .allowedHeaders("*") // Cho phép tất cả các headers
                .allowCredentials(true); // Cho phép gửi thông tin xác thực (cookies, headers xác thực, v.v.)
    }
}
