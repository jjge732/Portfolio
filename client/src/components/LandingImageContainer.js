import React, {Component} from 'react';

class LandingImageContainer extends Component {
    state = {
        imageSource: '/images/pexels-photo-692103.jpeg'
    }
    constructor(props) {
        super();
        this.name = props.name;
    }
    color =  {
        color: '#fff'
    }
    getColoredImage = () => {
        this.setState({imageSource: '/images/pexels-photo-692103.jpeg'})
    }
    getBlackAndWhiteImage = () => {
        this.setState({imageSource: '/images/pexels-photo-692103-ConvertImage.jpg'})
    }
    render() {
        return (
            <div id='landingImageContainer' onMouseEnter={this.getColoredImage} onMouseLeave={this.getBlackAndWhiteImage}>
            {/* photo credit: https://www.pexels.com/@apasaric */}
                <img id='landingImage' alt ='topBackgroundImage' src={this.state.imageSource} />
                <div id='headerContainer'>
                    <header>
                        <h1 style={this.color}>
                            {this.name}
                        </h1>
                        <h2 style={this.color}>
                            <a href='#portfolio'>
                                Portfolio
                            </a>
                        </h2>
                    </header>
                </div>
                {/* <div id='flickeringScrollPrompt'>
                    <span>
                        >>>
                    </span>
                </div> */}
            </div>
        );
    }
}

export default LandingImageContainer;