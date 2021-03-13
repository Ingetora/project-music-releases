import React from 'react'
import data from './data.json'
import { Album } from './components/Album'
import { Artist } from './components/Artist'

const albums = data.albums.items;

export const App = () => {
  return ( 
    <>
    <header>
      <h1>New albums &amp; singles</h1>
    </header>
    <div className = "main"> {
      albums.map((album) => { 
        return <Album
        key = {album.name}
        albumLink = {album.external_urls.spotify}
        cover = {album.images[1].url}
        title = {album.name}
        artistName = {album.artists.map((artist) => ( 
          <Artist
          key = {artist.name}
          artistName = {artist.name}
          artistLink = {artist.external_urls.spotify}
          />
      ))}
        />
      })
    } 
    
    </div>
    </>
  )
}