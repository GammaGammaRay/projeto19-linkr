import { useCallback, useEffect, useState, useRef} from "react";
import { useNavigate } from "react-router-dom";
import  styled  from "styled-components";
import axios from "axios";
import userIcon from "../assets/images/icons/userIcon.jpeg";
import load from "../assets/images/icons/load.gif";
import imagePost from "../assets/images/icons/imagepost.png";
import useAuth from "../hooks/useAuth";

import { LikeComponent } from "./Post.Components/Like.component";
import { EditOrDelete } from "./Post.Components/EditOrDelete";

export default function PostForm() {

  const { token, auth } = useAuth();
  const [url, setUrl] = useState("");
  const [description, setDescription] = useState("");
  const [error, setError] = useState(false);
  const [emptyPage, setEmptyPage] = useState(false);
  const [publishing, setPublishing] = useState(false);
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const config = { headers: { Authorization: `Bearer ${token}` } };
  const imageUrl = auth.profileUrl;
  const navigate = useNavigate();


// CÓDIGO THIAGO ABAIXO

const strign = `Lorem ipsum dolor est bla bla bla etc etc e tals Muito maneiro esse tutorial de Material UI com React, deem uma olhada!`
const[isLiked, setIsLiked] = useState(false); 
const [toggle, setToggle] = useState(false);
const [editing, setEditing] = useState(false);
const textRef = useRef(null);
const [textValue, setTextValue] = useState(strign);
const handleEditClick = () => {
  setEditing(!editing);
};

const handleKey = (e) => {
  console.log(e);
  if(e.keyCode === 27)return setEditing(!editing);
  if(e.keyCode !==13)return;

  setTextValue(textRef.current.value);
  setEditing(false);
};


//CARREGAR POSTS PUBLICADOS (20 mais recentes);
useEffect(() => {
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

// eslint-disable-next-line
}, []);

console.log(url)

 //PUBLICAR POSTS;
 const handlePost = useCallback(async () => {
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
      setUrl("");
      setDescription("");
  }
  catch (err) {
    setPublishing(false);
    alert("There was an error publishing your link.");
  } 
  
// eslint-disable-next-line
}, []);  

  
  return (
    <>
      <PostContainer data-test="publish-box">

        <ImageBox>
          <UserImage  src={!imageUrl  ? userIcon : imageUrl}
                alt="User Image" />   
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

      <TimelinePost>
          {loading ? (
            <Image src={load} alt="Loading..." />
          ) : error ? (
            <p>
              An error occurred while trying to fetch the posts, please refresh
              the page
            </p>
          ) : emptyPage ? (
            <p data-test="message">There are no posts yet</p>
          ) : (
            posts.map((post) => (
              <PostBox data-test="post" key={post.id}>
                  <TimeLinePostLeft>
                    <BoxImage>

                      <UserImage
                        src={!imageUrl ? userIcon : imageUrl}
                      />

                      < LikeComponent
                        isLiked={isLiked}
                        setIsLiked={setIsLiked}
                      />

                    </BoxImage>
                  </TimeLinePostLeft>

                  <TimeLinePostRight>

                  <EditOrDelete
                      textRef={textRef}
                      toggle={toggle}
                      setToggle={setToggle}
                      handleEditClick={handleEditClick}
                    />

                    <h2>{post.userName}</h2>

                    {editing ? (
                      <>
                      <textarea
                        ref={textRef} 
                        defaultValue={textValue}
                        className="description" 
                        onKeyDown={(e) => handleKey(e)}            
                        style={{
                          fontFamily: "Arial, sans-serif",
                          fontSize: "14px",
                          padding: "10px",
                          border: "1px solid #ccc",
                          borderRadius: "4px",
                          width: "100%",
                          height: "100%"
                    }}
                      />
                      </>
                    ) : (<>
                    <p>{textValue}</p></>
                    )}

                    <DescriptionText>
                      <button
                        onClick={(id, type) => navigate(`/hashtag/${id}`)}
                      >   
                          <p data-test="description">{post.description}</p> 
                      </button>
                    </DescriptionText>

                    <a
                      data-test="link"
                      href={post.link}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                        <BoxLink>
                          <DescriptionLink>
                            <p>{post.urlDescr}</p>
                            <p>{post.link}</p>
                          </DescriptionLink>
                          <>
                            <img src={imagePost} alt="" />
                          </>
                        </BoxLink>
                    </a>

                  </TimeLinePostRight>
              </PostBox>
            )))}
        </TimelinePost>
    </>
)}


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

const Image = styled.img`
  width: 100%;
  height: 100%;
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

const TimelinePost = styled.div`
  font-family: "Lato";
  color: white;
  line-height: 1.6em;
  width: 100%;
  height: fit-content;
  min-height: 210px;
  display: flex;
  flex-direction: row;
  border-radius: 16px;
  background-color: #171717;
  padding: 10px;
  margin-bottom: 20px;
`

const BoxImage = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  }
`;

const PostBox = styled.div`
  font-family: "Lato";
  color: white;
  line-height: 1.6em;
  width: 100%;
  height: fit-content;
  min-height: 210px;
  display: flex;
  flex-direction: row;
  border-radius: 16px;
  background-color: #171717;
  padding: 10px;
  margin-bottom: 20px;
  }
`;

const TimeLinePostRight = styled.div`
display: flex;
flex-direction: column;
padding: 10px;
h2 {
  line-height: 1.1em;
  font-size: 26px;
  font-weight: 500;
}
p {
  
  font-size: 12px;
  margin-top: 12px;
  margin-bottom: 12px;
  font-size: 20px;
  color: #b7b7b7;
}
`

const DescriptionText = styled.div`
  width: 100%;

  p {
    font-size: 25px;
    padding-bottom: 20px;
    color: #b9b9b9;

    @media screen and (min-width: 480px) {
      font-size: 20px;
      padding-bottom: 15px;
    }
  }

  .textarea {
    background-color: white;
    border: none;
    border-radius: 5px;
    margin-bottom: 10px;
    font-family: "Assistant", sans-serif;
    font-weight: 200;
    font-size: 20px;
    padding-left: 10px;
    height: 38px;
    width: 97%;
    color: black;
    outline: none;

    @media screen and (min-width: 480px) {
      font-size: 16px;
    }
  }
`;


const TimeLinePostLeft = styled.div`
  width: 10%;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 10px;
`


const BoxLink = styled.div`
  display: flex;
  img {
    height: 100%;
  }
`;

const DescriptionLink = styled.div`
  width: 70%;
  display: flex;
  justify-content: space-evenly;
  flex-direction: column;
  word-break: break-all;
`;