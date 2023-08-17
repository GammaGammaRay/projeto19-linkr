import { useNavigate } from "react-router-dom";
import { SearchResultCardLink, SearchResultCardWrapper } from "./styled";

export default function SearchResultCard({ id, profileUrl, userName }) {
  const navigate = useNavigate();

  function handleSearchResultCardClick() {
    navigate(`/user/${id}`);
  }

  return (
    <SearchResultCardWrapper onClick={handleSearchResultCardClick} data-test="user-search">
      <img src={profileUrl} alt="profile picture" />
      <SearchResultCardLink to={`/user/${id}`}>{userName}</SearchResultCardLink>
    </SearchResultCardWrapper>
  );
}
