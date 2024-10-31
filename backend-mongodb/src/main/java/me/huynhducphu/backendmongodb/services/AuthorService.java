package me.huynhducphu.backendmongodb.services;

import me.huynhducphu.backendmongodb.dao.AuthorRepository;
import me.huynhducphu.backendmongodb.dao.UserRepository;
import me.huynhducphu.backendmongodb.models.Author;
import me.huynhducphu.backendmongodb.models.User;
import me.huynhducphu.backendmongodb.responsemodels.AuthorResponseModel;
import org.bson.types.ObjectId;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

@Service
public class AuthorService {
    @Autowired
    private AuthorRepository authorRepository;
    @Autowired
    private UserRepository userRepository;

    public List<AuthorResponseModel> getAuthors() {
        List<Author> authors = authorRepository.findAll();

        return authors.stream().map(author -> {
            User user = userRepository.findById(author.getUserId()).orElse(null);
            AuthorResponseModel responseModel = new AuthorResponseModel();

            responseModel.setAuthorId(author.getAuthorId());
            responseModel.setPenName(author.getPenName());
            responseModel.setBio(author.getBio());

            if (user != null) {
                responseModel.setUserId(user.getUserId());
                responseModel.setHasAvatar(user.isHasAvatar());
            }

            return responseModel;
        }).collect(Collectors.toList());
    }

    public Optional<Author> findAuthorByUserId(String userId) {
        ObjectId objectId = new ObjectId(userId);
        return authorRepository.findByUserId(objectId);
    }
}
