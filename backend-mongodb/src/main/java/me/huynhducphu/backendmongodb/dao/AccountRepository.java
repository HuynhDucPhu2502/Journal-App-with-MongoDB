package me.huynhducphu.backendmongodb.dao;

import me.huynhducphu.backendmongodb.models.Account;
import org.springframework.data.mongodb.repository.MongoRepository;

public interface AccountRepository extends MongoRepository<Account, String> {
}
