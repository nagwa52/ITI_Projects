import { Component } from "react";
class FirstComponent extends Component{
    constructor(){
      super();
      this.state={
        userName:"Enter any text",
    } 
    }
    initialState = { name: '' }

    state = this.initialState
  
    handleFormReset = () => {
      this.setState(() => this.initialState)
      this.setState({userName:" "})
    }
    render(){
      return(
        <div>
          <input 
          type="text" 
          value={this.state.name}
          onChange={(e)=>{
          this.setState({userName:e.target.value})
        }} />
        {this.state.userName}
        <br/>
        <br/>
       <input
       type="button"
       value="Reset"
       onClick={this.handleFormReset}
       />
       <br/>
       <br/>
        </div>
        
      )
    }
  }
  export default FirstComponent;