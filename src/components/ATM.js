import React, { Component } from 'react';
import { Polish } from './Polish';
import { English } from './English';


export class ATM extends Component {

    constructor (props) {
        super(props);
        this.state = { language: 0 };
        this.language = React.createRef();
        this.handleChange = this.handleChange.bind(this);
        this.interface = this.interface.bind(this);
    }

    handleChange(event) {
        this.setState({
            language: this.language.current.value
        });
    }

    interface(state){

        if(state == 1)
        {
            return <Polish />;
        }
        else if(state == 2)
        {
            return <English />;
        }
        else { 
            return <p>Wybierz język</p>;
        }
    }

    render()
    {
        let content = this.interface(this.state.language);

        return (  
          <div>
            <form>

            <label>Language:</label><br />
                <select name="language" id="choose" value={this.state.language} ref={this.language} onChange={this.handleChange}>
                    <option value="0">Choose</option>
                    <option value="1">Polski</option>
                    <option value="2">English</option>
            </select>

            {content}

            </form>

          </div>
        );
    }

    


}