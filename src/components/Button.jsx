import styled from "styled-components";
const Button = styled.a`
  display: inline-block;
  padding: 12px 24px;
  background: #ffcc00;
  color: #121212;
  font-weight: bold;
  text-decoration: none;
  border-radius: 8px;
  transition: all 0.3s ease-in-out;
  cursor: pointer;

  &:hover {
    color: #121212;
    transform: scale(1.05);
  }
`;

export default Button