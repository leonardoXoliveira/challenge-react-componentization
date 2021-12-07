import { useEffect, useState } from 'react';

import { Button } from './Button';

import { api } from '../services/api';

import { GenreProps } from '../@types/GenreProps'

import '../styles/sidebar.scss';

interface SideBarProps {
  selectedGenre: GenreProps;
  setSelectedGenre: (value: GenreProps) => void;
}

export function SideBar({ selectedGenre, setSelectedGenre }: SideBarProps) {
  const [genres, setGenres] = useState<GenreProps[]>([]);

  useEffect(() => {
    api.get<GenreProps[]>('genres').then(response => {
      setGenres(response.data);
    });
  }, [])

  function handleClickButton(genre: GenreProps) {
    setSelectedGenre(genre);
  }

  return (
    <nav className="sidebar">
      <span>Watch<p>Me</p></span>

      <div className="buttons-container">
        {genres.map(genre => (
          <Button
            key={String(genre.id)}
            title={genre.title}
            iconName={genre.name}
            onClick={() => handleClickButton(genre)}
            selected={selectedGenre.id === genre.id}
          />
        ))}
      </div>
    </nav>
  )
}