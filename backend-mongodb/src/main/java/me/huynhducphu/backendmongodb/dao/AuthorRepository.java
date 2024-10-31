package me.huynhducphu.backendmongodb.dao;

import me.huynhducphu.backendmongodb.models.Author;
import org.bson.types.ObjectId;
import org.springframework.data.mongodb.repository.MongoRepository;

import java.util.Optional;

public interface AuthorRepository extends MongoRepository<Author, String> {
    Optional<Author> findByUserId(ObjectId userId);
}