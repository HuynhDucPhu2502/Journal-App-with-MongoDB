package me.huynhducphu.backendmongodb.models;

import org.springframework.data.annotation.Id;

import java.util.Arrays;
import java.util.Objects;

public class Article {
    @Id
    private String articleId;

    private String authorId;

    private String title;

    private String content;

    private Timestamps timestamps;

    private String categoryId;

    private double totalComment;
    private double totalLike;
    private String version;

    public Article(String articleId, String authorId, String title, String content, Timestamps timestamps, String categoryId, double totalComment, double totalLike, String version) {
        this.articleId = articleId;
        this.authorId = authorId;
        this.title = title;
        this.content = content;
        this.timestamps = timestamps;
        this.categoryId = categoryId;
        this.totalComment = totalComment;
        this.totalLike = totalLike;
        this.version = version;
    }

    public Article() {
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (!(o instanceof Article article)) return false;
        return Objects.equals(articleId, article.articleId);
    }

    @Override
    public int hashCode() {
        return Objects.hashCode(articleId);
    }

    public String getArticleId() {
        return articleId;
    }

    public void setArticleId(String articleId) {
        this.articleId = articleId;
    }

    public String getAuthorId() {
        return authorId;
    }

    public void setAuthorId(String authorId) {
        this.authorId = authorId;
    }

    public String getContent() {
        return content;
    }

    public void setContent(String content) {
        this.content = content;
    }

    public String getTitle() {
        return title;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    public Timestamps getTimestamps() {
        return timestamps;
    }

    public void setTimestamps(Timestamps timestamps) {
        this.timestamps = timestamps;
    }

    public double getTotalComment() {
        return totalComment;
    }

    public void setTotalComment(double totalComment) {
        this.totalComment = totalComment;
    }

    public double getTotalLike() {
        return totalLike;
    }

    public void setTotalLike(double totalLike) {
        this.totalLike = totalLike;
    }

    public String getVersion() {
        return version;
    }

    public void setVersion(String version) {
        this.version = version;
    }

    public String getCategoryId() {
        return categoryId;
    }

    public void setCategoryId(String categoryId) {
        this.categoryId = categoryId;
    }
}
