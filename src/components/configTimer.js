import React, { Component } from "react";
import { TextField, Button } from '@material-ui/core';
import { addConfig } from "../actions/actions";
import { connect } from "react-redux";

class ConfigTimer extends Component {
    state = {
        time: 0,
        name: "",
        hours: 0,
        minutes: 0,
        seconds: 0
    };

    onChangeName = (event) => {
        this.setState({ name: event.target.value });
    }
    onChangeHours = (event) => {
        this.setState({ hours: event.target.value });
    }
    onChangeMinutes = (event) => {
        this.setState({ minutes: event.target.value });
    }
    onChangeSeconds = (event) => {
        this.setState({ seconds: event.target.value });
    }

    submit = () => {
        const time = this.state.hours * 3600 + this.state.minutes * 60 + this.state.seconds;
        // create the config dynamically
        // call action with config 
        const config = {
            name: this.state.name,
            time: time
        }
        this.props.addConfig(config);
        this.props.updateConfig(true);
    }


    render() {
        return (
            <div>
                <form>
                    <TextField
                        value={this.state.name}
                        label="Name"
                        onChange={this.onChangeName.bind(this)}
                        type="text"
                        margin="normal"
                    />

                    <TextField
                        id="standard-number"
                        label="Hours"
                        value={this.state.hours}
                        onChange={this.onChangeHours.bind(this)}
                        type="number"
                        margin="normal"
                    />
                    <TextField
                        value={this.state.minutes}
                        label="Minutes"
                        onChange={this.onChangeMinutes.bind(this)}
                        type="number"
                        margin="normal"
                    />
                    <TextField
                        value={this.state.seconds}
                        label="Seconds"
                        onChange={this.onChangeSeconds.bind(this)}
                        type="number"
                        margin="normal"
                    />
                    <Button onClick={this.submit} color="primary">
                        {" "}
                        Add Config{" "}
                    </Button>
                </form>
            </div>
        )
    }
}
export default connect(
    state => {
        return { config: state.config };
    },
    { addConfig }
)(ConfigTimer);