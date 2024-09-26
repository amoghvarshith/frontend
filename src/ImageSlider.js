import React, { useEffect, useState } from 'react';
import './ImageSlider.css'; // Create a CSS file for styling

const ImageSlider = () => {
    const [images, setImages] = useState([]);

    useEffect(() => {
        const fetchImages = async () => {
            try {
                // Replace with your actual image API endpoint
                const response = await fetch('https://api.example.com/images');
                const data = await response.json();
                setImages(data);
            } catch (error) {
                console.error('Error fetching images:', error);
            }
        };

        fetchImages();
    }, []);

    return (
        <div className="image-slider">
            {images.length > 0 ? (
                images.map((image, index) => (
                    <img key={index} src={image.url} alt={`Slide ${index}`} />
                ))
            ) : (
                <p>Loading images...</p>
            )}
        </div>
    );
};

export default ImageSlider;
