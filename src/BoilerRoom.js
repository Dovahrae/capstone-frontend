import { useState, useEffect } from "react";
import "./App.css";

let ToggleButton = () => {
    const [statuses, setStatuses] = useState([]);

    useEffect(() => {
        const makeAPICall = async () => {
            const res = await fetch(
                `http://localhost:3001/toggleStatus/boilerRoom/${window.localStorage.getItem(
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
                room: "boilerRoom",
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
                room: "boilerRoom",
                item,
            }),
        });
        const data = await res.json();
        setStatuses(data.statuses);
    };
    const blacksmithValues = ["Copper Bar", "Iron Bar", "Gold Bar"];
    const geologistValues = [
        "Quartz",
        "Earth Crystal",
        "Frozen Tear",
        "Fire Quartz",
    ];
    const adventurerValues = [
        "Slime (99)",
        "Bat Wing (10)",
        "Solar Essence",
        "Void Essence",
    ];

    // const [blacksmithSelected, setBlacksmithSelected] = useState(
    //     new Array(blacksmithValues.length).fill(false)
    // );
    // const [geologistSelected, setGeologistSelected] = useState(
    //     new Array(geologistValues.length).fill(false)
    // );
    // const [adventurerSelected, setAdventurerSelected] = useState(
    //     new Array(adventurerValues.length).fill(false)
    // );

    // const handleToggle = (index, group, setGroup) => {
    //     const updatedSelection = [...group];
    //     updatedSelection[index] = !updatedSelection[index];
    //     setGroup(updatedSelection);
    // };

    return (
        <div>
            <div>
                <h5>Blacksmith Bundle</h5>
                {blacksmithValues.map((value, index) => {
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
                <h5>Geologist Bundle</h5>
                {geologistValues.map((value, index) => {
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
                <h5>Adventurer Bundle</h5>
                {adventurerValues.map((value, index) => {
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

//     return (
//         <div>
//             <div>
//                 <h5>Blacksmith Bundle</h5>
//                 {blacksmithValues.map((value, index) => (
//                     <button
//                         key={index}
//                         onClick={() =>
//                             handleToggle(
//                                 index,
//                                 blacksmithSelected,
//                                 setBlacksmithSelected
//                             )
//                         }
//                         className={`button ${
//                             blacksmithSelected[index] ? "selected" : ""
//                         }`}
//                     >
//                         {value}
//                     </button>
//                 ))}
//             </div>
//             <div>
//                 <h5>Geologist Bundle</h5>
//                 {geologistValues.map((value, index) => (
//                     <button
//                         key={index}
//                         onClick={() =>
//                             handleToggle(
//                                 index,
//                                 geologistSelected,
//                                 setGeologistSelected
//                             )
//                         }
//                         className={`button ${
//                             geologistSelected[index] ? "selected" : ""
//                         }`}
//                     >
//                         {value}
//                     </button>
//                 ))}
//             </div>
//             <div>
//                 <h5>Adventurer Bundle</h5>
//                 {adventurerValues.map((value, index) => (
//                     <button
//                         key={index}
//                         onClick={() =>
//                             handleToggle(
//                                 index,
//                                 adventurerSelected,
//                                 setAdventurerSelected
//                             )
//                         }
//                         className={`button ${
//                             adventurerSelected[index] ? "selected" : ""
//                         }`}
//                     >
//                         {value}
//                     </button>
//                 ))}
//             </div>
//         </div>
//     );
// };

const BoilerRoom = () => {
    return (
        <div>
            <ToggleButton />
        </div>
    );
};

export default BoilerRoom;

// <div>
//     {values.map((value, index) => (
//         <button
//             key={index}
//             onClick={() => handleToggle(index)}
//             className={`button ${isSelected[index] ? "selected" : ""}`}
//         >
//             {value}
//         </button>
//     ))}
// </div>

// const BoilerRoom = () => {
//     return (
//         <div>
//             <div>
//                 <h5>Blacksmith's Bundle</h5>
//                 <div class="row" id="blacksmith">
//                     <div class="col">Copper Bar</div>
//                     <div class="col">Iron Bar</div>
//                     <div class="col">Gold Bar</div>
//                 </div>
//             </div>
//             <div>
//                 <h5>Geologist's Bundle</h5>
//                 <div class="row" id="geologist">
//                     <div class="col">Quartz</div>
//                     <div class="col">Earth Crystal</div>
//                     <div class="col">Frozen Tear</div>
//                     <div class="col">Fire Quartz</div>
//                 </div>
//             </div>
//             <div>
//                 <h5>Adventurer's Bundle</h5>
//                 <div class="row" id="adventurer">
//                     <div class="col">Slime (99)</div>
//                     <div class="col">Bat Wing (10)</div>
//                     <div class="col">Solar Essence</div>
//                     <div class="col">Void Essence</div>
//                 </div>
//             </div>
//         </div>
//     );
// };
