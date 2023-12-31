import { styled } from 'styled-components'

export const HeaderContainer = styled.header`
  ${({ theme }) => theme.flex.flexCenter}
  position: sticky;
  top: 0;
  left: 0;
  width: 100%;
  height: 60px;
  box-shadow: ${({ theme }) => theme.commonStyles.boxShadow};
  background-color: ${({ theme }) => theme.colors.boxColor};
`
export const HeaderTitle = styled.h1`
  font-size: ${({ theme }) => theme.fontSizes.medium};
  font-weight: 700;
`
