package me.huynhducphu.backendmongodb.responsemodels;

public class AuthorResponseModel {
    private String authorId;
    private String userId;
    private String penName;
    private String bio;
    private boolean hasAvatar;

    public AuthorResponseModel(String authorId, String userId, String penName, String bio, boolean hasAvatar) {
        this.authorId = authorId;
        this.userId = userId;
        this.penName = penName;
        this.bio = bio;
        this.hasAvatar = hasAvatar;
    }

    public AuthorResponseModel() {
    }

    public String getAuthorId() {
        return authorId;
    }

    public void setAuthorId(String authorId) {
        this.authorId = authorId;
    }

    public String getUserId() {
        return userId;
    }

    public void setUserId(String userId) {
        this.userId = userId;
    }

    public String getPenName() {
        return penName;
    }

    public void setPenName(String penName) {
        this.penName = penName;
    }

    public String getBio() {
        return bio;
    }

    public void setBio(String bio) {
        this.bio = bio;
    }

    public boolean isHasAvatar() {
        return hasAvatar;
    }

    public void setHasAvatar(boolean hasAvatar) {
        this.hasAvatar = hasAvatar;
    }


}
