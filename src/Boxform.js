import React,{Component} from "react";

class Boxform extends Component{
  constructor(props){
    super(props);
    this.state={
      height:"",width:"",backColor:"",uuid:0
    }
    this.handleChange=this.handleChange.bind(this);
    this.handleSubmit=this.handleSubmit.bind(this);
  }

  handleSubmit(evt){
    evt.preventDefault();
    this.setState({uuid:this.state.uuid+1});
    var val=this.state.uuid+1;
    let newBox={...this.state,id:val};
    this.props.addBox(newBox);
    this.setState({
      height:"",width:"",backColor:""
    })
  }

  handleChange(evt){
    this.setState({
      [evt.target.name]:evt.target.value})
  }

  render(){
    return <form onSubmit={this.handleSubmit} >
    <input onChange={this.handleChange} type="text" placeholder="Height" name="height" value={this.state.height} /><br />
    <input onChange={this.handleChange} type="text" placeholder="Width" name="width" value={this.state.width} /><br />
    <input onChange={this.handleChange} type="text" placeholder="Background-Color" name="backColor" value={this.state.backColor} /><br />
    <button>Add a new Box</button>
    </form>
  }
}

export default Boxform;
