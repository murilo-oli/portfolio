import styled from 'styled-components';
import colors from '../../styles/colors'
import { Item, LogoItem } from "./NavItem";
import LangSelect from "../i18n/LangSelector";

export default function Navbar() {
    return (
        <NavContainer>
            <LogoItem color={colors.home} to='/'>oli.dev</LogoItem>
            <MenuContainer>
                <Item color={colors.proj} to='/projects'>projects</Item>
                <Item color={colors.about} to='/me'>about</Item>
                <Item color={colors.blog} to='/blog'>posts</Item>
                <Item color={colors.contact} to='/contact'>contact</Item>
                <LangSelect/>
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