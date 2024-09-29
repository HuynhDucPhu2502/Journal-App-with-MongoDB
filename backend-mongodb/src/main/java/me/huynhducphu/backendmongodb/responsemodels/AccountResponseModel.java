package me.huynhducphu.backendmongodb.responsemodels;

public class AccountResponseModel {
    private String accountId;
    private String userName;
    private String userId;

    public AccountResponseModel(String accountId, String userName, String userId) {
        this.accountId = accountId;
        this.userName = userName;
        this.userId = userId;
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


}
