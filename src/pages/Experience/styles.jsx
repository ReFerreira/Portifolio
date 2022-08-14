import styled from 'styled-components';

export const Container = styled.div`
  background: ${({ theme }) => theme.colors.background};
  margin-left: 1rem;
  width: 100%;

`;

export const Content = styled.div`
  max-width: 100%;
  background: ${({ theme }) => theme.colors.primary};
  border-radius: 4px;
  margin-top: 10px;

  display: flex;
  align-items: center;
  justify-content: space-between;

    h3 {
      margin-bottom: 5px; 
    }

    strong {
      font-size: 1.6rem;
      color: ${({ theme }) => theme.colors.text.primary};
    }

    span {
      font-size: 1.4rem;
      color: ${({ theme }) => theme.colors.text.primary};
    }
    
    img {
      max-width: 35%;
      margin-left: 30px;
    }

    div.details {
      margin: 10px;
      display: grid;

      article {
        p {
        margin-top: 5px;
        }
    
        ul{
        list-style: none;

          li {
            margin-left:10px;
          }
        }        
      }
    }

`;
