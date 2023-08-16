import { SearchResultCardWrapper } from "./styled";

export default function SearchResultCard({ profileUrl, userName }) {
  return (
    <SearchResultCardWrapper>
      <img src="https://yt3.googleusercontent.com/-CFTJHU7fEWb7BYEb6Jh9gm1EpetvVGQqtof0Rbh-VQRIznYYKJxCaqv_9HeBcmJmIsp2vOO9JU=s900-c-k-c0x00ffffff-no-rj" alt="profile picture" />
      <span>João avatares</span>
    </SearchResultCardWrapper>
  );
}
