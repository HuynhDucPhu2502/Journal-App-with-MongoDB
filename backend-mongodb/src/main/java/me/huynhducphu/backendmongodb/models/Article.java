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

    private Media[] media;

    public Article(String articleId, String authorId, String title, String content, Timestamps timestamps, String categoryId, Media[] media) {
        this.articleId = articleId;
        this.authorId = authorId;
        this.title = title;
        this.content = content;
        this.timestamps = timestamps;
        this.categoryId = categoryId;
        this.media = media;
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

    public String getTitle() {
        return title;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    public String getContent() {
        return content;
    }

    public void setContent(String content) {
        this.content = content;
    }

    public Timestamps getTimestamps() {
        return timestamps;
    }

    public void setTimestamps(Timestamps timestamps) {
        this.timestamps = timestamps;
    }

    public String getCategoryId() {
        return categoryId;
    }

    public void setCategoryId(String categoryId) {
        this.categoryId = categoryId;
    }

    @Override
    public String toString() {
        return "Article{" +
                "articleId='" + articleId + '\'' +
                ", authorId='" + authorId + '\'' +
                ", title='" + title + '\'' +
                ", content='" + content + '\'' +
                ", timestamps=" + timestamps +
                ", categoryId='" + categoryId + '\'' +
                ", media=" + Arrays.toString(media) +
                '}';
    }
}
