import styled from 'styled-components'

export const GameBgCon = styled.div`
  padding: 0px 100px 0px 100px;

  @media screen and (max-width: 576px) {
    padding: 0px 30px 0px 30px;
  }
`

export const WrapperConUl = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`
export const ChoicesUlCon = styled.ul`
  padding: 0;
  width: 50%;
  margin-top: 100px;
  display: flex;

  justify-content: center;
  flex-wrap: wrap;
  @media screen and (max-width: 576px) {
    width: 70%;
  }
`

export const ChoicesLiItem = styled.li`
  list-style-type: none;
  width: 50%;
`
export const Buttons = styled.button`
  background-color: transparent;
  width: 200px;
  border: none;
  cursor: pointer;
`

export const ImgEl = styled.img`
  width: 100%;
  @media screen and (max-width: 576px) {
    width: 80%;
  }
`
export const GameBg = styled.div`
  padding: 40px;
  background-color: #223a5f;
  display: flex;
  flex-direction: column;
  height: 100vh;
  @media screen and (max-width: 576px) {
    padding: 10px;
  }
`

export const RulesBtn = styled.button`
  width: 100px;
  height: 35px;
  background-color: #ffffff;
  border: none;
  border-radius: 5px;
  color: #223a5f;
  align-self: flex-end;
  font-family: 'Bree Serif';
  font-weight: 500;
  cursor: pointer;
  margin-top: 60px;
`

export const PopupBgCon = styled.div`
  width: 100%;
  height: 500px;
  padding: 20px;
  display: flex;
  flex-direction: column;
  background-color: #ffffff;
  align-items: flex-end;
  @media screen and (max-width: 576px) {
    padding: 10px;
    height: 400px;
  }
`
export const RulesImg = styled.img`
  width: 100%;
  height: 430px;
  align-self: center;
  padding: 10px;
`
export const CloseButton = styled.button`
  background-color: transparent;
  border: none;
  padding: 0;
  align-self: right;
  cursor: pointer;
`

export const ResultCon = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 50%;

  margin-top: 50px;
  @media screen and (max-width: 576px) {
    width: 80%;
  }
`
export const OpponentSelfCon = styled.div`
  width: 100%;
  margin-bottom: 40px;
  display: flex;
  justify-content: space-between;
`

export const NamesCon = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`

export const Names = styled.h1`
  font-family: 'Roboto';
  color: #ffffff;
`

export const ResultStatus = styled.p`
  font-family: 'Roboto';
  color: #ffffff;
`

export const PlayAgainBtn = styled(RulesBtn)`
  margin-top: 0;
  align-self: center;
`

export const ResultImg = styled(ImgEl)`
  width: 80%;
`
