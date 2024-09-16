import { styled } from "styled-components";

export const Container = styled.div`

    width: 100%;
    height: 90vh;

`

export const Row = styled.div`

    width: auto;
    height: 100%;
    padding: 0 24px;
    
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;

`

export const Column = styled.div`

    width: 100%;
    height: 100%;
    flex: ${props => props.flex};
    padding: 140px 64px 0 64px;
    
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;


`

export const BigText = styled.span`

    font-size: 32px;
    font-weight: bold;
    line-height: 44px;

`

export const FormTitle = styled.span`

    font-size: 48px;
    font-weight: bold;
    line-height: 44px;
    margin-bottom: 12px;

`

export const FormSubTitle = styled.span`

    font-size: 24px;
    line-height: 44px;

`

export const FormDiv = styled.div`

    margin-top: 48px;
    width: 50%;
    height: auto;

    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;

`

export const InputDiv = styled.div`

    width: 100%;
    height: 32px;
    margin-bottom: 24px;
    border-bottom: 1px solid #3B3450;

    display: flex;
    flex-direction: row;
    align-items: flex-start;
    justify-content: flex-start;

    input {
        width: 100%;
        height: 100%;
        background: transparent;
        border: 0;
        padding: 0 8px;
        color: #FAFAFA;
        font-size: 18px;
    }

`

export const InputIcon = styled.img`

    width: 28px;
    height: auto;

`

export const ButtonDiv = styled.div`

    width: 50%;
    height: 41px;
    padding: 6px;
    margin: 36px 0;
    background: transparent;

    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;

    border: 1px solid #E4105D;
    border-radius: 27px;

    button {
        width: 100%;
        height: 100%;
        border-radius: 27px;

        background-color: #E4105D;
        color: #FAFAFA;
        font-size: 18px;
        cursor: pointer;
    }

    button:hover {
        opacity: 0.6;
    }

`

export const FormSubText = styled.div`

    width: 70%;
    height: auto;

    p {
        font-size: 18px;
        line-height: 25px;
    }

`

export const RedirectToLogin = styled.div`

    width: 50%;
    height: auto;
    margin: 36px 0;

    p {
        font-size: 16px;
        line-height: 20px;
        font-weight: bold;
    }

    span {
        color: #23DD7A;
    }

`