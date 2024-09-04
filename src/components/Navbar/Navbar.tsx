import styled from 'styled-components';
import colors from '../../styles/colors'
import { Item, LogoItem } from "./NavItem";

export default function Navbar(){
    return (
        <NavContainer>
            <LogoItem color={colors.home}>oli</LogoItem>
            <section>
                <Item color={colors.proj}>projects</Item>
                <Item color={colors.blog}>posts</Item>
                {/* <Item color={colors.about}>about</Item> */}
                <Item color={colors.cv}>CV</Item>
            </section>
        </NavContainer>
    );
}

const NavContainer = styled.nav`
    display: flex;

    & section{
        display: flex;
    }
`;