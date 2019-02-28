import React from 'react';

const Location = () => {
    return (
        
            <div className="location_wrapper">
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3223.474443636221!2d-115.17261710816989!3d36.10629746162625!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80c8c4336b255c33%3A0x3a3c1d55963f949c!2sHard+Rock+Cafe!5e0!3m2!1spt-BR!2sbr!4v1551309445225" 
                width="100%" 
                title="Maps"
                height="500px" 
                frameBorder="0"  
                allowFullScreen>
                </iframe>
            <div className="location_tag">
                <div>Location</div>
            </div>
            </div>
        
    );
};

export default Location;