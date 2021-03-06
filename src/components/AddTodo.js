import React from 'react';
import PropTypes from 'prop-types';

class AddTodo extends React.Component {
	
	state={
		title:''
	}

	onSubmit = (e)=>{
		e.preventDefault();
		if (this.state.title==="") {
			alert("Empty value detected. Please enter something!");		
		}else{
			this.props.addTodo(this.state.title);
			this.setState({title:''});
		}
	}

	onChange = (e)=>{
			this.setState({[e.target.name]:e.target.value});
	}
	render(){
		return(
			<form onSubmit={this.onSubmit} style={{display:'flex'}}>
				<input style={{flex:'10', padding:'5px'}}
					type="text"
					name="title"
					placeholder="Add Todo..."
					value={this.state.title}
					onChange={this.onChange}
				/>

				<input style={{flex:'1'}}
					type="submit"
					value="Submit"
					className="addBtn"
				/>
			</form>
		);
	}
}

AddTodo.propTypes = {
	addTodo : PropTypes.func.isRequired
}

export default AddTodo;