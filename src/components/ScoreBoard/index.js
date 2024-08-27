import {
  ScoreCon,
  ScoreBoardItemsCon,
  HeadingElements,
  ScoreHeadingAndScore,
  Score,
  ScoreHeading,
} from './scoreBoardStyles'

const ScoreBoard = props => {
  const {score} = props

  return (
    <ScoreCon>
      <ScoreBoardItemsCon>
        <HeadingElements>Rock</HeadingElements>
        <HeadingElements>Paper</HeadingElements>
        <HeadingElements>Scissors</HeadingElements>
      </ScoreBoardItemsCon>
      <ScoreHeadingAndScore>
        <ScoreHeading>Score</ScoreHeading>
        <Score>{score}</Score>
      </ScoreHeadingAndScore>
    </ScoreCon>
  )
}

export default ScoreBoard
