package me.huynhducphu.backendmongodb.dao;

import me.huynhducphu.backendmongodb.models.UserActivity;
import org.springframework.data.mongodb.repository.MongoRepository;

public interface UserActivityRepository extends MongoRepository<UserActivity, String> {
}
