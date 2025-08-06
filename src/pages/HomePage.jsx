import React, {useEffect, useState} from 'react';
import Card from "../components/Card.jsx"

const HomePage = () => {
    const[posts, setPosts] = useState([]);
    useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/posts")
            .then((response) =>response.json())
            .then((data) => setPosts(data));
    }, []);
    // console.log("posts: ",posts);
    return (
     <div className="grid grid-cols-3 gap-2">
         {posts.slice(0, 20).map((post)=>(
             <Card
                 key={post.id}
             title={post.title}
             body={post.body}
             />
         ))}
     </div>
    );
};

export default HomePage;