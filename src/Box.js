import React,{Component} from "react";
class Box extends Component{
  constructor(props){
    super(props);
    this.handleRemove=this.handleRemove.bind(this);
  }

  handleRemove(){
    console.log("handle remove");
    this.props.removeBox(this.props.id);
    console.log("Remove executed");
  }

  render(){
    return (
      <div>
      <div style={{height:`${this.props.height}px`,width:`${this.props.width}px`,background:`${this.props.backColor}`}}>
      <button onClick={this.handleRemove}>x</button>
      </div>
      </div>
    )
  }
}

export default Box;
