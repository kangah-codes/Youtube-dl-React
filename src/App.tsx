import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import {InputGroup, FormControl, Button} from 'react-bootstrap';

export default class App extends React.Component{
    render(){
        return(
            <>
                <Navbar />
                <p style={{
                    position: 'absolute', left: '50%', top: '50%',
                    transform: 'translate(-50%, -50%)'
                }}>
                Ayyy
                </p>
            </>

        )
    }
}
