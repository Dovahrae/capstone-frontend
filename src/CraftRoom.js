import { useState } from "react";

const CraftRoom = () => {
    return (
        <div>
            <div>
                <h5>Spring Foraging</h5>
                <div class="row" id="springForaging">
                    <div class="col">Wild Horseradish</div>
                    <div class="col">Daffodil</div>
                    <div class="col">Leek</div>
                    <div class="col">Dandelion</div>
                </div>
            </div>
            <div>
                <h5>Summer Foraging</h5>
                <div class="row" id="summerForaging">
                    <div class="col">Grape</div>
                    <div class="col">Spice Berry</div>
                    <div class="col">Sweet Pea</div>
                </div>
            </div>
            <div>
                <h5>Fall Foraging</h5>
                <div class="row" id="fallForaging">
                    <div class="col">Common Mushroom</div>
                    <div class="col">Wild Plum</div>
                    <div class="col">Hazelnut</div>
                    <div class="col">Blackberry</div>
                </div>
            </div>
            <div>
                <h5>Winter Foraging</h5>
                <div class="row" id="winterForaging">
                    <div class="col">Winter Root</div>
                    <div class="col">Crystal Fruit</div>
                    <div class="col">Snow Yam</div>
                    <div class="col">Crocus</div>
                </div>
            </div>
            <div>
                <h5>Contruction</h5>
                <div class="row" id="Construction">
                    <div class="col">Wood (99)</div>
                    <div class="col">Wood (99)</div>
                    <div class="col">Stone (99)</div>
                    <div class="col">Hardwood (10)</div>
                </div>
            </div>
            <div>
                <h5>Exotic Foraging</h5>
                <div class="row" id="springForaging">
                    <div class="col">Coconut</div>
                    <div class="col">Cactus Fruit</div>
                    <div class="col">Cave Carrot</div>
                    <div class="col">Red Mushroom</div>
                    <div class="col">Purple Mushroom</div>
                    <div class="col">Maple Syrup</div>
                    <div class="col">Oak Resin</div>
                    <div class="col">Pine Tar</div>
                    <div class="col">Morel</div>
                </div>
            </div>
        </div>
    );
};

export default CraftRoom;
