import React, { Component } from 'react';
import {connect} from "react-redux";
import { Navbar } from 'reactstrap';

class TopNav extends Component {

    render() {
        return (
            <Navbar>
                <h2 className="foobar">Welcome {this.props.username}</h2>
                <button type="button" className="form-submit" onClick={this.props.handleLogout}>Logout</button>
            </Navbar>
        )
    }
}

const mapStateToProps = state => {
    return {
        username: state.auth.username,
    };
};

const mapDispatchToProps = dispatch => {
    return {

    };
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(TopNav);