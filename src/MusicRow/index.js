import styled from 'styled-components';
import { getArtistText, getDaysAgo } from '../util';

const StyledRow = styled.div`
    display: grid;
    grid-template-columns: 2fr 1fr 5fr 3fr 3fr 1fr;
`

export default function MusicRow({lastUpdated, plays, title, artist, album, year}) {
  const artistText = getArtistText(artist)

  return (
    <StyledRow className="Row">
        <div>{getDaysAgo(lastUpdated)}</div>
        <div>{plays}</div>
        <div>{title}</div>
        <div>{artistText}</div>
        <div>{album}</div>
        <div>{year}</div>
    </StyledRow>
  );
}