import React, { useState } from "react";

const ToggleButton = () => {
    // State to manage whether the button is selected
    const [isSelected, setIsSelected] = useState(false);

    // Handle button click
    const handleToggle = () => {
        setIsSelected((prev) => !prev);
    };

    return (
        <div>
            <h1>Welcome to my Stardew Valley Tracker!</h1>
            <h3>
                This tracker is so simple to use! Just login (to save your
                progress),
            </h3>
            <h3>
                use the navigation bar at the top to find the room you've
                donated to,
            </h3>
            <h3>and select the item you've donated!</h3>
            <h3>Accidentally click the wrong item? No problem!</h3>
            <h3>
                Simply click the item again to uncheck it. It's that simple!
            </h3>
            <h3>Give it a try below and happy harvesting!</h3>
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
                Try it out!
            </button>
        </div>
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
