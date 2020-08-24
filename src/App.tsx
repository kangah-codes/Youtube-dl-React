import React from 'react';
import './App.css';
import DownloadText from './components/TextField';
import MediaControlCard from './components/Video';

export default class App extends React.Component{
    render(){
        return(
            <>
                <div style={{
                    position: 'absolute', left: '50%', top: '50%',
                    transform: 'translate(-50%, -50%)'
                }}>
                    <DownloadText />
                    <MediaControlCard />
                </div>
            </>

        )
    }
}
