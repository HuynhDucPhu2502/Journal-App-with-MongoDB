package me.huynhducphu.backendmongodb.models;

import org.springframework.data.annotation.Id;

import java.util.Arrays;
import java.util.Objects;

public class Author {
    @Id
    private String authorId;
    private String userId;
    private String[] awards;

    public Author(String authorId, String userId, String[] awards) {
        this.authorId = authorId;
        this.userId = userId;
        this.awards = awards;
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

    @Override
    public String toString() {
        return "Author{" +
                "authorId='" + authorId + '\'' +
                ", userId='" + userId + '\'' +
                ", awards=" + Arrays.toString(awards) +
                '}';
    }
}
