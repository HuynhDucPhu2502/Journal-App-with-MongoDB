package me.huynhducphu.backendmongodb.controller;

import me.huynhducphu.backendmongodb.dao.ArticleRepository;
import me.huynhducphu.backendmongodb.models.Article;
import me.huynhducphu.backendmongodb.models.Timestamps;
import me.huynhducphu.backendmongodb.services.FileService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.time.LocalDate;
import java.util.UUID;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping("/api/articles")
public class ArticleController {

    @Autowired
    private ArticleRepository articleRepository;

    @Autowired
    private FileService fileService;

    // API tạo bài viết mới và lưu ảnh nếu có
    @PostMapping("/create")
    public ResponseEntity<Article> createArticle(
            @RequestParam("title") String title,
            @RequestParam("content") String content,
            @RequestParam("categoryId") String categoryId,
            @RequestParam("authorId") String authorId,
            @RequestParam(value = "file", required = false) MultipartFile file) {
        try {
            String articleId = UUID.randomUUID().toString();

            if (file != null) {
                fileService.uploadArticleFile(file, articleId);
            }

            Article article = new Article(
                    articleId, authorId, title, content,
                    new Timestamps(LocalDate.now(), LocalDate.now(), LocalDate.now()),
                    categoryId, 0, 0, "1.0");
            Article savedArticle = articleRepository.save(article);

            return ResponseEntity.status(201).body(savedArticle);
        } catch (IOException e) {
            return ResponseEntity.status(500).body(null);
        }
    }
}
