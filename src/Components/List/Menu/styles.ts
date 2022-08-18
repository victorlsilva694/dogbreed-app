import styled from "styled-components";

export const Container = styled.div`
  min-height: 100vh;
  display: flex;
  min-width: 420px;
  flex-flow: row nowrap;

  @media (max-width: 900px) {
    flex-flow: column nowrap;
  }

  .menu {
    flex-grow: 0;
    min-width: 300px;
    border: 1px solid rgb(240, 240, 240);
    height: 100vh;
    background-color: white;
    box-shadow: 1px 0px 5px 2px rgba(0,0,0, 0.05);

    @media (max-width: 900px) {
      height: 50%;
      display: flex;
      align-items: center;
      box-shadow: 0px 2px 5px 3px rgb(0 0 0 / 8%);
      border: none;
    }
    
    @media (max-width: 746px) {
      height: 50px;
    }
  }

  .brand {
    width: 100%;
    align-items: center;
    height: 15%;
    justify-content: center;
    display: flex;

    @media (max-width: 746px) {
      display: none;
    }

    h1 {
      font-family: "Open Sans";
      font-size: 1.6rem;
      font-weight: 300;
      margin: 10px;
      color: rgb(100, 100, 100);
    }
  }
`;

export const ButtonItems = styled.div`
  width: 90%;
  cursor: pointer;
  margin: 0 auto;
  height: 10%;
  border-bottom: 1px solid rgb(220, 220, 220);
  display: flex;
  justify-content: center;
  align-items: center;

  @media (max-width: 900px) {
    text-decoration: none;
    border-bottom: 1px solid transparent;
  }

  a {
    text-decoration: none;
    color: black;
    text-align: center;
  }
`;
