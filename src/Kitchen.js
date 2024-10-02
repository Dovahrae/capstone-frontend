import { useState } from "react";
import "./App.css";

let ToggleButton = () => {
    const springValues = ["Parsnip", "Green Bean", "Cauliflower", "Potato"];
    const summerValues = ["Tomato", "Hot Pepper", "Blueberry", "Melon"];
    const fallValues = ["Corn", "Eggplant", "Pumpkin", "Yam"];
    const qualityValues = [
        "Gold quality Parsnip (5)",
        "Gold quality Melon (5)",
        "Gold quality Pumpkin (5)",
        "Gold quality Corn (5)",
    ];
    const animalValues = [
        "Large Milk",
        "Large Egg",
        "Large Brown Egg",
        "Large Goat Milk",
        "Wool",
        "Duck Egg",
    ];
    const artisanValues = [
        "Truffle Oil",
        "Cloth",
        "Goat Cheese",
        "Cheese",
        "Honey",
        "Jelly",
        "Apple",
        "Apricot",
        "Orange",
        "Peach",
        "Pomegranate",
        "Cherry",
    ];

    const [springSelected, setSpringSelected] = useState(
        new Array(springValues.length).fill(false)
    );
    const [summerSelected, setSummerSelected] = useState(
        new Array(summerValues.length).fill(false)
    );
    const [fallSelected, setFallSelected] = useState(
        new Array(fallValues.length).fill(false)
    );
    const [qualitySelected, setQualitySelected] = useState(
        new Array(qualityValues.length).fill(false)
    );
    const [animalSelected, setAnimalSelected] = useState(
        new Array(animalValues.length).fill(false)
    );
    const [artisanSelected, setArtisanSelected] = useState(
        new Array(artisanValues.length).fill(false)
    );

    const handleToggle = (index, group, setGroup) => {
        const updatedSelection = [...group];
        updatedSelection[index] = !updatedSelection[index];
        setGroup(updatedSelection);
    };

    return (
        <div>
            <div>
                <h5>Spring Crops Bundle</h5>
                {springValues.map((value, index) => (
                    <button
                        key={index}
                        onClick={() =>
                            handleToggle(
                                index,
                                springSelected,
                                setSpringSelected
                            )
                        }
                        className={`button ${
                            springSelected[index] ? "selected" : ""
                        }`}
                    >
                        {value}
                    </button>
                ))}
            </div>
            <div>
                <h5>Summer Crops Bundle</h5>
                {summerValues.map((value, index) => (
                    <button
                        key={index}
                        onClick={() =>
                            handleToggle(
                                index,
                                summerSelected,
                                setSummerSelected
                            )
                        }
                        className={`button ${
                            summerSelected[index] ? "selected" : ""
                        }`}
                    >
                        {value}
                    </button>
                ))}
            </div>
            <div>
                <h5>Fall Crops Bundle</h5>
                {fallValues.map((value, index) => (
                    <button
                        key={index}
                        onClick={() =>
                            handleToggle(index, fallSelected, setFallSelected)
                        }
                        className={`button ${
                            fallSelected[index] ? "selected" : ""
                        }`}
                    >
                        {value}
                    </button>
                ))}
            </div>
            <div>
                <h5>Quality Crops Bundle</h5>
                {qualityValues.map((value, index) => (
                    <button
                        key={index}
                        onClick={() =>
                            handleToggle(
                                index,
                                qualitySelected,
                                setQualitySelected
                            )
                        }
                        className={`button ${
                            qualitySelected[index] ? "selected" : ""
                        }`}
                    >
                        {value}
                    </button>
                ))}
            </div>
            <div>
                <h5>Animal Bundle</h5>
                {animalValues.map((value, index) => (
                    <button
                        key={index}
                        onClick={() =>
                            handleToggle(
                                index,
                                animalSelected,
                                setAnimalSelected
                            )
                        }
                        className={`button ${
                            animalSelected[index] ? "selected" : ""
                        }`}
                    >
                        {value}
                    </button>
                ))}
            </div>
            <div>
                <h5>Artisan Bundle</h5>
                {artisanValues.map((value, index) => (
                    <button
                        key={index}
                        onClick={() =>
                            handleToggle(
                                index,
                                artisanSelected,
                                setArtisanSelected
                            )
                        }
                        className={`button ${
                            artisanSelected[index] ? "selected" : ""
                        }`}
                    >
                        {value}
                    </button>
                ))}
            </div>
        </div>
    );
};

const Kitchen = () => {
    return (
        <div>
            <ToggleButton />
        </div>
    );
};

export default Kitchen;

/* <div>
                <h5>Spring Crops</h5>
                <div class="row" id="springCrops">
                    <div class="col">Parsnip</div>
                    <div class="col">Green Bean</div>
                    <div class="col">Cauliflower</div>
                    <div class="col">Potato</div>
                </div>
            </div>
            <div>
                <h5>Summer Crops</h5>
                <div class="row" id="summerCrops">
                    <div class="col">Tomato</div>
                    <div class="col">Hot Pepper</div>
                    <div class="col">Blueberry</div>
                    <div class="col">Melon</div>
                </div>
            </div>
            <div>
                <h5>Fall Crops</h5>
                <div class="row" id="fallCrops">
                    <div class="col">Corn</div>
                    <div class="col">Eggplant</div>
                    <div class="col">Pumpkin</div>
                    <div class="col">Yam</div>
                </div>
            </div>
            <div>
                <h5>Quality Crops</h5>
                <div class="row" id="qualityCrops">
                    <div class="col">Gold Star Parsnips (5)</div>
                    <div class="col">Gold Star Melons (5)</div>
                    <div class="col">Gold Star Pumpkins (5)</div>
                    <div class="col">Gold Star Corn (5)</div>
                </div>
            </div>
            <div>
                <h5>Animal Bundle</h5>
                <div class="row" id="animalBundle">
                    <div class="col">Large Milk</div>
                    <div class="col">Large Brown Egg</div>
                    <div class="col">Large White Egg</div>
                    <div class="col">Large Goat Milk</div>
                    <div class="col">Wool</div>
                    <div class="col">Duck Egg</div>
                </div>
            </div>
            <div>
                <h5>Artisan Bundle</h5>
                <div class="row" id="artisanBundle">
                    <div class="col">Truffle Oil</div>
                    <div class="col">Cloth</div>
                    <div class="col">Goat Cheese</div>
                    <div class="col">Cheese</div>
                    <div class="col">Honey</div>
                    <div class="col">Jelly</div>
                    <div class="col">Apple</div>
                    <div class="col">Apricot</div>
                    <div class="col">Orange</div>
                    <div class="col">Peach</div>
                    <div class="col">Pomegranate</div>
                    <div class="col">Cherry</div>
                </div>
            </div> */
