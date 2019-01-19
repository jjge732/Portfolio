import React, {Component} from 'react';
import ImageLink from './ImageLink'

class Portfolio extends Component {
    state = {
        imageLinks: [
            {
                link: 'https://rsdesoto.github.io/ChiX/index.html',
                source: '/images/screenshots/chi-X-screenshot-ConvertImage.jpg'
            },
            {
                link: 'https://jjge732.github.io/Trivia-Game/',
                source: '/images/screenshots/trivia-screenshot-ConvertImage.jpg'
            }
        ]
    }
    render() {
        return (
            <main className='left'>
                {this.state.imageLinks.map(image => <ImageLink link={image.link} source={image.source} width='400px' height='200px'/>)}
            </main>
        )
    }
}

export default Portfolio;