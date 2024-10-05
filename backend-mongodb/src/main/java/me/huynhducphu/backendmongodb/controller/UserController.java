package me.huynhducphu.backendmongodb.controller;

import me.huynhducphu.backendmongodb.requestmodels.UserUpdateRequestModel;
import me.huynhducphu.backendmongodb.services.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@CrossOrigin(origins = "http://localhost:3000")
@RequestMapping("/api/users")
public class UserController {

    @Autowired
    private UserService userService;

    @PostMapping("/updateUser")
    public ResponseEntity<Void> updateUser(@RequestBody UserUpdateRequestModel userUpdateRequestModel) {
        userService.updateUser(userUpdateRequestModel);

        return ResponseEntity.ok().build();
    }
}
