package com.aboubakar.facebookcloneservice.service;

import com.aboubakar.facebookcloneservice.model.Post;

import java.util.List;

public interface PostService {

    Post addPost(Post post) throws Exception;

    List<Post> getPost();
}
