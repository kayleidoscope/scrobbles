
export function getArtistText(artists) {
    if (artists.length === 1) {
      return artists
    } else if (artists.length === 2) {
      return `${artists[0]} and ${artists[1]}`
    } else if (artists.length > 2) {
      var returnValue = "";
      const oxfordLength = artists.length - 1;
      for (let i = 0; i < oxfordLength; i++) {
        returnValue += `${artists[i]}, `
      }
      return `${returnValue} and ${artists[artists.length - 1]}`
    } else {
      return 'Artist unknown.'
    }
  }

  export function artistStringToArray(artists) {
    return artists.split(', ')
  }

  export function getDaysAgo(date) {
    var today = new Date();
    var createdOn = new Date(date);
    var msInDay = 24 * 60 * 60 * 1000;
  
    createdOn.setHours(0,0,0,0);
    today.setHours(0,0,0,0)
  
    var diff = (+today - +createdOn)/msInDay
  
    return diff > 0 ? `${diff} days ago` : 'today';
  }

export function paginate (arr, size) {
  return arr.reduce((acc, val, i) => {
    let idx = Math.floor(i / size)
    let page = acc[idx] || (acc[idx] = [])
    page.push(val)
  
    return acc
  }, [])
}

export function sortByPlaysAscending(songs) {
  return songs.sort((a, b) => a.plays - b.plays);
}

export function sortByPlaysDescending(songs) {
  return songs.sort((a, b) => b.plays - a.plays);
}

export function getBlahAtNumPlays(num, songs) {
  const filteredData = songs.filter(song => song.plays === num);
  return filteredData.length;
}

export function getBlahAtNumPlaysPerArtist(artist, songs) {
  const filteredData = songs.filter(song => song.plays === artist);
  return filteredData.length;
}

export function getChunkPercent(num, songs){
  const part = getBlahAtNumPlays(num, songs)
  const whole = songs.length;
  return (part / whole) * 100;
}

export function getChunkColor(num) {
  switch(num) {
    case 1:
      return '#51CB20';
    case 2:
      return '#30011E';
    case 3:
      return '#639A88';
    case 4:
      return '#3A5683'
    case 5:
      return '#2708A0'
    case 6:
      return '#48E5C2';
    case 7:
      return '#082D0F';
    case 8:
      return '#CE7DA5';
    case 9:
      return '#A30B37'
    case 10:
      return '#16001E'
    case 11:
      return '#FC814A';
    case 12:
      return '#FFF05A';
    case 13:
      return '#A7E8BD';
    case 14:
      return '#9067C6'
    case 15:
      return '#231942'
    case 16:
      return '#F4AFB4';
    case 17:
      return '#F4AC45';
    case 18:
      return '#23F0C7';
    case 19:
      return '#7D7ABC'
    case 20:
      return '#04773B'
    case 21:
      return '#8B1E3F';
    case 22:
      return '#BB4430';
    case 23:
      return '#FFC857'
    case 24:
      return '#A7E8BD'
    case 25:
      return '#000000';
    case 26:
      return '#747578';
    case 27:
      return '#F9CFF2';
    case 28:
      return '#FF3CC7'
    case 29:
      return '#C2E812'
    default:
      return 'blue';
  }
}