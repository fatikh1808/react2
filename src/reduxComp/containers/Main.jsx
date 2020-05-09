import React from "react";
import {BrowserRouter as Router} from "react-router-dom";
import { connect } from 'react-redux'
import { bindActionCreators } from "redux";

import MainNavigation from "./MainNavigation";
import { setBuy } from "../actions/PageActions";
import { setTool } from "../actions/AdminActions";
import { deleteTool } from "../actions/BasketActions";
import { signup, login, logout } from "../actions/AuthActions";

export class Main extends React.Component {

    handleSubmit = (event) => {
        event.preventDefault();

        this.props.logout();

    };

    render() {

        const {page, basket, setBuy, setTool, deleteTool, signup, login, isAuthenticated} = this.props;

        return (
            <Router>
                <MainNavigation
                    page={page}
                    basket={basket}
                    setBuyAction={setBuy}
                    setToolAction={setTool}
                    deleteToolAction={deleteTool}
                    signup={signup}
                    login={login}
                    isAuthenticated={isAuthenticated}
                    logout={this.handleSubmit}
                />
            </Router>
        );
    }
}

const mapStateToProps = store => {
    return {
        auth: store.auth,
        page: store.page,
        basket: store.basket,
        admin: store.admin,
        isAuthenticated: store.auth.isAuthenticated,
    }
};


const mapDispatchToProps = dispatch => bindActionCreators({
    setBuy,
    setTool,
    deleteTool,
    signup,
    login,
    logout
}, dispatch);


export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Main)



