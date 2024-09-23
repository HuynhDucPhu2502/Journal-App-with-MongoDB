package me.huynhducphu.backendmongodb.models;

public class SocialLink {
    private String platform;
    private String url;

    public SocialLink(String platform, String url) {
        this.platform = platform;
        this.url = url;
    }

    public SocialLink() {
    }

    public String getPlatform() {
        return platform;
    }

    public void setPlatform(String platform) {
        this.platform = platform;
    }

    public String getUrl() {
        return url;
    }

    public void setUrl(String url) {
        this.url = url;
    }

    @Override
    public String toString() {
        return "SocialLink{" +
                "platform='" + platform + '\'' +
                ", url='" + url + '\'' +
                '}';
    }


}
