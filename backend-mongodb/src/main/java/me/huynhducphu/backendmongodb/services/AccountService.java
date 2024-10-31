package me.huynhducphu.backendmongodb.services;

import me.huynhducphu.backendmongodb.dao.AccountRepository;
import me.huynhducphu.backendmongodb.dao.AuthorRepository;
import me.huynhducphu.backendmongodb.models.Account;
import me.huynhducphu.backendmongodb.models.Author;
import me.huynhducphu.backendmongodb.models.enums.Role;
import me.huynhducphu.backendmongodb.responsemodels.AccountResponseModel;
import org.bson.types.ObjectId;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
public class AccountService {
    @Autowired
    private AccountRepository accountRepository;

    @Autowired
    private AuthorRepository authorRepository;

    public Account findAccountByUsernameAndPassword(String username, String password) {
        return accountRepository.findByUserNameAndPassword(username, password);
    }

    public AccountResponseModel findAccountByUsername(String userName) {
        return accountRepository.findByUserName(userName)
                .map(account -> {
                    String authorId = null;
                    if (account.getRole() == Role.AUTHOR) {
                        try {
                            ObjectId userIdObject = new ObjectId(account.getUserId());
                            Optional<Author> author = authorRepository.findByUserId(userIdObject);
                            authorId = author.map(Author::getAuthorId).orElse(null);
                        } catch (IllegalArgumentException e) {
                            System.err.println("Invalid ObjectId format for userId: " + account.getUserId());
                        }
                    }

                    return new AccountResponseModel(
                            account.getAccountId(),
                            account.getUserName(),
                            account.getUserId(),
                            authorId,
                            account.getRole()
                    );
                })
                .orElseThrow(() -> new IllegalArgumentException("Không tìm thấy tài khoản"));
    }
}
