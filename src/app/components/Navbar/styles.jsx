import { styled } from '@mui/material';

export const NavbarContainer = styled('div')`
  background-color: ${({ theme }) => theme.palette.background.nav};
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 60px;
  z-index: 100;
  width: 100%;
  padding: 0;
`;

export const ThemeButton = styled('div')`
  color: ${({ theme }) => theme.palette.primary.main};
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 20px 0 0;
  ${props => props.theme.breakpoints.down(769)} {
    padding: 0 70px 0 0;
  }
`;

export const NavLogo = styled('div')`
  padding: 0 0 0 25px;
  transform: scale(0.75);
  display: flex;
  justify-content: start;
  align-items: center;
  text-decoration: none;
  position: relative;
  @media (max-width: 640px) {
    padding: 0 0px;
  }
`;

export const SpanTitle = styled('div')`
  position: relative;
  // background: #02c6b3;
  aspect-ratio: cos(30deg);
  clip-path: polygon(-50% 50%, 50% 100%, 150% 50%, 50% 0);
  border: 4px solid ${({ theme }) => theme.palette.text.neon};
  height: 60px;
  width: 60px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Span = styled('div')`
  font-weight: bold;
  font-size: 39px;
  color: #fff;
  font-family: system-ui;
`;
export const Divider = styled('div')`
  background: ${({ theme }) => theme.palette.background.logo};
  font-family: 'Rubik';
  letter-spacing: 1px;
  font-weight: 600;
  width: 52.27px;
  height: fit-content;
  position: absolute;
  top: 25px;
  left: 0;
  color: white;
  font-size: 7px;
  display: flex;
  align-items: center;
  justify-content: center;
  letter-spacing: 0px;
`;

export const NavItems = styled('ul')`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 32px;
  padding: 0 6px;
  list-style: none;
  @media screen and (max-width: 768px) {
    display: none;
  }
`;

export const NavLink = styled('a')`
  color: ${({ theme }) => theme.palette.text.primary};
  font-weight: 400;
  font-size: 14px;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  text-decoration: none;
  &:hover {
    color: #02c6b3;
  }
`;
export const NavLinkBold = styled('a')`
  color: ${({ theme }) => theme.palette.text.primary};
  font-weight: 600;
  font-size: 14px;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  text-decoration: none;
  &:hover {
    color: #02c6b3;
  }
`;

export const ButtonContainer = styled('div')`
  height: 100%;
  display: flex;
  justify-content: end;
  align-items: center;
  padding: 0 25px 0 0;
  @media screen and (max-width: 768px) {
    display: none;
  }
`;

export const MobileIcon = styled('div')`
  display: none;
  @media screen and (max-width: 768px) {
    display: block;
    position: absolute;
    top: 10px;
    right: 10px;
    font-size: 1.5rem;
    cursor: pointer;
    color: ${({ theme }) => theme.text_primary};
  }
  #btn-hamburger {
    border: none;
    outline: 0;
    background: ${({ theme }) => theme.palette.background.hamburger};
    border-radius: 3px;
    padding: 0.6em;
    cursor: pointer;
    .line-1,
    .line-2,
    .line-3 {
      width: 22px;
      height: 2px;
      background-color: ${({ theme }) => theme.palette.text.neon};
      margin: 4px 0;
      transition: 0.4s;
    }
    &.animeOpenClose .line-1 {
      -webkit-transform: rotate(-45deg) translate(-4px, 4px);
      transform: rotate(-45deg) translate(-4px, 4px);
    }
    &.animeOpenClose .line-2 {
      opacity: 0;
    }
    &.animeOpenClose .line-3 {
      -webkit-transform: rotate(45deg) translate(-4px, -4px);
      transform: rotate(45deg) translate(-4px, -4px);
    }
  }
`;

export const MobileMenu = styled('div')`
  padding: 25px 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 16px;
  position: absolute;
  top: 80px;
  right: 0;
  width: 100%;
  background: #19192499;
  transition: all 0.6s ease-in-out;
  transform: ${({ isOpen }) =>
    isOpen ? 'translateY(0)' : 'translateY(-100%)'};
  border-radius: 0 0 20px 20px;
  box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.2);
  opacity: ${({ isOpen }) => (isOpen ? '100%' : '0')};
  z-index: ${({ isOpen }) => (isOpen ? '1000' : '-1000')};
`;

export const MobileMenuItems = styled('ul')`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 32px;
  list-style: none;
  width: 100%;
  height: 100%;
`;

export const MobileMenuLink = styled('div')`
  color: ${({ theme }) => theme.text_primary};
  font-weight: 500;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  text-decoration: none;
  :hover {
    color: ${({ theme }) => theme.primary};
  }

  &.active {
    border-bottom: 2px solid ${({ theme }) => theme.primary};
  }
`;

export const MobileMenuButton = styled('a')`
  border: 1.8px solid ${({ theme }) => theme.primary};
  justify-content: center;
  display: flex;
  align-items: center;
  height: 70%;
  border-radius: 20px;
  color: ${({ theme }) => theme.primary};
  cursor: pointer;
  padding: 0 20px;
  font-weight: 500;
  text-decoration: none;
  font-size: 16px;
  margin: 0 15px;
  transition: all 0.6s ease-in-out;
  :hover {
    background: ${({ theme }) => theme.primary};
    color: ${({ theme }) => theme.white};
  }
`;

export const MobileLink = styled('a')`
  color: white;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  padding: 0 15px;
  text-decoration: none;
  &:hover {
    color: #07eeba;
  }
`;

export const MobileNavLogo = styled('div')`
  width: 80%;
  padding: 0 6px;
  display: flex;
  justify-content: start;
  align-items: center;
  text-decoration: none;
  @media (max-width: 640px) {
    padding: 0 0px;
  }
`;
