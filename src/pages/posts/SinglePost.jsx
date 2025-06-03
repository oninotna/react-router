import axios from "axios";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

const urlApi = "http://localhost:3000/posts";

export default function SinglePost () {
    const [dataPost, setDataPost] = useState({});
    const {id} = useParams();
    console.log(id);
    

    useEffect(() => {
        axios.get(`${urlApi}/${id}`).then((res) => {
          console.log(res.data);  
          setDataPost(res.data);
        });
    }, []);

    return (
        <div className="container">
            <h1>{dataPost.titolo}</h1>
            <img src={dataPost.immagine} alt={dataPost.titolo} />
            <p>{dataPost.contenuto}</p>
            <p>{dataPost.tags}</p>
            <Link className="btn btn-secondary" to="/posts">Torna alla lista dei post</Link>
        </div>
    )
}