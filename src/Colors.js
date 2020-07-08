import React, { Component } from "react";
import './Colors.css';

class Colors extends Component {
    constructor(props) {
        super(props)

        this.state = {
            randomBackColor : '#070707'
        }
    }
    
    ChangeBackColor = () => {
        var rgbColorCode = 'rgb(' + (Math.floor(Math.random() * 256)) + ',' + (Math.floor(Math.random() * 256)) + ',' + (Math.floor(Math.random() * 256)) + ')';
        this.setState({
            randomBackColor : rgbColorCode
        })
    };

    render() {
        return (
            <div>
                <div style={{ backgroundColor: this.state.randomBackColor, padding:30 }}>
                    <p>This region's background color would change on button click</p>
                    <input type='button' value="Click Me!" onClick={this.ChangeBackColor} />
                </div>
                <div className='static'>
                    <p> This region will not be affected with button click</p>
                </div>
            </div>
        );
    }
}
 
export default Colors;