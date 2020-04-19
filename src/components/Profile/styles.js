import styled from 'styled-components';


export const Content = styled.div`
  width: 90%;
  max-width: 260px;
  display: flex;
  margin-top: 20px;
  margin-right: 2rem;

  aside.profile {
   
    background: #191919;
    width: 260px;
    align-items: center;
    border-radius: 20px;
  }


`;

export const Perfil = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  img {
    margin: 10px 30px;
    width: 200px;
    height: 200px;
    border-radius: 50%;
    border: 3px solid #fff;
  }

  h1 {
    font-size: 2.1rem;
    color: #eee;
  }

  span {
      font-size: 1.6rem;
      color: #eee;
      margin-bottom: 10px;
  }

  p {
    font-size: 1.4rem;
    color: #fff;
  }
`;

export const List = styled.ul`
  margin: 20px;
  list-style: none;

  li {
    font-size: 1.4rem;
    color: #eee;
    display: flex;
    align-items: center;
    margin: 5px;

    svg {
      margin-right: 5px;
    }

    a {
      color: #eee;
      text-decoration:none;
    }
  }
`;

export const Skills = styled.ul`
  display: flex;
  align-items: center;
  flex-direction: column;
  
  strong {
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
        background: #D0D5D9;
        border-radius: 50%;
        flex-shrink: 0;
        color: #191920;
        margin-right: 10px;


      }
    }
  }
`;
