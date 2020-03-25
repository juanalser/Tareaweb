import React  from 'react';
import firebase from 'firebase';
import fire from '../FB/firebase';
import BodyMain from '../BodyForm/BodyMain';
import './Login.css'
class Login extends React.Component{
    
    constructor(){
        super();
        this.state = {
            user: null,

        };
        this.handleauth = this.handleauth.bind(this);
        this.handlelogout= this.handlelogout.bind(this);
    }

    componentWillMount () {
          
        fire.auth().onAuthStateChanged(user => {
          this.setState({ user });
        });
        }

    handleauth(){
        const provider = new firebase.auth.GoogleAuthProvider();

        fire.auth().signInWithPopup(provider)
        .then(result => console.log(result.user.email + 'Usted ha iniciado sesion'))
        .catch(error => console.log(`Error ${error.code}: ${error.message}`));
    }
    handlelogout(){
        fire.auth().signOut()
        .then(result => console.log(result.user.email + 'Usted ha cerrado sesion'))
        .catch(error => console.log(`Error ${error.code}: ${error.message}`));
    }
    renderloginbutton(){
        if(this.state.user){
            return(
                <div className="Cerrar">
                    
                  <BodyMain />
                    <button onClick={this.handlelogout}>Cerrar Sesion</button>
                    <h3>Hola {this.state.user.displayName}, puede ingresar su nota </h3>
                </div>
                
            )
        }
        else{
            return(
                <div className="Iniciar">
                    <h1>Mural Interactivo</h1>
                    <h2>Proyecto Final (Programacion Web)</h2>
                    <h3>Elaborado por: Juan Garcia</h3>
                    <h4>2018-6040</h4>
                <button onClick={this.handleauth}>Iniciar Sesion</button><br></br>
                <div className="Anonimo">
                <button>Iniciar de forma anonima</button>
                </div>
               
                </div>
            )
          
          
        }
    }
    render(){
        return(
            <div>
             { this.renderloginbutton() }
            </div>
       
        );
    }

}
export default Login;