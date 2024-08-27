import {Component} from 'react'
import ScoreBoard from '../ScoreBoard'
import {
  GameBgCon,
  ChoicesUlCon,
  ChoicesLiItem,
  Buttons,
  ImgEl,
  WrapperConUl,
} from './gameViewStyles'

class GameView extends Component {
  render() {
    const {choicesList} = this.props

    return (
      <GameBgCon>
        <ScoreBoard />
        <WrapperConUl>
          <ChoicesUlCon>
            {choicesList.map(each => (
              <ChoicesLiItem id={each.id}>
                <Buttons>
                  <ImgEl src={each.imageUrl} />
                </Buttons>
              </ChoicesLiItem>
            ))}
          </ChoicesUlCon>
        </WrapperConUl>
      </GameBgCon>
    )
  }
}

export default GameView
