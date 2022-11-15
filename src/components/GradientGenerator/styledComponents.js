import styled from 'styled-components'

export const AppContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-image: linear-gradient(${props => props.gradientValue});
  min-height: 100vh;
`
export const ResponsiveContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 90%;
  max-width: 550px;

  @media screen and (min-width: 768px) {
    width: 85%;
    max-width: 1140px;
  }
`

export const Heading = styled.h1`
  color: #ededed;
  font-weight: bold;
  text-align: center;
  font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande',
    'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
  font-size: 24px;
  line-height: 1.5;
  @media screen and (min-width: 768px) {
    font-size: 40px;
  }
`

export const SubHeading = styled.p`
  color: #ffffff76;
  font-size: 23px;
  font-weight: 500;
  font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande',
    'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
  line-height: 1.5;
  @media screen and (min-width: 768px) {
    font-size: 33px;
  }
`

export const ButtonsList = styled.ul`
  list-style-type: none;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  padding: 0;
  @media screen and (min-width: 768px) {
    width: 60%;
    max-width: 425px;
  }
`

export const ColorsContainer = styled.div`
  display: flex;
  justify-content: space-between;
  min-width: 300px;
`
export const ColorInputContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`
export const ColorInputLabel = styled.p`
  font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande',
    'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
  font-size: 18px;
  font-weight: 500;
  color: #ededed;
`

export const ColorInput = styled.input`
  width: 100px;
  height: 50px;
  background-color: transparent;
  border: none;
  outline: none;
  cursor: pointer;
`

export const GenerateButton = styled.button`
  border: none;
  outline: none;
  background-color: #009cb7;
  color: #1e293b;
  font-weight: bold;
  padding: 10px 25px 10px 25px;
  margin-top: 20px;
  font-size: 15px;
  border-radius: 10px;
  font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande',
    'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
  letter-spacing: 1px;
  cursor: pointer;
`
