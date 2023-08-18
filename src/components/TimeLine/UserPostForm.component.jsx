import { AuthContext } from "../../context/auth.context";
import { useCallback, useEffect, useContext, useState} from "react";
import  styled  from "styled-components";
import axios from "axios";


export default function PostForm() {

  const { token } = useContext(AuthContext);
  const [url, setUrl] = useState("");
  const [description, setDescription] = useState("");
  const [setError] = useState(false);
  const [setEmptyPage] = useState(false);
  const [publishing, setPublishing] = useState(false);
  const [setRefresh] = useState(true);
  const [setPosts] = useState([]);
  const config = { headers: { Authorization: `Bearer ${token}` } };
  const authorImage =
      "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcTfeiK25FERClFs4W7YW5U9uN3EgWX1istoqeFeN_IPFLBGOvaC";


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
  catch (err) {
      console.error(err);
      alert("There was an error publishing your link.");
  } finally {
      setPublishing(false);
  }
// eslint-disable-next-line
}, [handlePost]);   
    

  return (
      <PostContainer data-test="publish-box">

        <ImageBox>
          <UserImage src={authorImage} />
        </ImageBox>

        <PublishBox>
          <h2>What are you going to share today?</h2>

          <FormContainer>
            <input      
                data-test="link"
                className="url"
                type="text"
                placeholder="http://..."
                value={url}
                onChange={(e) => setUrl(e.target.value)}
                disabled={publishing}
             />
            <PostText 
                data-test="description"
                placeholder="What are you publishing?"
                className="description"
                type="text"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                disabled={publishing}/>

            <button
                data-test="publish-btn"
                onClick={handlePost}
                disabled={publishing}
              >
                {publishing ? "Publishing..." : "Publish"}
            </button>
          </FormContainer>
        </PublishBox>
      </PostContainer>
    )
  }


const PostContainer = styled.div`
  font-family: "Lato";
  font-weight: 300;
  font-size: 20px;
  color: #707070;
  width: 100%;
  height: fit-content;
  min-height: 210px;
  display: flex;
  flex-direction: row;
  border-radius: 16px;
  background-color: white;
  padding: 10px;
  margin-bottom: 30px;
`

const ImageBox = styled.div`
  width: 10%;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 10px;
`

const UserImage = styled.img`
  width: 90%;
  aspect-ratio: 1/1;
  object-fit: cover;
  border-radius: 100%;
`

const PublishBox = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  padding: 10px;

  h2 {
    font-family: "Lato";
    font-weight: 300;
    font-size: 20px;
    color: #707070;
    line-height: 24px;
    margin-bottom: 15px;
  }
`

const FormContainer = styled.form`
  border: none;
  border-radius: 5px;
  input {
    font-family: "Lato";
    font-weight: 300;
    font-size: 20px;
    background-color: #efefef;
    height: 30px;
       
    &:disabled {
      background-color: #d3d3d3;
      cursor: not-allowed;
    }
  }
  input::placeholder {
    font-family: "Lato";
    font-weight: 300;
    color: #949494;
  }
  :focus {
    outline: none;
    border: 1px solid transparent; 
    box-shadow: 0px 0px 3px 1px #b7b7b7; 
  }
  button {
    padding: 10px;
    border-radius: 8px;
    border: none;
    background-color: #1877F2;
    color: white;
    font-weight: 700;
    font-size: 15px;
    margin-left: auto;
    width: 100px;
    cursor: pointer;
    
    &:disabled {
      background-color: #d3d3d3;
      cursor: not-allowed;
    }
  }
`

const PostText = styled.textarea`
  width: 100%;
  height: 66px;
  resize: vertical;
  border-radius: 16px;
  border: none;
  background-color: #efefef;
  min-height: 100px;
  box-sizing: border-box;
  padding: 10px;
  font-family: "Lato";
  font-weight: 300;
  font-size: 16px;

  &:disabled {
    background-color: #d3d3d3;
    cursor: not-allowed;
  }
`
