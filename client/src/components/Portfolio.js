import React, {Component} from 'react';
import ImageLink from './ImageLink'

class Portfolio extends Component {
    state = {}
    constructor(props) {
        super();
        this.screenshotLinks = props.screenshotLinks 
    }
    render() {
        return (
            <main className='left'>
                {this.screenshotLinks.map(image => <ImageLink link={image.urlLink} source={image.imageLink} width='400px' height='200px'/>)}
            </main>
        )
    }
}

export default Portfolio;