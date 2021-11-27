import React from 'react';
import ReactDOM from 'react-dom';
import '../style/Content.css';
import Diary from './Diary.js';
import Calendar from './Calendar.js';
import NotePad from './NotePad.js';
import Contact from './Contact.js';
import Outfit from './Outfit.js';
import ToDoList from './ToDoList.js';

class Content extends React.Component{
    render() {
        return (
            <div className="container-fluid">
                <div className="row">
                    <div className="col-12">
                        <Diary />
                        <Diary />
                    </div>
                    <div className="col-12">
                        <NotePad />
                    </div>
                    <div className="col-12">
                        <Calendar />
                    </div>
                    <div className="col-12">
                        <Outfit />
                    </div>
                    
                    <div className="col-12">
                        <ToDoList />
                    </div>
                    <div className="col-12">
                        <Contact />
                    </div>
                 </div>
            </div>
        );
    }
}

export default Content;