import React, {useEffect, useState} from 'react';
import Card from "../components/Card.jsx"
import Loading from "../components/common/Loading.jsx";


const HomePage = () => {
    const[blogs, setBlogs] = useState([]);
    const[loading, setLoading] = useState(true);

    useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/posts")
            .then((response) =>response.json())
            .then((data) => {
                setBlogs(data)
                setLoading(false);
            });

    }, []);

if (loading) return <Loading/>;

return (
     <div className="container mx-auto mt-10 px-4">
         <h1 className="text-3xl font-bold mb-6 text-gray-600">Latest Blogs</h1>
         <section className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
         {blogs.map((blog)=>(
             <Card
             key={blog.id}
             title={blog.title}
             body={blog.body}
             id={blog.id}
             />
         ))}
         </section>
     </div>
    );
};

export default HomePage;