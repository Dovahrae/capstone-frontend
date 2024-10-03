import { useState, useEffect } from "react";
import "./App.css";

let ToggleButton = () => {
    const [statuses, setStatuses] = useState([]);

    useEffect(() => {
        const makeAPICall = async () => {
            const res = await fetch(
                `http://localhost:3001/toggleStatus/kitchen/${window.localStorage.getItem(
                    "userID"
                )}`
            );
            const data = await res.json();
            setStatuses(data.statuses);
        };
        makeAPICall();
    }, []);

    const handleToggle = async (item) => {
        const res = await fetch(`http://localhost:3001/toggleStatus`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                userId: window.localStorage.getItem("userID"),
                room: "kitchen",
                item,
            }),
        });
        const data = await res.json();
        setStatuses(data.statuses);
    };
    // start deleting here if it breaks
    const handleDelete = async (item) => {
        const res = await fetch(`http://localhost:3001/deleteStatus`, {
            method: "DELETE",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                userId: window.localStorage.getItem("userID"),
                room: "kitchen",
                item,
            }),
        });
        const data = await res.json();
        setStatuses(data.statuses);
    };
    const springValues = ["Parsnip", "Green Bean", "Cauliflower", "Potato"];
    const summerValues = ["Tomato", "Hot Pepper", "Blueberry", "Melon"];
    const fallValues = ["Corn", "Eggplant", "Pumpkin", "Yam"];
    const qualityValues = [
        "Gold quality Parsnip (5)",
        "Gold quality Melon (5)",
        "Gold quality Pumpkin (5)",
        "Gold quality Corn (5)",
    ];
    const animalValues = [
        "Large Milk",
        "Large Egg",
        "Large Brown Egg",
        "Large Goat Milk",
        "Wool",
        "Duck Egg",
    ];
    const artisanValues = [
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
    ];

    return (
        <div>
            <div>
                <h5>Spring Crops Bundle</h5>
                {springValues.map((value, index) => {
                    const matchingStatus = statuses.find(
                        (status) => status.item === value
                    );
                    return (
                        <button
                            key={index}
                            onClick={() => handleToggle(value)}
                            className={`button ${
                                matchingStatus ? "selected" : ""
                            }`}
                        >
                            {value}
                        </button>
                    );
                })}
            </div>
            <div>
                <h5>Summer Crops Bundle</h5>
                {summerValues.map((value, index) => {
                    const matchingStatus = statuses.find(
                        (status) => status.item === value
                    );
                    return (
                        <button
                            key={index}
                            onClick={() => handleToggle(value)}
                            className={`button ${
                                matchingStatus ? "selected" : ""
                            }`}
                        >
                            {value}
                        </button>
                    );
                })}
            </div>
            <div>
                <h5>Fall Crops Bundle</h5>
                {fallValues.map((value, index) => {
                    const matchingStatus = statuses.find(
                        (status) => status.item === value
                    );
                    return (
                        <button
                            key={index}
                            onClick={() => handleToggle(value)}
                            className={`button ${
                                matchingStatus ? "selected" : ""
                            }`}
                        >
                            {value}
                        </button>
                    );
                })}
            </div>
            <div>
                <h5>Quality Crops Bundle</h5>
                {qualityValues.map((value, index) => {
                    const matchingStatus = statuses.find(
                        (status) => status.item === value
                    );
                    return (
                        <button
                            key={index}
                            onClick={() => handleToggle(value)}
                            className={`button ${
                                matchingStatus ? "selected" : ""
                            }`}
                        >
                            {value}
                        </button>
                    );
                })}
            </div>
            <div>
                <h5>Animal Bundle</h5>
                {animalValues.map((value, index) => {
                    const matchingStatus = statuses.find(
                        (status) => status.item === value
                    );
                    return (
                        <button
                            key={index}
                            onClick={() => handleToggle(value)}
                            className={`button ${
                                matchingStatus ? "selected" : ""
                            }`}
                        >
                            {value}
                        </button>
                    );
                })}
            </div>
            <div>
                <h5>Artisan Bundle</h5>
                {artisanValues.map((value, index) => {
                    const matchingStatus = statuses.find(
                        (status) => status.item === value
                    );
                    return (
                        <button
                            key={index}
                            onClick={() => handleToggle(value)}
                            className={`button ${
                                matchingStatus ? "selected" : ""
                            }`}
                        >
                            {value}
                        </button>
                    );
                })}
            </div>
        </div>
    );
};

const Kitchen = () => {
    return (
        <div>
            <ToggleButton />
        </div>
    );
};

export default Kitchen;
