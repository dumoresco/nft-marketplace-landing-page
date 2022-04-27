import React from 'react';

import {
    Container,
    Logo,
    InputGroup,
    Input,
    IconSearch,
    Menu,
    Nav,
    Group,
} from './styles';
import { FaWallet } from 'react-icons/fa';
import { AiOutlineMenu } from 'react-icons/ai';

import logo from '../../assets/logo.png';
import iconSearch from '../../assets/search.png';

function Header({ setMenuIsVisible }) {
    return (
        <>
            <Container>
                <Menu>
                    <Logo src={logo} alt="Logo" />
                    <Group>
                        <InputGroup>
                            <IconSearch src={iconSearch} alt="icon search" />
                            <Input
                                type="text"
                                placeholder="Search items, collections, and accounts"
                            />
                        </InputGroup>
                    </Group>
                    <Nav>
                        <a href="#">Explore</a>
                        <a href="#">Activity</a>
                        <a href="#">Resources</a>
                        <button>Account</button>
                        <button className="button-active">
                            <FaWallet className="icon" />
                            Connect Wallet
                        </button>
                    </Nav>
                    <AiOutlineMenu
                        className="menu-icon"
                        size={30}
                        onClick={() => setMenuIsVisible(true)}
                    />
                </Menu>
            </Container>
        </>
    );
}

export default Header;
