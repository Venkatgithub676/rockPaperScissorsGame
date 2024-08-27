import styled from 'styled-components'

export const GameBgCon = styled.div`
  min-height: 100vh;
  padding: 0px 100px 0px 100px;
`

export const WrapperConUl = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`
export const ChoicesUlCon = styled.ul`
  list-style-type: none;
  padding: 0;
  width: 50%;
  margin-top: 100px;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
`

export const ChoicesLiItem = styled.li`
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
`
export const GameBg = styled.div`
  padding: 40px;
  background-color: #223a5f;
  display: flex;
  flex-direction: column;
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
`

export const PopupBgCon = styled.div`
  width: 100%;
  height: 500px;
  padding: 20px;
  display: flex;
  flex-direction: column;
  background-color: #ffffff;
  align-items: flex-end;
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

export const ResultStatus = styled.h1`
  font-family: 'Roboto';
  color: #ffffff;
`

export const PlayAgainBtn = styled.button`
  width: 100px;
  height: 35px;
  background-color: #ffffff;
  border: none;
  border-radius: 5px;
  color: #223a5f;

  font-family: 'Bree Serif';
  font-weight: 500;
  cursor: pointer;
`

export const ResultImg = styled(ImgEl)`
  width: 200px;
`
