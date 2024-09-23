package me.huynhducphu.backendmongodb.dao;

import me.huynhducphu.backendmongodb.models.Author;
import org.springframework.data.mongodb.repository.MongoRepository;

public interface AuthorRepository extends MongoRepository<Author, String> {
}
