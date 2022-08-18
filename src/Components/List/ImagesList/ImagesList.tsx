import { observer } from "mobx-react-lite";
import { useContext, useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { ContextAuth } from "../../../Contexts/UserContext";
import requests from "../../../Services/ServiceApi";
import { BoxImages } from "./styles";
import Modal from 'react-modal';

Modal.setAppElement('#root')

function ImagesList() {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [urlImage, setUrlImage] = useState('');

  const handleOpenModal = (image: string) => {
    setModalIsOpen(true);
    setUrlImage(image)
    console.log(urlImage)
  }
  const handleCloseModal = () => {
    setModalIsOpen(false);
  }
  const customStyle = {
    content: {
      top: '5%',
      left: '10%',
      right: '10%'
    }
  }

  const auth = useContext(ContextAuth);
  const [arrayImages, setArrayImages] = useState([]);

  useEffect(() => {
    auth.listItemDefault();
    auth.listItemsHusky();
    auth.listItemsLabrador();
    auth.listItemsPug();
    setArrayImages(auth.images.list);
  }, [arrayImages]);
  
  const location = useLocation();

  return (
    <>
      <Modal style={customStyle} isOpen={modalIsOpen} onRequestClose={handleCloseModal}>
        <div style={{margin: '0 auto', width: "100%", height:'100%', objectFit: 'cover', alignItems: 'center', display: 'flex', justifyContent: 'center'}} >
          <img style={{width: "auto", height:'auto', margin: '0 auto', objectFit: 'cover'}} src={urlImage}  alt="" />
        </div>
      </Modal>

      <BoxImages>
        {location.pathname === "/list"
          ? auth.images.list.map((Images: any) => {
              return (
                <>
                  <div onClick={() => handleOpenModal(Images)} className="image-container">
                    <img src={Images} />
                  </div>
                </>
              );
            })
          : location.pathname === "/list/pug"
          ? auth.imagesPug.list.map((Images: any) => {
              return (
                <div onClick={() => handleOpenModal(Images)} className="image-container">
                  <img  src={Images} />
                </div>
              );
            })
          : 
          location.pathname === "/list/husky"
          ? auth.imagesHusky.list.map((Images: any) => {
              return (
                <div onClick={() => handleOpenModal(Images)} className="image-container">
                  <img  src={Images} />
                </div>
              );
            })
          : 
          location.pathname === "/list/labrador"
          ? auth.imagesLabrador.list.map((Images: any) => {
              return (
                <div onClick={() => handleOpenModal(Images)} className="image-container">
                  <img  src={Images} />
                </div>
              );
            })
          : <h1>Url não existe</h1>
          }
      </BoxImages>
    </>
  );
}

export default observer(ImagesList);
