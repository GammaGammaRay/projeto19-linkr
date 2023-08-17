import  styled  from "styled-components";
import { useCallback } from "react";


export default function PostForm({url, setUrl, publishing, description, setDescription, handlePost}) {

  const authorImage =
      "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcTfeiK25FERClFs4W7YW5U9uN3EgWX1istoqeFeN_IPFLBGOvaC";
  

    const buttonPressed = useCallback(
      (event) => {
        if (event.key === "Enter") {
          handlePost();
        }
      },
      [handlePost]
  );

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
                onClick={buttonPressed}
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
  }
  input::placeholder {
    font-family: "Lato";
    font-weight: 300;
    color: #949494;
    
    &:disabled {
      background-color: #d3d3d3;
      cursor: not-allowed;
    }
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
