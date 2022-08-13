import styled from 'styled-components';

export const Container = styled.div`
  background: #000000;
  margin-left: 1rem;
  width: 100%;

`;

export const Content = styled.div`
  max-width: 100%;
  background: #191919;
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
      color: #e6e6e6;
    }

    span {
      font-size: 1.4rem;
      color: #e6e6e6;
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
