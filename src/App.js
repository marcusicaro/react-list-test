import React, {Component} from "react";
import Overview from "./Components/Overview";

class App extends Component {
  
  constructor(props) {
    super(props)
    this.onClickBtn = this.onClickBtn.bind(this);

    this.state = {
      inputValue:'',
      taskList: []
    }

  }

  onClickBtn() {
    this.setState({taskList: [...this.state.taskList, this.state.inputValue]})
  }
  
  render() {
    return(
      <div>
        <input value={this.state.inputValue} onChange={(e) => this.setState({inputValue: e.target.value})}></input>
        <button onClick={this.onClickBtn}>Submit</button>
        <Overview taskList={this.state.taskList}/>
      </div>
    )
  };
}

export default App;
