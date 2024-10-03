import { useState, useEffect } from "react";
import "./App.css";

let ToggleButton = () => {
    const [statuses, setStatuses] = useState([]);

    useEffect(() => {
        const makeAPICall = async () => {
            const res = await fetch(
                `http://localhost:3001/toggleStatus/bulletinBoard/${window.localStorage.getItem(
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
                room: "bulletinBoard",
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
                room: "bulletinBoard",
                item,
            }),
        });
        const data = await res.json();
        setStatuses(data.statuses);
    };
    const chefValues = [
        "Maple Syrup",
        "Fiddlehead Fern",
        "Truffle",
        "Poppy",
        "Maki Roll",
        "Fried Egg",
    ];
    const dyeValues = [
        "Red Mushroom",
        "Sea Urchin",
        "Sunflower",
        "Duck Feather",
        "Aquamarine",
        "Red Cabbage",
    ];
    const fieldValues = [
        "Purple Mushroom",
        "Nautils Shell",
        "Chub",
        "Frozen Geode",
    ];
    const fodderValues = ["Wheat (10)", "Hay (10)", "Apple (3)"];
    const enchanterValues = [
        "Oak Resin",
        "Wine",
        "Rabbit's Foot",
        "Pomegranate",
    ];

    return (
        <div>
            <div>
                <h5>Chef's Bundle</h5>
                {chefValues.map((value, index) => {
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
                <h5>Dye Bundle</h5>
                {dyeValues.map((value, index) => {
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
                <h5>Field Research Bundle</h5>
                {fieldValues.map((value, index) => {
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
                <h5>Fodder Bundle</h5>
                {fodderValues.map((value, index) => {
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
                <h5>Enchanter's Bundle</h5>
                {enchanterValues.map((value, index) => {
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
const BulletinBoard = () => {
    return (
        <div>
            <ToggleButton />
        </div>
    );
};

export default BulletinBoard;
