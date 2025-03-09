import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  /* Importing Google Fonts */
  
  /* Global Reset */
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    scroll-behavior: smooth;
  }

  /* Variables for Colors */
  :root {
    --primary-color: #ffcc00; /* Yellow Accent */
    --background-color: #0c0c0c; /* Dark Background */
    --text-color: #ffffff; /* White Text */
    --card-bg: #1e1e1e; /* Dark Grey Card */
  }

  /* Body Styles */
  body {
    font-family: 'Poppins', sans-serif;
    background-color: var(--background-color);
    color: var(--text-color);
    line-height: 1.6;
  }

  /* Responsive Container */
  .container {
    width: 90%;
    max-width: 1200px;
    margin: auto;
  }

  /* Headings */
  h1, h2, h3, h4, h5, h6 {
    font-weight: 600;
    color: var(--primary-color);
  }

  /* Links */
  a {
    text-decoration: none;
    color: var(--primary-color);
    transition: 0.3s ease-in-out;
  }

  a:hover {
    color: #ffd700; /* Lighter Yellow */
  }

  /* Buttons */
  button {
    background-color: var(--primary-color);
    color: var(--background-color);
    border: none;
    padding: 10px 20px;
    font-size: 1rem;
    font-weight: bold;
    cursor: pointer;
    border-radius: 5px;
    transition: 0.3s ease-in-out;
  }

  button:hover {
    background-color: #ffd700;
  }

  /* Responsive Grid */
  .grid {
    display: grid;
    gap: 20px;
  }

  /* Responsive Adjustments */
  @media (max-width: 1024px) {
    h1 {
      font-size: 2rem;
    }
    .container {
      width: 95%;
    }
  }

  @media (max-width: 768px) {
    h1 {
      font-size: 1.8rem;
    }
    .grid {
      grid-template-columns: 1fr;
    }
  }

  @media (max-width: 480px) {
    h1 {
      font-size: 1.5rem;
    }
    button {
      width: 100%;
    }
  }
`;

export default GlobalStyle;
