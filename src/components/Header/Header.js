import React from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import { media, FixedWithContainer } from 'utils/styles';

export default function Header({ theme }) {
  return (
    <HeaderWrapper>
      <FixedWithContainerFlex>
        <Logo>SHUCUPA ART</Logo>
        <Menu>
          <Item>
            <NavLink strict to="/yardim">
              YARDIM
            </NavLink>
          </Item>
          <Item>
            <NavLink strict to="/iletisim">
              İLETİŞİM
            </NavLink>
          </Item>
        </Menu>
      </FixedWithContainerFlex>
    </HeaderWrapper>
  );
}

const HeaderWrapper = styled.header`
  padding: 20px 0;
  width: 100%;
  align-items: center;
  background-color: ${props => props.theme.headerbackground};
`;

const FixedWithContainerFlex = styled(FixedWithContainer)`
  display: flex;
`;
const Logo = styled.div`
  flex-grow: 1;
  padding: 20px 0;
  font-weight: 700;
`;

export const Menu = styled.ul`
  display: flex;

  ${media.md`
  display: none;
`};
`;

export const Item = styled.li`
  font-size: 14px;
  align-items: center;
  margin-left: 2.14em;
  cursor: pointer;

  & a {
    font-weight: 500;
    letter-spacing: 1px;
    display: flex;
    position: relative;
    display: flex;
    align-content: center;
    color: ${props => props.theme.linkColor};
    padding: 20px 0;
    transition: all 0.1s ease-in-out;

    &:after {
      content: '';
      position: absolute;
      bottom: 15px;
      left: 0;
      width: 100%;
      height: 1px;
      z-index: 0;
      background: rgba(0, 0, 0, 1);
      transform: scaleX(0);
      transform-origin: right;
      transition: transform 0.2s ease-out, opacity 0.2s ease-out 0.3s;
    }
  }

  &:hover {
    & a  {
      color: ${props => props.theme.linkHoverColor};
      &:after {
        transform: scaleX(1);
        transform-origin: left;
      }
    }
  }
`;
