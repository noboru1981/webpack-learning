import React from "react";
import {render} from "react-dom";

class Message extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {

        return (
            <label htmlFor="radio">{this.props.isActive ? "Hello, world" : "world is over."}</label>
        );
    }
}

class MyForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            checked: false,
        };
    }

    render() {
        return (
            <form>
                <input type="checkbox" id="radio" checked={this.state.checked} onClick={() => {
                    this.setMode()
                }}/>
                <Message isActive={this.state.checked} />
            </form>
        );
    }

    setMode() {
        this.setState({checked: !this.state.checked});
    }
}

class MyApp extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (<MyForm {...this.props}/>);
    }
}


render(<MyApp/>, document.getElementById("app"));
