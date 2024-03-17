import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Image } from 'react-bootstrap';
import './home.css'; 
import { useNavigate } from "react-router-dom";
import ImageModal from './detalle'
import { FormattedMessage } from 'react-intl';

const Home = () => {
  const [userData, setUserData] = useState({});
  const [images, setImages] = useState([]);
  const navigate = useNavigate();
  const [selectedImage, setSelectedImage] = useState(null); 
  const [showModal, setShowModal] = useState(false); 

  const handleImageClick = (largeImageUrl) => {
    setSelectedImage(largeImageUrl);
    setShowModal(true);
};

  const handleCloseModal = () => {
    setShowModal(false);
    setSelectedImage(null);
  };

  useEffect(() => {
    const fetchUserData = async () => {
      const response = await axios.get('https://65e95f524bb72f0a9c514857.mockapi.io/Usuario/1');
      setUserData(response.data);
      fetchImages();
    };

    fetchUserData();
  }, []);

  const fetchImages = async () => {
    let imageUrls = []; 

    for (let i = 0; i < 12; i++) {
        
        const smallImageUrl = 'https://picsum.photos/200/' + (i + 300); 
        const largeImageUrl = 'https://picsum.photos/500/' + (i + 300); 
        imageUrls.push({
            small: smallImageUrl,
            large: largeImageUrl
        });
    }

    setImages(imageUrls);
};

  return (
    <div id="profile-container">
      <div id="user-info">
        <Image
          src={userData.imagen}
          roundedCircle
          style={{ width: '150px', cursor: 'pointer', marginLeft: '30px' }} 
          onClick={() => {navigate("/perfil");} }
        />
        <div>
          <h1>{userData.username}</h1>
          <p><strong>{userData.nombre}</strong> - {userData.descripcion}</p>
          <p><a href={userData.url}>{userData.url}</a></p>
          <p><strong>{userData.posts}</strong> posts <strong>{userData.seguidores}</strong> <FormattedMessage id="seguidores" /> <strong>{userData.seguidos}</strong>  <FormattedMessage id="seguidos" /></p>
        </div>
      </div>
      <div id="grid">
        {images.map((image, index) => (
          <img onClick={() => handleImageClick(image.large) } key={index} src={image.small} alt="grid-img" style={{ width: '100%', height: 'auto' }  } />
        ))}
      </div>
      <ImageModal show={showModal} onHide={handleCloseModal} imageUrl={selectedImage} />
    </div>
  );
};

export default Home;
