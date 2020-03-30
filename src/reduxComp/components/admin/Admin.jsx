import React from "react";
import {connect} from "react-redux";

import AdminUI from "./AdminUI";

export class Admin extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            title: '',
            info: '',
            image: null,
            url: '',
        };
    }

    onChangeTitle = (event) => {
        this.setState({
            title: event.target.value,
        });
    };

    onChangeInfo = (event) => {
        this.setState({
            info: event.target.value,
        });
    };

    onChangeUrl = (event) => {
        this.setState({
            url: event.target.value
        });
    };

    onChangeImg = (event) => {
        this.setState({
            image: event.target.value
        });
    };

    handleToolAdd = () => {
        const newTool = {
            id: Math.random(99999),
            title: this.state.title,
            info: this.state.info,
            url: this.state.url,
            // image: this.state.image
        };
        this.setState({title: '', info: '', url: ''});
        this.props.setTool(newTool);
        console.log(newTool)
    };

    render() {
        const {title, info, url, image} = this.state;
        return (
            <div>
                <AdminUI
                    title={title}
                    info={info}
                    url={url}
                    image={image}
                    onChangeTitle={this.onChangeTitle}
                    onChangeUrl={this.onChangeUrl}
                    handleToolAdd={this.handleToolAdd}
                    onChangeImg={this.onChangeImg}
                    onChangeInfo={this.onChangeInfo}
                />
            </div>
        )
    }
}

const mapStateToProps = store => {
    return {
        admin: store.admin,
    }
};

export default connect(mapStateToProps)(Admin);
