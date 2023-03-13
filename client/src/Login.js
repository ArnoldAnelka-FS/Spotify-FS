import React from 'react';
import { Container } from 'react-bootstrap';
import Header from './Header';
import Footer from './Footer';

const AUTH_URL = "https://accounts.spotify.com/authorize?client_id=f6e66b16d04645a18ef3f591e8f78abc&response_type=code&redirect_uri=http://localhost:3000";

export default function Login() {
    return(
        
    <div>
         <Header/>
        <Container className='d-flex justify-content-center align-items-center' style={{ minHeight: '100vh', backgroundColor: 'black'}}>
           
            <a className='btn btn-success btn-lg' style={{ backgroundColor: '1ED760'}} href={AUTH_URL}>
                LOGIN WITH SPOTIFY
            </a>
        
        </Container>
        <Footer/>
    </div>
    )
}