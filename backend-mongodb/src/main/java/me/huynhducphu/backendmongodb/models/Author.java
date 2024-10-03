package me.huynhducphu.backendmongodb.models;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import java.util.Arrays;
import java.util.Objects;

@Document(collection = "Author")
public class Author {
    @Id
    private String authorId;
    private String userId;
    private String penName;
    private String bio;

    public Author(String authorId, String userId, String penName, String bio) {
        this.authorId = authorId;
        this.userId = userId;
        this.penName = penName;
        this.bio = bio;
    }

    public Author() {
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (!(o instanceof Author author)) return false;
        return Objects.equals(authorId, author.authorId);
    }

    @Override
    public int hashCode() {
        return Objects.hashCode(authorId);
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

    public String getBio() {
        return bio;
    }

    public void setBio(String bio) {
        this.bio = bio;
    }

    public String getPenName() {
        return penName;
    }

    public void setPenName(String penName) {
        this.penName = penName;
    }
}
