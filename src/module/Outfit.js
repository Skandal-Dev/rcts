import React from 'react';
import OutfitManager from './OfManager.js';

class Outfit extends React.Component{

    render(){

        return (
            <div className="note">

                <div class="note-header">
                    <h1 className="apple">Outfit Manager</h1>
                </div>
                
                <div class="note-body p-b">
                    <div class="module">
                        <div class="module-header">
                            <div class="box-label">
                        </div>
                       
                        <div class="box-button">
                            <div class="button green"></div>
                             <div class="button orange"></div>
                           <div class="button red"></div>
                        </div>
                    </div>
                   
                    <div class="module-body">
                        <code className="m-0 p-0">
                          
                           <OutfitManager />
                        </code>
                    </div>
                </div>
            </div>
            </div>
        )
    }
}


export default Outfit;