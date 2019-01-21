import React, {Component} from 'react';
import ImageLink from './ImageLink'

class Portfolio extends Component {
    constructor(props) {
        super();
        this.screenshotLinks = props.screenshotLinks 
    }
    render() {
        return (
            <div>
                <h3 id='portfolio'>Portfolio</h3>
                <main className='left'>
                    {this.screenshotLinks.map((image, index)=> <ImageLink key={index} link={image.urlLink} source={image.imageLink} width='400px' height='200px'/>)}
                </main>
            </div>
        )
    }
}

export default Portfolio;