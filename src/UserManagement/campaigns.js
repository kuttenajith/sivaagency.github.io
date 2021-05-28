import React from "react";
import "./user_management.scss";
import 'react-responsive-modal/styles.css';
import Toolbar from '../Components/Toolbar/Toolbar'
class campaigns extends React.Component {

    render() {
        return (
            <div>
                <Toolbar />
                <div className='col-sm-12 text-center'>
                <h5>Campaigns page</h5>
                </div>
            </div>
        );
    }
}

export default campaigns;
