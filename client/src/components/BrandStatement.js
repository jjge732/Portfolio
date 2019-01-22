import React, {Component} from 'react';

class BrandStatement extends Component {
    render () {
        return (
            <div>
                <h3>
                    Brand Statement
                </h3>
                <div id='paragraphContainer'>
                        <p>{this.props.statement}</p>
                </div>
            </div>
        )
    }
}

export default BrandStatement;