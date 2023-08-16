import styled from "styled-components";

const ComponentContainer = styled.div`
  display: flex;
  flex-direction: column;
  border-radius: 8px;
  background: #e7e7e7;
  margin: 20px 0;
  gap: 14px;
`;

const SearchBarWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;
  border-radius: 8px;
  background: #e7e7e7;

  .search-input {
    width: 563px;
    height: 20px;
    flex-shrink: 0;
    border-radius: 8px;
    background: #fff;
    font-family: Lato;
    font-size: 19px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    &::placeholder {
      color: #c6c6c6;
    }
  }

  img {
    position: absolute;
    right: 11px;
    top: 13px;
  }
`;

const SearchResultsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  padding-bottom: 23px;
`;

export { ComponentContainer, SearchBarWrapper, SearchResultsWrapper };
