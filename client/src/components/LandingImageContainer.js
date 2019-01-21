import React, {Component} from 'react';

class LandingImageContainer extends Component {
    state = {
        imageSource: '/images/pexels-photo-692103.jpeg',
        toTopShouldExist: false,
        scrolled: false,
        scrollColor: {
            color: 'rgb(360, 360, 360)'
        }
    }
    constructor(props) {
        super();
        this.name = props.name;
    }
    handleScroll = () => {
        let location = (window.pageYOffset || document.scrollTop)  - (document.clientTop || 0)
        this.setState({
            scrollColor: {
                backgroundColor: `rgba(164, 189, 212, ${location / 3 || 0}%)`,
                color: `rgb(${360 - location * 3 || 360}, ${360 - location * 3 || 360}, ${360 - location * 3 || 360})`
            }
        });
        if (location > 0) {
            this.setState({scrolled: true});
        } else {
            this.setState({scrolled: false});
        }
        if (location > 500) {
            this.setState({toTopShouldExist: true});
        } else {
            this.setState({toTopShouldExist: false});
        }
    }
    getColoredImage = () => {
        this.setState({imageSource: '/images/pexels-photo-692103.jpeg'})
    }
    getBlackAndWhiteImage = () => {
        this.setState({imageSource: '/images/pexels-photo-692103-ConvertImage.jpg'})
    }
    componentDidMount = () => {
        window.addEventListener('scroll', this.handleScroll);
    }
    render() {
        return (
            <div id='landingImageContainer' onMouseEnter={this.getColoredImage} onMouseLeave={this.getBlackAndWhiteImage}>
            {/* photo credit: https://www.pexels.com/@apasaric */}
                {this.state.toTopShouldExist ? <div id="toTop"><a href="#landingImageContainer">Back to top</a></div> : null}
                <img id='landingImage' alt ='topBackgroundImage' src={this.state.imageSource} />
                <div id='headerContainer'>
                {this.state.scrolled ? 
                    <header style={this.state.scrollColor} id='scrolled'>
                        <h1>
                            {this.name}
                        </h1>
                        <h2>
                            <a href='#portfolio'>
                                Portfolio
                            </a>
                        </h2>
                    </header> : 
                    <header style={this.state.scrollColor}>
                        <h1 style={this.color}>
                            {this.name}
                        </h1>
                        <h2 style={this.color}>
                            <a href='#portfolio'>
                                Portfolio
                            </a>
                        </h2>
                    </header>
                }
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