import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
    state = {capNumbers: []}

    componentDidMount() {
        fetch('/capNumbers')
            .then(res => res.json())
            .then(capNumbers => this.setState({ capNumbers }));
    }

    render() {
    return (
        <div className="App">
            <h1>Users</h1>
            <table>
            {this.state.capNumbers.map(capNumber =>
                <tr>
                    <td>#{capNumber.id}:</td>
                    <td>{capNumber.count}</td>
                </tr>
            )}
            </table>
        </div>
    );
  }
}

export default App;
