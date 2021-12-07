import { useState } from 'react';

import { SideBar } from './components/SideBar';
import { Header } from './components/Header';
import { Content } from './components/Content';

import { GenreProps } from './@types/GenreProps';

import './styles/global.scss';

export function App() {
  const [selectedGenre, setSelectedGenre] = useState({ id: 1, title: 'Ação' } as GenreProps);

  return (
    <div style={{ display: 'flex', flexDirection: 'row' }}>

      <SideBar selectedGenre={selectedGenre} setSelectedGenre={setSelectedGenre} />

      <div className="container">
        <Header title={selectedGenre.title} />

        <Content genreId={selectedGenre.id} />
      </div>
    </div>
  )
}