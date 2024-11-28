import React, { useState } from 'react';
import {
  ButtonContainer,
  MobileIcon,
  MobileLink,
  MobileMenu,
  NavbarContainer,
  NavItems,
  NavLink,
} from './styles';
import CustomButton from '../../common-components/CustomButton';
import { truckSvg } from '../../assets/svgs/truck';
import Logo from '../../common-components/Logo';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <NavbarContainer>
      <Logo />
      <MobileIcon>
        <div
          onClick={() => {
            setIsOpen(!isOpen);
          }}
          style={{ color: 'white' }}
        >
          <button id="btn-hamburger" className={isOpen ? 'animeOpenClose' : ''}>
            <div class="line-1"></div>
            <div class="line-2"></div>
            <div class="line-3"></div>
          </button>
        </div>
      </MobileIcon>
      <NavItems>
        <NavLink href="#AboutMe">About</NavLink>
        <NavLink href="#RecentWork">Recent Work</NavLink>
        <NavLink href="#ExperienceSection">Experience</NavLink>
        <NavLink href="#ClientsAndReviewsSection">Reviews</NavLink>
        <NavLink href="#ContactSection">Contact</NavLink>
      </NavItems>
      <ButtonContainer>
        <CustomButton
          svg={truckSvg}
          text={'Github Profile'}
          type={'link'}
          url={'https://github.com/yusrafatimah'}
          height={35}
          width={150}
          fontSize={'13px'}
          fontWeight={500}
        />
      </ButtonContainer>
      {isOpen && (
        <MobileMenu isOpen={isOpen}>
          <MobileLink
            href="#AboutMe"
            onClick={() => {
              setIsOpen(!isOpen);
            }}
          >
            About
          </MobileLink>
          <MobileLink
            href="#RecentWork"
            onClick={() => {
              setIsOpen(!isOpen);
            }}
          >
            Recent Work
          </MobileLink>

          <MobileLink
            href="#ExperienceSection"
            onClick={() => {
              setIsOpen(!isOpen);
            }}
          >
            Experience
          </MobileLink>
          <MobileLink
            href="#ClientsAndReviewsSection"
            onClick={() => {
              setIsOpen(!isOpen);
            }}
          >
            Reviews
          </MobileLink>
          <MobileLink
            href="#ContactSection"
            onClick={() => {
              setIsOpen(!isOpen);
            }}
          >
            Contact
          </MobileLink>

          <CustomButton
            svg={truckSvg}
            text={'Github Profile'}
            type={'link'}
            url={'https://github.com/yusrafatimah'}
            height={35}
            width={150}
            fontSize={'13px'}
            fontWeight={500}
          />
        </MobileMenu>
      )}
    </NavbarContainer>
  );
};

export default Navbar;
