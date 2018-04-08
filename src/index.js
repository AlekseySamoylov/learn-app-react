import React from 'react';
import ReactDOM from 'react-dom';

import '../../bootstrap.css';

import PhraseCard from './components/PhraseCard';
import CardForm from './components/CardForm';

ReactDOM.render(
    <div>
        <PhraseCard/>
        <CardForm/>
    </div>,
    document.getElementById('root')
);


