import styled from 'styled-components';

export const Skills = styled.ul`
  display: flex;
  align-items: center;
  flex-direction: column;

  strong {
    color: ${({ theme }) => theme.colors.text.primary};
    display: flex;
    align-items: center;
    font-weight: normal;
    font-size: 1.6rem;
    padding-top: 10px;
    margin-bottom: 10px;

    svg {
      margin-right: 10px;
    }
  }

  ul {
    list-style: none;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;

    li {
      margin: 0 5px 10px 0;

      svg {
        width: 35px;
        height: 35px;
        background: ${({ theme }) => theme.colors.secundary};
        border-radius: 50%;
        flex-shrink: 0;
        color: ${({ theme }) => theme.colors.text.secundary};
        margin-right: 10px;
      }
    }
  }
`;
