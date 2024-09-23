package me.huynhducphu.backendmongodb.models;

import org.springframework.data.annotation.Id;

public class UserActivity {
    @Id
    private String userActivityId;

    private String userId;

    private String articleId;

    private Comment[] comments;

    private Reaction reaction;

    private boolean isLiked;

    private boolean isCommented;
}
