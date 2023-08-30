package com.aboubakar.facebookcloneservice.controller;

import com.aboubakar.facebookcloneservice.model.Post;
import com.aboubakar.facebookcloneservice.service.PostService;
import jakarta.servlet.annotation.MultipartConfig;
import org.springframework.context.annotation.Configuration;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.util.Date;
import java.util.List;
import java.util.Map;

@Configuration
@CrossOrigin(value = "http://localhost:3000")
@RestController
@RequestMapping("/api/v1/post")
public class PostController {

    private PostService postService;

    public PostController(PostService postService) {
        this.postService = postService;
    }

    //for post data in ui app nextjs

    @PostMapping
    //request param from createpost.tsx for take request param on form data
    public Post addPost(@RequestParam Map<String, String> requestParams) throws Exception {
        String strpost = requestParams.get("post");
        String email = requestParams.get("email");
        String name = requestParams.get("name");
        String file = requestParams.get("file");
        String profilePic = requestParams.get("profilePic");

        Post post = Post.builder()
                .file(file)
                .name(name)
                .email(email)
                .post(strpost)
                .profilePic(profilePic)
                .timeStamp(new Date().toString())
                .build();

                //once this post is created
        post = postService.addPost(post);
        return post;
    }


    //get all list of post
    @GetMapping
    public List<Post> getPost(){
        return postService.getPost();
    }
}
