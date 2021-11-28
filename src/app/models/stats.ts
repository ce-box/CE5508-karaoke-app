export interface Stats {
  _id: string,
  userName: string,
  score: number,
  songId: string
}

export interface StatsDTO {
  songId: string
}

export interface Wiki {
  about: string[],
  genres: string,
  name: string,
}
