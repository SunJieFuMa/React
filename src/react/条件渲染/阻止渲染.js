import React from 'react'
import ReactDOM from 'react-dom'


class Welcome extends React.Component {
    componentDidMount() {
        console.log("挂载")
    }

    render() {
        if (this.props.boo) {
            return null
        } else {
            return <h2>World</h2>
        }
    }
}

export default function () {
    ReactDOM.render(
        <Welcome boo={false}/>,
        document.getElementById('root')
    );
}

