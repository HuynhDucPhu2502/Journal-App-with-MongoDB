package me.huynhducphu.backendmongodb.controller;

import me.huynhducphu.backendmongodb.responsemodels.AuthorResponseModel;
import me.huynhducphu.backendmongodb.services.AuthorService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

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
}
