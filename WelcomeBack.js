const textillo = "soy un texto";
const rootEl = document.getElementById("root")
const spanElement = React.createElement('span', {}, 'SPAN!')
// const element = React.createElement('h1', { id: 'header' }, 'Hey There!', spanElement)

const element = <h1 id="header">Hola</h1>

class ElementoFunction extends React.Component {
    constructor(props) {
        super(props)
    }
    render() {
        return <h1>{textillo}</h1>
    }
}

ReactDOM.render(<ElementoFunction />, rootEl)