import React, {Component} from 'react';
import {Link} from "@reach/router";
import PostKitten from "./PostKitten";

class Kittens extends Component {

    render() {
        const kittens = this.props.kittens.map(kitten =>
            <li key={kitten._id}>
                <Link to={`/kitten/${kitten._id}`}>{kitten.name}</Link>
            </li>
        );
        return (
            <>
                <h1>Kittens</h1>
                <ol>
                    {kittens}
                </ol>
                <PostKitten postKitten={kitten => this.props.postKitten(kitten)}/>
            </>
        );
    }

}

export default Kittens;
