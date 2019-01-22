import React, {Component} from 'react';

class ImageLink extends Component {
    dimensions = {
        width: this.props.width,
        height: this.props.height
    }
    render () {
        return (
            <a href={this.props.link}>
                <img className='clickableImg' src={this.props.source} style={this.dimensions} alt='project'/>
            </a>
        )
    }
}

export default ImageLink;