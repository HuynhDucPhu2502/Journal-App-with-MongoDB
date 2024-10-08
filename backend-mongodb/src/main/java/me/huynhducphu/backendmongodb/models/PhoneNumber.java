package me.huynhducphu.backendmongodb.models;

public class PhoneNumber {
    private String phoneType;
    private String phoneNumber;

    public PhoneNumber(String phoneType, String phoneNumber) {
        this.phoneType = phoneType;
        this.phoneNumber = phoneNumber;
    }

    public PhoneNumber() {
    }

    public String getPhoneType() {
        return phoneType;
    }

    public void setPhoneType(String phoneType) {
        this.phoneType = phoneType;
    }

    public String getPhoneNumber() {
        return phoneNumber;
    }

    public void setPhoneNumber(String phoneNumber) {
        this.phoneNumber = phoneNumber;
    }

    @Override
    public String toString() {
        return "PhoneNumber{" +
                "phoneType='" + phoneType + '\'' +
                ", phoneNumber='" + phoneNumber + '\'' +
                '}';
    }
}
