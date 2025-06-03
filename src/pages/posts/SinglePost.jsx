import axios from "axios";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

const urlApi = "http://localhost:3000/posts";

export default function SinglePost () {
    const [dataPosts, setDataPosts] = useState([]);

    useEffect(() => {
        axios.get(urlApi).then((res) => {
          console.log(res.data);  
          setDataPosts(res.data);
        });
    }, []);

}