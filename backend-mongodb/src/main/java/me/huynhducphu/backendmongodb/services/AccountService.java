package me.huynhducphu.backendmongodb.services;

import me.huynhducphu.backendmongodb.dao.AccountRepository;
import me.huynhducphu.backendmongodb.models.Account;
import me.huynhducphu.backendmongodb.responsemodels.AccountResponseModel;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class AccountService {
    @Autowired
    public AccountRepository accountRepository;

    public Account findAccountByUsernameAndPassword(String username, String password) {
        return accountRepository.findByUserNameAndPassword(username, password);
    }

    public AccountResponseModel findAccountByUsername(String userName) {
        return accountRepository.findByUserName(userName)
                .map(account -> new AccountResponseModel(
                        account.getAccountId(),
                        account.getUserName(),
                        account.getUserId()
                ))
                .orElseThrow(() -> new IllegalArgumentException("Không tìm thấy tài khoản"));
    }

}
