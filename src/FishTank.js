import { useState } from "react";

const FishTank = () => {
    // State to keep track of selected items for each bundle
    const [selectedItems, setSelectedItems] = useState({
        riverFish: null,
        lakeFish: null,
        oceanFish: null,
        nightFishing: null,
        specialtyFish: null,
        crabPot: null,
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
                <h5>River Fish</h5>
                <div className="row" id="riverFish">
                    {["Sunfish", "Catfish", "Shad", "Tiger Trout"].map(
                        (item, index) => (
                            <div
                                key={index}
                                className={`col ${
                                    selectedItems.riverFish === index
                                        ? "selected"
                                        : ""
                                }`}
                                onClick={() => handleSelect("riverFish", index)}
                                style={{ cursor: "pointer" }}
                            >
                                {item}
                            </div>
                        )
                    )}
                </div>
            </div>

            <div>
                <h5>Lake Fish</h5>
                <div className="row" id="lakeFish">
                    {["Largemouth Bass", "Carp", "Bullhead", "Sturgeon"].map(
                        (item, index) => (
                            <div
                                key={index}
                                className={`col ${
                                    selectedItems.lakeFish === index
                                        ? "selected"
                                        : ""
                                }`}
                                onClick={() => handleSelect("lakeFish", index)}
                                style={{ cursor: "pointer" }}
                            >
                                {item}
                            </div>
                        )
                    )}
                </div>
            </div>

            <div>
                <h5>Ocean Fish</h5>
                <div className="row" id="oceanFish">
                    {["Sardine", "Tuna", "Red Snapper", "Tilapia"].map(
                        (item, index) => (
                            <div
                                key={index}
                                className={`col ${
                                    selectedItems.oceanFish === index
                                        ? "selected"
                                        : ""
                                }`}
                                onClick={() => handleSelect("oceanFish", index)}
                                style={{ cursor: "pointer" }}
                            >
                                {item}
                            </div>
                        )
                    )}
                </div>
            </div>

            <div>
                <h5>Night Fishing</h5>
                <div className="row" id="nightFishing">
                    {["Walleye", "Bream", "Eel"].map((item, index) => (
                        <div
                            key={index}
                            className={`col ${
                                selectedItems.nightFishing === index
                                    ? "selected"
                                    : ""
                            }`}
                            onClick={() => handleSelect("nightFishing", index)}
                            style={{ cursor: "pointer" }}
                        >
                            {item}
                        </div>
                    ))}
                </div>
            </div>

            <div>
                <h5>Specialty Fish</h5>
                <div className="row" id="specialtyFish">
                    {["Pufferfish", "Ghostfish", "Sandfish", "Woodskip"].map(
                        (item, index) => (
                            <div
                                key={index}
                                className={`col ${
                                    selectedItems.specialtyFish === index
                                        ? "selected"
                                        : ""
                                }`}
                                onClick={() =>
                                    handleSelect("specialtyFish", index)
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
                <h5>Crab Pot</h5>
                <div className="row" id="crabPot">
                    {[
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
                    ].map((item, index) => (
                        <div
                            key={index}
                            className={`col ${
                                selectedItems.crabPot === index
                                    ? "selected"
                                    : ""
                            }`}
                            onClick={() => handleSelect("crabPot", index)}
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

export default FishTank;
