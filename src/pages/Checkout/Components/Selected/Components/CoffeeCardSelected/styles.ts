import styled from 'styled-components'

export const CoffeeCardSelectedContainer = styled.div`
  width: 23rem;
  height: 5rem;
  display: flex;
  align-self: start;
  justify-content: space-between;
  padding: 0.3rem 0.1rem;

  span {
    color: ${(props) => props.theme['base-text']};
    font-size: 1.2rem;
    font-weight: 700;
  }
`
export const InfoContainer = styled.div`
  width: 16rem;
  height: 4rem;
  display: flex;
  gap: 1rem;

  img {
    width: 4rem;
    height: 4rem;
  }

  p {
    color: ${(props) => props.theme['base-subtitle']};
    font-size: 1.25rem;
  }
`
export const Details = styled.div`
  width: 11rem;
  height: 3.9rem;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`
export const Actions = styled.div`
  width: 10.7rem;
  height: 2rem;
  display: flex;
`
export const Remove = styled.button`
  width: 5.7rem;
  height: 2rem;
  border: none;
  border-radius: 8px;
  background-color: ${(props) => props.theme['base-button']};
  color: ${(props) => props.theme.purple};
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: left;
  gap: 0.2rem;
  padding-left: 0.3rem;

  transition: background-color 0.5s ease-in-out;

  p {
    color: ${(props) => props.theme['base-subtitle']};
    font-size: 0.75rem;
    text-transform: uppercase;
  }

  :hover {
    background-color: ${(props) => props.theme['base-hover']};
  }
  :focus {
    background-color: ${(props) => props.theme['purple-light']};
    box-shadow: 0 0 0 2px ${(props) => props.theme.purple};
  }
`
