import React from 'react';
import Song from './Song';
import axios from 'axios';
import { List } from 'semantic-ui-react'

class SongList extends React.Component {
  state = { songs: [] } 

  displaySongs = () => {
    return this.state.songs.map(song => {
      return (<Song song={song} />);
    });
  }

  render() {
    return (
      <div>
        <h1>Songs</h1>
        <List as='ol'>
          <List.Item as='li'>
              <List bulleted>
                {this.displaySongs()}
              <Song />
              </List>
          </List.Item>
         </List>   
      </div>
    )};
  }



export default SongList;


