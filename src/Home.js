import React, { useState } from "react";

const ToggleButton = () => {
    // State to manage whether the button is selected
    const [isSelected, setIsSelected] = useState(false);

    // Handle button click
    const handleToggle = () => {
        setIsSelected((prev) => !prev);
    };

    return (
        <button
            onClick={handleToggle}
            style={{
                backgroundColor: isSelected ? "green" : "lightgray", // Change color based on selection
                color: "white",
                border: "none",
                padding: "10px 20px",
                cursor: "pointer",
                transition: "background-color 0.3s", // Smooth transition for color change
            }}
        >
            Testing
        </button>
    );
};

const Home = () => {
    return (
        <div>
            <ToggleButton />{" "}
        </div>
    );
};

export default Home;
