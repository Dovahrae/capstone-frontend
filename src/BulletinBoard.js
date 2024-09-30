import { useState } from "react";

const BulletinBoard = () => {
    return (
        <div>
            <div>
                <h5>Chef's Bundle</h5>
                <div class="row" id="chefBundle">
                    <div class="col">Maple Syrup</div>
                    <div class="col">Fiddlehead Fern</div>
                    <div class="col">Truffle</div>
                    <div class="col">Poppy</div>
                    <div class="col">Maki Roll</div>
                    <div class="col">Fried Egg</div>
                </div>
            </div>
            <div>
                <h5>Dye Bundle</h5>
                <div class="row" id="dyeBundle">
                    <div class="col">Red Mushroom</div>
                    <div class="col">Sea Urchin</div>
                    <div class="col">Sunflower</div>
                    <div class="col">Duck Feather</div>
                    <div class="col">Aquamarine</div>
                    <div class="col">Red Cabbage</div>
                </div>
            </div>
            <div>
                <h5>Field Research Bundle</h5>
                <div class="row" id="fieldResearch">
                    <div class="col">Common Mushroom</div>
                    <div class="col">Wild Plum</div>
                    <div class="col">Hazelnut</div>
                    <div class="col">Blackberry</div>
                </div>
            </div>
            <div>
                <h5>Fodder Bundle</h5>
                <div class="row" id="fodderBundle">
                    <div class="col">Wheat (10)</div>
                    <div class="col">Hay (10)</div>
                    <div class="col">Apple (3)</div>
                </div>
            </div>
            <div>
                <h5>Enchanter's Bundle</h5>
                <div class="row" id="enchanterBundle">
                    <div class="col">Oak Resin</div>
                    <div class="col">Wine</div>
                    <div class="col">Rabbit's Foot</div>
                    <div class="col">Pomegranate</div>
                </div>
            </div>
        </div>
    );
};

export default BulletinBoard;
