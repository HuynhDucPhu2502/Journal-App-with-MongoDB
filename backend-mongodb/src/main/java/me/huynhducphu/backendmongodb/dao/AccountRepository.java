package me.huynhducphu.backendmongodb.dao;

import me.huynhducphu.backendmongodb.models.Account;
import org.springframework.data.mongodb.repository.MongoRepository;

import java.util.Optional;

public interface AccountRepository extends MongoRepository<Account, String> {
     Account findByUserNameAndPassword(String userName, String password);
     Optional<Account> findByUserName(String userName);
}
