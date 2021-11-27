import React from 'react';
import ReactDOM from 'react-dom';

class Menu extends React.Component {
    render() {
        return (
            <div id="menu" className="menu container-fluid mt-5">
                <div className="row">
                    <div className="col">
                        <a href="#">Diary</a>
                    </div>

                    <div className="col">
                         <a href="#">NotePad</a>

                    </div>

                    <div className="col">
                        <a href="#">Calendar</a>
                    </div>
                </div>

            </div>
        );
    }
}


export default Menu;
