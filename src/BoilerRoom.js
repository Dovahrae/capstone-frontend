import { useState } from "react";

const BoilerRoom = () => {
    return (
        <div>
            <div>
                <h5>Blacksmith's Bundle</h5>
                <div class="row" id="blacksmith">
                    <div class="col">Copper Bar</div>
                    <div class="col">Iron Bar</div>
                    <div class="col">Gold Bar</div>
                </div>
            </div>
            <div>
                <h5>Geologist's Bundle</h5>
                <div class="row" id="geologist">
                    <div class="col">Quartz</div>
                    <div class="col">Earth Crystal</div>
                    <div class="col">Frozen Tear</div>
                    <div class="col">Fire Quartz</div>
                </div>
            </div>
            <div>
                <h5>Adventurer's Bundle</h5>
                <div class="row" id="adventurer">
                    <div class="col">Slime (99)</div>
                    <div class="col">Bat Wing (10)</div>
                    <div class="col">Solar Essence</div>
                    <div class="col">Void Essence</div>
                </div>
            </div>
        </div>
    );
};

export default BoilerRoom;
