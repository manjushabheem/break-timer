import React, { Component } from "react";
import ConfigTimer from "./configTimer";
import Button from "@material-ui/core/Button";
import { start, pause, resume, reset, decrement } from "../actions/actions";
import { connect } from "react-redux";
import TextField from "@material-ui/core/TextField";

class TimerContainer extends Component {
    state = {
        configPage: false,
        timerPage: true,
        hrs: '',
        mins: '',
        secs: '',
        interval: ''
    };
    handleHours = (e) => {

        this.setState({ hrs: Number(e.target.value * 3600) });
        const hsecs = e.target.value * 3600;
        console.log(hsecs);

    };
    handleMinutes = e => {
        this.setState({ mins: Number(e.target.value * 60) });
        console.log("seconds is ", e.target.value * 60);

    };
    handleSeconds = e => {
        this.setState({ secs: Number(e.target.value) });
        console.log(e.target.value);
    };
    handleStart = () => {
        // Use start action
        const { start } = this.props;
        const total = Number(this.state.hrs + this.state.mins + this.state.secs);
        start(total);
        const interval = setInterval(() => {
            const { timerInfo } = this.props;
            this.handleDecrement(timerInfo.countSecs);
        }, 1000);

        this.setState({ interval });
    }
    handleRestart = () => {
        // Use reset action
        // this.setState({ isInTimer: false });
        const { reset } = this.props;
        clearInterval(this.state.interval);
        reset()
    }
    handlePause = () => {

        const { pause } = this.props;
        pause();
    }
    handleResume = () => {

        const { resume } = this.props;
        resume();
    }
    handleDecrement = () => {
        const { timerInfo, decrement } = this.props;
        const { isPause } = timerInfo

        if (!isPause) {
            decrement(timerInfo.countSecs);
        }
    }

    shouldComponentUpdate(nextProps, nextState, nextContext) {
        console.log(nextProps);
        return true;
    }
    configDisplay = () => {
        this.setState({ configPage: true, timerPage: false });
    };

    updateConfig = config => {
        if (config) {
            this.timerDisplay();
        }
    };
    timerDisplay = () => {
        this.setState({ configPage: false, timerPage: true });
    }
    load =() => {
        console.log("load functionality");
    }
    render() {
        const { timerInfo } = this.props;
        const { hrs, mins, secs } = timerInfo.display;
        return (
            <div>
                <div className="row">
                    <Button
                        variant="contained"
                        color="primary"
                        onClick={this.timerDisplay}
                    >
                        {" "}
                        Timer{" "}
                    </Button>
                    <Button
                        variant="contained"
                        color="primary"
                        onClick={this.configDisplay}
                    >
                        {" "}
                        Config{" "}
                    </Button>
                </div>
               
                {this.state.timerPage?(
                <div>
                     {this.props.config.name !== "" ? (
                         <div>
                     <Button
                     variant="contained"
                     color="primary"
                     onClick={this.load}
                 >
                     {" "}
                     Load{" "}{this.props.config.name}
                 </Button>
                 </div>
                ) : <div>No Config</div>}
                    {!timerInfo.isInTimer ?
                        <React.Fragment>
                            <TextField

                                label="Hours"
                                value={this.state.value}
                                onChange={this.handleHours}
                                type="number"
                                InputLabelProps={{
                                    shrink: true,
                                }}
                                margin="normal"
                            />

                            <TextField

                                label="Minutes"
                                value={this.state.value}
                                onChange={this.handleMinutes}
                                type="number"
                                InputLabelProps={{
                                    shrink: true,
                                }}
                                margin="normal"
                            />
                            <TextField

                                label="Seconds"
                                value={this.state.value}
                                onChange={this.handleSeconds}
                                type="number"
                                InputLabelProps={{
                                    shrink: true,
                                }}
                                margin="normal"
                            />
                            <br />
                            {this.state.hrs > 0 || this.state.mins > 0 || this.state.secs > 0 ?
                                <React.Fragment><Button color="primary" onClick={this.handleStart} >
                                    Start Timer
      </Button> </React.Fragment> : <p><b>Enter values to start timer</b></p>

                            }
                        </React.Fragment>
                        :
                        <React.Fragment>
                            <p>{`Remaining Hours: ${hrs}`}</p>
                            <p>{`Minutes: ${mins}`}</p>
                            <p>{`Seconds: ${secs}`}</p>
                            <Button color="primary" onClick={this.handlePause}>Pause</Button>
                            <Button color="primary" onClick={this.handleResume}>Resume</Button>
                            <Button color="primary" onClick={this.handleRestart}>Restart</Button>
                        </React.Fragment>
                    }
                </div>):null}
                
                {this.state.configPage ? (
                    <ConfigTimer updateConfig={this.updateConfig} />
                ) : null}
            </div>
        )
    }

}
const mapStateToProps = (state) => {
    return {
        timerInfo: state.timerInfo,
        config: state.config
    }
}
export default connect(mapStateToProps, {
    start,
    pause,
    resume,
    reset,
    decrement
}
)(TimerContainer);

