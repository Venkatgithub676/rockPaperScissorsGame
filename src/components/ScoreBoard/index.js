import {
  ScoreCon,
  ScoreBoardItemsCon,
  HeadingElements,
  ScoreHeadingAndScore,
  Score,
  BreakEl,
  ScoreHeading,
} from './scoreBoardStyles'

const ScoreBoard = props => {
  const {score} = props

  return (
    <ScoreCon>
      <ScoreBoardItemsCon>
        <HeadingElements>
          Rock <BreakEl /> Paper <BreakEl /> Scissors{' '}
        </HeadingElements>
      </ScoreBoardItemsCon>
      <ScoreHeadingAndScore>
        <ScoreHeading>Score</ScoreHeading>
        <Score>{score}</Score>
      </ScoreHeadingAndScore>
    </ScoreCon>
  )
}

export default ScoreBoard
