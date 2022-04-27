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
import { AiOutlineClose } from 'react-icons/ai';

import iconSearch from '../../assets/search.png';
function MenuMobile({ menuIsVisible, setMenuIsVisible }) {
    return (
        <Container isVisible={menuIsVisible}>
            <AiOutlineClose
                className="close-icon"
                size={30}
                onClick={() => setMenuIsVisible(false)}
            />
            <Menu>
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
            </Menu>
        </Container>
    );
}

export default MenuMobile;
