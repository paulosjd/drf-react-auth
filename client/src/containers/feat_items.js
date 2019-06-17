import React, { Component } from 'react';
import {connect} from "react-redux";
import { ListGroup, ListGroupItem } from 'reactstrap';
import MenuItemContent from '../components/menu_item_content'

const testItems = ['Test item 1', 'Test item 2', 'Test item 3'];

class MenuItems extends Component {

    handleSelection(value) {
        console.log(value)
    }

    render() {
        return (
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