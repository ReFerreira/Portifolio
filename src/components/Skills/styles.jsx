import styled from "styled-components";

export const Skills = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 300px;

  strong {
    color: ${({ theme }) => theme.colors.text.primary};
    display: flex;
    align-items: center;
    justify-content: center;
    font-weight: normal;
    font-size: 1.6rem;
    padding-top: 10px;
    margin-bottom: 10px;

    svg {
      margin-right: 10px;
    }
  }

  ul {
    list-style: square;
    flex-wrap: wrap;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-column-gap: 2rem;
    grid-row-gap: 0.8rem;
    li {
    }
  }
`;
