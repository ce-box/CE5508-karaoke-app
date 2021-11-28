export interface Stats {
  _id: string,
  username: string,
  score: number,
  songId: string
}

export interface StatsDTO {
  songId: string,
  username: string,
  score: number
}

export interface Wiki {
  about: string[],
  genres: string,
  name: string,
}
