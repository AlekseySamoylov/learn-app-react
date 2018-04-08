import React, {Component} from 'react';
import PropTypes from 'prop-types';

const propTypes = {
    onClick: PropTypes.func,
    value: PropTypes.string,
    display: PropTypes.bool
};

const defaultProps = {
    value: '',
    display: false
};

class Translation extends Component {
    render() {
        const { value } = this.props;

        return (
            <div>
                <div>
                    Value: {value}
                </div>
            </div>
        );
    }
}

Translation.propTypes = propTypes;
Translation.defaultProps = defaultProps;

export default Translation;
