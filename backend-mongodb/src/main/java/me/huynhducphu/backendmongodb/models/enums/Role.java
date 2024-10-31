package me.huynhducphu.backendmongodb.models.enums;

import com.fasterxml.jackson.annotation.JsonCreator;
import com.fasterxml.jackson.annotation.JsonValue;

public enum Role {
    MEMBER("MEMBER"),
    AUTHOR("AUTHOR"),
    ADMIN("ADMIN");

    private final String displayName;

    Role(String displayName) {
        this.displayName = displayName;
    }

    @JsonValue
    public String getDisplayName() {
        return displayName;
    }

    @JsonCreator
    public static Role fromValue(String value) {
        for (Role role : Role.values()) {
            if (role.displayName.equalsIgnoreCase(value)) {
                return role;
            }
        }
        throw new IllegalArgumentException("ROLE không phù hợp: " + value);
    }
}
