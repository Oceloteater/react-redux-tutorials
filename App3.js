/**
 * Created by Adam on 26/05/2016.
 */
import React from 'react';
import ReactDOM from 'react-dom';

class App3 extends React.Component {
    constructor() {
        super();
        this.state = {val: 0};
        this.update = this.update.bind(this);
    }
    update() {
        this.setState({
            val: this.state.val +1
        })
    }
    componentWillMount() {      // PREDEFINED FUNCTIONS //
        console.log("mounting");
        this.setState({m: 2});
    }
    render() {
        console.log("rendering");
        return (
            <button onClick={this.update}>{this.state.val * this.state.m}</button>
        );
    }
    componentDidMount() {       // PREDEFINED FUNCTIONS // We have access to the component here
        console.log(ReactDOM.findDOMNode(this));
        this.inc = setInterval(this.update,500);
    }
    componentWillUnmount() {        // PREDEFINED FUNCTIONS //
        console.log("Unmounted");
        clearInterval(this.inc);
    }
}

class Wrapper extends React.Component {
    constructor() { //to get context of "this"
        super();
    }
    mount() {
        ReactDOM.render(<App3 />, document.getElementById('a'))
    }
    unmount() {
        ReactDOM.unmountComponentAtNode(document.getElementById('a'))
    }
    render() {
        return (
            <div>
                <button onClick={this.mount.bind(this)}>Mount</button>
                <button onClick={this.unmount.bind(this)}>Unmount</button>
                <div id="a"></div>
            </div>
        );
    }
}

export default Wrapper;