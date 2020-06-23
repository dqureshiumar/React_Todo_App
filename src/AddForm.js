import React, {Component} from 'react';
class AddForm extends Component{

    state = {
        content:''
    }

    handleChange = (e) => {
        this.setState({
            content : e.target.value
        })
    }

    handleSubmit = (e) =>{
        e.preventDefault();
        this.props.addTodo(this.state)
        this.setState({
            content : ''
        })
    }
    render(){
        return(
            <div>
                <form onSubmit={this.handleSubmit}>
                    <label>Add a new Todo:</label>
                    <input type="text" onChange={this.handleChange} value={this.state.content} required/>
					<input type="submit" className="waves-effect waves-light btn-small" value="Add Todo"/>
                </form>
				
            </div>
			
        )
    }
}
export default AddForm