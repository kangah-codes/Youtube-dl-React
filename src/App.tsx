import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import DownloadText from './components/TextField';

export default class App extends React.Component{
    render(){
        return(
            <>
                <Navbar />
                <div style={{
                    position: 'absolute', left: '50%', top: '50%',
                    transform: 'translate(-50%, -50%)'
                }}>
                    <DownloadText />
                </div>
            </>

        )
    }
}
