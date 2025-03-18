import React, { useState } from "react";
import { Link as LinkR } from "react-router-dom";
import styled from "styled-components";
import { Bio } from "../data/constants";
import { MenuRounded } from "@mui/icons-material";

const Nav = styled.div`
  background-color: ${({ theme }) => theme.bg};
  height: 80px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1rem;
  position: sticky;
  top: 0;
  z-index: 10;
  color: white;
`;

const NavbarContainer = styled.div`
  width: 100%;
  max-width: 1200px;
  padding: 0 24px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const NavLogo = styled(LinkR)`
  font-weight: 500;
  font-size: 18px;
  text-decoration: none;
  color: inherit;
`;

const NavItems = styled.ul`
  display: flex;
  align-items: center;
  gap: 32px;
  list-style: none;

  @media screen and (max-width: 768px) {
    display: none;
  }
`;

const NavLink = styled.a`
  color: ${({ theme }) => theme.text_primary};
  font-weight: 500;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  text-decoration: none;
  &:hover {
    color: ${({ theme }) => theme.primary};
  }
`;

const GithubButton = styled.a`
  border: 1px solid ${({ theme }) => theme.primary};
  color: ${({ theme }) => theme.primary};
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 20px;
  cursor: pointer;
  padding: 10px 20px;
  font-size: 16px;
  font-weight: 500;
  transition: all 0.6s ease-in-out;
  text-decoration: none;

  &:hover {
    background: ${({ theme }) => theme.primary};
    color: ${({ theme }) => theme.text_primary};
  }
`;

const MobileIcon = styled.div`
  color: ${({ theme }) => theme.text_primary};
  display: none;

  @media screen and (max-width: 768px) {
    display: block;
  }
`;

const MobileMenu = styled.ul`
  position: absolute;
  top: 80px;
  right: 0;
  width: 100%;
  background: ${({ theme }) => theme.card_light + 99};
  list-style: none;
  padding: 12px 40px 24px;
  border-radius: 0 0 20px 20px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
  opacity: ${({ isOpen }) => (isOpen ? "1" : "0")};
  transform: ${({ isOpen }) => (isOpen ? "translateY(0)" : "translateY(-100%)")};
  transition: all 0.4s ease-in-out;
  z-index: ${({ isOpen }) => (isOpen ? "1000" : "-1000")};
`;

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Nav>
      <NavbarContainer>
        <NavLogo to="/">My Portfolio</NavLogo>

        <MobileIcon onClick={() => setIsOpen(!isOpen)}>
          <MenuRounded style={{ color: "inherit" }} />
        </MobileIcon>

        <NavItems>
          <NavLink href="#About">About</NavLink>
          <NavLink href="#Skills">Skills</NavLink>
          <NavLink href="#Internship">Internship</NavLink>
          <NavLink href="#Projects">Projects</NavLink>
          <NavLink href="#Education">Education</NavLink>
          <NavLink href="#Certifications">Certifications</NavLink>
        </NavItems>

        {isOpen && (
          <MobileMenu isOpen={isOpen}>
            <NavLink onClick={() => setIsOpen(false)} href="#About">
              About
            </NavLink>
            <NavLink onClick={() => setIsOpen(false)} href="#Skills">
              Skills
            </NavLink>
            <NavLink onClick={() => setIsOpen(false)} href="#Internship">
              Internship
            </NavLink>
            <NavLink onClick={() => setIsOpen(false)} href="#Projects">
              Projects
            </NavLink>
            <NavLink onClick={() => setIsOpen(false)} href="#Education">
              Education
            </NavLink>
            <NavLink onClick={() => setIsOpen(false)} href="#Certifications">
              Certifications
            </NavLink>
            <GithubButton href={Bio.github} target="_Blank">
              Github Profile
            </GithubButton>
          </MobileMenu>
        )}

        <GithubButton href={Bio.github} target="_Blank">
          Github Profile
        </GithubButton>
      </NavbarContainer>
    </Nav>
  );
};

export default Navbar;
