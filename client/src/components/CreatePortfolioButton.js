import React, {Component} from 'react';

class CreatePortfolioButton extends Component {
    buttonStyle = {
        fontSize: '34px',
        borderRadius: '25px',
        color: 'rgb(51, 51, 51)',
        borderColor: 'rgb(164, 189, 212)',
        backgroundColor: 'rgb(164, 189, 212)',
        boxShadow: '-3px 3px 8px'
    }
    render () {
        return (
            <div>
                <h3>
                    Want a portfolio like this? {' '}
                <button style={this.buttonStyle}>
                    <a href='/form'>
                        Click here!
                    </a>
                </button>
                </h3>
            </div>
        )
    }
}

export default CreatePortfolioButton;