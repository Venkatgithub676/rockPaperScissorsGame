import {Component} from 'react'
import Popup from 'reactjs-popup'
import {RiCloseLine} from 'react-icons/ri'
import ScoreBoard from '../ScoreBoard'
import 'reactjs-popup/dist/index.css'

import {
  GameBgCon,
  ChoicesUlCon,
  ChoicesLiItem,
  Buttons,
  ResultCon,
  ImgEl,
  CloseButton,
  PopupBgCon,
  RulesImg,
  ResultImg,
  GameBg,
  WrapperConUl,
  RulesBtn,
  NamesCon,
  OpponentSelfCon,
  Names,
  ResultStatus,
  PlayAgainBtn,
} from './gameViewStyles'

const statusConstants = {
  won: 'YOU WON',
  draw: 'IT IS DRAW',
  lose: 'YOU LOSE',
  initial: 'INITIAL',
}

class GameView extends Component {
  state = {
    score: 0,
    status: statusConstants.initial,
    gameCompleted: false,
    activeId: 0,
    randomId: 0,
  }

  onClickGameBtn = id => {
    const {choicesList} = this.props
    const randomNum = Math.floor(Math.random() * choicesList.length)
    const indexedValue = choicesList.findIndex(each => each.id === id)
    const opponentChoice = choicesList[randomNum].id
    const myChoice = choicesList[indexedValue].id

    if (
      (myChoice === 'ROCK' && opponentChoice === 'SCISSORS') ||
      (myChoice === 'SCISSORS' && opponentChoice === 'PAPER') ||
      (myChoice === 'PAPER' && opponentChoice === 'ROCK')
    ) {
      this.setState(prevState => ({
        score: prevState.score + 1,
        activeId: indexedValue,
        randomId: randomNum,
        status: statusConstants.won,
        gameCompleted: true,
      }))
    } else if (
      (myChoice === 'ROCK' && opponentChoice === 'ROCK') ||
      (myChoice === 'SCISSORS' && opponentChoice === 'SCISSORS') ||
      (myChoice === 'PAPER' && opponentChoice === 'PAPER')
    ) {
      this.setState({
        activeId: indexedValue,
        randomId: randomNum,
        status: statusConstants.draw,
        gameCompleted: true,
      })
    } else {
      this.setState(prevState => ({
        score: prevState.score - 1,
        activeId: indexedValue,
        randomId: randomNum,
        status: statusConstants.lose,
        gameCompleted: true,
      }))
    }
  }

  gameBtns = () => {
    const {choicesList} = this.props

    return (
      <>
        <ChoicesUlCon>
          {choicesList.map(each => {
            const {id, imageUrl} = each

            const clickBtn = () => {
              this.onClickGameBtn(id)
            }
            return (
              <ChoicesLiItem key={id}>
                <Buttons type="button" onClick={clickBtn}>
                  <ImgEl src={imageUrl} />
                </Buttons>
              </ChoicesLiItem>
            )
          })}
        </ChoicesUlCon>
      </>
    )
  }

  playAgain = () => {
    this.setState(prevState => ({
      score: prevState.score,
      activeId: 0,
      randomId: 0,
      status: statusConstants.initial,
      gameCompleted: false,
    }))
  }

  gameOver = () => {
    const {randomId, activeId, status} = this.state
    const {choicesList} = this.props
    console.log(choicesList)

    return (
      <ResultCon>
        <OpponentSelfCon>
          <NamesCon>
            <Names>YOU</Names>
            <ResultImg src={choicesList[activeId].imageUrl} />
          </NamesCon>

          <NamesCon>
            <Names>OPPONENT</Names>
            <ResultImg src={choicesList[randomId].imageUrl} />
          </NamesCon>
        </OpponentSelfCon>
        <ResultStatus>{status}</ResultStatus>
        <PlayAgainBtn onClick={this.playAgain}>Play Again</PlayAgainBtn>
      </ResultCon>
    )
  }

  render() {
    const {score, gameCompleted} = this.state

    const res = gameCompleted ? this.gameOver() : this.gameBtns()

    return (
      <GameBg>
        <GameBgCon>
          <ScoreBoard score={score} />
          <WrapperConUl>{res}</WrapperConUl>
        </GameBgCon>
        <Popup trigger={<RulesBtn>RULES</RulesBtn>} modal>
          {close => (
            <PopupBgCon>
              <CloseButton onClick={() => close()}>
                <RiCloseLine fontSize={20} />
              </CloseButton>
              <RulesImg src="https://assets.ccbp.in/frontend/react-js/rock-paper-scissor/rules-image.png" />
            </PopupBgCon>
          )}
        </Popup>
      </GameBg>
    )
  }
}

export default GameView
