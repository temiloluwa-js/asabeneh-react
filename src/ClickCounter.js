import withCounter from "./withCounter"

class ClickCounter extends React.Component{
    render(){
        return(
            <div className="app">
                <button>Clicked X times</button>
            </div>
        )
    }
}

export default withCounter(ClickCounter)