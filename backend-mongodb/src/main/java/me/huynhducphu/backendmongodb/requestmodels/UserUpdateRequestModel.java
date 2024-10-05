package me.huynhducphu.backendmongodb.requestmodels;

public class UserUpdateRequestModel {
    private String userId;
    private String fullName;
    private String dob;
    private String address;
    private String gender;

    public UserUpdateRequestModel(String dob, String fullName, String userId, String address, String gender) {
        this.dob = dob;
        this.fullName = fullName;
        this.userId = userId;
        this.address = address;
        this.gender = gender;
    }

    public UserUpdateRequestModel() {
    }

    public String getUserId() {
        return userId;
    }

    public void setUserId(String userId) {
        this.userId = userId;
    }

    public String getDob() {
        return dob;
    }

    public void setDob(String dob) {
        this.dob = dob;
    }

    public String getAddress() {
        return address;
    }

    public void setAddress(String address) {
        this.address = address;
    }

    public String getFullName() {
        return fullName;
    }

    public void setFullName(String fullName) {
        this.fullName = fullName;
    }

    public String getGender() {
        return gender;
    }

    public void setGender(String gender) {
        this.gender = gender;
    }
}
