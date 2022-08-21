import styled from 'styled-components';
import {darken} from 'polished';

export const Container = styled.div`
  margin-left: 1rem;
  width: 100%;
`;

export const Content = styled.div`
  background: ${({theme}) => theme.colors.primary};
  border-radius: 4px;
  margin-top: 10px;
`;

export const Header = styled.div`
  display: flex;
  align-items: center;
    
  aside {
    max-width: 100%;
    margin-bottom: 10px;
    

    h1 {
    margin: 10px;
    color: ${({theme}) => theme.colors.text.primary};;
    padding: 5px;
    }

    strong {
      margin: 10px;
      font-size: 1.6rem;
      color: ${({theme}) => theme.colors.text.primary};
      padding: 5px;
    }

    p {
      margin-left: 10px;
      font-size: 1.4rem;
      color: ${({theme}) => theme.colors.text.primary};
      padding: 5px;
    }
    
    button { 
      margin: 10px;
      display: flex;
      align-items: center;
      justify-content: center;
      border: 0;
      border-radius: 4px;
      overflow: hidden;
      background: ${({theme}) => theme.colors.text.primary};
      transition: background 0.2s;

      svg {
      color: ${({ theme }) => theme.colors.text.secundary};
    }

      a {
        text-decoration: none;
        color: ${({theme}) => theme.colors.text.secundary};
        margin-left: 1rem;
      }

      &:hover {
        background: ${darken(0.08, '#eee')}
      }

      > span {
        font-size: 1.4rem;
        font-weight: bold;
        margin-right: 5px;
      }

      div {
        display: flex; 
        align-items: center;
        padding: 12px;

        svg {
        border: ${({theme}) => theme.colors.background};
        }
      }
    }    
  }
`;

export const About = styled.div`
  max-width: 100%;

  margin: 10px;
  padding: 5px;
  display: flex;
  align-items: center;

  aside {
    img {
      max-width: 90%;
      border-radius: 4px;
    }
  }

  div.about {
    max-width: 100%;
    p {
    font-size: 1.4rem;
    color: ${({theme}) => theme.colors.text.primary};
    padding: 5px;
    
  }
  }
`;