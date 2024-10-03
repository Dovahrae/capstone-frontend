import { useState, useEffect } from "react";
import "./App.css";

let ToggleButton = () => {
    const [statuses, setStatuses] = useState([]);

    useEffect(() => {
        const makeAPICall = async () => {
            const res = await fetch(
                `http://localhost:3001/toggleStatus/fishTank/${window.localStorage.getItem(
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
                room: "fishTank",
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
                room: "fishTank",
                item,
            }),
        });
        const data = await res.json();
        setStatuses(data.statuses);
    };
    const riverValues = ["Sunfish", "Catfish", "Shad", "Tiger Trout"];
    const lakeValues = ["Largemouth Bass", "Carp", "Bullhead", "Sturgeon"];
    const oceanValues = ["Sardine", "Tuna", "Red Snapper", "Tilapia"];
    const nightValues = ["Walleye", "Bream", "Eel"];
    const crabValues = [
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
    ];
    const specialtyValues = ["Pufferfish", "Ghostfish", "Sandfish", "Woodskip"];

    return (
        <div>
            <div>
                <h5>River Fish Bundle</h5>
                {riverValues.map((value, index) => {
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
                <h5>Lake Fish Bundle</h5>
                {lakeValues.map((value, index) => {
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
                <h5>Ocean Fish Bundle</h5>
                {oceanValues.map((value, index) => {
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
                <h5>Night Fishing Bundle</h5>
                {nightValues.map((value, index) => {
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
                <h5>Crab Pot Bundle</h5>
                {crabValues.map((value, index) => {
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
                <h5>Specialty Fish Bundle</h5>
                {specialtyValues.map((value, index) => {
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

const FishTank = () => {
    return (
        <div>
            <ToggleButton />
        </div>
    );
};

export default FishTank;
