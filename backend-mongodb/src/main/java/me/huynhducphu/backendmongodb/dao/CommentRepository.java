package me.huynhducphu.backendmongodb.dao;

import me.huynhducphu.backendmongodb.models.Comment;
import org.springframework.data.mongodb.repository.MongoRepository;

import java.util.List;

public interface CommentRepository extends MongoRepository<Comment, String> {
    List<Comment> findByArticleId(String articleId);
}