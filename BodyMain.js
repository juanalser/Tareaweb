import React  from 'react';
import BodyNote from '../BodyForm/BodyNote';
import Body from './Body';
import  fire  from '../FB/firebase';
import 'firebase/database';
import '../BodyForm/BodyMain.css'
class BodyMain extends React.Component{
    constructor(){
        super();
       
        this.state = {
            notes: []
               
            };
       
            this.app = fire
            this.db = this.app.database().ref().child('notas');
            this.addNote = this.addNote.bind(this);
            
        }
        

        componentDidMount(){
            const { notes } = this.state
            this.db.on('child_added' , snap =>{
            notes.push({
                notesId: snap.key,
                notesContent: snap.val().notesContent
            })
            this.setState({notes});

            })
            this.db.on('child_removed', snap => {
                for(let i = 0; i < notes.length; i++) {
                    if(notes[i].noteId === snap.key) {
                        notes.splice(i , 1);
                    }
                }
                console.log(notes);
                this.setState({notes});
            });
    
        }
        
        
    addNote(note){
     this.db.push().set({notesContent: note});
    }
render(){
    return(
        <div className="Container">
            <div className="NotesHeader">
                <h1>Mural General</h1>
            </div>
            <div className="NotesBody">
            <ul>
                {
                    this.state.notes.map(note => {
                        return(
                            <BodyNote
                            notesContent = {note.notesContent}
                            notesId = {note.notesId}
                            key={note.notesId}
                            />
                        )
                   
                    })
                }
            </ul>
            </div>
            <div className="NotesFooter">
                <Body addNote={this.addNote}/>
            </div>
        </div>
        
    );
  }
}

export default BodyMain;
