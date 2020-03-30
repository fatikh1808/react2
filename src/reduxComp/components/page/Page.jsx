import React from "react";
import PropTypes from 'prop-types'

import PageNavigation from "../navigation/PageNavigation";

export class Page extends React.Component {

    render() {
        return (
            <div>
                <PageNavigation
                    tools={this.props.tools}
                    setBuy={this.props.setBuy}
                />
            </div>
        )
    }
}

Page.propTypes = {
    tools: PropTypes.array.isRequired,
    setBuy: PropTypes.func.isRequired,
};

export default Page
