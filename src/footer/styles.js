import styled from "styled-components";

export const FooterBase = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;

  span {
    font-family: "Roboto", sans-serif;
    font-size: 12px;
    font-style: normal;
    font-weight: 700;
    line-height: 18px;
    letter-spacing: 0.10000000149011612px;
    text-align: right;
    color: #5c5c5c;
  }
`;

export const Icons = styled(FooterBase)`
  width: 15%;
`;
