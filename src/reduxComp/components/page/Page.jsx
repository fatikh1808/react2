import React from "react";
import PropTypes from 'prop-types'

import PageNavigation from "../navigation/PageNavigation";

export class Page extends React.Component {

    render() {
        return (
                <PageNavigation
                    tools={this.props.tools}
                    setBuy={this.props.setBuy}
                />
        )
    }
}

Page.propTypes = {
    tools: PropTypes.array.isRequired,
    setBuy: PropTypes.func.isRequired,
};

export default Page
