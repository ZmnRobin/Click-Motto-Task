import React from 'react';
import './ResultImages.css'
import { FaDownload } from 'react-icons/fa';

const ResultImages = (props) => {
    const {webformatURL}=props.images;
    return (
        <div className="col-md-4">
            <img className="single-img" src={webformatURL} alt="" />
        </div>
    );
};

export default ResultImages;