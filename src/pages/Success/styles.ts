import styled from 'styled-components'

export const SuccessContainer = styled.main`
  width: 100%;
  height: 100vh;
  background-color: ${(props) => props.theme.background};
`
export const SuccessHeader = styled.header`
  width: auto;
  margin: 3rem 0;
  h2 {
    font-family: 'Baloo 2', sans-serif;
    font-size: 2rem;
    color: ${(props) => props.theme['yellow-dark']};
  }

  p {
    color: ${(props) => props.theme['base-subtitle']};
  }
`
export const SuccessBody = styled.body`
  width: auto;
  display: flex;
  justify-content: space-between;
`
export const OrderInfoContainer = styled.div`
  display: flex;
  width: 33rem;
  height: 17rem;
  border-radius: 0.5rem;
  border-top-right-radius: 3rem;
  border-bottom-left-radius: 3rem;
  padding: 1px;
  background: linear-gradient(
    135deg,
    ${(props) => props.theme['yellow-dark']},
    ${(props) => props.theme['purple-dark']}
  );
`
export const OrderInfoContent = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background-color: ${(props) => props.theme.background};
  border-radius: inherit;
  padding: 3rem;
`
export const OrderInfoItem = styled.div`
  width: 100%;
  display: flex;
  gap: 1rem;
`
export const ItemIcon = styled.div`
  width: 2rem;
  height: 2rem;
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${(props) => props.theme.white};
  border-radius: 100%;
`
export const ItemIconLocal = styled(ItemIcon)`
  background-color: ${(props) => props.theme.purple};
`
export const ItemIconTime = styled(ItemIcon)`
  background-color: ${(props) => props.theme.yellow};
`
export const ItemIconPayment = styled(ItemIcon)`
  background-color: ${(props) => props.theme['yellow-dark']};
`

export const ItemText = styled.div``
export const IllustrationContainer = styled.img``
