import { useState } from "react";
import "./App.css";

let ToggleButton = () => {
    const [isSelected, setIsSelected] = useState([false]);

    const handleToggle = (index) => {
        const updatedSelection = [...isSelected];

        if (updatedSelection[index]) {
            updatedSelection[index] = false;
        } else {
            updatedSelection[index] = true;
        }

        setIsSelected(updatedSelection);
    };

    const values = ["$2,500", "$5,000", "$10,000", "$25,000"];

    return (
        <div>
            {values.map((value, index) => (
                <button
                    key={index}
                    onClick={() => handleToggle(index)}
                    className={`button ${isSelected[index] ? "selected" : ""}`}
                >
                    {value}
                </button>
            ))}
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
