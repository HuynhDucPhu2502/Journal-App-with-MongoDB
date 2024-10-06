package me.huynhducphu.backendmongodb.controller;

import me.huynhducphu.backendmongodb.requestmodels.UserUpdateRequestModel;
import me.huynhducphu.backendmongodb.services.FileService;
import me.huynhducphu.backendmongodb.services.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

@RestController
@CrossOrigin(origins = "http://localhost:3000")
@RequestMapping("/api/users")
public class UserController {

    @Autowired
    private UserService userService;

    @Autowired
    private FileService fileService;

    @PostMapping("/updateUser")
    public ResponseEntity<Void> updateUser(@RequestBody UserUpdateRequestModel userUpdateRequestModel) {
        userService.updateUser(userUpdateRequestModel);

        return ResponseEntity.ok().build();
    }

    @PostMapping("/uploadAvatar")
    public ResponseEntity<String> uploadAvatar(@RequestParam("userId") String userId,
                                               @RequestParam("avatar") MultipartFile avatar) {
        try {
            String fileId = fileService.uploadFile(avatar, userId);
            return ResponseEntity.ok().build();
        } catch (Exception e) {
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).build();
        }
    }
}
