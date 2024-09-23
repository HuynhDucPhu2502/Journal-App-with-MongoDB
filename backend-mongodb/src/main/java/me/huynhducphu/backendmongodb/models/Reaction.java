package me.huynhducphu.backendmongodb.models;

import org.springframework.format.annotation.DateTimeFormat;

import java.time.LocalDateTime;

public class Reaction {
    private String reactType;

    @DateTimeFormat(iso = DateTimeFormat.ISO.DATE_TIME)
    private LocalDateTime reactDate;

    public Reaction(String reactType, LocalDateTime reactDate) {
        this.reactType = reactType;
        this.reactDate = reactDate;
    }

    public Reaction() {
    }

    public String getReactType() {
        return reactType;
    }

    public void setReactType(String reactType) {
        this.reactType = reactType;
    }

    public LocalDateTime getReactDate() {
        return reactDate;
    }

    public void setReactDate(LocalDateTime reactDate) {
        this.reactDate = reactDate;
    }

    @Override
    public String toString() {
        return "Reaction{" +
                "reactType='" + reactType + '\'' +
                ", reactDate=" + reactDate +
                '}';
    }
}
