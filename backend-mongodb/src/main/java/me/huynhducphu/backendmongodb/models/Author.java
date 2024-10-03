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
    private String[] awards;

    public Author(String authorId, String userId, String penName, String[] awards) {
        this.authorId = authorId;
        this.userId = userId;
        this.awards = awards;
        this.penName = penName;
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

    public String[] getAwards() {
        return awards;
    }

    public void setAwards(String[] awards) {
        this.awards = awards;
    }

    public String getPenName() {
        return penName;
    }

    public void setPenName(String penName) {
        this.penName = penName;
    }

    @Override
    public String toString() {
        return "Author{" +
                "authorId='" + authorId + '\'' +
                ", userId='" + userId + '\'' +
                ", penName='" + penName + '\'' +
                ", awards=" + Arrays.toString(awards) +
                '}';
    }
}
