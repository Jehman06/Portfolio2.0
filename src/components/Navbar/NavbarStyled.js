import styled from 'styled-components';

export const NavbarContainer = styled.div`
    background-color: #333;
    overflow: hidden;
    position: ${({ navbarFixed }) => (navbarFixed ? 'fixed' : 'relative')};
    display: flex;
    top: 0;
    width: 100%;
    z-index: 2;
    align-items: center;
    position: relative;
    transition: top 0s ease-in-out;
    border-bottom: 5px #00b5c2 solid;

    @media (max-width: 844px) {
        justify-content: space-between;
        padding: 10px 20px;
        height: 30px;
    }
`;

export const NavButton = styled.button`
    float: left;
    display: block;
    color: white;
    border: none;
    background-color: transparent;
    text-align: center;
    padding: 14px 16px;
    text-decoration: none;
    font-size: 20pt;
    font-family: 'Urbanist';
    cursor: pointer;
`