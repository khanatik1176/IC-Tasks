'use client';
import {useState,useEffect} from 'react'
import {Link} from 'react-router-dom'
import Nav from '../Components/Nav';

const PostList = () => {

    const [posts, setPosts] = useState([]);

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/posts?_limit=5')
        .then((response) => response.json())
        .then((data) => {
            
            setPosts(data)

        });
    }, []);

  return (
    <div>
      <h2>All posts</h2>

      <ul>
        {posts.map((post) => (
        <li key={post.id}>
            <Link to={`/posts/${post.id}`}>{post.title}</Link>
        </li>
        ))}
      </ul>
    </div>
  )
}

export default PostList
