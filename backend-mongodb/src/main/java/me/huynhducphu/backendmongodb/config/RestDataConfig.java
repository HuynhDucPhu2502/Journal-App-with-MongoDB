package me.huynhducphu.backendmongodb.config;

import me.huynhducphu.backendmongodb.models.*;
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
        config.exposeIdsFor(Category.class);
        config.exposeIdsFor(Article.class);
        config.exposeIdsFor(Comment.class);

        cors.addMapping("/**")
                .allowedOrigins(theAllowOrigins)
                .allowedMethods("GET", "POST", "PUT", "DELETE", "PATCH", "OPTIONS")
                .allowedHeaders("*")
                .allowCredentials(true);
    }
}
