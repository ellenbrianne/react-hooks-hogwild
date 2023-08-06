import React from "react";

function HogSpecs ({ specialty, weight, greased, medal }) {
    return (
        <ul>
            <li>Specialty: {specialty}</li>
            <li>Weight: {weight}</li>
            <li>{greased ? "Greased" : "Not Greased" }</li>
            <li className="achievementText">Highest Medal Achieved: {medal}</li>
        </ul>
    );
};

export default HogSpecs;