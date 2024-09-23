package me.huynhducphu.backendmongodb.dao;

import me.huynhducphu.backendmongodb.models.User;
import org.springframework.data.mongodb.repository.MongoRepository;

public interface UserRepository extends MongoRepository<User, String> {
}
