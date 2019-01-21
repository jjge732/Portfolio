import React, {Component} from 'react';
import ImageLink from './ImageLink';

class Footer extends Component {
    constructor(props) {
        super();
        this.imageLink = [{
            link: props.gitHub,
            source: '/images/GitHub-Mark-64px.png'
        }, 
        {
            link: props.linkedIn,
            source: '/images/In-Black-66px-TM.png'
        }]
    }
    render () {
        return (
            <footer>
                {this.imageLink.map((image, index) => <ImageLink key={index} link={image.link} source={image.source} height='48px' width='auto'/>)}
            </footer>
        );
    }
}

export default Footer;