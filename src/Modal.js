import React, { Component } from 'react';
import './MyFetch.css'

class Modal extends Component {
    constructor(props) {
        super(props);
        this.state = {
            show : false
        }
    }

    render() {
        if(!this.props.show) {
            return null;
        }
        return (
            <div style={backdropStyle}>
               <div style={modalStyle}>
                    {this.props.children} 
                    <div style={footerStyle}>
                        <button onClick={this.props.onClose} style={{height:30}}>
                                Close Modal
                        </button>
                    </div>
               </div>
            </div>
        );
    }
}

export default Modal;

const backdropStyle = {
    top: 0,
    bottom: 0,
    right: 0,
    left: 0,
    position:"fixed",
    backgroundColor: "rgba(0,0,0,0.3)",
    padding : 50
};
const modalStyle = {
    backgroundColor: "#fff",
    borderRadius: 6,
    maxWidth: 500,
    minHeight: 450,
    margin: "0 auto",
    padding: 30,
    position: "relative"
};
const footerStyle = {
    position: "absolute",
    bottom: 20
};