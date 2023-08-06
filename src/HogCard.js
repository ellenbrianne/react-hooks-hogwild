import React, { useState } from "react";
import HogSpecs from "./HogSpecs";

function HogCard ({ name, image, specialty, weight, greased, medal }) {
    const [isVisible, setIsVisible] = useState(false);

    function handleClick () {
        setIsVisible(!isVisible);
    };

    return (
        <div className="pigTile" onClick={handleClick}>
            <h3 className="hoggyText">{name}</h3>
            { isVisible ? 
                <HogSpecs 
                    specialty={specialty}
                    weight={weight}
                    greased={greased}
                    medal={medal}
                /> : 
                null }
            <img src={image} />
        </div>
    )
};

export default HogCard;