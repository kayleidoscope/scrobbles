import songData1 from '../data-09302022.json';
import songData2 from '../data-10082022.json';
import PlayCountBar from '../PlayCountBar';
import styled from 'styled-components';

const PlayBarContainer = styled.div`
  width: 90%;
  margin: 25px auto;
`

export default function PlayDistribution({songs}) {
  return (
    <div className="PlayDistribution">
      <PlayBarContainer>
        <PlayCountBar songs={songData2.songs} date={songData2.date} />
        <PlayCountBar songs={songData1.songs} date={songData1.date} />
      </PlayBarContainer>
    </div>
  );
}