import MusicTable from './MusicTable';
import PlayDistribution from './PlayDistribution';
import PlaysPerArtist from './PlaysPerArtist';
import styled from 'styled-components';
import { useState } from 'react';

const StyledHeader = styled.header`
  margin-bottom: 40px;
  font-size: 2em;
  text-align: center;
`

const StyledTabs = styled.div`
  margin-bottom: 15px;
  display: flex;
  justify-content: space-around;
`

function App() {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <div className="App">
      <StyledHeader className="header">
          SpotifiTunes
      </StyledHeader>
      <StyledTabs>
        <button type="button" onClick={() => setActiveTab(0)}>THE DATA</button>
        <button type="button" onClick={() => setActiveTab(1)}>Play distribution</button>
        <button type="button" onClick={() => setActiveTab(2)}>Plays per artist</button>
      </StyledTabs>
      {activeTab === 0 ? <MusicTable /> : null}
      {activeTab === 1 ? <PlayDistribution /> : null}
      {activeTab === 2 ? <PlaysPerArtist /> : null}
    </div>
  );
}

export default App;
