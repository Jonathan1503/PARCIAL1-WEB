import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from "react-router-dom";
import { FormattedMessage } from 'react-intl';
import './perfil.css'; 

const CampoPerfil = ({ labelId, value, editable, onChange }) => {
  return (
    <div className="form-group">
      <label><FormattedMessage id={labelId} />:</label>
      {editable ? (
        <input type="text" value={value} onChange={onChange} />
      ) : (
        <p>{value}</p>
      )}
    </div>
  );
};

const Perfil = () => {
  const [userData, setUserData] = useState({
    username: '',
    nombre: '',
    descripcion: '',
    url: '',
    imagen: ''
  });
  const [editableFields, setEditableFields] = useState({
    username: false,
    nombre: false,
    descripcion: false,
    url: false
  });
  const navigate = useNavigate();

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const response = await axios.get('https://65e95f524bb72f0a9c514857.mockapi.io/Usuario/1');
        setUserData(response.data);
        let value= Math.random() < 0.5
        setEditableFields({    
          username: value,
          nombre: value,
          descripcion: value,
          url: value
        });
      } catch (error) {
        console.error('Error fetching user data:', error);
      }
    };

    fetchUserData();
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserData((prevData) => ({
      ...prevData,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.put('https://65e95f524bb72f0a9c514857.mockapi.io/Usuario/1', userData);
      alert('Los cambios han sido guardados exitosamente.');
      navigate("/");
    } catch (error) {
      console.error('Error saving changes:', error);
      alert('Hubo un error al guardar los cambios. Por favor, intenta de nuevo.');
    }
  };

  return (
    <div className="card">
      <div className="avatar">
        <img src={userData.imagen} alt="Avatar" />
      </div>
      <div className="form-container">
        <form onSubmit={handleSubmit}>
          <CampoPerfil
            labelId="usernameLabel"
            value={userData.username}
            editable={editableFields.username}
            onChange={(e) => handleChange(e)}
          />
          <CampoPerfil
            labelId="nombreLabel"
            value={userData.nombre}
            editable={editableFields.nombre}
            onChange={(e) => handleChange(e)}
          />
          <CampoPerfil
            labelId="descripcionLabel"
            value={userData.descripcion}
            editable={editableFields.descripcion}
            onChange={(e) => handleChange(e)}
          />
          <CampoPerfil  
            labelId="urlLabel"
            value={userData.url}
            editable={editableFields.url}
            onChange={(e) => handleChange(e)}
          />
          <button type="submit" className="btn-save"><FormattedMessage id="guardarCambiosBtn" /></button>
        </form>
      </div>
    </div>
  );
};

export default Perfil;
