import React, { Component } from 'react';
import './Notes.css';
class BodyNote extends Component{
    constructor(props){
        super(props);
        this.notesContent = props.notesContent;
        this.notesId = props.notesId;
     
    }

    render(){
       return(
        <div className="Notes">
        <li key= {this.notesId}>{this.notesContent} </li>
    </div>
       )
        
    }
}

export default BodyNote;