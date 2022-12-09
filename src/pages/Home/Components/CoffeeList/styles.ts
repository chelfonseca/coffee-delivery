import styled from 'styled-components'

export const CoffeeListContainer = styled.main`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`
export const CoffeeListHeader = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  h2 {
    font-family: 'Baloo 2', sans-serif;
    font-size: 2rem;
    color: ${(props) => props.theme['base-subtitle']};
  }
`
export const CoffeeFilter = styled.div`
  display: flex;
  gap: 0.5rem;

  /* button {
    border-radius: 2rem;
    padding: 0.35rem 0.5rem;
    font-size: 0.75rem;
    font-weight: 700;
    background-color: ${(props) => props.theme.background};
    color: ${(props) => props.theme['yellow-dark']};
    border: 2px solid ${(props) => props.theme['yellow-dark']};
  } */
`
interface CoffeeFilterButtonProps {
  isActive: boolean
}
export const CoffeeFilterButton = styled.button<CoffeeFilterButtonProps>`
  border-radius: 2rem;
  padding: 0.35rem 0.5rem;
  font-size: 0.75rem;
  font-weight: 700;
  background-color: ${(props) =>
    props.isActive ? props.theme.yellow : props.theme.background};
  color: ${(props) => props.theme['yellow-dark']};
  border: 2px solid ${(props) => props.theme['yellow-dark']};
  text-transform: uppercase;
`
export const CoffeeListItems = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  gap: 2rem;
  padding: 4rem 0 8rem 0;
  flex-wrap: wrap;
  justify-content: center;
`
