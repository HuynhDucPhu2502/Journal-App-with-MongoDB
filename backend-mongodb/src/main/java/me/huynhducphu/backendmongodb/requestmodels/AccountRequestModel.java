package me.huynhducphu.backendmongodb.requestmodels;

public class AccountRequestModel {
    private String username;
    private String password;

    public AccountRequestModel(String username, String password) {
        this.username = username;
        this.password = password;
    }

    public AccountRequestModel() {
    }

    public String getUsername() {
        return username;
    }

    public void setUsername(String username) {
        this.username = username;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    @Override
    public String toString() {
        return "AccountRequestModel{" +
                "username='" + username + '\'' +
                ", password='" + password + '\'' +
                '}';
    }
}
