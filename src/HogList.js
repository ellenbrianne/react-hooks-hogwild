import { useState } from "react";
import HogCard from "./HogCard";

function HogList ({ hogs }) {
    const [hogData, setHogData] = useState(hogs);
    const [isGreased, setIsGreased] = useState(false);

    const sortedNames = hogData.toSorted((a, b) => {
        if (a.name < b.name) return -1;
        if (a.name > b.name) return 1;
        else return 0;
    });

    const sortedWeights = hogData.toSorted((a, b) => {
        if (a.weight < b.weight) return -1;
        if (a.weight > b.weight) return 1;
        else return 0;
    });

    function handleSort (event) {
        const val = event.target.value;
        if (val == "alphabet") setHogData(sortedNames);
        if (val == "weight") setHogData(sortedWeights);
        else setHogData(hogs);
    };

    function handleClick () {
        const filteredHogs = hogData.filter(hog => {
            return (hog.greased === true);
        });
        setIsGreased(!isGreased);
        setHogData(filteredHogs);
        if (isGreased) setHogData(hogs);
    };

    const hogDisplay = hogData.map(hog => {
        return (
            <HogCard 
                key={hog.weight} 
                name={hog.name} 
                image={hog.image} 
                specialty={hog.specialty}
                weight={hog.weight}
                greased={hog.greased}
                medal={hog["highest medal achieved"]}
            />
        )
    })

    return (
        <div>
            <select onChange={handleSort}>
                <option value="unsort">Unsorted</option>
                <option value="alphabet">Sort Alphabetically</option>
                <option value="weight">Sory By Weight</option>
            </select>
            <button onClick={handleClick}>
                { isGreased ? "Show All Hogs" : "Show Only Greased Hogs" }
            </button>
            {hogDisplay}
        </div>
    )
};

export default HogList;