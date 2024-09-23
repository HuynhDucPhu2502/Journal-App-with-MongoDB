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

}
