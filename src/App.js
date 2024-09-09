import { RouterProvider, createBrowserRouter } from "react-router-dom";
import "./App.css";
import BoilerRoom from "./BoilerRoom";
import BulletinBoard from "./BulletinBoard";
import CraftRoom from "./CraftRoom";
import FishTank from "./FishTank";
import Kitchen from "./Kitchen";
import Vault from "./Vault";

const myRoutes = createBrowserRouter([
    {
        path: "/",
        element: <login />,
    },
    {
        path: "/craftRoom",
        element: <CraftRoom />,
    },
    {
        path: "/kitchen",
        element: <Kitchen />,
    },
    {
        path: "/fishTank",
        element: <FishTank />,
    },
    {
        path: "/boilerRoom",
        element: <BoilerRoom />,
    },
    {
        path: "/bulletinBoard",
        element: <BulletinBoard />,
    },
    {
        path: "/vault",
        element: <Vault />,
    },
]);

function App() {
    return (
        <div className="App">
            <nav className="navbar navbar-expand-lg bg-body-tertiary">
                <div className="container-fluid">
                    <a className="navbar-brand" href="/">
                        Stardew Valley Tracker
                    </a>
                    <button
                        className="navbar-toggler"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#navbarNav"
                        aria-controls="navbarNav"
                        aria-expanded="false"
                        aria-label="Toggle navigation"
                    >
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav me-auto">
                            <li className="nav-item">
                                <a
                                    className="nav-link active"
                                    aria-current="page"
                                    href="index.html"
                                >
                                    Craft Room
                                </a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="kitchen.html">
                                    Kitchen
                                </a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="fishTank.html">
                                    Fish Tank
                                </a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="boilerRoom.html">
                                    Boiler Room
                                </a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="vault.html">
                                    Vault
                                </a>
                            </li>
                            <li className="nav-item">
                                <a
                                    className="nav-link"
                                    href="bulletinBoard.html"
                                >
                                    Bulletin Board
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    );
}

export default App;
