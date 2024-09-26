import React from 'react';
import ImageSlider from './ImageSlider';
import './Eligibility.css'; // Create a CSS file for styling

const Eligibility = () => {
    return (
        <div className="eligibility-container">
            <ImageSlider />

            <div className="eligibility-info">
                <h2>Eligibility for Certifications</h2>
                <p>
                    To be eligible for certification, students must meet the following criteria:
                </p>
                <ul>
                    <li>Attendance percentage must be above 50%.</li>
                    <li>Completion of all required coursework.</li>
                    <li>Passing grades in assessments.</li>
                </ul>
                <button className="generate-certificate-button">Generate Certificate</button>
                <div className="instructions">
                    <h3>Instructions to Generate Certificate</h3>
                    <p>
                        1. Ensure that you meet all the eligibility criteria listed above.
                    </p>
                    <p>
                        2. Click the "Generate Certificate" button after confirming your eligibility.
                    </p>
                    <p>
                        3. Follow the prompts to complete the certificate generation process.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Eligibility;
