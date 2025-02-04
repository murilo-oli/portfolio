import styled from 'styled-components';
import colors from '../styles/colors';

import {TbBrandMedium, TbBrandLinkedin, TbAt, TbFileText} from 'react-icons/tb'
import {LiaGithub} from 'react-icons/lia'
import {PiDevToLogo} from 'react-icons/pi'

export default function Socials(){
    return (
        <SocialContainer>
            <SocialIconLink href="https://github.com/murilo-oli" target='_blank' title='open source codes'><LiaGithub size='2rem' /></SocialIconLink>
            <SocialIconLink href="https://dev.to/olidev_" target='_blank' title='dev articles'><PiDevToLogo size='2rem'/></SocialIconLink>
            <SocialIconLink href="https://medium.com/@murilo-oli" target='_blank' title='general articles'><TbBrandMedium size='2rem'/></SocialIconLink>
            <SocialIconLink href="https://www.linkedin.com/in/murilo-o/" target='_blank' title='professional me'><TbBrandLinkedin size='2rem'/></SocialIconLink>
            <SocialIconLink href="mailto:muriloholiveira@hotmail.com" title='mail me'><TbAt size='2rem'/></SocialIconLink>
            <SocialIconLink href="https://drive.google.com/file/d/1oQ2-Cdt2SsQwSvQMhVsOvqjiH4hFL3lD/view?usp=sharing" title='open resume' target='_blank'><TbFileText size='2rem'/></SocialIconLink>
        </SocialContainer>
    );
}

const SocialContainer = styled.section`
    display: flex;
    flex-direction: row;
    column-gap: 1.3rem;

    padding-top: 0.8rem;
`;

const SocialIconLink = styled.a`
    transition: all 0.2s ease-in-out;

    &:hover{
        transform: scale(1.3);
    }

    &[href*="github"]:hover{
        color: ${colors.about};
    }

    &[href*="dev.to"]:hover{
        color: ${colors.home};
    }

    &[href*="medium"]:hover{
        color: ${colors.blog};
    }

    &[href*="linkedin"]:hover{
        color: ${colors.proj};
    }

    &[href*="mailto"]:hover{
        color: ${colors.contact};
    }
`;