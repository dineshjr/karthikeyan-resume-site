import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { FaBars, FaTimes, FaMoon, FaSun } from "react-icons/fa";
import { useTheme } from "../theme/ThemeProvider";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { theme, toggleTheme } = useTheme();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "unset";
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [menuOpen]);

  return (
    <Nav $scrolled={scrolled}>
      <NavContainer $scrolled={scrolled}>
        <Logo>Logo</Logo>

        {/* <ThemeToggle onClick={toggleTheme}>
          {theme === "dark" ? <FaSun /> : <FaMoon />}
        </ThemeToggle> */}

        <MenuIcon onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? <FaTimes /> : <FaBars />}
        </MenuIcon>

        <NavMenu $isOpen={menuOpen}>
          {["About", "Work", "Skills", "Education", "Contact"].map((item) => (
            <NavItem
              key={item}
              href={`#${item.toLowerCase()}`}
              onClick={() => setMenuOpen(false)}
            >
              {item}
            </NavItem>
          ))}
        </NavMenu>
      </NavContainer>
      {menuOpen && <Overlay onClick={() => setMenuOpen(false)} />}
    </Nav>
  );
};

export default Navbar;

/* Styled Components */
const Nav = styled.nav`
  position: fixed;
  top: ${(props) => (props.$scrolled ? "8px" : "16px")};
  left: 50%;
  transform: translateX(-50%);
  width: 85%;
  z-index: 1000;
  transition: all 0.3s ease-in-out;

  @media (max-width: 768px) {
    width: 92%;
    top: ${(props) => (props.$scrolled ? "8px" : "12px")};
  }
`;

const Logo = styled.div`
  font-size: 1.5rem;
  font-weight: bold;
  color: white;
  cursor: pointer;
  background: linear-gradient(to right, #ffffff, #f0f0f0);
  -webkit-background-clip: text;
  background-clip: text;

  @media (max-width: 768px) {
    font-size: 1.25rem;
  }
`;

const NavContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 16px 32px;
  background: ${(props) => props.theme.navBackground};
  backdrop-filter: blur(12px);
  border-radius: 50px;
  border: 1px solid rgba(255, 255, 255, 0.1);
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.3);
  transition: all 0.3s ease-in-out;

  @media (max-width: 768px) {
    padding: 12px 20px;
    border-radius: 30px;
  }
`;

const ThemeToggle = styled.button`
  background: none;
  border: none;
  color: ${(props) => props.theme.text};
  font-size: 1.5rem;
  cursor: pointer;
  margin-right: 20px;
  transition: color 0.3s ease-in-out;
`;

const MenuIcon = styled.div`
  display: none;
  font-size: 1.5rem;
  color: ${(props) => props.theme.text};
  cursor: pointer;
  transition: color 0.3s ease-in-out;
  z-index: 1001;

  &:hover {
    color: #fdc435;
  }

  @media (max-width: 768px) {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 40px;
    height: 40px;
    border-radius: 50%;
    background: rgba(255, 255, 255, 0.1);
  }
`;

const NavMenu = styled.div`
  display: flex;
  gap: 32px;
  align-items: center;
  transition: all 0.4s ease-in-out;

  @media (max-width: 768px) {
    position: fixed;
    top: 0;
    width: 100%;
    height: 100vh;
    background: ${(props) => props.theme.background};
    backdrop-filter: blur(15px);
    flex-direction: column;
    justify-content: center;
    gap: 40px;
    padding: 60px 20px;
    transform: translateX(${(props) => (props.$isOpen ? "0" : "100%")});
    transition: transform 0.4s ease-in-out;
  }
`;

const NavItem = styled.a`
  color: ${(props) => props.theme.text};
  text-decoration: none;
  font-size: 1.125rem;
  font-weight: 500;
  letter-spacing: 0.5px;
  padding: 8px 16px;
  border-radius: 25px;
  transition: all 0.3s ease-in-out;

  &:hover {
    color: #1c1c1d;
    background: #FDC435;
  }
`;

const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  backdrop-filter: blur(5px);
  z-index: 999;

  @media (max-width: 768px) {
    display: none;
  }
`;