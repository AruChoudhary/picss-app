import React from 'react';


class ImageCard extends React.Component {

    constructor(props){
        super(props);
        this.state={spans : 0};
        this.imageRef = React.createRef(); //creating a reference
    }

    //gets called after image is rendered
    componentDidMount() {
        //console.log(this.imageRef.current.clientHeight); //will print the geight of each image
        this.imageRef.current.addEventListener('load', this.setSpans); //we are adding setSpan callback here
    }

    setSpans = () => {
        const height = this.imageRef.current.clientHeight; 
        const spans = Math.ceil(height/10); //10 is our grid size in ImageList.css
        this.setState({ spans });
    };

    render () {
        const {description, urls} = this.props.image;
        return (
            <div style = {{ gridRowEnd: `span ${this.state.spans}`}}>
                <img 
                    ref={this.imageRef}
                    alt={description} 
                    src={urls.regular}
                />
            </div>
        );
    }
}

export default ImageCard;