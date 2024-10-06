package me.huynhducphu.backendmongodb.services;

import me.huynhducphu.backendmongodb.dao.UserRepository;
import me.huynhducphu.backendmongodb.models.User;
import me.huynhducphu.backendmongodb.requestmodels.UserUpdateRequestModel;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.mongodb.gridfs.GridFsTemplate;
import org.springframework.stereotype.Service;

import java.time.LocalDate;
import java.time.format.DateTimeFormatter;
import java.util.Optional;

@Service
public class UserService {
    @Autowired
    private UserRepository userRepository;


    public void updateUser(UserUpdateRequestModel userUpdateRequestModel) {
        Optional<User> tmp = userRepository.findById(userUpdateRequestModel.getUserId());
        if (tmp.isPresent()) {
            User user = tmp.get();

            user.setFullName(userUpdateRequestModel.getFullName());
            user.setAddress(userUpdateRequestModel.getAddress());
            user.setGender(userUpdateRequestModel.getGender());
            user.setDob(LocalDate.parse(userUpdateRequestModel.getDob(), DateTimeFormatter.ISO_DATE));

            userRepository.save(user);
        } else throw new IllegalArgumentException("Người dùng không tồn tại");
    }
}
