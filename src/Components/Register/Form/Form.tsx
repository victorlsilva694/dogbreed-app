import { observer } from "mobx-react-lite";
import { FormBox } from "./styles";
import { BsCircleFill } from 'react-icons/bs';
import { useContext, useState } from "react";
import requests from "../../../Services/ServiceApi";
import { ContextAuth } from "../../../Contexts/UserContext";
import { useNavigate } from "react-router-dom";

function Form() {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  let navigate = useNavigate();

  const auth = useContext(ContextAuth);

  const sendForm = async () => {
    try {
      await auth.login(email, password);
      navigate("/list");
    }
    catch (err) {
      console.log(err);
    }
  }

  return(
    <FormBox>
      <div className="box-brand">
        <BsCircleFill style={{color: 'rgb(40,40,40)'}} />
        <h1>Dog Breed</h1>
      </div>

      <div className="box-form">
        <h1>Registre-se</h1>

        <div className="container">
          <label htmlFor="email">
            Email
          </label>
          <input onChange={(e) => setEmail(e.target.value)} type="email" placeholder="exemplo@exemplo.com" name="email" id="email" />
        </div>

        <div className="container">
          <label htmlFor="password">
            Senha
          </label>
          <input onChange={(e) => setPassword(e.target.value)} type="password" placeholder="****************" name="password" id="password" />
        </div>

        <button onClick={sendForm} id="send">Registrar</button>
      </div>
    </FormBox>
  )
}

export default observer(Form);