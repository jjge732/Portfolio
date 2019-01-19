import React, {Component} from 'react';
import ImageLink from './ImageLink';

class Footer extends Component {
    state = {
        ImageLink: [
            {
                link: 'https://github.com/jjge732',
                source: '/images/GitHub-Mark-64px.png'
            }
        ] 
    }
    render () {
        return (
            <footer>
                {this.state.ImageLink.map(image => <ImageLink link={image.link} source={image.source} width='48px' height='auto'/>)}
            </footer>
        );
    }
}

export default Footer;