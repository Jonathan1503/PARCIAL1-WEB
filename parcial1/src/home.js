import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import perfil from './perfil.jpg'
import './home.css'

function Home() {
    
    const [nombre, setNombre] = useState('');
    const [username, setUsername] = useState('');
    const [url, setUrl] = useState('');
    const [imagen, setImagen] = useState('');
    const [seguidos, setSeguidos] = useState('');
    const [seguidores, setSeguidores] = useState('');
    const [posts, setPosts] = useState('');
    const [descripcion, setDescripcion] = useState('');
    const [img1, setImg1] = useState('');
    const [img2, setImg2] = useState('');
    const [img3, setImg3] = useState('');
    const [img4, setImg4] = useState('');
    const [img5, setImg5] = useState('');
    const [img6, setImg6] = useState('');
    const [img7, setImg7] = useState('');
    const [img8, setImg8] = useState('');
    const [img9, setImg9] = useState('');
    const [img10, setImg10] = useState('');
    const [img11, setImg11] = useState('');
    const [img12, setImg12] = useState('');


    useEffect(() => {
        const fetchinfo = async () => {
            try {
              const response = await axios.get('https://65e95f524bb72f0a9c514857.mockapi.io/Usuario/1');
              setNombre(response.data.nombre);
              setUsername(response.data.username);
              setUrl(response.data.url);
              setImagen(response.data.nombre);
              setSeguidos(response.data.seguidos);
              setSeguidores(response.data.seguidores);
              setPosts(response.data.posts);
              setDescripcion(response.data.descripcion);
              for(let i=1; i<13;i++){
                const foto = await axios.get('https://picsum.photos/350');
                if (i===1){
                    setImg1(foto);
                }
                if (i===2){
                    setImg2(foto);
                }
                if (i===3){
                    setImg3(foto);
                }
               
                if (i===4){
                    setImg4(foto);
                }
                if (i===5){
                    setImg5(foto);
                }
                if (i===6){
                    setImg6(foto);
                }
                if (i===7){
                    setImg7(foto);
                }
                if (i===8){
                    setImg8(foto);
                }
                if (i===9){
                    setImg9(foto);
                }
                if (i===10){
                    setImg10(foto);
                }
                if (i===11){
                    setImg11(foto);
                }

                if (i===12){
                    setImg12(foto);
                }
                
               
              }
            } catch (error) {
              console.error('Error fetching data: ', error);
            }
          };
          fetchinfo();
      }, []);

    return (
        <Container>
          <Row>
          <Col>
          <img id='img' src={perfil} alt="perfil"/>
          </Col>
          <Col>
          <Row>  <h2>{username}</h2></Row>
            <Row><h3>{descripcion}</h3></Row>
          <Row><h3>{url}</h3></Row>
          <Row> <Col> <h4>{posts} posts</h4> </Col>   <Col> <h4>{seguidores} followers</h4> </Col> <Col> <h4>{seguidos} following</h4> </Col> </Row>
          </Col>
         </Row>


         <Row>

         <Row>
            <Col>{img1}</Col>
            <Col>{img2}</Col>
            <Col>{img3}</Col>
            <Col>{img4}</Col>
        </Row>
        <Row>
        <Col>{img5}</Col>
            <Col>{img6}</Col>
            <Col>img7</Col>
            <Col>img8</Col>
         </Row>
         <Row>
         <Col>img9</Col>
            <Col>img10</Col>
            <Col>img11</Col>
            <Col>img12</Col>
         </Row>


         </Row>

        </Container>
      );

}

export default Home;