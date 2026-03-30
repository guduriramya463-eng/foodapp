import React from 'react'
import { useParams } from 'react-router-dom'

function BlogPost() {
    const{slug}=useParams();
    const BlogPosts={
        'first-post':{title:'First Blog Post',content:'This is the content of the first Post.'},
        'Second-post':{title:'Second Blog Post',content:'This is the content of the Second Post.'},
        'Third-post':{title:'Third Blog Post',content:'This is the content of the Third Post.'},
    };
    const post=BlogPosts[slug];
  return (
    <>
      {post&&<h1>{post.name} {post.title} {post.content} </h1>}
    </>
  );
}

export default BlogPost;
