import React from 'react';
import ReactDOM from 'react-dom';

// CLASS (STATE) COMPONENT //
class App extends React.Component {
    render() {

        const now = new Date();
        const topicsList = ['HTML', 'JavaScript', 'React'];

        return (
            <div>
                <h3>Stories App : {this.props.txt}</h3>
                <p className="lead">Current time: {now.toTimeString()}</p>
                <ul>
                    {topicsList.map( topic => <li>{topic}</li>)}
                </ul>
            </div>
        );
    }
}
// specific property types
App.propTypes = {
    txt: React.PropTypes.string,
    cat: React.PropTypes.number.isRequired
}
// specific default values of prop types
App.defaultProps = {
    txt: 'this is the default txt'
}

// STATELESS FUNCTION COMPONENT //
//const App = () => <h1>Hey you guys</h1>

//export default App;

ReactDOM.render(
    <App txt="this is the props text" cat={5}/>,
    document.getElementById('app')
);