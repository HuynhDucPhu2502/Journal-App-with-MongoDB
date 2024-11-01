package me.huynhducphu.backendmongodb.models;

import me.huynhducphu.backendmongodb.models.enums.Role;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import java.util.Objects;

@Document(collection = "Account")
public class Account {
    @Id
    private String accountId;

    private String userName;

    private String password;

    private String userId;

    private Role role;

    public Account(String accountId, String userName, String password, String userId, Role role) {
        this.accountId = accountId;
        this.userName = userName;
        this.password = password;
        this.userId = userId;
        this.role = role;
    }

    public Account() {
        this.role = Role.MEMBER;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (!(o instanceof Account account)) return false;
        return Objects.equals(accountId, account.accountId);
    }

    @Override
    public int hashCode() {
        return Objects.hashCode(accountId);
    }

    public String getAccountId() {
        return accountId;
    }

    public void setAccountId(String accountId) {
        this.accountId = accountId;
    }

    public String getUserName() {
        return userName;
    }

    public void setUserName(String userName) {
        this.userName = userName;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    public String getUserId() {
        return userId;
    }

    public void setUserId(String userId) {
        this.userId = userId;
    }

    public Role getRole() {
        return role;
    }

    public void setRole(Role role) {
        this.role = role;
    }
}
