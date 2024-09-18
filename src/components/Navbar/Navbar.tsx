import styled from 'styled-components';
import colors from '../../styles/colors'
import { Item, LogoItem } from "./NavItem";

export default function Navbar() {
    return (
        <NavContainer>
            <LogoItem color={colors.home}>oli.dev</LogoItem>
            <MenuContainer>
                <Item color={colors.proj}>projects</Item>
                <Item color={colors.about}>about</Item>
                <Item color={colors.blog}>posts</Item>
                <Item color={colors.contact}>contact</Item>
            </MenuContainer>
        </NavContainer>
    );
}

const NavContainer = styled.header`
    display: flex;
    align-items: center;
    justify-content: space-between;
`;

const MenuContainer = styled.nav`
    display: flex;
    align-items: center;
    column-gap: 1.5rem;
`;