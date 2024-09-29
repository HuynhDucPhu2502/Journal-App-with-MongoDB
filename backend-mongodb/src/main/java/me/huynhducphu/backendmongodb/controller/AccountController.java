package me.huynhducphu.backendmongodb.controller;

import me.huynhducphu.backendmongodb.models.Account;
import me.huynhducphu.backendmongodb.requestmodels.AccountRequestModel;
import me.huynhducphu.backendmongodb.responsemodels.AccountResponseModel;
import me.huynhducphu.backendmongodb.services.AccountService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@CrossOrigin(origins = "http://localhost:3000")
@RequestMapping("/api/accounts")
public class AccountController {
    @Autowired
    private AccountService accountService;

    @PostMapping("/login")
    public ResponseEntity<Void> login(@RequestBody AccountRequestModel accountRequestModel) {
        Account account = accountService.findAccountByUsernameAndPassword(
                accountRequestModel.getUsername(),
                accountRequestModel.getPassword()
        );

        if (account != null) return ResponseEntity.ok().build();
        else return ResponseEntity.status(HttpStatus.UNAUTHORIZED).build();
    }

    @GetMapping("/getAccountInfo")
    public AccountResponseModel getAccountInfo(@RequestParam String userName) {
        return accountService.findAccountByUsername(userName);
    }
}
