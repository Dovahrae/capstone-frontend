import { useState, useEffect } from "react";
import "./App.css";

let ToggleButton = () => {
    const [statuses, setStatuses] = useState([]);

    useEffect(() => {
        const makeAPICall = async () => {
            const res = await fetch(
                `http://localhost:3001/toggleStatus/craftRoom/${window.localStorage.getItem(
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
                room: "craftRoom",
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
                room: "craftRoom",
                item,
            }),
        });
        const data = await res.json();
        setStatuses(data.statuses);
    };

    const springValues = ["Wild Horseradish", "Daffodil", "Leek", "Dandelion"];
    const summerValues = ["Grape", "Spice Berry", "Sweet Pea"];
    const fallValues = [
        "Common Mushroom",
        "Wild Plum",
        "Hazelnut",
        "Blackberry",
    ];
    const winterValues = ["Winter Root", "Crystal Fruit", "Snow Yam", "Crocus"];
    const constructionValues = [
        "Wood (99)",
        "Wood (99)",
        "Stone (99)",
        "Hardwood (10)",
    ];
    const exoticValues = [
        "Coconut",
        "Cactus Fruit",
        "Cave Carrot",
        "Red Mushroom",
        "Purple Mushroom",
        "Maple Syrup",
        "Oak Resin",
        "Pine Tar",
        "Morel",
    ];

    return (
        <div>
            <div>
                <h5>Spring Foraging Bundle</h5>
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
                <h5>Summer Foraging Bundle</h5>
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
                <h5>Fall Foraging Bundle</h5>
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
                <h5>Winter Foraging Bundle</h5>
                {winterValues.map((value, index) => {
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
                <h5>Construction Bundle</h5>
                {constructionValues.map((value, index) => {
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
                <h5>Exotic Foraging Bundle</h5>
                {exoticValues.map((value, index) => {
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

const CraftRoom = () => {
    return (
        <div>
            <ToggleButton />
        </div>
    );
};

export default CraftRoom;
