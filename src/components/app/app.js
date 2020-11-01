import React, { Component } from 'react';
import {Col, Row, Container, Button} from 'reactstrap';
import Header from '../header';
import RandomChar from '../randomChar';
import ItemList from '../itemList';
import CharDetails from '../charDetails';
import './app.css';




export default class App extends Component {

	state =  {
		vision: true
	}

	toggleCharVisivle = () => {
		const {vision} = this.state;
		if(vision) {
			this.setState({
				vision: false
			})
		} else {
			this.setState({
				vision: true
			})
		}
		
	}

	render() {
		const {vision} = this.state;

		const visible = vision ? <RandomChar/> : null;
			return (
					<> 
							<Container>
									<Header />
							</Container>
							<Container>
									<Row>
											<Col lg={{size: 5, offset: 0}}>
												
													{visible}
													<Button className='toggle__button' onClick={this.toggleCharVisivle}>Change char</Button>
											</Col>
									</Row>
									<Row>
											<Col md='6'>
													<ItemList />
											</Col>
											<Col md='6'>
													<CharDetails />
											</Col>
									</Row>
							</Container>
					</>
			);
	}
};