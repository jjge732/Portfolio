import React, {Component} from 'react';

class ImageLink extends Component {
    dimensions = {}
    constructor(props) {
        super();
        this.source = props.source;
        this.link = props.link
        this.dimensions.width = props.width;
        this.dimensions.height = props.height;
    }
    render () {
        return (
            <a href={this.link}>
                <img className='clickableImg' src={this.source} style={this.dimensions} alt='project'/>
            </a>
        )
    }
}

export default ImageLink;