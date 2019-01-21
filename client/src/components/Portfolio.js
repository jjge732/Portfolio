import React, {Component} from 'react';
import ImageLink from './ImageLink'

class Portfolio extends Component {
    constructor(props) {
        super();
        this.screenshotLinks = props.screenshotLinks 
    }
    render() {
        return (
            <main className='left'>
                {this.screenshotLinks.map((image, index)=> <ImageLink key={index} link={image.urlLink} source={image.imageLink} width='400px' height='200px'/>)}
            </main>
        )
    }
}

export default Portfolio;