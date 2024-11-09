'use client';
import Nav from '../Components/Nav';
import {useState,useEffect} from 'react'
import { useParams } from 'react-router-dom';

const PostDetails = () => {

    const {postId} = useParams();
    const [post, setPost] = useState(null);

    useEffect(() => {

    fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`)
    .then((res) => res.json())
    .then((data) => setPost(data));
}, []);

  return (
    <div>
      <h2>Post Details:</h2>
      <p><strong>Title: {post?.title}</strong></p>
        <p><strong>Description: {post?.body}</strong></p>
    </div>
  )
}

export default PostDetails
