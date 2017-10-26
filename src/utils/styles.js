import styled, { css } from 'styled-components';
import theme from '../theme';

export const media = Object.keys(theme).reduce((accumulator, label) => {
  const emSize = theme[label] / 14;
  /* eslint-disable no-param-reassign*/
  accumulator[label] = (...args) => css`
    @media (max-width: ${emSize}em) {
      ${css(...args)};
    }
  `;
  /* eslint-enable no-param-reassign*/
  return accumulator;
}, {});

export const FixedWithContainer = styled.div`
  position: relative;
  margin-left: auto;
  margin-right: auto;
  padding-right: 15px;
  padding-left: 15px;
  max-width: 100%;

  ${media.xxl`
    width:1140px;
  `};

  ${media.xl`
    width:960px;
  `};
  ${media.lg`
    width:720px;
  `};
  ${media.md`
    width:540px;
  `};
`;
