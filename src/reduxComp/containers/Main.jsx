import React from "react";
import {BrowserRouter as Router} from "react-router-dom";
import {connect} from 'react-redux'

import MainNavigation from "./MainNavigation";
import {setBuy} from "../actions/PageActions";
import {setTool} from "../actions/AdminActions";

export class Main extends React.Component {

    render() {

        const {page, basket, setBuyAction, setToolAction} = this.props;

        return (
            <Router>
                <MainNavigation
                    page={page}
                    basket={basket}
                    setBuyAction={setBuyAction}
                    setToolAction={setToolAction}
                />
            </Router>
        );
    }
}

const mapStateToProps = store => {
    return {
        user: store.user,
        page: store.page,
        basket: store.basket,
        admin: store.admin
    }
};

const mapDispatchToProps = dispatch => {
    return {
        setBuyAction: tool => dispatch(setBuy(tool)),
        setToolAction: tool => dispatch(setTool(tool))
    }
};


export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Main)



