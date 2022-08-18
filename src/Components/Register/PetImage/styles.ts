import styled from "styled-components";

export const ImagesPet = styled.div`
  width: 45%;
  max-height: 100vh;
  background-color: black;
  position: relative;
  

  /* Define a cor do fundo (preto ou branco) e a textura (opacidade) */
  /* Define o embaçamento do vidro */
  /* Aplica sombra ao container para que ele "flutue" levemente */

  @media (max-width: 1280px) {
    display: none;
  }

  .image-container {
    background: url("https://images.unsplash.com/photo-1552053831-71594a27632d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=662&q=80") no-repeat fixed center;
    background-size: cover;
    max-height: 100vh;

    img {
      width: 100%;
      height: 100vh;
      object-fit: cover;

      @media (max-width: 1280px) {
        display: none;
      }
    }
  }
  h1 {
    background-color: transparent;
    color: white;
    position: absolute;
    display: flex;
    z-index: 1;
    font-family: "Open Sans";
  }
`;
