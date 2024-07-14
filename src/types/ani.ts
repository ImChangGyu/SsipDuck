export type VariableType = 'popular' | 'trend' | 'upcoming' | 'movie';

export interface AniItemType {
  id: number;
  coverImage: { extraLarge: string };
  description: string;
  endDate: {
    year: number;
    month: number;
    day: number;
  };
  genres: string[];
  siteUrl: string;
  startDate: {
    year: number;
    month: number;
    day: number;
  };
  studios: {
    nodes: [
      {
        name: string;
      }
    ];
  };
  title: {
    native: string;
    romaji: string;
  };
}
