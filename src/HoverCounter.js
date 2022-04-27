import withCounter from "./withCounter"

class HoverCounter extends React.Component{
    render(){
        return(
            <div className="hover">
                <p>Hovered X times</p>
            </div>
        )
    }
}

export default withCounter(HoverCounter)