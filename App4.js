/**
 * Created by Adam on 26/05/2016.
 */
import React from 'react';
import ReactDOM from 'react-dom';

class App4 extends React.Component {
    constructor() {
        super();
        this.update = this.update.bind(this);
        this.state = {increasing: false}
    }
    componentWillReceiveProps(nextProps) {
        this.setState({increasing: nextProps.val > this.props.val});
    }
    shouldComponentUpdate(nextProps, nextState) {
        return nextProps.val % 5 === 0;
    }
    update() {
        console.log(this.props);
        ReactDOM.render(
            <App4 val={this.props.val+1} />,
            document.getElementById('app')
        );
    }
    render() {
        console.log(this.state.increasing);
        return (
            <button onClick={this.update}>{this.props.val}</button>
        );
    }
    componentDidUpdate(prevProps, prevState) {
        console.log('prevProps', prevProps)
    }
}

App4.defaultProps = {val: 0};

export default App4;