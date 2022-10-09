import { useState, useEffect } from 'react';
import styled from 'styled-components';
import MusicRowsPlural from '../MusicRowsPlural';
import { artistStringToArray, paginate } from '../util';
import songData from '../data-10082022.json';

for (let i = 0; i < songData.songs.length; i++) {
  songData.songs[i].artist = artistStringToArray(songData.songs[i].artist)
}

const StyledFrozenRow = styled.div`
    display: grid;
    grid-template-columns: 2fr 1fr 5fr 3fr 3fr 1fr;
`

const StyledPageNumbers = styled.div`
  margin-top: 25px;
  display: flex;
  justify-content: space-between;
`

function ArtistFilter({artist, onClick}) {
    return (
      <div>
        <div>{artist}</div>
        <button onClick={() => onClick(artist)}>X</button>
      </div>
    )
}

function getArtistFilterThingies(filteredArtists, onClick) {
  return filteredArtists.map((artist, i) => {
    return <ArtistFilter artist={artist} onClick={onClick} key={`${artist}${i}`} />
  })
}

function PageNumbers({songsOnPage, setPageNumber}){
  const numbers = paginate(songsOnPage, 100).map((page, i) => {
    return <button onClick={() => setPageNumber(i)}>{i + 1}</button>
  })
  return (
    <StyledPageNumbers>
      {numbers}
    </StyledPageNumbers>
  )
}

export default function MusicTable() {
  const [songsInState, setSongs] = useState(songData.songs)
  const [artistFilterString, setArtistFilterString] = useState("");
  const [filteredArtists, setFilteredArtists] = useState([]);
  const [pageNumber, setPageNumber] = useState(0);

  useEffect(() => {
    let list = songData.songs;
    for (const thisArtist of filteredArtists) {
      list = list.filter(song => song.artist.some(a => a.toLowerCase() === thisArtist.toLowerCase()));
    }
    setSongs(list)
  }, [filteredArtists])


  function addArtistFilter(e, artistFilterString) {
    e.preventDefault()
    setFilteredArtists([...filteredArtists, artistFilterString]);
    setArtistFilterString("");
  }

  function removeArtistFilter(artist) {
    const newList = filteredArtists.filter(item => item !== artist)
    setFilteredArtists(newList)
    setPageNumber(0)
  }

  function handleArtistFilterChange(e) {
    setArtistFilterString(e.target.value);
  }

  return (
    <div className="MusicTable">
      <form onSubmit={(e) => addArtistFilter(e, artistFilterString)}>
        <label htmlFor="filter-by-artist">Filter by artist: </label>
        <input type="text" id="filter-by-artist" name="artist-filter" value={artistFilterString} onChange={handleArtistFilterChange} />
        <button>Submit</button>
      </form>
      {filteredArtists[0] ? getArtistFilterThingies(filteredArtists, removeArtistFilter) : null }
      <StyledFrozenRow className="FrozenRow">
        <div>Last Updated</div>
        <div>Plays</div>
        <div>Title</div>
        <div>Artist</div>
        <div>Album</div>
        <div>Year</div>
      </StyledFrozenRow>
      <MusicRowsPlural songs={paginate(songsInState, 100)[pageNumber]}/>
      <PageNumbers songsOnPage={songsInState} setPageNumber={setPageNumber} />
    </div>
  );
}