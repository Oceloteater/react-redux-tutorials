/**
 * Created by Adam on 27/05/2016.
 */
import React from 'react';

let Mixin = InnerComponent => class extends React.Component {
    constructor() {
        super();
        this.update = this.update.bind(this);
        this.state = {val: 0}
    }
    update() {
        console.log(this.props);
        this.setState({val: this.state.val +1});
    }
    render() {
        return (
            <InnerComponent update={this.update} {...this.state} {...this.props} />
        );
    }
};

const Button = (props) => <button onClick={props.update}> {props.txt} - {props.val} </button>
let ButtonMixed = Mixin(Button);

const Label = (props) => <label onMouseMove={props.update}> {props.txt} - {props.val} </label>
let LabelMixed = Mixin(Label);

class App5 extends React.Component {
    render() {
        return (
            <div>
                <ButtonMixed txt="Button" />
                <LabelMixed txt="Label" />
            </div>
        );
    }
}

export default App5;