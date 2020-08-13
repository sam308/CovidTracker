import React, {Component} from 'react';
import { Navbar, Nav, NavItem, Modal, ModalBody, ModalHeader, Button } from 'reactstrap';
import styles from './Header.module.css';

class Header extends Component {


    constructor(props) {
        super(props);

        this.state = {
            isNavOpen: false,
            isModalOpen: false
        };
        this.toggleNav = this.toggleNav.bind(this);
        this.toggleModal = this.toggleModal.bind(this);
    }

    toggleNav() {
        this.setState({
            isNavOpen: !this.state.isNavOpen
        });
    }

    toggleModal() {
        this.setState({
            isModalOpen: !this.state.isModalOpen
        });
    }

    

    render () {
        return (
            <>
                <Navbar dark expand="md">
                    <div className="container">
                        <Nav className="ml-auto" navbar>
                            <NavItem>
                                <Button color="info" outline onClick={this.toggleModal}>
                                    <span className="fa fa-sign-in fa-lg"></span> Info
                                </Button>
                            </NavItem>
                        </Nav>
                    </div>
                </Navbar>
                <Modal isOpen={this.state.isModalOpen} toggle={this.toggleModal}>
                    <ModalHeader className={styles.head} toggle={this.toggleModal}>COVID-19 CoronaVirus Tracker</ModalHeader>
                    <ModalBody>
                        <div>
                            <p>This is a web app which shows the real time numbers of Active cases, Recovered cases, and Deaths caused by the coronavirus. The figures are collected via an API, demonstrating the global trend as well as values for particular countries.</p>
                            <p>Let us hope that the end of the pandemic is near. Till then, strictly follow the guidelines provided by WHO and the Government.</p>
                        </div>
                    </ModalBody>
                </Modal>
            </>
        );
    }
}

export default Header;