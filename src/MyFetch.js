import React, { Component } from 'react';
import './MyFetch.css'

export default class MyFetch extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isLoading: true,
            users: []
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

    render() {
        const { users, isLoading, error } = this.state;

        if (error) {
        return <p>{`Failed to Fetch Data`}</p>;
        }

        if (isLoading) {
        return <img id="my-img" alt="...loading data" src={"https://loading.io/spinners/wave/lg.wave-ball-preloader.gif"}/>;
        }

        return (
            <table>
                <th>Id</th> <th>Name</th> <th>Gender</th> 
                <th>Age</th> <th>Eye Color</th> <th>Hair Color</th> 
                <th>Films</th> <th>Species</th> <th>Url</th>
                {users.map(user => 
                    <tr key={user.id}>
                        <td>{user.id}</td> 
                        <td>{user.name}</td>
                        <td>{user.gender}</td>
                        <td>{user.age}</td>
                        <td>{user.eye_color}</td>
                        <td>{user.hair_color}</td>
                        <td>{user.films}</td>
                        <td>{user.species}</td>
                        <td>{user.url}</td>
                    </tr>)}
            </table>
              
        );
    }
}