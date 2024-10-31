package me.huynhducphu.backendmongodb.dao;

import me.huynhducphu.backendmongodb.models.User;
import org.springframework.data.mongodb.repository.MongoRepository;

import java.util.Optional;

public interface UserRepository extends MongoRepository<User, String> {
    Optional<User> findByUserId(String userId);
}
