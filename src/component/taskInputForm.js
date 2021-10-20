import React , {Fragment} from 'react'
import './taskInputForm.css'
class TaskInput extends React.Component {
    state ={
        title:'',
        description:'',
    }
    handleChange= (e)=>{
        this.setState({
            [e.target.id]: e.target.value
        })
    }
    handleSubmit =(e) =>{
        e.preventDefault();
        if(this.state.title !=="" && this.state.description !==""){
        this.props.addTask(this.state);
        e.target.reset();
        this.setState({
            title : '' ,
            description:''
        })
        document.getElementById("alart").style.display = "none";
        }else{
            document.getElementById("alart").style.display = "block";
          }
        
    }
    render() {
        return (
            <Fragment>
                <form onSubmit={this.handleSubmit}>
                    <table className="formTable">
                        <tbody>
                            <tr>
                                <td><input type="text" className="form-control" id="title"  placeholder="Enter the Task title" onChange={this.handleChange}/></td>
                                <td><input type="text" className="form-control" id="description" placeholder="Enter the Task description" onChange={this.handleChange}/></td>
                                <td><button type="submit" className="btn btn-success">Save</button></td>
                            </tr>
                        </tbody>
                    </table>
                </form>
                <div className="alert alert-danger" id="alart" role="alert">
                The Task title and description filds is requaired.
                </div>
            </Fragment>
        );
    }
}
export default TaskInput;