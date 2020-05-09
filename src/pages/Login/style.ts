import styled from "styled-components";

export const LoginBox = styled.section`
  position: absolute;
  top: 10%;
  left: 45%;
  width: 420px;
  margin: 0 auto;
  margin-left: -160px;
  background: rgba(255, 255, 255, 0.8);
  border-radius: 12px;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.15);
  overflow: hidden;
  transition: 0.5s all;

  &:hover {
    transform: scale(1.02);
    transition: 0.5s all;
    box-shadow: 0 20px 80px rgba(0, 0, 0, 0.3);
  }
`;

export const LoginHeader = styled.header`
  background: rgb(46, 78, 95);
  background-image:
    linear-gradient(
      to bottom,
      rgb(46, 78, 95),
      rgba(46, 78, 95, 1)
    );
  padding: 30px;
  text-align: center;
  color: #fff;
  text-shadow: 0 2px 2px rgba(0, 0, 0, 0.2);
  box-shadow:
    inset 0 -1px rgba(255, 255, 255, 0.8),
    0 4px rgba(0, 0, 0, 0.06),
    inset 0 4px rgba(255, 255, 255, 0.2),
    inset 0 2px 2px rgba(255, 255, 255, 0.2);
`;

export const LoginHeaderTitle = styled.h1`

  font-size: 2em;
  margin-bottom: 0.5em;
`;

export const LoginHeaderSubTitle = styled.h1`

  font-size: 1em;
  margin-bottom: 0.5em;
`;

export const LoginIcon = styled.img`

  width: 500px;
  fill: #fff;
  -webkit-filter: drop-shadow(0 2px 2px rgba(0, 0, 0, 0.2));
  filter: drop-shadow(0 2px 2px rgba(0, 0, 0, 0.2));
`;

export const LoginSign = styled.span`

  text-decoration: none;
  color: #a8ff67;
`;

export const LoginContent = styled.div`

  padding: 20px;
`;
