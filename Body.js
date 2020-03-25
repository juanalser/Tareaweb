import React  from 'react';
import './Body.css'
class Body extends React.Component{
	constructor(props) {
		super();
		this.state = {
			newNoteText: ''
		};
		this.handleUserInput = this.handleUserInput.bind(this);
		this.addNote = this.addNote.bind(this);
		};
		

		handleUserInput(e) {
			this.setState({
				newNoteText: e.target.value
			})
		}
	addNote() {
		this.props.addNote(this.textInput.value);
		this.textInput.value = '';
		this.textInput.focus();
	}
	
	componentDidMount() {
		this.textInput.focus();
	}
	
render(){
    return(

        <div className="NoteForm">
				<input
					placeholder="Escribir Mensaje"
					className="noteInput"
					ref={input => { this.textInput = input;}}
					type="text"/>
				<button 
					onClick={this.addNote}
					className="noteButton">
					Add Note
				</button>
			</div>
    )
}}

export default Body;
