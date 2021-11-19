export interface Song {
  _id: string,
  name: string,
  artist: string,
  album: string,
  cover: string,
  url: string,
  lyrics: string
}

export interface SongDTO extends Omit<Song, '_id'>{

}
