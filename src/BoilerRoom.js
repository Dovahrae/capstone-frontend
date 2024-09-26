import { useState } from "react";

const BoilerRoom = () => {
    // State to keep track of selected items for each bundle
    const [selectedItems, setSelectedItems] = useState({
        blacksmith: [false, false, false],
        geologist: [false, false, false, false],
        adventurer: [false, false, false, false],
    });

    // Handle selection for each item
    const handleSelect = (bundle, index) => {
        setSelectedItems((prevState) => {
            const updatedBundle = [...prevState[bundle]];
            updatedBundle[index] = !updatedBundle[index]; // Toggle the selected state
            return {
                ...prevState,
                [bundle]: updatedBundle,
            };
        });
    };

    return (
        <div>
            <div>
                <h5>Blacksmith's Bundle</h5>
                <div className="row" id="blacksmith">
                    {["Copper Bar", "Iron Bar", "Gold Bar"].map(
                        (item, index) => (
                            <div
                                key={index}
                                className={`col ${
                                    selectedItems.blacksmith[index]
                                        ? "selected"
                                        : ""
                                }`}
                                onClick={() =>
                                    handleSelect("blacksmith", index)
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
                <h5>Geologist's Bundle</h5>
                <div className="row" id="geologist">
                    {[
                        "Quartz",
                        "Earth Crystal",
                        "Frozen Tear",
                        "Fire Quartz",
                    ].map((item, index) => (
                        <div
                            key={index}
                            className={`col ${
                                selectedItems.geologist[index] ? "selected" : ""
                            }`}
                            onClick={() => handleSelect("geologist", index)}
                            style={{ cursor: "pointer" }}
                        >
                            {item}
                        </div>
                    ))}
                </div>
            </div>

            <div>
                <h5>Adventurer's Bundle</h5>
                <div className="row" id="adventurer">
                    {[
                        "Slime (99)",
                        "Bat Wing (10)",
                        "Solar Essence",
                        "Void Essence",
                    ].map((item, index) => (
                        <div
                            key={index}
                            className={`col ${
                                selectedItems.adventurer[index]
                                    ? "selected"
                                    : ""
                            }`}
                            onClick={() => handleSelect("adventurer", index)}
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

export default BoilerRoom;
