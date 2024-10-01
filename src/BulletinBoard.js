import { useState } from "react";
import "./App.css";

let ToggleButton = () => {
    const chefValues = [
        "Maple Syrup",
        "Fiddlehead Fern",
        "Truffle",
        "Poppy",
        "Maki Roll",
        "Fried Egg",
    ];
    const dyeValues = [
        "Red Mushroom",
        "Sea Urchin",
        "Sunflower",
        "Duck Feather",
        "Aquamarine",
        "Red Cabbage",
    ];
    const fieldValues = [
        "Purple Mushroom",
        "Nautils Shell",
        "Chub",
        "Frozen Geode",
    ];
    const fodderValues = ["Wheat (10)", "Hay (10)", "Apple (3)"];
    const enchanterValues = [
        "Oak Resin",
        "Wine",
        "Rabbit's Foot",
        "Pomegranate",
    ];

    const [chefSelected, setChefSelected] = useState(
        new Array(chefValues.length).fill(false)
    );
    const [dyeSelected, setDyeSelected] = useState(
        new Array(dyeValues.length).fill(false)
    );
    const [fieldSelected, setFieldSelected] = useState(
        new Array(fieldValues.length).fill(false)
    );
    const [fodderSelected, setFodderSelected] = useState(
        new Array(fodderValues.length).fill(false)
    );
    const [enchanterSelected, setEnchanterSelected] = useState(
        new Array(enchanterValues.length).fill(false)
    );

    const handleToggle = (index, group, setGroup) => {
        const updatedSelection = [...group];
        updatedSelection[index] = !updatedSelection[index];
        setGroup(updatedSelection);
    };

    return (
        <div>
            <div>
                <h5>Chef's Bundle</h5>
                {chefValues.map((value, index) => (
                    <button
                        key={index}
                        onClick={() =>
                            handleToggle(index, chefSelected, setChefSelected)
                        }
                        className={`button ${
                            chefSelected[index] ? "selected" : ""
                        }`}
                    >
                        {value}
                    </button>
                ))}
            </div>
            <div>
                <h5>Dye Bundle</h5>
                {dyeValues.map((value, index) => (
                    <button
                        key={index}
                        onClick={() =>
                            handleToggle(index, dyeSelected, setDyeSelected)
                        }
                        className={`button ${
                            dyeSelected[index] ? "selected" : ""
                        }`}
                    >
                        {value}
                    </button>
                ))}
            </div>
            <div>
                <h5>Field Research Bundle</h5>
                {fieldValues.map((value, index) => (
                    <button
                        key={index}
                        onClick={() =>
                            handleToggle(index, fieldSelected, setFieldSelected)
                        }
                        className={`button ${
                            fieldSelected[index] ? "selected" : ""
                        }`}
                    >
                        {value}
                    </button>
                ))}
            </div>
            <div>
                <h5>Fodder Bundle</h5>
                {fodderValues.map((value, index) => (
                    <button
                        key={index}
                        onClick={() =>
                            handleToggle(
                                index,
                                fodderSelected,
                                setFodderSelected
                            )
                        }
                        className={`button ${
                            fodderSelected[index] ? "selected" : ""
                        }`}
                    >
                        {value}
                    </button>
                ))}
            </div>
            <div>
                <h5>Enchanter's Bundle</h5>
                {enchanterValues.map((value, index) => (
                    <button
                        key={index}
                        onClick={() =>
                            handleToggle(
                                index,
                                enchanterSelected,
                                setEnchanterSelected
                            )
                        }
                        className={`button ${
                            enchanterSelected[index] ? "selected" : ""
                        }`}
                    >
                        {value}
                    </button>
                ))}
            </div>
        </div>
    );
};
const BulletinBoard = () => {
    return (
        <div>
            <ToggleButton />
        </div>
    );
};

export default BulletinBoard;

{
    /* <div>
                <h5>Chef's Bundle</h5>
                <div class="row" id="chefBundle">
                    <div class="col">Maple Syrup</div>
                    <div class="col">Fiddlehead Fern</div>
                    <div class="col">Truffle</div>
                    <div class="col">Poppy</div>
                    <div class="col">Maki Roll</div>
                    <div class="col">Fried Egg</div>
                </div>
            </div>
            <div>
                <h5>Dye Bundle</h5>
                <div class="row" id="dyeBundle">
                    <div class="col">Red Mushroom</div>
                    <div class="col">Sea Urchin</div>
                    <div class="col">Sunflower</div>
                    <div class="col">Duck Feather</div>
                    <div class="col">Aquamarine</div>
                    <div class="col">Red Cabbage</div>
                </div>
            </div>
            <div>
                <h5>Field Research Bundle</h5>
                <div class="row" id="fieldResearch">
                    <div class="col">Common Mushroom</div>
                    <div class="col">Wild Plum</div>
                    <div class="col">Hazelnut</div>
                    <div class="col">Blackberry</div>
                </div>
            </div>
            <div>
                <h5>Fodder Bundle</h5>
                <div class="row" id="fodderBundle">
                    <div class="col">Wheat (10)</div>
                    <div class="col">Hay (10)</div>
                    <div class="col">Apple (3)</div>
                </div>
            </div>
            <div>
                <h5>Enchanter's Bundle</h5>
                <div class="row" id="enchanterBundle">
                    <div class="col">Oak Resin</div>
                    <div class="col">Wine</div>
                    <div class="col">Rabbit's Foot</div>
                    <div class="col">Pomegranate</div>
                </div>
            </div> */
}
