export interface LyricLRC {
  ti: string;
  ar: string;
  lines: LineLRC[];
}

export interface LineLRC {
  content: string;
  timestamp: number;
}

export interface Line {
  index: number;
  text: string;
}
