import React from 'react';
import './App.css';
import DownloadText from './components/TextField';
import MediaControlCard from './components/Video';
const fs = require('fs');
const youtubedl = require('youtube-dl');


interface IState{
    cards: any;
}

interface IProps{

}

// https://www.youtube.com/watch?v=s3aYw54R5KY

export default class App extends React.Component<IProps, IState>{
    constructor(props: IProps){
        super(props);

        this.state = {
            cards: null,
        }

    }

    addDownload(link: string){
        youtubedl.getInfo(link, function(err: any, info: any) {
            if (err) throw err

            this.setState({
                cards: <MediaControlCard title={info.title} thumbnail={info.thumbnail} url="LL" />
            })
        })
    }

    render(){
        return(
            <>
                <div style={{
                    position: 'absolute', left: '50%', top: '50%',
                    transform: 'translate(-50%, -50%)'
                }}>
                    <DownloadText addDownload={this.addDownload.bind(this)}/>

                    {this.state.cards}
                </div>
            </>

        )
    }
}
