import './ImageList.css';
import React from 'react';
import ImageCard from './ImageCard';


const ImageList = (props) => {
    // const images = props.images.map((image) => {
    //     return <img alt={image.description} key={image.id} src={image.urls.regular} />
    // });      
    //OR
    // const images = props.images.map(({description,id,urls}) => {
    //     return <img alt={description} key={id} src={urls.regular} />
    // });

    const images = props.images.map((image) => {
        return <ImageCard key={image.id} image={image} />;
    });

    console.log(props.images);
    return (
        <div className="image-list">
            {images}
        </div>
    );
};

export default ImageList;