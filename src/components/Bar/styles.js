import styled from 'styled-components';
import {darken} from 'polished';



export const Nav = styled.div`
  background: #191919;
  width: 100%;
  margin-top: 20px;
  border-radius: 4px;
  padding: 1rem 1.5rem;
  display: flex;
  align-items: center;
  justify-content: space-between;

a {
  padding: 1rem 1.5rem;
  text-decoration: none;
  color: #eee;
  font-size: 1.6rem;
  font-weight: bold;
/* 
  &:hover{
    transition: color 0.2s ${darken(0.03, '#eee')}
  } */
}
`;
 