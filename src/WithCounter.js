import React from "react"

const withCounter = wrappedCounter => {
    class wrappedCounter extends React.Component{
        constructor(props){
            super(props)

            this.state = {
                count: 0
            }
        }

       incrementCount = () => {
           this.setState({count: count+1})
       }

        render(){
            return <wrappedCounter/>
        }   
    }
    return wrappedCounter
}

export default withCounter