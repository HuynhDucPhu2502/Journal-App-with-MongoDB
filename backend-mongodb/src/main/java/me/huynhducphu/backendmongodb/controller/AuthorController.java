package me.huynhducphu.backendmongodb.controller;

import me.huynhducphu.backendmongodb.models.Author;
import me.huynhducphu.backendmongodb.responsemodels.AuthorResponseModel;
import me.huynhducphu.backendmongodb.services.AuthorService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@CrossOrigin(origins = "http://localhost:3000")
@RequestMapping("/api/authors")
public class AuthorController {

    @Autowired
    private AuthorService authorService;

    @GetMapping
    public ResponseEntity<List<AuthorResponseModel>> getAuthors() {
        List<AuthorResponseModel> authors = authorService.getAuthors();
        return ResponseEntity.ok(authors);
    }

    @GetMapping("/byUserId/{userId}")
    public ResponseEntity<Author> getAuthorByUserId(@PathVariable String userId) {
        System.out.println("test");
        Optional<Author> author = authorService.findAuthorByUserId(userId);
        return author.map(ResponseEntity::ok)
                .orElseGet(() -> ResponseEntity.notFound().build());
    }

}
