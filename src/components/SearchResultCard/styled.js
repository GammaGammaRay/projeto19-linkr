import styled from "styled-components";

const SearchResultCardWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 12px;
  margin-left: 17px;

  color: #515151;
  font-family: Lato;
  font-size: 19px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;

  img {
    width: 39px;
    height: 39px;
    border-radius: 50%;
  }

  span {
    cursor: pointer;
    &:hover {
        color: #303030;
    }
  }

`;

export { SearchResultCardWrapper };
