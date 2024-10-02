import { useState } from "react";
import "./App.css";

let ToggleButton = () => {
    const springValues = ["Wild Horseradish", "Daffodil", "Leek", "Dandelion"];
    const summerValues = ["Grape", "Spice Berry", "Sweet Pea"];
    const fallValues = [
        "Common Mushroom",
        "Wild Plum",
        "Hazelnut",
        "Blackberry",
    ];
    const winterValues = ["Winter Root", "Crystal Fruit", "Snow Yam", "Crocus"];
    const constructionValues = [
        "Wood (99)",
        "Wood (99)",
        "Stone (99)",
        "Hardwood (10)",
    ];
    const exoticValues = [
        "Coconut",
        "Cactus Fruit",
        "Cave Carrot",
        "Red Mushroom",
        "Purple Mushroom",
        "Maple Syrup",
        "Oak Resin",
        "Pine Tar",
        "Morel",
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
    const [winterSelected, setWinterSelected] = useState(
        new Array(winterValues.length).fill(false)
    );
    const [constructionSelected, setConstructionSelected] = useState(
        new Array(constructionValues.length).fill(false)
    );
    const [exoticSelected, setExoticSelected] = useState(
        new Array(exoticValues.length).fill(false)
    );

    const handleToggle = (index, group, setGroup) => {
        const updatedSelection = [...group];
        updatedSelection[index] = !updatedSelection[index];
        setGroup(updatedSelection);
    };

    return (
        <div>
            <div>
                <h5>Spring Foraging Bundle</h5>
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
                <h5>Summer Foraging Bundle</h5>
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
                <h5>Fall Foraging Bundle</h5>
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
                <h5>Winter Foraging Bundle</h5>
                {winterValues.map((value, index) => (
                    <button
                        key={index}
                        onClick={() =>
                            handleToggle(
                                index,
                                winterSelected,
                                setWinterSelected
                            )
                        }
                        className={`button ${
                            winterSelected[index] ? "selected" : ""
                        }`}
                    >
                        {value}
                    </button>
                ))}
            </div>
            <div>
                <h5>Construction Bundle</h5>
                {constructionValues.map((value, index) => (
                    <button
                        key={index}
                        onClick={() =>
                            handleToggle(
                                index,
                                constructionSelected,
                                setConstructionSelected
                            )
                        }
                        className={`button ${
                            constructionSelected[index] ? "selected" : ""
                        }`}
                    >
                        {value}
                    </button>
                ))}
            </div>
            <div>
                <h5>Exotic Foraging Bundle</h5>
                {exoticValues.map((value, index) => (
                    <button
                        key={index}
                        onClick={() =>
                            handleToggle(
                                index,
                                exoticSelected,
                                setExoticSelected
                            )
                        }
                        className={`button ${
                            exoticSelected[index] ? "selected" : ""
                        }`}
                    >
                        {value}
                    </button>
                ))}
            </div>
        </div>
    );
};

const CraftRoom = () => {
    return (
        <div>
            <ToggleButton />
        </div>
    );
};

export default CraftRoom;

{
    /* <div>
                <h5>Spring Foraging</h5>
                <div class="row" id="springForaging">
                    <div class="col">Wild Horseradish</div>
                    <div class="col">Daffodil</div>
                    <div class="col">Leek</div>
                    <div class="col">Dandelion</div>
                </div>
            </div>
            <div>
                <h5>Summer Foraging</h5>
                <div class="row" id="summerForaging">
                    <div class="col">Grape</div>
                    <div class="col">Spice Berry</div>
                    <div class="col">Sweet Pea</div>
                </div>
            </div>
            <div>
                <h5>Fall Foraging</h5>
                <div class="row" id="fallForaging">
                    <div class="col">Common Mushroom</div>
                    <div class="col">Wild Plum</div>
                    <div class="col">Hazelnut</div>
                    <div class="col">Blackberry</div>
                </div>
            </div>
            <div>
                <h5>Winter Foraging</h5>
                <div class="row" id="winterForaging">
                    <div class="col">Winter Root</div>
                    <div class="col">Crystal Fruit</div>
                    <div class="col">Snow Yam</div>
                    <div class="col">Crocus</div>
                </div>
            </div>
            <div>
                <h5>Contruction</h5>
                <div class="row" id="Construction">
                    <div class="col">Wood (99)</div>
                    <div class="col">Wood (99)</div>
                    <div class="col">Stone (99)</div>
                    <div class="col">Hardwood (10)</div>
                </div>
            </div>
            <div>
                <h5>Exotic Foraging</h5>
                <div class="row" id="springForaging">
                    <div class="col">Coconut</div>
                    <div class="col">Cactus Fruit</div>
                    <div class="col">Cave Carrot</div>
                    <div class="col">Red Mushroom</div>
                    <div class="col">Purple Mushroom</div>
                    <div class="col">Maple Syrup</div>
                    <div class="col">Oak Resin</div>
                    <div class="col">Pine Tar</div>
                    <div class="col">Morel</div>
                </div>
            </div> */
}
