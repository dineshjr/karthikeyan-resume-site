import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  /* CSS Reset and Base Styles */
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    scroll-behavior: smooth;
  }

  /* Set font size based on viewport width for fluid typography */
  html {
    font-size: 16px;
    scroll-padding-top: 70px; /* For fixed headers - adjust based on your header height */

    /* Responsive font scaling */
    @media (max-width: 1200px) {
      font-size: 15px;
    }
    @media (max-width: 768px) {
      font-size: 14px;
    }
    @media (max-width: 480px) {
      font-size: 13px;
    }
  }

  body {
    font-family: 'Poppins', sans-serif;
    background-color: ${(props) => props.theme.background};
    color: ${(props) => props.theme.text};
    transition: background-color 0.3s ease-in-out, color 0.3s ease-in-out;
    line-height: 1.6;
    overflow-x: hidden; /* Prevent horizontal scrolling */
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  /* Responsive Typography */
  h1 {
    font-size: 2.5rem;
    line-height: 1.2;
    margin-bottom: 1rem;
  }

  h2 {
    font-size: 2rem;
    line-height: 1.3;
    margin-bottom: 0.8rem;
  }

  h3 {
    font-size: 1.75rem;
    line-height: 1.4;
    margin-bottom: 0.7rem;
  }

  h4 {
    font-size: 1.5rem;
    line-height: 1.4;
    margin-bottom: 0.6rem;
  }

  h5 {
    font-size: 1.25rem;
    line-height: 1.4;
    margin-bottom: 0.5rem;
  }

  h6 {
    font-size: 1rem;
    line-height: 1.4;
    margin-bottom: 0.5rem;
  }

  h1, h2, h3, h4, h5, h6 {
    font-weight: 600;
    color: ${(props) => props.theme.primary};
    word-wrap: break-word; /* Ensure text wraps for long words */
  }

  p {
    margin-bottom: 1rem;
    max-width: 70ch; /* Improve readability on large screens */
  }

  /* Links & Buttons */
  a {
    text-decoration: none;
    color: ${(props) => props.theme.primary};
    transition: color 0.3s ease-in-out;
  }

  a:hover {
    color: #ffd700;
  }

  button, .button {
    background-color: ${(props) => props.theme.primary};
    color: ${(props) => props.theme.background};
    border: none;
    padding: 0.75rem 1.5rem;
    font-size: 1rem;
    font-weight: bold;
    cursor: pointer;
    border-radius: 5px;
    transition: all 0.3s ease-in-out;
    display: inline-block;
    text-align: center;
  }

  button:hover, .button:hover {
    background-color: #ffd700;
    transform: translateY(-2px);
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  }

  button:active, .button:active {
    transform: translateY(0);
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  }

  /* Layout Helpers */
  .container {
    width: 100%;
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 1.5rem;
  }

  .grid {
    display: grid;
    gap: 1.25rem;
    grid-template-columns: repeat(12, 1fr);
  }
  
  .flex {
    display: flex;
    gap: 1.25rem;
  }

  /* Images and Media */
  img, video, canvas, svg {
    max-width: 100%;
    height: auto;
    display: block;
  }

  /* Form Elements */
  input, textarea, select {
    font-family: inherit;
    font-size: 1rem;
    padding: 0.75rem;
    border-radius: 5px;
    border: 1px solid ${(props) => props.theme.border || '#ddd'};
    background-color: ${(props) => props.theme.inputBg || props.theme.background};
    color: ${(props) => props.theme.text};
    width: 100%;
    transition: border-color 0.3s ease-in-out;
  }

  input:focus, textarea:focus, select:focus {
    outline: none;
    border-color: ${(props) => props.theme.primary};
    box-shadow: 0 0 0 3px rgba(255, 215, 0, 0.2);
  }

  /* Utility Classes */
  .text-center { text-align: center; }
  .text-right { text-align: right; }
  .text-left { text-align: left; }
  .mt-1 { margin-top: 0.5rem; }
  .mt-2 { margin-top: 1rem; }
  .mt-3 { margin-top: 1.5rem; }
  .mt-4 { margin-top: 2rem; }
  .mb-1 { margin-bottom: 0.5rem; }
  .mb-2 { margin-bottom: 1rem; }
  .mb-3 { margin-bottom: 1.5rem; }
  .mb-4 { margin-bottom: 2rem; }
  .py-1 { padding-top: 0.5rem; padding-bottom: 0.5rem; }
  .py-2 { padding-top: 1rem; padding-bottom: 1rem; }
  .py-3 { padding-top: 1.5rem; padding-bottom: 1.5rem; }
  .py-4 { padding-top: 2rem; padding-bottom: 2rem; }
  .px-1 { padding-left: 0.5rem; padding-right: 0.5rem; }
  .px-2 { padding-left: 1rem; padding-right: 1rem; }
  .px-3 { padding-left: 1.5rem; padding-right: 1.5rem; }
  .px-4 { padding-left: 2rem; padding-right: 2rem; }

  /* Screen Reader Only */
  .sr-only {
    position: absolute;
    width: 1px;
    height: 1px;
    padding: 0;
    margin: -1px;
    overflow: hidden;
    clip: rect(0, 0, 0, 0);
    border: 0;
  }

  /* Media Queries - Major Breakpoints */
  @media (max-width: 1200px) {
    .container {
      max-width: 1000px;
    }
    
    h1 { font-size: 2.3rem; }
    h2 { font-size: 1.8rem; }
    h3 { font-size: 1.6rem; }
  }

  @media (max-width: 992px) {
    .container {
      max-width: 768px;
    }
    
    h1 { font-size: 2.1rem; }
    h2 { font-size: 1.7rem; }
    h3 { font-size: 1.5rem; }

    /* Adjusting grid for tablet */
    .grid {
      grid-template-columns: repeat(6, 1fr);
    }
  }

  @media (max-width: 768px) {
    .container {
      max-width: 100%;
    }
    
    h1 { font-size: 1.9rem; }
    h2 { font-size: 1.6rem; }
    h3 { font-size: 1.4rem; }

    /* Stack flex items on mobile */
    .flex {
      flex-direction: column;
    }

    /* Single column grid for mobile */
    .grid {
      grid-template-columns: 1fr;
    }
    
    /* Full width buttons on mobile */
    button, .button {
      padding: 0.75rem 1rem;
      width: 100%;
    }
  }

  @media (max-width: 480px) {
    h1 { font-size: 1.7rem; }
    h2 { font-size: 1.5rem; }
    h3 { font-size: 1.3rem; }
    
    .container {
      padding: 0 1rem;
    }
  }

  /* Improve accessibility */
  *:focus-visible {
    outline: 3px solid ${(props) => props.theme.primary};
    outline-offset: 2px;
  }

  /* Print styles */
  @media print {
    body {
      background-color: #fff !important;
      color: #000 !important;
    }
    
    a {
      color: #000 !important;
      text-decoration: underline;
    }
    
    button, .button {
      display: none;
    }
  }
`;

export default GlobalStyle;