import { styled } from "styled-components"

const PageContainer = styled.div`
  width: 100%;
  height: 100%;
  
`
const ContentContainer = styled.div`
  width: 80%;
  height: fit-content;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 80px;
  @media screen and (max-width: 768px) {
    margin-bottom: 200px;
  }
`



export { PageContainer, ContentContainer }
