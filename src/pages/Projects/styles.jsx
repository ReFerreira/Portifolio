import styled from 'styled-components';
import {darken} from 'polished';

export const Container = styled.div`
  background: ${({ theme }) => theme.colors.background};
  margin-left: 1rem;
  width: 100%;
`;



export const ProjectsList = styled.ul`

  display: grid;
  max-width: 100%;
  margin-top: 10px;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  grid-gap: 20px;
  list-style: none;
  color: #191919;
  background: ${({ theme }) => theme.colors.background};

  li {
    display: grid;
    flex-direction: column;
    background: ${({ theme }) => theme.colors.default};
    border-radius: 4px;
    padding: 20px;

    img {
      align-self: center;
      max-width: 100%;
    }

    > strong {
      text-align: center;
      font-size: 1.6rem;
      line-height: 20px;
      color: #333;
      margin: 10px 0;
      /* border-bottom: 1px solid #191919; */
    }

    > span {

      font-size: 1.4rem;
      font-weight: bold;
      margin: 10px 0 20px;
    }

    a {
      text-decoration: none;
      background: #191920;
      color: #fff;
      border: 0;
      border-radius: 4px;
      overflow: hidden;
      margin-top: auto;
      display: flex;
      align-items: center;

      &:hover {
        background: ${darken(0.05, '#191920')}
      }

      div {
        display: flex;
        align-items: center;
        padding: 12px;
        background: rgba(0,0,0,0.1);

        svg {
          margin-right: 5px;
        }
      }

      span {
        flex: 1;
        text-align: center;
        font-weight: bold;
      }
    }
  }
`;