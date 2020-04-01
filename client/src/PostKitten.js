import React, {Component} from 'react';

export default class PostKitten extends Component {

    constructor(props) {
        super(props);
        this.state = {
            input: "" // Input from the text field is stored here
        };
    }
    handleChange(event) {
        this.setState({
            input: event.target.value
        });
    }

    handleButtonClick() {
        this.props.postKitten(this.props.id, this.state.input);
    }

    render() {
        return (
            <>
                <input type="text"
                       onChange={(event) => this.handleChange(event)}/>
                <button onClick={(event) => this.handleButtonClick(event)}>Post kitten</button>
            </>
        );
    }
}


