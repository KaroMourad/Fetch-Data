import React, { Component } from 'react';
import { BrowserRouter as Router, Route,Link} from "react-router-dom";
import './MyFetch.css'
import Modal from "./Modal.js"

class MyFetch extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isLoading: true,
            users: [],
            show: false,
            user: ""
        }
    }

    componentDidMount() {
        this.setState({isLoading: true});
        fetch("https://ghibliapi.herokuapp.com/people", {
            method: 'get'
        })
        .then(response => {
            return response.json()
                .then(data => {
                    this.setState({
                        isLoading:false,
                        users: data
                    })
                }
            )
        })
        .catch(error => this.setState({ error, isLoading: false }));
    }

    showModal = (event) => {
        let arr = event.target.parentNode.childNodes;
        let tmp = [];
        for(let i in arr) {
            if(arr[i].textContent) {
                tmp.push(arr[i].textContent);
            }
        }
        this.setState({
            ...this.state,
            show: !this.state.show,
            user: tmp
        });
    }

    render() {
        const { users, isLoading, error, user } = this.state;
        if(error) {
            return <p>{`Failed to Fetch Data`}</p>;
        }
        if(isLoading) {
            return <img id="my-img" alt="...loading data" src={"https://loading.io/spinners/wave/lg.wave-ball-preloader.gif"}/>;
        }
        
        return (
            <div  style={{position:"relative",width: "max-content"}}>
                <table>
                    <thead>
                        <tr key="header">{Object.keys(users[0]).map((elem,i) => (<th key={i}>{elem}</th>))}</tr>
                    </thead>
                    <tbody>
                        {users.map(user => (<tr onClick={this.showModal} key={user.id}>
                            {Object.keys(user).map((elem,i) => (<td key={i}>{user[elem]}</td>))}
                        </tr>))}
                    </tbody>
                </table>
                <Modal 
                    onClose={this.showModal}
                    show={this.state.show} >                       
                        { Object.keys(user).map((elem,j) => <div key={j} >{user[elem]}<br/><hr/><br/></div>) }
                </Modal>
            </div>
        );
    }
}


export default MyFetch;

