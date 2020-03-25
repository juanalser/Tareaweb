import React  from 'react';
import fire from '../FB/firebase'
import BodyMain from '../BodyForm/BodyMain';
import '../LoginNote/LoginNote'
class Home extends React.Component {
    constructor(props) {
        super(props);
        this.logout = this.logout.bind(this);
    }

    
    logout() {
        fire.auth().signOut();
    }

    render() {
        return (
        
            <div className="form3">
                <BodyMain />
                <button onClick={this.logout}>Logout</button>
            </div>
           
        );

    }

}

export default Home;