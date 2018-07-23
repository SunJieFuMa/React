import React from 'react'
import ReactDOM from 'react-dom'


class Welcome extends React.Component {
    constructor() {
        super();
        this.state = {name: "Welcome", age: 22}
    }

    componentDidMount() {
        this.setState({name: "张三"});
    }

    render() {
        return (
            <div>
                <h1>Hello, </h1>
                <Text text={"姓名：" + this.state.name}/>
                <Text text={"年龄：" + this.state.age}/>
            </div>
        )
    }
}

class Text extends React.Component {
    render() {
        return <h2>{this.props.text}</h2>
    }
}

export default function () {
    ReactDOM.render(
        <Welcome/>,
        document.getElementById('root')
    )
}