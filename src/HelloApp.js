import React from 'react'
import './App.css'

//stateless function
function Hello(props) {
    return <h1>Hello {props.name}</h1>
  }

class HelloApp extends React.Component{
    constructor(props){
        super(props)
        
        this.state = {value: ''}
        
        this.handleClick = this.handleClick.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    
    handleClick(event){
            this.setState({value: event.target.value})
    }

    handleSubmit(event){
        alert('This text is: ' + this.state.value)
        event.preventDefault();
    }

    render(){
        return(
            <div>
            <h1>Hello React. I try to use you.</h1>
            <form onSubmit={this.handleSubmit}>
                <input type="text" value={this.state.value} onChange={this.handleClick}/>
                <input type="submit" value="Submit"/>
            </form>
            <p>Text: {this.state.value}</p>
            <Hello name = "Ham"/>
            </div>
        )
    }
}  
export default HelloApp