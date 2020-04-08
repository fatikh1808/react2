import React from "react";
import PropTypes from 'prop-types'

import BasketNavigation from "../navigation/BasketNavigation";

export class Basket extends React.Component {

    render() {
        const {tools, deleteTool} = this.props;

        return (
            <div>
                <BasketNavigation
                    tools={tools}
                    onDelete={deleteTool}
                />
            </div>
        )
    }
}

Basket.propTypes = {
    tools: PropTypes.array.isRequired
};
