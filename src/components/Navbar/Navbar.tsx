import styled from 'styled-components';
import colors from '../../styles/colors'
import { Item, LogoItem } from "./NavItem";
import LangSelect from "../i18n/LangSelector";
import Translator from '../i18n/Translator';

export default function Navbar() {
    return (
        <NavContainer>
            <LogoItem color={colors.home} to='/'>oli.dev</LogoItem>
            <MenuContainer>
                <Item color={colors.about} to='/me'><Translator path='nav.me'/></Item>
                <Item color={colors.proj} to='/projects'><Translator path='nav.proj'/></Item>
                <Item color={colors.blog} to='/blog'><Translator path='nav.blog'/></Item>
                {/* <Item color={colors.contact} to='/contact'><Translator path='nav.contact'/></Item> */}
                <LangSelect/>
            </MenuContainer>
        </NavContainer>
    );
}

const NavContainer = styled.header`
    display: flex;
    align-items: center;
    justify-content: space-between;
    z-index: 1;
`;

const MenuContainer = styled.nav`
    display: flex;
    align-items: center;
    column-gap: 1.5rem;
`;