import { AuthContext } from "../context/auth.context";
import { useCallback, useEffect, useContext, useState} from "react";
import axios from "axios";


export default function PostServices() {
    
    const { token } = useContext(AuthContext);
    const [url, setUrl] = useState("");
    const [description, setDescription] = useState("");
    const [error, setError] = useState(false);
    const [emptyPage, setEmptyPage] = useState(false);
    const [publishing, setPublishing] = useState(false);
    const [refresh, setRefresh] = useState(true);
    const [posts, setPosts] = useState([]);
    const config = { headers: { Authorization: `Bearer ${token}` } };

 
//CARREGAR POSTS PUBLICADOS (20 mais recentes);
  useEffect(() => {
    axios
      .get(`${process.env.REACT_APP_API_URL}/posts`, config)
      .then((res) => {

        if (Array.isArray(res.data.results)) { 
          const sortPosts = res.data.results.sort((i, j) => j.id - i.id);
          const renderPosts = sortPosts.slice(0, 20);
          setPosts(renderPosts);
          setEmptyPage(renderPosts.length === 0);
          setRefresh(false);
        } 
        else {
          console.error(res.data);
          setError(true);
          setRefresh(false);
          alert(
            "An error occured while trying to fetch the posts, please refresh the page."
          );
        }
      })
      .catch((err) => {
        console.error(err);
        setError(true);
        setRefresh(false);
        alert(
          "An error occured while trying to fetch the posts, please refresh the page."
        );
      });
    // eslint-disable-next-line
  }, []);


//PUBLICAR POSTS;
    const handlePost = useCallback(async () => {
    if (url === "") {
      alert("Please, enter the url of your post!");
      return;
    }
    setPublishing(true);

    try {
        await axios.post(
            `${process.env.REACT_APP_API_URL}/posts`,
            {
                url: url,
                description: description,
            },
            config
        );
        setUrl("");
        setDescription("");
  
      //POSTS ATUALIZADOS;
        const updatedPosts = await axios.get(
            `${process.env.REACT_APP_API_URL}/posts`, config);

        const sortPosts = updatedPosts.data.sort((i, j) => j.id - i.id);
        const renderPosts = sortPosts.slice(0, 20);

        setPosts(renderPosts);
        setEmptyPage(renderPosts.length === 0);
        setUrl("");
        setDescription("");
    }
    catch (error) {
        console.error(error);
        alert("There was an error publishing your link.");
        setPublishing(false);
    }      
  // eslint-disable-next-line
    }, [url, setUrl, publishing, description, setDescription, handlePost]);
}



