import { useState } from "react";

const Vault = () => {
    // State to manage selected states of each button
    const [selectedStates, setSelectedStates] = useState([
        false,
        false,
        false,
        false,
    ]);

    const amounts = [2500, 5000, 10000, 25000];

    const handleSelect = (index) => {
        // Toggle the selected state of the clicked button
        setSelectedStates((prev) =>
            prev.map((selected, i) => (i === index ? !selected : selected))
        );
    };

    return (
        <div className="row">
            {amounts.map((amount, index) => (
                <div
                    key={index}
                    className={`col toggle-button ${
                        selectedStates[index] ? "selected" : ""
                    }`}
                    onClick={() => handleSelect(index)}
                    style={{
                        cursor: "pointer",
                        backgroundColor: selectedStates[index]
                            ? "green"
                            : "lightgray", // Change color based on selection
                        color: "white",
                        border: "none",
                        padding: "10px 20px",
                        textAlign: "center",
                        transition: "background-color 0.3s", // Smooth transition for color change
                    }}
                >
                    ${amount.toLocaleString()}
                </div>
            ))}
        </div>
    );
};

export default Vault;
