package com.aboubakar.facebookcloneservice.entity;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.hibernate.annotations.GenericGenerator;

@Entity
@Table(name = "posts")
//lombook for getters, setters
@Data
@Builder //builder pattern
@NoArgsConstructor
@AllArgsConstructor
public class PostEntity {
    @Id
    @GeneratedValue(generator = "uuid")
    @GenericGenerator(name = "uuid", strategy = "uuid2")
    private String id; //primary key because annotation id is above

    @Lob //by default we can use 255 characters for store any numbers of data
    @Column(columnDefinition = "LONGTEXT")
    private String post;
    private String name;
    private String email;

    @Lob
    @Column(columnDefinition = "LONGTEXT")
    private String image;
    private String profilePic;
    private String timeStamp;


}
