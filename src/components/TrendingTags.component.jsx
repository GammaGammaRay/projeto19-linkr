import React from "react";
import { styled } from "styled-components";
import api from "../services/api";

function TrendingTags() {
  useEffect(() => {
    async function getTrendingTagsList() {
      try {
        const trendingTags = await api.fetchTrendingHashtags();
        console.log(trendingTags);
        setAnimalList(trendingTags);
      } catch (error) {
        console.error("Error fetching trending hashtags:", error.message);
      }
    }
    fetchAnimalList();
    console.log(animalList);
  }, []);

  return (
    <TrendingTagsContainer>
      <h2>trending</h2>
      <HorizontalLine />
      {trendingTags.map((tag, index) => (
        <p key={index}>#{tag}</p>
      ))}
    </TrendingTagsContainer>
  );
}

const TrendingTagsContainer = styled.div`
  color: white;
  line-height: 1.2rem;
  position: sticky;
  top: 180px;
  width: 100%;
  min-width: 200px;
  background-color: #171717;
  border-radius: 16px;
  background-color: #171717;
  box-sizing: border-box;
  padding: 8px;
  left: 0;

  h2 {
    font-weight: 700;
    font-size: 27px;
    margin-left: 8px;
    font-family: "Oswald";
  }

  p {
    font-family: "Lato";
    font-weight: 700;
    font-size: 19px;
    margin-bottom: 8px;
    margin-top: 15px;
  }
`;

const HorizontalLine = styled.div`
  margin-top: 10px;
  background-color: #333333;
  width: 120%;
  margin-left: -10px;
  box-sizing: border-box;
  height: 2px;
`;

export default TrendingTags;
