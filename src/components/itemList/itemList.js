import React, {Component} from 'react';
import GotService from '../../services/gotService';
import { ListItem } from '../reusableComponents';
import Spinner from '../spinner';



// script
export default class ItemList extends Component {

    gotService = new GotService();

    state = {
        charList: null
    }

    componentDidMount() {
        this.gotService.getAllCharacters()
            .then(charList => {
                this.setState({charList})
            })
    }

    render() {
        const {charList} = this.state;
        if(!charList) {
            return (
                <div className='rounded' style={{backgroundColor: 'white'}}>
                    <Spinner/>

                </div>
            )
        }

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