import React from "react";
import tee from './../tee.png';


class OutfitManager extends React.Component {


    render() {
        return (
            <div className="OutfitManager ">
                    <div className="col-12 layout-cube">

                        <div className="cube">
                            <div className="cube-info">
                                Lundi
                                </div>
                            <div className="cube-content">
                                
                            </div>
                        </div>
                        <div className="cube">
                            <div className="cube-info">
                                Mardi
                                </div>
                            <div className="cube-content">

                            </div>
                        </div>

                        <div className="cube">
                            <div className="cube-info">
                                Mercredi
                                </div>
                            <div className="cube-content">

                            </div>
                        </div>

                        <div className="cube">
                            <div className="cube-info">
                                Jeudi
                                </div>
                            <div className="cube-content">

                            </div>
                        </div>
                        <div className="cube">
                            <div className="cube-info">
                                Vendredi
                                </div>
                            <div className="cube-content">

                            </div>
                        </div>
                        <div className="cube">
                            <div className="cube-info">
                                Samedi
                                </div>
                            <div className="cube-content">

                            </div>
                        </div>
                        <div className="cube">
                            <div className="cube-info">
                                Dimanche
                                </div>
                            <div className="cube-content">

                            </div>
                        </div>
           


                    </div>
                

                    <div className="row mt-4">
                        <div className="col-5">
                            <div id="OutfitLive" className="viewer cube">
                                <div className="cube-info"> Outfit Creator</div>
                                <div className="cube-content">
                                </div>
                            </div>

                        </div>
                        <div className="col-7">
                            <div className="viewer cube">
                                <div className="cube-info">
                                    <div className="box-button cube-info">
                                        <div className="btn-sm active ">
                                            Haut
                                        </div>
                                        <div className="btn-sm">
                                            Bas
                                        </div>
                                        <div className="btn-sm">
                                            Vestes
                                        </div>
                                        <div className="btn-sm">
                                            Chaussures
                                        </div>
                                           <div className="btn-sm">
                                            Accessoires
                                        </div>
                                    
                                    </div>
                                    ~ Clothes Draft
                                </div>
                                <div className="cube-content">
                                    <div className="item-layout">
                                        <h2>Tee-shirt</h2>
                                        <ul>
                                            <li className="item active">
                                                <img src={tee} alt="tee" className="drop-img"/>
                                            </li>
                                            <li className="item"></li>
                                            <li className="item"></li>
                                            <li className="item"></li>
                                            <li className="item"></li>
                                            <li className="item"></li>
                                            <li className="item"></li>
                                            <li className="item"></li>
                                            <li className="item"></li>
                                        </ul>
                                    </div>
                                    <div className="item-layout">
                                    <h2>Pull</h2>

                                        <ul>
                                            <li className="item"></li>
                                            <li className="item"></li>
                                            <li className="item"></li>
                                            <li className="item"></li>
                                            <li className="item"></li>
                                        </ul>
                                    </div>
                                    <div className="item-layout">
                                        <h2>Chemise</h2>
                                        <ul>
                                            <li className="item"></li>
                                            <li className="item"></li>
                                            <li className="item"></li>
                                            <li className="item"></li>
                                            <li className="item"></li>
                                        </ul>
                                    </div>
                                    <div className="item-layout">
                                        <h2>Jersey</h2>
                                        <ul>
                                            <li className="item"></li>
                                            <li className="item"></li>
                                            <li className="item"></li>
                                            <li className="item"></li>
                                            <li className="item"></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            
        );
    }
}


export default OutfitManager;