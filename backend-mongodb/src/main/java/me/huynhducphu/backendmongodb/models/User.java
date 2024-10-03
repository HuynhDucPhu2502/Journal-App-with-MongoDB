package me.huynhducphu.backendmongodb.models;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;
import org.springframework.format.annotation.DateTimeFormat;

import java.time.LocalDate;
import java.util.Arrays;
import java.util.Objects;

@Document(collection = "User")
public class User {
    @Id
    private String userId;

    private String fullName;

    private String email;

    @DateTimeFormat(iso = DateTimeFormat.ISO.DATE)
    private LocalDate dob;

    private String address;

    private String gender;

    private PhoneNumber[] phoneNumbers;

    private SocialLink[] socialLinks;

    private boolean hasAvatar;

    public User(String userId, String fullName, String email, String address, LocalDate dob, String gender, PhoneNumber[] phoneNumbers, SocialLink[] socialLinks, boolean hasAvatar) {
        this.userId = userId;
        this.fullName = fullName;
        this.email = email;
        this.address = address;
        this.dob = dob;
        this.gender = gender;
        this.phoneNumbers = phoneNumbers;
        this.socialLinks = socialLinks;
        this.hasAvatar = hasAvatar;
    }

    public User() {
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (!(o instanceof User user)) return false;
        return Objects.equals(userId, user.userId);
    }

    @Override
    public int hashCode() {
        return Objects.hashCode(userId);
    }

    public String getUserId() {
        return userId;
    }

    public void setUserId(String userId) {
        this.userId = userId;
    }

    public String getFullName() {
        return fullName;
    }

    public void setFullName(String fullName) {
        this.fullName = fullName;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public LocalDate getDob() {
        return dob;
    }

    public void setDob(LocalDate dob) {
        this.dob = dob;
    }

    public String getAddress() {
        return address;
    }

    public void setAddress(String address) {
        this.address = address;
    }

    public String getGender() {
        return gender;
    }

    public void setGender(String gender) {
        this.gender = gender;
    }


    public PhoneNumber[] getPhoneNumbers() {
        return phoneNumbers;
    }

    public void setPhoneNumbers(PhoneNumber[] phoneNumbers) {
        this.phoneNumbers = phoneNumbers;
    }

    public SocialLink[] getSocialLinks() {
        return socialLinks;
    }

    public void setSocialLinks(SocialLink[] socialLinks) {
        this.socialLinks = socialLinks;
    }

    public boolean isHasAvatar() {
        return hasAvatar;
    }

    public void setHasAvatar(boolean hasAvatar) {
        this.hasAvatar = hasAvatar;
    }
}
