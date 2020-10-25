import React, {Component} from 'react';
import { ListItem } from '../reusableComponents';

// script
export default class ItemList extends Component {

    render() {
        return (
            <ul className="item-list list-group">
                <ListItem className="list-group-item">
                    John Snow
                </ListItem>
                <ListItem className="list-group-item">
                    Brandon Stark
                </ListItem>
                <ListItem className="list-group-item">
                    Geremy
                </ListItem>
            </ul>
        );
    }
}