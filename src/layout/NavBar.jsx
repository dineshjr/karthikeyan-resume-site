import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { FaBars, FaTimes } from 'react-icons/fa';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Prevent background scrolling when menu is open
  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [menuOpen]);

  return (
    <Nav scrolled={scrolled}>
      <NavContainer scrolled={scrolled}>
        <Logo>Logo</Logo>
        
        <MenuIcon onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? <FaTimes /> : <FaBars />}
        </MenuIcon>

        <NavMenu isOpen={menuOpen}>
          {['About', 'Work', 'Skills', 'Education', 'Contact'].map((item) => (
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
  top: ${props => props.scrolled ? '8px' : '16px'};
  left: 50%;
  transform: translateX(-50%);
  width: 85%;
  z-index: 1000;
  transition: all 0.3s ease-in-out;

  @media (max-width: 768px) {
    width: 92%;
    top: ${props => props.scrolled ? '8px' : '12px'};
  }
`;

const NavContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 16px 32px;
  background: ${props => props.scrolled ? 
    'rgba(20, 20, 20, 0.95)' : 
    'rgba(28, 28, 28, 0.85)'
  };
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

const MenuIcon = styled.div`
  display: none;
  font-size: 1.5rem;
  color: white;
  cursor: pointer;
  transition: color 0.3s ease-in-out;
  z-index: 1001;

  &:hover {
    color: #FDC435;
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
    background: rgba(28, 28, 28, 0.98);
    backdrop-filter: blur(15px);
    flex-direction: column;
    justify-content: center;
    gap: 40px;
    padding: 60px 20px;
    transform: translateX(${props => props.isOpen ? '0' : '100%'});
    transition: transform 0.4s ease-in-out;
  }
`;

const NavItem = styled.a`
  position: relative;
  color: white;
  text-decoration: none;
  font-size: 1.125rem;
  font-weight: 500;
  letter-spacing: 0.5px;
  padding: 8px 16px;
  border-radius: 25px;
  transition: all 0.3s ease-in-out;
  background: transparent;
  border: 2px solid transparent;

  &:hover {
    color: #1c1c1d;
    background: #FDC435;
  }

  &:active {
    transform: translateY(1px);
  }

  @media (max-width: 768px) {
    font-size: 1.5rem;
    font-weight: 600;
    padding: 12px 24px;
    width: auto;
    text-align: center;
    
    &:hover {
      transform: translateY(-2px);
    }
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