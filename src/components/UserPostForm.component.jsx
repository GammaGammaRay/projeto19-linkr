import  styled  from "styled-components";
import { useCallback, useEffect, useState } from "react";
import axios from "axios";
import useAuth from "../hooks/useAuth";
import { useNavigate } from "react-router-dom";

export default function PostForm() {
 
  const { token, auth } = useAuth();
  const navigate = useNavigate();
  const imageUrl = auth.profileUrl;

  const [url, setUrl] = useState("");
  const [description, setDescription] = useState("");
  const [error, setError] = useState(false);
  const [emptyPage, setEmptyPage] = useState(false);
  const [publishing, setPublishing] = useState(false);
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const authorImagePlaceholder =
    "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcTfeiK25FERClFs4W7YW5U9uN3EgWX1istoqeFeN_IPFLBGOvaC";

    const config = { headers: { Authorization: `Bearer ${token}` } };

    useEffect(() => {
      console.log(`${process.env.API_URL}/posts`)
      axios
        .get(`${process.env.API_URL}/posts`, config)
        .then((res) => {
          if (Array.isArray(res.data.results)) { 
            const sortPosts = res.data.results.sort((a, b) => b.id - a.id);
            const recentPosts = sortPosts.slice(0, 20);
            setPosts(recentPosts);
            setEmptyPage(recentPosts.length === 0);
            setLoading(false);      
          } else {
            console.error(res.data);
            setError(true);
            setLoading(false);
            alert(
              "An error occurred while trying to fetch the posts, please refresh the page"
            );
          }
        })
        .catch((err) => {
          console.error(err);
          setError(true);
          setLoading(false);
          alert(
            "An error occurred while trying to fetch the posts, please refresh the page"
          );
        });
    
    }, []);

 //PUBLICAR POSTS;
 const handlePost = useCallback(async (e) => {
  console.log("Post url: " +url)
  e.preventDefault()
  if (!url) {
    alert("Please, enter the url of your post!");
  }
  setPublishing(true);

  try {
      await axios.post(
          `${process.env.API_URL}/posts`,
          {
              link: url,
              description: description,
          },
          config
      );
      setDescription("");

      const updatedPostsResponse = await axios.get(
        `${process.env.API_URL}/posts`,
        config
      );
      const sortedPosts = updatedPostsResponse.data.sort((a, b) => b.id - a.id);
      const recentPosts = sortedPosts.slice(0, 20);

      setPosts(recentPosts);
      setEmptyPage(recentPosts.length === 0);
      setDescription("");
  }
  catch (err) {
    console.log(err)
    setPublishing(false);
    alert("There was an error publishing your link.");
  }

}, []);  
    
  return (
      <PostContainer>

        <ImageBox>
          <UserImage src={authorImagePlaceholder} />
        </ImageBox>

        <PublishBox>
          <h2>What are you going to share today?</h2>

          <FormContainer onSubmit={handlePost}>
            <input      
                data-test="link"
                className="url"
                type="text"
                placeholder="http://..."
                value={url}
                onChange={(e) => setUrl(e.target.value)}
                /*keyPress={buttonPressed}*/
                disabled={publishing}
             />
            <PostText 
                data-test="description"
                placeholder="What are you publishing?"
                className="description"
                type="text"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                /*keyPress={buttonPressed}*/
                disabled={publishing}/>

            <button
                data-test="publish-btn"
                /*onClick={buttonPressed}*/
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
  display: flex;
  flex-direction: column;
  align-items: end;
  input {
    font-family: "Lato";
    font-weight: 300;
    font-size: 20px;
    background-color: #efefef;
    height: 30px;
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
  button{
    background-color: #1877F2;
    border-radius: 5px;
    width: 112px;
    font-family: Lato;
    font-weight: 700;
    font-size: 14px;
    line-height: 16px;
    
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
`
