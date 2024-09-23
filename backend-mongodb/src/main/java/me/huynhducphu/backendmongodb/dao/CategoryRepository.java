package me.huynhducphu.backendmongodb.dao;

import me.huynhducphu.backendmongodb.models.Category;
import org.springframework.data.mongodb.repository.MongoRepository;

public interface CategoryRepository extends MongoRepository<Category, String> {
}
