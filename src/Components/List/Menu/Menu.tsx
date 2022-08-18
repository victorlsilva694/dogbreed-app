import { observer } from "mobx-react-lite";
import { useContext, useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { ContextAuth } from "../../../Contexts/UserContext";
import requests from "../../../Services/ServiceApi";
import { ButtonItems, Container } from "./styles";
import { BsCircleFill } from 'react-icons/bs';
import ImagesList from "../ImagesList/ImagesList";

function Menu() {
  let navigate = useNavigate();
  const auth = useContext(ContextAuth);

  const items = [
    {
      id: 1,
      link: "/list",
      name: "chihuahua"
    },
    {
      id: 2,
      link: "/list/husky",
      name: "husky"
    },
    {
      id: 3,
      link: "/list/labrador",
      name: "labrador"
    },
    {
      id: 4,
      link: "/list/pug",
      name: "pug"
    }
  ]

  const [link, setLink] = useState('');
  const redirect = (link: string) => {
    setLink(link);
    navigate(link)
  }

  return(
    <Container>
      <div className="menu">
        <div className="brand">
          <BsCircleFill style={{color: 'rgb(40,40,40)'}} />
          <h1><strong>Dog</strong> Breed</h1>
        </div>
        {
          items.map((items) => {
            return (
              <ButtonItems onClick={() => redirect(items.link)}>
                <p>{items.name}</p>
              </ButtonItems>
            )
          })
        }
      </div>
      <ImagesList />
    </Container>
  )
}

export default observer(Menu);