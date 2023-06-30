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
  selectedPlatform: Platform | null;
}
export interface PlatformIconsListProps {
  platforms: Platform[];
  selectedPlatform: Platform | null;
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
  image_background: string;
}

export interface FetchResponse<T> {
  count: number;
  results: T[];
}

export interface GenreListProps {
  onSelectGenre: (genre: Genre) => void;
  selectedGenre: Genre | null;
}

export interface GameGridProps {
  gameQuery: GameQuery;
}

export interface Platform {
  id: number;
  name: string;
  slug: string;
}
export interface PlatformSelectorProps {
  onSelectPlatform: (platform: Platform) => void;
  selectedPlatform: Platform | null;
}
export interface GameQuery {
  genre: Genre | null;
  platform: Platform | null;
}
