package me.huynhducphu.backendmongodb.services;

import com.mongodb.client.gridfs.model.GridFSFile;
import org.bson.types.ObjectId;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.core.io.InputStreamResource;
import org.springframework.data.mongodb.core.query.Criteria;
import org.springframework.data.mongodb.core.query.Query;
import org.springframework.data.mongodb.gridfs.GridFsOperations;
import org.springframework.data.mongodb.gridfs.GridFsTemplate;
import org.springframework.http.HttpHeaders;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.io.InputStream;

@Service
public class FileService {

    @Autowired
    private GridFsTemplate gridFsTemplate;

    @Autowired
    private GridFsOperations gridFsOperations;

    public ResponseEntity<InputStreamResource> getFile(String filename) throws IOException {
        GridFSFile file = gridFsTemplate.findOne(Query.query(Criteria.where("filename").is(filename)));

        if (file == null) {
            return ResponseEntity.notFound().build();
        }

        InputStream inputStream = gridFsOperations.getResource(file).getInputStream();
        InputStreamResource resource = new InputStreamResource(inputStream);

        return ResponseEntity.ok()
                .contentType(MediaType.IMAGE_PNG)
                .header(HttpHeaders.CONTENT_DISPOSITION, "attachment; filename=\"" + filename + "\"")
                .body(resource);
    }

    public String uploadFile(MultipartFile file, String userId) throws IOException {
        GridFSFile existingFile = gridFsTemplate.findOne(new Query(Criteria.where("filename").is(userId)));
        if (existingFile != null) {
            gridFsTemplate.delete(new Query(Criteria.where("filename").is(userId)));
        }

        ObjectId fileId = gridFsTemplate.store(file.getInputStream(), userId, file.getContentType());
        return fileId.toString();
    }
}
