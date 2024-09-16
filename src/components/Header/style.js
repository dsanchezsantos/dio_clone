import { styled } from "styled-components";

export const HeaderContainer = styled.div`

    width: 100%;
    height: 47px;
    background-color: #151515;

    display: flex;
    align-items: center;
    justify-content: center;

`

export const HeaderContainerRow = styled.div`

    width: 100%;
    height: 100%;
    margin: 0 36px;

    display: flex;
    flex-direction: row;
    justify-content: space-between;

`

export const HeaderMenu = styled.div`

    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;

`

export const HeaderMenuItem = styled.div`

    margin: 0 8px 0 0;

    display: flex;
    flex-direction: row;

`

export const HeaderLogo = styled.img`
    height: 25px;
    width: auto;
`

export const HeaderMenuItemButton = styled.div`

    width: 120px;
    height: 26px;
    border-radius: 24px;
    background-color: ${props => props.typeButton === 'home' ? 'transparent' : '#565656'};
    border : ${props => props.typeButton === 'home' ? '1px solid' : '0px'};

    display: flex;
    align-items: center;
    justify-content: center;

    &::hover {
        cursor: pointer;
    }

`