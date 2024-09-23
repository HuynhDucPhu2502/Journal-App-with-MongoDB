package me.huynhducphu.backendmongodb.dao;

import me.huynhducphu.backendmongodb.models.Article;
import org.springframework.data.mongodb.repository.MongoRepository;

public interface ArticleRepository extends MongoRepository<Article, String> {
}
