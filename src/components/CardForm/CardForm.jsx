import React, {Component} from 'react';
import Grid  from 'react-bootstrap/lib/Grid';
import FormGroup from 'react-bootstrap/lib/FormGroup';
import FormControl from 'react-bootstrap/lib/FormControl';
import ControlLabel from 'react-bootstrap/lib/ControlLabel';
import Button from 'react-bootstrap/lib/Button';


class CardForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            card: {
                cardOwner: {
                    name: 'Aleksey'
                },
                phrase: '',
                translation: ''

            }
        };
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handlePhraseChange = this.handlePhraseChange.bind(this);
        this.handleTranslationChange = this.handleTranslationChange.bind(this);
    }

    handlePhraseChange(e) {
        this.setState({
            card: {
                cardOwner: {
                    name: 'Aleksey'
                },
                phrase: e.target.value,
                translation: this.state.card.translation

            }
        });
    };

    handleTranslationChange(e) {
        this.setState({
            card: {
                cardOwner: {
                    name: 'Aleksey'
                },
                phrase: this.state.card.phrase,
                translation: e.target.value

            }
        });
    };

    handleSubmit() {
        console.log('helloWorld' + this.state.card);
        fetch('http://localhost:8080/api/card', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(this.state.card)
        }).then(() => {
            this.setState({
                card: {
                    cardOwner: {
                        name: 'Aleksey'
                    },
                    phrase: '',
                    translation: ''
                }
            });
            document.getElementById("myForm").reset();
        });

    }

    render() {
        return (
            <div>
                <Grid>

                    <form id="myForm">
                        <FormGroup>
                            <ControlLabel htmlFor="phrase">Enter phrase in Russian</ControlLabel>
                            <FormControl id="phrase" name="phrase" type="text"
                                         value={this.state.phrase}
                                         onChange={this.handlePhraseChange}
                            />
                            <ControlLabel htmlFor="translation">Enter translation in English</ControlLabel>
                            <FormControl id="translation" name="translation" type="text"
                                         value={this.state.translation}
                                         onChange={this.handleTranslationChange}
                            />
                            <Button onClick={this.handleSubmit}>Send data!</Button>
                        </FormGroup>

                    </form>
                </Grid>
            </div>
        );
    }
}

export default CardForm;
