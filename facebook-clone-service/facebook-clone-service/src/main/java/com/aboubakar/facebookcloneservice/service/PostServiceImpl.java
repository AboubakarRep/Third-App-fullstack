package com.aboubakar.facebookcloneservice.service;

import com.aboubakar.facebookcloneservice.entity.PostEntity;
import com.aboubakar.facebookcloneservice.model.Post;
import com.aboubakar.facebookcloneservice.repository.PostENtityRepository;
import com.fasterxml.jackson.databind.util.BeanUtil;
import org.springframework.beans.BeanUtils;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;
import java.util.stream.Collectors;

@Service
public class PostServiceImpl implements PostService{

    private PostENtityRepository postENtityRepository;

    public PostServiceImpl(PostENtityRepository postENtityRepository) {
        this.postENtityRepository = postENtityRepository;
    }

    @Override
    public Post addPost(Post post) throws Exception {
        try {
            PostEntity postEntity = new PostEntity();

            //copy all properties
            BeanUtils.copyProperties(post, postEntity); //copy all properties from post to postEntity

            //we need to get the file
            if(post.getFile() != null && !post.getFile().equalsIgnoreCase("null")){
                postEntity.setImage(post.getFile());
            }
            else postEntity.setImage(null);

            //after verification file is not null
            postEntity = postENtityRepository.save(postEntity); //save the data

            //set some values
            post.setId(postEntity.getId());
            //now we need the file
            post.setFile(null);
            post.setImage(postEntity.getImage());
        } catch (Exception e) {
            throw new Exception("Could not save Post: " + e);
        }
        return post;
    }

    @Override
    public List<Post> getPost() {
        //we need list of post but in database  we will getting list of postentity
        //let's get list of postentity
        List<PostEntity> postEntities
                = postENtityRepository.findAll();
        //now we need to convert
        List<Post> posts = new ArrayList<>();

        posts = postEntities.stream()
                .map((postEntity) ->
                        Post.builder()
                                .id(postEntity.getId())
                                .timeStamp(postEntity.getTimeStamp())
                                .email(postEntity.getEmail())
                                .name(postEntity.getName())
                                .post(postEntity.getPost())
                                .image(postEntity.getImage())
                                .profilePic(postEntity.getProfilePic())
                                .build())
                .collect(Collectors.toList());

        return posts;
    }
}
