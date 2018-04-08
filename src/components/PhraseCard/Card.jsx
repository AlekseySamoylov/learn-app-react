import React, {Component} from 'react';

class Card extends Component {
    constructor(props) {
        super(props);
        this.state = {
            phrase: '',
            author: '',
        };
    }

    render() {
        return (
            <div>
                <div>Phrase: {this.props.phrase}</div>
                <div>Author: {this.props.author}</div>
            </div>
        );
    }
}

export default Card;
