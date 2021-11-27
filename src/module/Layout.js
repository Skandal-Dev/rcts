import { render } from '@testing-library/react';
import React from 'react';
import ReactDOM from 'react-dom';
import logo from './../logo.png';
import Menu from './Menu.js';
import Content from './Content.js';



class Layout extends React.Component {
    render() {
      return (
        <div className="layout" id="layout">
          
          <div className="container">
              <div className="row align-items-start">
                <div class="col-3">
                  <img
                    width="" 
                    src={logo} 
                    className="App-logo" 
                    alt="logo" 
                    />
                </div>

                <div className="col-9">
                      <h2>
                        <span className='font-logo'> Coffee Soli-Teh </span>
                      </h2>
                      <Menu />
                </div>
                
              </div>

              <div className="row align-items-end">
                  <div className="col">
                        <Content />
                  </div>
              </div>
            </div>
        </div>
      );
    };
}


export default Layout;