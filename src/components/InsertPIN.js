import React, { Component } from 'react';

export class InsertPIN extends Component {

    constructor (props) {
        super(props);
        this.state = { pin: '' };
        this.handleChange = this.handleChange.bind(this);
        this.pin1 = React.createRef();
        this.pin2 = React.createRef();
        this.pin3 = React.createRef();
        this.pin4 = React.createRef();
        this.pin5 = React.createRef();
        this.pin6 = React.createRef();
        this.pin7 = React.createRef();
        this.pin8 = React.createRef();
        this.pin9 = React.createRef();
    }

    handleChange(event) {
        this.setState({
            pin: this.state.pin + event
        });

        console.log(this.state.pin+event);
    }

    render()
    {
        return (  
            <div>
                <p>Wprowadź PIN:</p>
                <br />
                <p>{this.state.pin}</p>
                <table>
                    <tbody>
                <tr>
                        <td>
                            <button value="7" onClick={e => this.handleChange(e.target.value)} ref={this.pin7}>7</button>
                        </td>

                        <td>
                            <button value="8" onClick={e => this.handleChange(e.target.value)} ref={this.pin8}>8</button>
                        </td>

                        <td>
                            <button value="9" onClick={e => this.handleChange(e.target.value)} ref={this.pin9}>9</button>
                        </td>

                </tr>

                <tr>
                        <td>
                            <button value="4" onClick={e => this.handleChange(e.target.value)} ref={this.pin4}>4</button>
                        </td>

                        <td>
                            <button value="5" onClick={e => this.handleChange(e.target.value)} ref={this.pin5}>5</button>
                        </td>

                        <td>
                            <button value="6" onClick={e => this.handleChange(e.target.value)} ref={this.pin6}>6</button>
                        </td>

                </tr>

                <tr>
                        <td>
                            <button value="1" onClick={e => this.handleChange(e.target.value)} ref={this.pin1}>1</button>
                        </td>

                        <td>
                            <button value="2" onClick={e => this.handleChange(e.target.value)} ref={this.pin2}>2</button>
                        </td>

                        <td>
                            <button value="3" onClick={e => this.handleChange(e.target.value)} ref={this.pin3}>3</button>
                        </td>

                </tr>
                </tbody>
                </table>

            </div>
        );
    }

}