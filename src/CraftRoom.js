import { useState } from "react";

const CraftRoom = () => {
    // State to keep track of selected items for each bundle
    const [selectedItems, setSelectedItems] = useState({
        springForaging: null,
        summerForaging: null,
        fallForaging: null,
        winterForaging: null,
        construction: null,
        exoticForaging: null,
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
                <h5>Spring Foraging</h5>
                <div className="row" id="springForaging">
                    {["Wild Horseradish", "Daffodil", "Leek", "Dandelion"].map(
                        (item, index) => (
                            <div
                                key={index}
                                className={`col ${
                                    selectedItems.springForaging === index
                                        ? "selected"
                                        : ""
                                }`}
                                onClick={() =>
                                    handleSelect("springForaging", index)
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
                <h5>Summer Foraging</h5>
                <div className="row" id="summerForaging">
                    {["Grape", "Spice Berry", "Sweet Pea"].map(
                        (item, index) => (
                            <div
                                key={index}
                                className={`col ${
                                    selectedItems.summerForaging === index
                                        ? "selected"
                                        : ""
                                }`}
                                onClick={() =>
                                    handleSelect("summerForaging", index)
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
                <h5>Fall Foraging</h5>
                <div className="row" id="fallForaging">
                    {[
                        "Common Mushroom",
                        "Wild Plum",
                        "Hazelnut",
                        "Blackberry",
                    ].map((item, index) => (
                        <div
                            key={index}
                            className={`col ${
                                selectedItems.fallForaging === index
                                    ? "selected"
                                    : ""
                            }`}
                            onClick={() => handleSelect("fallForaging", index)}
                            style={{ cursor: "pointer" }}
                        >
                            {item}
                        </div>
                    ))}
                </div>
            </div>

            <div>
                <h5>Winter Foraging</h5>
                <div className="row" id="winterForaging">
                    {["Winter Root", "Crystal Fruit", "Snow Yam", "Crocus"].map(
                        (item, index) => (
                            <div
                                key={index}
                                className={`col ${
                                    selectedItems.winterForaging === index
                                        ? "selected"
                                        : ""
                                }`}
                                onClick={() =>
                                    handleSelect("winterForaging", index)
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
                <h5>Construction</h5>
                <div className="row" id="construction">
                    {[
                        "Wood (99)",
                        "Wood (99)",
                        "Stone (99)",
                        "Hardwood (10)",
                    ].map((item, index) => (
                        <div
                            key={index}
                            className={`col ${
                                selectedItems.construction === index
                                    ? "selected"
                                    : ""
                            }`}
                            onClick={() => handleSelect("construction", index)}
                            style={{ cursor: "pointer" }}
                        >
                            {item}
                        </div>
                    ))}
                </div>
            </div>

            <div>
                <h5>Exotic Foraging</h5>
                <div className="row" id="exoticForaging">
                    {[
                        "Coconut",
                        "Cactus Fruit",
                        "Cave Carrot",
                        "Red Mushroom",
                        "Purple Mushroom",
                        "Maple Syrup",
                        "Oak Resin",
                        "Pine Tar",
                        "Morel",
                    ].map((item, index) => (
                        <div
                            key={index}
                            className={`col ${
                                selectedItems.exoticForaging === index
                                    ? "selected"
                                    : ""
                            }`}
                            onClick={() =>
                                handleSelect("exoticForaging", index)
                            }
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

export default CraftRoom;
