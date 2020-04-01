import React, {Component} from 'react';
import {Router} from "@reach/router";
import Kitten from "./Kitten";
import Kittens from "./Kittens";

class App extends Component {
    // API url from the file '.env' OR the file '.env.development'.
    // The first file is only used in production.
    API_URL = process.env.REACT_APP_API_URL;

    constructor(props) {
        super(props);
        this.state = {
            data: []
        };
    }

    componentDidMount() {
        // Get everything from the API
        this.getKittens().then(() => console.log("Kittens gotten!"));
    }

    async getKittens() {
        const url = `${this.API_URL}/kittens`; // URL of the API.
        const result = await fetch(url); // Get the data
        const json = await result.json(); // Turn it into json
        return this.setState({ // Set it in the state
            kittens: json
        })
    }

    async postKitten(name) {
        const url = `${this.API_URL}/kittens`; // URL of the API.
        const response = await fetch(url, {
            headers: {
                'Content-Type': 'application/json'
            },
            method: 'POST',
            body: JSON.stringify({
                name: name
            })
        });
        const data = await response.json();
        console.log("Printing the response:", data);
        await this.getKittens();
        console.log("Data reloaded");
    }

    getKitten(id) {
        // Find the relevant kitten by id
        return this.state.kittens.find(k => k._id === id);
    }

    render() {
        return (
            <>
                <Router>
                    <Kitten path="/kitten/:id" getKitten={id => this.getKitten(id)}/>
                    <Kittens path="/" kittens={this.state.kittens}
                             postKitten={name => this.postKitten(name)}/>
                </Router>
            </>
        );
    }
}

export default App;
