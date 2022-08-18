import styled from "styled-components";

export const FormBox = styled.div`
  width: 50%;
  max-width: 50rem;
  margin: 0 auto;
  height: 100vh;

  @media(max-width: 1280px){
    width: 100%;
  }

  .box-brand {
    max-width: 40%;
    margin: 30px;
    display: flex;
    height: 5rem;
    
    h1 {
      margin: 0px 10px;
    }
  }

  .box-form {
    max-height: 40rem;
    min-height: 30rem;
    width: 60%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin: 0 auto;

    h1 {
      font-family: 'Open Sans';
      font-size: 1.8rem;
    }

    p{
      font-family: 'Open Sans';
      font-weight: 300;
      color: rgb(80, 80, 80);
    }

    .container {
      margin: 18px 0;
      display: flex;
      flex-direction: column;
      width: 100%;

      label {
        font-family: 'Open Sans';
        font-size: 1rem;
      }

      input {
        margin-top: 10px;
        border: 1px solid rgb(210, 210, 210);
        border-radius: 5px;
        padding: 10px;
        height: 2.5rem;
      }
    }

    #send {
      font-family: 'Open Sans';
      font-weight: 600;
      font-size: .9rem;
      width: 100%;
      height: 3rem;
      border: none;
      color: rgb(220, 220, 220);
      border-radius: 5px;
      margin-top: 2rem;
      background-color: rgb(50, 50, 60);
    }
  }
`;
