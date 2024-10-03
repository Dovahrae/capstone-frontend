import { useEffect, useState } from "react";
import "./App.css";

let ToggleButton = () => {
    const [statuses, setStatuses] = useState([]);

    useEffect(() => {
        const makeAPICall = async () => {
            const res = await fetch(
                `http://localhost:3001/toggleStatus/vault/${window.localStorage.getItem(
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
                room: "vault",
                item,
            }),
        });
        const data = await res.json();
        setStatuses(data.statuses);
    };

    const values = ["$2,500", "$5,000", "$10,000", "$25,000"];

    return (
        <div>
            {values.map((value, index) => {
                const matchingStatus = statuses.find(
                    (status) => status.item === value
                );
                return (
                    <button
                        key={index}
                        onClick={() => handleToggle(value)}
                        className={`button ${matchingStatus ? "selected" : ""}`}
                    >
                        {value}
                    </button>
                );
            })}
        </div>
    );
};

const Vault = () => {
    return (
        <div>
            <ToggleButton />
        </div>
    );
};

export default Vault;

// {
//     /* <div class="row">
//     <div class="col">$2,500</div>
//     <div class="col">$5,000</div>
//     <div class="col">$10,000</div>
//     <div class="col">$25,000</div>
// </div> */
// }
