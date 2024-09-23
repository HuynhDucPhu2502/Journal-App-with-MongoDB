package me.huynhducphu.backendmongodb.models;

import org.springframework.format.annotation.DateTimeFormat;

import java.time.LocalDateTime;

public class Comment {
    private String content;

    @DateTimeFormat(iso = DateTimeFormat.ISO.DATE_TIME)
    private LocalDateTime commentDate;

    public Comment(String content, LocalDateTime commentDate) {
        this.content = content;
        this.commentDate = commentDate;
    }

    public Comment() {
    }

    public String getContent() {
        return content;
    }

    public void setContent(String content) {
        this.content = content;
    }

    public LocalDateTime getCommentDate() {
        return commentDate;
    }

    public void setCommentDate(LocalDateTime commentDate) {
        this.commentDate = commentDate;
    }

    @Override
    public String toString() {
        return "Comment{" +
                "content='" + content + '\'' +
                ", commentDate=" + commentDate +
                '}';
    }
}
