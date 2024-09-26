import { useState } from "react";

const Kitchen = () => {
    // State to keep track of selected items for each bundle
    const [selectedItems, setSelectedItems] = useState({
        springCrops: null,
        summerCrops: null,
        fallCrops: null,
        qualityCrops: null,
        animalBundle: null,
        artisanBundle: null,
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
                <h5>Spring Crops</h5>
                <div className="row" id="springCrops">
                    {["Parsnip", "Green Bean", "Cauliflower", "Potato"].map(
                        (item, index) => (
                            <div
                                key={index}
                                className={`col ${
                                    selectedItems.springCrops === index
                                        ? "selected"
                                        : ""
                                }`}
                                onClick={() =>
                                    handleSelect("springCrops", index)
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
                <h5>Summer Crops</h5>
                <div className="row" id="summerCrops">
                    {["Tomato", "Hot Pepper", "Blueberry", "Melon"].map(
                        (item, index) => (
                            <div
                                key={index}
                                className={`col ${
                                    selectedItems.summerCrops === index
                                        ? "selected"
                                        : ""
                                }`}
                                onClick={() =>
                                    handleSelect("summerCrops", index)
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
                <h5>Fall Crops</h5>
                <div className="row" id="fallCrops">
                    {["Corn", "Eggplant", "Pumpkin", "Yam"].map(
                        (item, index) => (
                            <div
                                key={index}
                                className={`col ${
                                    selectedItems.fallCrops === index
                                        ? "selected"
                                        : ""
                                }`}
                                onClick={() => handleSelect("fallCrops", index)}
                                style={{ cursor: "pointer" }}
                            >
                                {item}
                            </div>
                        )
                    )}
                </div>
            </div>

            <div>
                <h5>Quality Crops</h5>
                <div className="row" id="qualityCrops">
                    {[
                        "Gold Star Parsnips (5)",
                        "Gold Star Melons (5)",
                        "Gold Star Pumpkins (5)",
                        "Gold Star Corn (5)",
                    ].map((item, index) => (
                        <div
                            key={index}
                            className={`col ${
                                selectedItems.qualityCrops === index
                                    ? "selected"
                                    : ""
                            }`}
                            onClick={() => handleSelect("qualityCrops", index)}
                            style={{ cursor: "pointer" }}
                        >
                            {item}
                        </div>
                    ))}
                </div>
            </div>

            <div>
                <h5>Animal Bundle</h5>
                <div className="row" id="animalBundle">
                    {[
                        "Large Milk",
                        "Large Brown Egg",
                        "Large White Egg",
                        "Large Goat Milk",
                        "Wool",
                        "Duck Egg",
                    ].map((item, index) => (
                        <div
                            key={index}
                            className={`col ${
                                selectedItems.animalBundle === index
                                    ? "selected"
                                    : ""
                            }`}
                            onClick={() => handleSelect("animalBundle", index)}
                            style={{ cursor: "pointer" }}
                        >
                            {item}
                        </div>
                    ))}
                </div>
            </div>

            <div>
                <h5>Artisan Bundle</h5>
                <div className="row" id="artisanBundle">
                    {[
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
                    ].map((item, index) => (
                        <div
                            key={index}
                            className={`col ${
                                selectedItems.artisanBundle === index
                                    ? "selected"
                                    : ""
                            }`}
                            onClick={() => handleSelect("artisanBundle", index)}
                            style={{ cursor: "pointer" }}
                        >
                            {item}
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Kitchen;
