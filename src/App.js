import React, { Component } from "react";
import Transition from 'react-transition-group/Transition'

import "./App.css";
import Modal from "./components/Modal/Modal";
import Backdrop from "./components/Backdrop/Backdrop";
import List from "./components/List/List";

class App extends Component {
  
  state = {
    modalIsOpen: false,
    showBlock: false
  }
  
  showModal = () => {
    this.setState( { ...this.state, modalIsOpen: true } )
  }
  
  closeModal = () => {
    this.setState( { ...this.state, modalIsOpen: false } )
  }
  
  toggle = () => this.setState( prevState => ( { showBlock: !prevState.showBlock } ) )
  
  divStyle = state => {
    return {
      backgroundColor: "red",
      width: 100,
      height: 100,
      margin: 'auto',
      transition: 'opacity 1.5s',
      opacity: state === 'exiting' ? 0 : ( state === 'entered' ? 1 : 0 )
    }
  }
  
  render() {
    return (
      <div className="App">
        <h1>React Animations</h1>
        <button className="Button" onClick={this.toggle}>Toggle</button>
        <br/><br/>
        
        <Transition in={this.state.showBlock} timeout={1500}
                    mountOnEnter
                    unmountOnExit
                    onEnter={() => console.log('onEnter')}
                    onEntering={() => console.log('onEntering')}
                    onEntered={() => console.log('onEntered')}
                    onExit={() => console.log('onExit')}
                    onExiting={() => console.log('onExiting')}
                    onExited={() => console.log('onExited')}
        >
          {state => <div style={this.divStyle(state)}></div>}
        </Transition>
        
        <Modal closed={this.closeModal} show={this.state.modalIsOpen}/>
        
        <br/>
        <Backdrop show={this.state.modalIsOpen}/>
        <button className="Button" onClick={this.showModal}>Open Modal</button>
        <h3>Animating Lists</h3>
        <List/>
      </div>
    );
  }
}

export default App;
