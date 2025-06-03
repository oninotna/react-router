import axios from "axios";
import { useState, useEffect } from "react";

const urlApi = "http://localhost:3000/posts";

export default function PostsPage () {
    const [dataPosts, setDataPosts] = useState([]);

    useEffect(() => {
        axios.get(urlApi).then((res) => {
          console.log(res.data);  
          setDataPosts(res.data);
        });
    }, []);

    
    return (
        <div className="container">
           <h1>Lista dei post</h1>
           <div className="d-flex gap-3">
                {dataPosts.map((post) => (
                    <div className="card" style={{width: "18rem"}} key={post.id}>
                      <img src={post.immagine} className="card-img-top" alt={post.titolo} />
                      <div className="card-body">
                          <h5 className="card-title">{post.titolo}</h5>
                          <p className="card-text">{post.contenuto}</p>
                          <a href={`/posts/${post.id}`} className="btn btn-primary">Go somewhere</a>
                     </div>
                  </div>
                ))}
            </div>
        </div>    
    )
};