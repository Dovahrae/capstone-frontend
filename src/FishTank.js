import { useState } from "react";
import "./App.css";

let ToggleButton = () => {
    const riverValues = ["Sunfish", "Catfish", "Shad", "Tiger Trout"];
    const lakeValues = ["Largemouth Bass", "Carp", "Bullhead", "Sturgeon"];
    const oceanValues = ["Sardine", "Tuna", "Red Snapper", "Tilapia"];
    const nightValues = ["Walleye", "Bream", "Eel"];
    const crabValues = [
        "Lobster",
        "Crayfish",
        "Crab",
        "Cockle",
        "Mussel",
        "Shrimp",
        "Snail",
        "Periwinkle",
        "Oyster",
        "Clam",
    ];
    const specialtyValues = ["Pufferfish", "Ghostfish", "Sandfish", "Woodskip"];

    const [riverSelected, setRiverSelected] = useState(
        new Array(riverValues.length).fill(false)
    );
    const [lakeSelected, setLakeSelected] = useState(
        new Array(lakeValues.length).fill(false)
    );
    const [oceanSelected, setOceanSelected] = useState(
        new Array(oceanValues.length).fill(false)
    );
    const [nightSelected, setNightSelected] = useState(
        new Array(nightValues.length).fill(false)
    );
    const [crabSelected, setCrabSelected] = useState(
        new Array(crabValues.length).fill(false)
    );
    const [specialtySelected, setSpecialtySelected] = useState(
        new Array(specialtyValues.length).fill(false)
    );

    const handleToggle = (index, group, setGroup) => {
        const updatedSelection = [...group];
        updatedSelection[index] = !updatedSelection[index];
        setGroup(updatedSelection);
    };

    return (
        <div>
            <div>
                <h5>River Fish Bundle</h5>
                {riverValues.map((value, index) => (
                    <button
                        key={index}
                        onClick={() =>
                            handleToggle(index, riverSelected, setRiverSelected)
                        }
                        className={`button ${
                            riverSelected[index] ? "selected" : ""
                        }`}
                    >
                        {value}
                    </button>
                ))}
            </div>
            <div>
                <h5>Lake Fish Bundle</h5>
                {lakeValues.map((value, index) => (
                    <button
                        key={index}
                        onClick={() =>
                            handleToggle(index, lakeSelected, setLakeSelected)
                        }
                        className={`button ${
                            lakeSelected[index] ? "selected" : ""
                        }`}
                    >
                        {value}
                    </button>
                ))}
            </div>
            <div>
                <h5>Ocean Fish Bundle</h5>
                {oceanValues.map((value, index) => (
                    <button
                        key={index}
                        onClick={() =>
                            handleToggle(index, oceanSelected, setOceanSelected)
                        }
                        className={`button ${
                            oceanSelected[index] ? "selected" : ""
                        }`}
                    >
                        {value}
                    </button>
                ))}
            </div>
            <div>
                <h5>Night Fishing Bundle</h5>
                {nightValues.map((value, index) => (
                    <button
                        key={index}
                        onClick={() =>
                            handleToggle(index, nightSelected, setNightSelected)
                        }
                        className={`button ${
                            nightSelected[index] ? "selected" : ""
                        }`}
                    >
                        {value}
                    </button>
                ))}
            </div>
            <div>
                <h5>Crab Pot Bundle</h5>
                {crabValues.map((value, index) => (
                    <button
                        key={index}
                        onClick={() =>
                            handleToggle(index, crabSelected, setCrabSelected)
                        }
                        className={`button ${
                            crabSelected[index] ? "selected" : ""
                        }`}
                    >
                        {value}
                    </button>
                ))}
            </div>
            <div>
                <h5>Specialty Fish Bundle</h5>
                {specialtyValues.map((value, index) => (
                    <button
                        key={index}
                        onClick={() =>
                            handleToggle(
                                index,
                                specialtySelected,
                                setSpecialtySelected
                            )
                        }
                        className={`button ${
                            specialtySelected[index] ? "selected" : ""
                        }`}
                    >
                        {value}
                    </button>
                ))}
            </div>
        </div>
    );
};

const FishTank = () => {
    return (
        <div>
            <ToggleButton />
        </div>
    );
};

export default FishTank;

/* <div>
                <h5>River Fish</h5>
                <div class="row" id="riverFish">
                    <div class="col">Sunfish</div>
                    <div class="col">Catfish</div>
                    <div class="col">Shad</div>
                    <div class="col">Tiger Trout</div>
                </div>
            </div>
            <div>
                <h5>Lake Fish</h5>
                <div class="row" id="lakeFish">
                    <div class="col">Largemouth Bass</div>
                    <div class="col">Carp</div>
                    <div class="col">Bullhead</div>
                    <div class="col">Sturgeon</div>
                </div>
            </div>
            <div>
                <h5>Ocean Fish</h5>
                <div class="row" id="oceanFish">
                    <div class="col">Sardine</div>
                    <div class="col">Tuna</div>
                    <div class="col">Red Snapper</div>
                    <div class="col">Tilapia</div>
                </div>
            </div>
            <div>
                <h5>Night Fishing</h5>
                <div class="row" id="nightFishing">
                    <div class="col">Walleye</div>
                    <div class="col">Bream</div>
                    <div class="col">Eel</div>
                </div>
            </div>
            <div>
                <h5>Specialty Fish</h5>
                <div class="row" id="specialtyFish">
                    <div class="col">Pufferfish</div>
                    <div class="col">Ghostfish</div>
                    <div class="col">Sandfish</div>
                    <div class="col">Woodskip</div>
                </div>
            </div>
            <div>
                <h5>Crab Pot</h5>
                <div class="row" id="crabPot">
                    <div class="col">Lobster</div>
                    <div class="col">Crayfish</div>
                    <div class="col">Crab</div>
                    <div class="col">Cockle</div>
                    <div class="col">Mussel</div>
                    <div class="col">Shrimp</div>
                    <div class="col">Snail</div>
                    <div class="col">Periwinkle</div>
                    <div class="col">Oyster</div>
                    <div class="col">Clam</div>
                </div>
            </div> */
