import { useState } from "react";

const BulletinBoard = () => {
    // State to keep track of selected items for each bundle
    const [selectedItems, setSelectedItems] = useState({
        chefBundle: null,
        dyeBundle: null,
        fieldResearch: null,
        fodderBundle: null,
        enchanterBundle: null,
    });

    // Handle selection for each item
    const handleSelect = (bundle, index) => {
        setSelectedItems((prevState) => ({
            ...prevState,
            [bundle]: index,
        }));
    };

    return (
        <div>
            <div>
                <h5>Chef's Bundle</h5>
                <div className="row" id="chefBundle">
                    {[
                        "Maple Syrup",
                        "Fiddlehead Fern",
                        "Truffle",
                        "Poppy",
                        "Maki Roll",
                        "Fried Egg",
                    ].map((item, index) => (
                        <div
                            key={index}
                            className={`col ${
                                selectedItems.chefBundle === index
                                    ? "selected"
                                    : ""
                            }`}
                            onClick={() => handleSelect("chefBundle", index)}
                            style={{ cursor: "pointer" }}
                        >
                            {item}
                        </div>
                    ))}
                </div>
            </div>

            <div>
                <h5>Dye Bundle</h5>
                <div className="row" id="dyeBundle">
                    {[
                        "Red Mushroom",
                        "Sea Urchin",
                        "Sunflower",
                        "Duck Feather",
                        "Aquamarine",
                        "Red Cabbage",
                    ].map((item, index) => (
                        <div
                            key={index}
                            className={`col ${
                                selectedItems.dyeBundle === index
                                    ? "selected"
                                    : ""
                            }`}
                            onClick={() => handleSelect("dyeBundle", index)}
                            style={{ cursor: "pointer" }}
                        >
                            {item}
                        </div>
                    ))}
                </div>
            </div>

            <div>
                <h5>Field Research Bundle</h5>
                <div className="row" id="fieldResearch">
                    {[
                        "Common Mushroom",
                        "Wild Plum",
                        "Hazelnut",
                        "Blackberry",
                    ].map((item, index) => (
                        <div
                            key={index}
                            className={`col ${
                                selectedItems.fieldResearch === index
                                    ? "selected"
                                    : ""
                            }`}
                            onClick={() => handleSelect("fieldResearch", index)}
                            style={{ cursor: "pointer" }}
                        >
                            {item}
                        </div>
                    ))}
                </div>
            </div>

            <div>
                <h5>Fodder Bundle</h5>
                <div className="row" id="fodderBundle">
                    {["Wheat (10)", "Hay (10)", "Apple (3)"].map(
                        (item, index) => (
                            <div
                                key={index}
                                className={`col ${
                                    selectedItems.fodderBundle === index
                                        ? "selected"
                                        : ""
                                }`}
                                onClick={() =>
                                    handleSelect("fodderBundle", index)
                                }
                                style={{ cursor: "pointer" }}
                            >
                                {item}
                            </div>
                        )
                    )}
                </div>
            </div>

            <div>
                <h5>Enchanter's Bundle</h5>
                <div className="row" id="enchanterBundle">
                    {["Oak Resin", "Wine", "Rabbit's Foot", "Pomegranate"].map(
                        (item, index) => (
                            <div
                                key={index}
                                className={`col ${
                                    selectedItems.enchanterBundle === index
                                        ? "selected"
                                        : ""
                                }`}
                                onClick={() =>
                                    handleSelect("enchanterBundle", index)
                                }
                                style={{ cursor: "pointer" }}
                            >
                                {item}
                            </div>
                        )
                    )}
                </div>
            </div>
        </div>
    );
};

export default BulletinBoard;
