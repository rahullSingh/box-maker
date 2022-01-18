import React,{Component} from "react";
import './App.css';
import Boxform from "./Boxform";
import Box from "./Box";


class App extends Component {
  constructor(props){
    super(props);
    this.state={
      boxes:[]
    }
    this.addBox=this.addBox.bind(this);
    this.remove=this.remove.bind(this);
  }

  addBox(data){
    this.setState(curState=>({
      boxes:[...curState.boxes,data]
    }))
    console.log("new",this.state.boxes);
  }

  remove(id){
    console.log("I got box id :",id);
    this.setState(curState=>({
      boxes:curState.boxes.filter(b=>b.uuid!==id)
    }))
  }

  render(){
    let boxes=this.state.boxes.map(b=>
      <Box height={b.height}
      key={b.uuid}
      width={b.width}
      backColor={b.backColor}
      id={b.uuid}
      removeBox={this.remove}
      />);
  return (
    <div className="App">
    <Boxform addBox={this.addBox} />
    {boxes}
    </div>
  )
  }
}

export default App;
