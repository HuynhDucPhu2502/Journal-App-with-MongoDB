package me.huynhducphu.backendmongodb.responsemodels;

import me.huynhducphu.backendmongodb.models.enums.Role;

public class AccountResponseModel {
    private String accountId;
    private String userName;
    private String userId;
    private Role role;

    public AccountResponseModel(String accountId, String userName, String userId, Role role) {
        this.accountId = accountId;
        this.userName = userName;
        this.userId = userId;
        this.role = role;
    }

    public AccountResponseModel() {
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
