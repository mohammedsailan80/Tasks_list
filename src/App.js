import React  from 'react'
import './App.css';
import TasksList from './component/taskList';
import TaskInput from './component/taskInputForm';

class App extends React.Component {
  state = {
      tasks: []
    };

    deleteTask =(id) =>{
      let tasks=this.state.tasks.filter(task =>{
        return task.id !== id;
      })
      this.setState({tasks});
    }
    addTask =(task) =>{
      let {tasks}=this.state;
      task.id =tasks.length+1;
      tasks.push(task);
      this.setState({tasks});
    }

    render(){
      return (
        <div className="container">
          <TasksList Tasks={this.state.tasks} deleteTask={this.deleteTask}/>
          <TaskInput addTask={this.addTask}/>
          
        </div>
      
      );
    }
}

export default App;
