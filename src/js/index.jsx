import React from "react";
import {render} from "react-dom";


class MyApp extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return <p>Hello, world!</p>
    }
}

render(<MyApp />, document.getElementById("app"));
