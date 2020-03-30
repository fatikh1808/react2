import React from "react";
import PropTypes from 'prop-types'

import BasketNavigation from "../navigation/BasketNavigation";

export class Basket extends React.Component {

    constructor(props) {
        super(props);
        this.state = {tools: this.props.tools};
    }

    handleToolDelete = (tool) => {
        let toolId = tool.id;
        let newTools = this.state.tools.filter(function (tool) {
            return tool.id !== toolId;
        });
        this.setState({tools: newTools});
    };

    render() {
        const {tools} = this.state;

        return (
            <div>
                <BasketNavigation
                    tools={tools}
                    onDelete={this.handleToolDelete}
                />
            </div>
        )
    }
}

Basket.propTypes = {
    tools: PropTypes.array.isRequired
};
