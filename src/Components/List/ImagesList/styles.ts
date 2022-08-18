import styled from "styled-components";

export const BoxImages = styled.div`
  flex-grow: 1;
  margin: auto;
  gap: 10px;
  padding: 10px;
  display: flex;
  flex-flow: row wrap;
  justify-content: center;
  background-color: rgba(0, 0, 0, 0.05);

  @media (max-width: 900px) {
    padding-top: 10px;
  }

  .image-container {
    height: 280px;
    max-width: auto;

    img {
      max-width: auto;
      height: 280px;
      object-fit: fill;
    }
  }
`;
