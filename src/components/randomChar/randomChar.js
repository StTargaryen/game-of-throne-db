import React, {Component} from 'react';
import Spinner from '../spinner';
import styled from 'styled-components';
import GotService from '../../services/gotService';
import { ListItem, Term } from '../reusableComponents';
import ErrorMessage from '../errorMessage';


const RandomBlock = styled.div`
    background-color: #fff;
    padding: 25px 25px 15px 25px;
    margin-bottom: 40px;
`;

const RandomTitle = styled.h4`
    margin-bottom: 20px;
    text-align: center;
`;


export default class RandomChar extends Component {
    state = {
        char: {},
        loading: true,
        error: false
    }
    gotService = new GotService();

    componentDidMount() {
        this.updateChar();
    }

    componentWillUnmount() {
        console.log('Unmounting');
    }

    onCharLoaded = (char) => {
        this.setState({char, loading: false})
    }

    onError = () => {
        this.setState({
            error: true,
            loading: false
        })
    }

    updateChar() {
        const randomId = Math.floor(Math.random()*140 + 2);
        this.gotService.getCharacter(randomId)
            .then(this.onCharLoaded)
            .catch(this.onError);
    }


    render() {
        console.log('Render')
        const {char, loading, error} = this.state;
        const errorMessage =  error ? <ErrorMessage/> : null;
        const spinner = loading ? <Spinner/> : null;
        const content = !(loading || error) ? <View char={char}/> : null;

        return (
            <RandomBlock className="rounded">
                {errorMessage}
                {spinner}
                {content}
            </RandomBlock>
        );
    }
}

const View = ({char}) => {
    const {name, gender, born, died, culture} = char;
    return (
        <>
            <RandomTitle>Random Character: {name}</RandomTitle>
            <ul className="list-group list-group-flush">
                <ListItem className="d-flex justify-content-between">
                    <Term>Gender </Term>
                    <span>{gender}</span>
                </ListItem>
                <ListItem className="d-flex justify-content-between">
                    <Term>Born </Term>
                    <span>{born}</span>
                </ListItem>
                <ListItem className="d-flex jusstify-content-between">
                    <Term>Died </Term>
                    <span>{died}</span>
                </ListItem>
                <ListItem className="d-flex justify-content-between">
                    <Term>Culture </Term>
                    <span>{culture}</span>
                </ListItem>
            </ul>
        </>
    )
}
