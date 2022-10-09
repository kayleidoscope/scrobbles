import { useState } from 'react';
import styled from 'styled-components';
import { sortByPlaysDescending, getChunkColor, getBlahAtNumPlays, getChunkPercent } from '../util';
import CountInfo from '../CountInfo';

const PlayBarInFlex = styled.div`
  display: flex;
`

const StyledButton = styled.button`
  height: 50px;
  border: none;
  width: ${props => `${props.size}%`};
  background-color: ${props => getChunkColor(props.num)};
`

function NumPlayChunk({size, num, plays}) {
  const [hoverTrue, setHoverTrue] = useState(false);
  const [clickTrue, setClickTrue] = useState(false);
  if (size === 0) {
      return null;
  }
  return (
    <StyledButton size={size} num={num} onClick={() => setClickTrue(!clickTrue)} onMouseOver={() => setHoverTrue(true)} onMouseOut={() => setHoverTrue(false)}>
      {hoverTrue || clickTrue ? <CountInfo  plays={plays} num={num}/> : null}
    </StyledButton>
  )
}

export default function PlayBar({songs, date}) {
    const cleanedSongs = sortByPlaysDescending(songs)
    const mostPlays = cleanedSongs[0].plays;
    let pieces =  Array.from(Array(mostPlays)).map((c, i) => 
      <NumPlayChunk
        plays={getBlahAtNumPlays(i+1, songs)}
        size={getChunkPercent(i+1, songs)}
        num={i+1}
        key={i+1}
        />)
    return (
      <div>
        <h3>{date}</h3>
        <PlayBarInFlex>
            {pieces}
        </PlayBarInFlex>
      </div>
    )
  }
  