package com.aboubakar.facebookcloneservice.repository;

import com.aboubakar.facebookcloneservice.entity.PostEntity;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

//this jpa repository is of type PostEntity and the id of type String
@Repository
public interface PostENtityRepository extends JpaRepository<PostEntity, String> {
}
