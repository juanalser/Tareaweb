import React  from 'react';
import fire from '../FB/firebase';
import '../LoginNote/LoginNote.css'
class LoginNote extends React.Component {
    constructor(props) {
      super(props);
      this.login = this.login.bind(this);
      this.handleChange = this.handleChange.bind(this);
      this.register = this.register.bind(this);
      this.Pass = this.Pass.bind(this)

      this.state = {
        email: '',
        password: ''
      };
    }
  
    handleChange(e) {
      this.setState({ [e.target.name]: e.target.value });
    }
  
    login(e) {
      e.preventDefault();
   
      fire.auth().signInWithEmailAndPassword(this.state.email, this.state.password).then((u)=>{
      }).catch((error) => {
          console.log(error);
          alert("El correo electronico o la contraseña que ingresaste no coinciden con ninguna cuenta. Favor revisar su correo de Gmail y revisar si esta correcta.")
        });

        
    }
      
    register(e) {
      e.preventDefault();
      fire.auth().createUserWithEmailAndPassword(this.state.email, this.state.password)
      .catch((error) => {
          console.log(error);
         alert("Error al registrarse. Compruebe los campos.")
        });
        alert("Se ha registrado correctamente.")
        
    }

    Pass(e) {
      e.preventDefault();
      }


    render() {
      return (
        <div className="fuente">
                    <h1>Mural Interactivo</h1>
                    <h2>Proyecto Final (Programacion Web)</h2>
                    <h3>Elaborado por: Juan Garcia</h3>
                    <h4>2018-6040</h4>
            <div className="login-page">
            <div class="form">
             <form className="Notas-form">
            <label>Iniciar Sesion</label>
              <input  value={this.state.email} onChange={this.handleChange} type="email" name="email" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Correo Electronico" />
              <small id="emailHelp" class="form-text text-muted"></small>
          
         

              <input  value={this.state.password} onChange={this.handleChange} type="password" name="password" id="exampleInputPassword1" placeholder="Contraseña" />
            
            <button type="submit" onClick={this.login} class="btn btn-primary">Login</button>
            <button type="submit" onClick={this.register} class="btn btn-primary">Register</button>
            <button type="submit" onClick={this.Pass} class="btn btn-primary">Pass</button>
          </form>
       
       
          </div>
          </div>
          </div>
      );
    }
  }
  export default LoginNote;
  