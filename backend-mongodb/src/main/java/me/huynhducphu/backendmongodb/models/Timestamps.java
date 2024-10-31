package me.huynhducphu.backendmongodb.models;

import java.time.LocalDate;

public class Timestamps {
    private LocalDate publish;
    private LocalDate createdAt;
    private LocalDate updatedAt;

    public Timestamps(LocalDate publish, LocalDate createdAt, LocalDate updatedAt) {
        this.publish = publish;
        this.createdAt = createdAt;
        this.updatedAt = updatedAt;
    }

    public Timestamps() {
    }

    public LocalDate getPublish() {
        return publish;
    }

    public void setPublish(LocalDate publish) {
        this.publish = publish;
    }

    public LocalDate getCreatedAt() {
        return createdAt;
    }

    public void setCreatedAt(LocalDate createdAt) {
        this.createdAt = createdAt;
    }

    public LocalDate getUpdatedAt() {
        return updatedAt;
    }

    public void setUpdatedAt(LocalDate updatedAt) {
        this.updatedAt = updatedAt;
    }
}
