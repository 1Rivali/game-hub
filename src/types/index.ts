import { ReactNode } from 'react';

export interface Platform {
  id: number;
  name: string;
  slug: string;
}
export interface Game {
  id: number;
  name: string;
  background_image: string;
  parent_platforms: { platform: Platform }[];
  metacritic: number;
}
export interface FetchGamesResponse {
  count: number;
  results: Game[];
}
export interface GameCardProps {
  game: Game;
}
export interface PlatformIconsListProps {
  platforms: Platform[];
}

export interface CriticScoreProps {
  score: number;
}

export interface GameCardContainerProps {
  children: ReactNode;
}

export interface Genre {
  id: number;
  name: string;
}

export interface FetchResponse<T> {
  count: number;
  results: T[];
}
