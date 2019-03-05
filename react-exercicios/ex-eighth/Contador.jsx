    import React from 'react'


  export default  class Contador extends React.Component {
        constructor(props){
            super(props)

            this.state = {value: props.initiaValue}

        }


        calculate(number){
            this.setState({value: this.state.value + number})
        }

        render(){
            return(
                <div>
                    <h1>{this.props.label}</h1>
                    <h2>{this.state.value}</h2>
                    <button onClick={ () => this.calculate(1) }>Sum</button>
                    <button onClick={ () => this.calculate(-1) }>Subtract</button>
                </div>
            )
        }

    }

    