import MusicRow from '../MusicRow';

const SongRows = ({songs}) => {
    const rows = songs.map((song, i) => (
            <MusicRow
                lastUpdated={song.lu}
                plays={song.plays}
                title={song.title}
                artist={song.artist}
                album={song.album}
                year={song.year}
                key={i}
                />
        )
    )
    return rows;
}

export default function MusicRowsPlural({songs}) {
  return (
    songs[0] ? <SongRows songs={songs} /> : <div>No songs were found with those filters.</div>
  );
}