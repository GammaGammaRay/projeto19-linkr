import { SearchResultCardWrapper } from "./styled";

export default function SearchResultCard({ profileUrl, userName }) {
  return (
    <SearchResultCardWrapper>
      <img src={profileUrl} alt="profile picture" />
      <span>{userName}</span>
    </SearchResultCardWrapper>
  );
}
