import React from 'react';
import Grid  from 'react-bootstrap/lib/Grid';
import Button from 'react-bootstrap/lib/Button';
import axios from 'axios';
import Card from './Card';
import Translation from './Translation';

const DISPLAY_TRANSLATION = 'Display translation';
const NEXT_CARD = 'Next card';

class PhraseCard extends React.Component {


    constructor(props) {
        super(props);
        this.state = {
            card: {
                phrase: '',
                translation: '',
                cardOwner: {
                    name: ''
                }
            },
            translationToDisplay: null,
            button: NEXT_CARD
        };
        this.getOneRandomCard = this.getOneRandomCard.bind(this);
        this.displayTranslation = this.displayTranslation.bind(this);
        this.hideTranslation = this.hideTranslation.bind(this);
        this.getCards = this.getCards.bind(this);
        PhraseCard.getRandomInt = PhraseCard.getRandomInt.bind(this);

    }

    getOneRandomCard() {
        if (this.state.button === NEXT_CARD) {
            this.hideTranslation();
            this.getCards();
            this.setState({button: DISPLAY_TRANSLATION})
        } else if (this.state.button === DISPLAY_TRANSLATION) {
            this.displayTranslation();
            this.setState({button: NEXT_CARD})
        } else {
            throw new DOMException('Wrong button type');
        }
    }

    getCards() {
        axios.get('http://localhost:8080/api/card')
            .then((response) => {
                console.log(response);
                this.setState({
                    card: response.data[PhraseCard.getRandomInt(0, response.data.length - 1)]
                });
            })
            .catch(function (error) {
                console.log(error);
            });
    }

    static getRandomInt(min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }

    displayTranslation() {
        this.setState({translationToDisplay: this.state.card.translation});
    }

    hideTranslation() {
        this.setState({translationToDisplay: null});
    }

    render() {
        return (
            <div>
                <Grid>
                    <h1>Memory card</h1>
                    <Button className='button' onClick={this.getOneRandomCard}>
                        {this.state.button}
                    </Button>
                    <Card
                        phrase={this.state.card.phrase}
                        author={this.state.card.cardOwner.name}
                    />
                    <Translation
                        value={this.state.translationToDisplay}
                        onClick={this.displayTranslation}
                    />
                </Grid>
            </div>
        );
    }
}

export default PhraseCard;
