
import React from 'react';
import PropTypes from 'prop-types';

class TodoItem extends React.Component{

	getStyle=()=>{

		return{
			background : '#f4f4f4',
			padding : '10px 5px',
			borderBottom : '1px #ccc dotted',
			textDecoration : this.props.todo.completed ? 'line-through' : 'none'
		}
		// if (this.props.todo.completed){
		// 	return{
		// 		textDecoration : 'line-through'
		// 	}
		// }else{
		// 	return{
		// 		textDecoration: 'none'
		// 	}
		// }
	}

	// markComplete = (e)=>{
	// 	console.log(this.props)
	// }

	// markComplete(e){
	// 	console.log(this.props)
	// }


	render(){
		
		const { id, title} = this.props.todo; 

		return(
			<div style={this.getStyle()}>
				<p style={itemStyle} >
					<input type="checkbox" onChange={this.props.markComplete.bind(this, id)} /> {''}
					{title}
					<button className="btn btn-danger" style= {btnStyle} onClick={this.props.delTodo.bind(this,id)}>X</button>
				</p>
				{/* <p style = {{ backgroundColor:'#f4f4f4'}} >Hello</p> */}
			</div>
		);
	}
}

const btnStyle ={	

	borderRadius: "50%",
	cursor : "pointer",
	float : "right"

}

const itemStyle = {
	padding : '10px',
	backgroundColor : '#FFFFFF'
}

TodoItem.propTypes = {
	todos : PropTypes.array.isRequired,
	markComplete : PropTypes.func.isRequired,
	delTodo : PropTypes.func.isRequired
}

export default TodoItem;


