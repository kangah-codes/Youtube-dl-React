import React from 'react';
import {TextField, FormControl, InputLabel, OutlinedInput, InputAdornment, Button} from '@material-ui/core';
import {Grid, Container} from '@material-ui/core';
import {CircularProgress} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

interface IState{
    downloadDisabled: boolean;
    buttonText: any;
}

interface IProps{

}

export default class DownloadText extends React.Component<IProps, IState>{
    constructor(props: IProps){
        super(props);

        this.state = {
            downloadDisabled: true,
            buttonText: "Download"
        }
    }


    validateYoutube(link: string){
        this.setState({buttonText: <CircularProgress size={20} />})
        if (link.match(/http(?:s?):\/\/(?:www\.)?youtu(?:be\.com\/watch\?v=|\.be\/)([\w\-\_]*)(&(amp;)?‌​[\w\?‌​=]*)?/)){
            setTimeout(() => {
                this.setState({
                    downloadDisabled: false,
                })
            }, 5000);
        }else{
            setTimeout(() => {
                this.setState({
                    downloadDisabled: true,
                })
            }, 5000);
        }
    }

    render(){
        return (
            <>
                <h1>Youtube Video Downloader</h1>
                <Container fixed>
                    <FormControl fullWidth variant="outlined">
                        <Grid container>
                            <Grid item xs={8}>
                                <InputLabel htmlFor="outlined-adornment-amount">Link</InputLabel>
                                <OutlinedInput
                                    id="outlined-adornment-amount"
                                    labelWidth={30}
                                    onChange={e => {
                                        this.validateYoutube(e.target.value)
                                    }}
                                />
                            </Grid>
                            <Grid item xs={4}>
                                <Button disabled={this.state.downloadDisabled}
                                    variant="contained"
                                    color="primary"
                                style={{height: "100%"}}>
                                    {this.state.buttonText}
                                </Button>
                            </Grid>
                        </Grid>
                    </FormControl>
                </Container>
            </>
        )
    }
}
