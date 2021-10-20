import React , {Fragment} from 'react'
import './taskList.css'

class TasksList extends React.Component {
    
    render() {
        const {Tasks , deleteTask}=this.props;
        return (Tasks.length >0) ?(
            <Fragment>
                 <table className="tableList">
                    <thead>
                        <tr>
                            <th>Task name</th>
                            <th>Task description</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                    {Tasks.map((task ,index) =>(
                        <tr key={index}>
                            <td>{task.title}</td>
                            <td>{task.description}</td>
                            <td><button className="btn btn-danger" onClick={()=>deleteTask(task.id)}>delete</button></td>
                        </tr>
                    ))}
                        
                    </tbody>
                </table>

            </Fragment>
        ):
        (
            <Fragment>
                 <table className="tableList">
                    <thead>
                        <tr>
                            <th>Task name</th>
                            <th>Task description</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr >
                            <td></td>
                            <td>
                                <h2> Opps!</h2>
                                <p> The tasks list is Empty.</p>
                            </td>
                            <td></td>
                        </tr>
                    
                        
                    </tbody>
                </table>

            </Fragment>
        );
    }
}
export default TasksList;