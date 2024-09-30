import { useState } from "react";

const FishTank = () => {
    return (
        <div>
            <div>
                <h5>River Fish</h5>
                <div class="row" id="riverFish">
                    <div class="col">Sunfish</div>
                    <div class="col">Catfish</div>
                    <div class="col">Shad</div>
                    <div class="col">Tiger Trout</div>
                </div>
            </div>
            <div>
                <h5>Lake Fish</h5>
                <div class="row" id="lakeFish">
                    <div class="col">Largemouth Bass</div>
                    <div class="col">Carp</div>
                    <div class="col">Bullhead</div>
                    <div class="col">Sturgeon</div>
                </div>
            </div>
            <div>
                <h5>Ocean Fish</h5>
                <div class="row" id="oceanFish">
                    <div class="col">Sardine</div>
                    <div class="col">Tuna</div>
                    <div class="col">Red Snapper</div>
                    <div class="col">Tilapia</div>
                </div>
            </div>
            <div>
                <h5>Night Fishing</h5>
                <div class="row" id="nightFishing">
                    <div class="col">Walleye</div>
                    <div class="col">Bream</div>
                    <div class="col">Eel</div>
                </div>
            </div>
            <div>
                <h5>Specialty Fish</h5>
                <div class="row" id="specialtyFish">
                    <div class="col">Pufferfish</div>
                    <div class="col">Ghostfish</div>
                    <div class="col">Sandfish</div>
                    <div class="col">Woodskip</div>
                </div>
            </div>
            <div>
                <h5>Crab Pot</h5>
                <div class="row" id="crabPot">
                    <div class="col">Lobster</div>
                    <div class="col">Crayfish</div>
                    <div class="col">Crab</div>
                    <div class="col">Cockle</div>
                    <div class="col">Mussel</div>
                    <div class="col">Shrimp</div>
                    <div class="col">Snail</div>
                    <div class="col">Periwinkle</div>
                    <div class="col">Oyster</div>
                    <div class="col">Clam</div>
                </div>
            </div>
        </div>
    );
};

export default FishTank;
