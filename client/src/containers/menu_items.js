import React, { Component } from 'react';
import * as actionCreator from "../store/actions/profile";
import {connect} from "react-redux";
import { Col, ListGroup, ListGroupItem } from 'reactstrap';
import MenuItemContent from '../components/menu_item_content'


const testItems = ['Test item 1', 'Test item 2']

class MenuItems extends Component {

    handleSelection(value) {
        console.log(value)
    }

    render() {
        return (
            <Col xs={this.props.width} >
                <ListGroup>
                    {testItems.map(name => {
                        return (
                            <ListGroupItem
                                className={'cats'} tag="a" key={name}
                                active={name === 'Test item 1'} action>
                                <MenuItemContent
                                    label={name}
                                    handleClick={this.handleSelection.bind(this)}
                                />
                            </ListGroupItem>)
                    })}
                </ListGroup>
            </Col>
        );
    }
}

const mapStateToProps = state => {
    return {
    };
};

const mapDispatchToProps = dispatch => {
    return {
    };
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(MenuItems);