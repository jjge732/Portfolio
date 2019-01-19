import React, {Component} from 'react';

class BrandStatement extends Component {
    constructor(props) {
        super();
        this.statement = props.statement;
    }
    render () {
        return (
            <div>
                <h3>
                    Brand Statement
                </h3>
                <div id='paragraphContainer'>
                    <p>
                        {this.statement}
                    </p>
                </div>
            </div>
        );
    }
}

export default BrandStatement;