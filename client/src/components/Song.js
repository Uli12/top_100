import React, { Component } from 'react';
import axios from 'axios';
import { Button, Input, List } from 'semantic-ui-react';

class Song extends Component {
  state = {  title: [], artist: [] };

  toggleEdit = (cancel = false) => {
    if (cancel)
      this.setState({ song: this.state.song })

      this.setState({ editing: !this.state.editing });
  }

  editSong = () => {
    // make the axios put call to our api to update the characters
    // figure out how to get the updated name of the character
    axios.put(`/api/billboards/:billboard_id/${this.props.song.id}`, { song: { title: this.state.title } })
      .then(res => {
        console.log(res);
        this.toggleEdit();
      })
      .catch(res => {
        console.log(res);
      });
  }

  handleChange = (e) => {
    this.setState({ title: e.target.value });
  }

  render() {
    const { song } = this.state;

    if (this.state.editing)
      return (
        <List.Item>
          <Input type='text' defaultValue={song} onChange={this.handleChange} />
          <Button onClick={() => this.toggleEdit(true)}>Cancel</Button>
          <Button primary onClick={this.editSong}>Save</Button>
        </List.Item>
      );
    else
      return (
        <List.Item onClick={this.toggleEdit}>
          {song}
        </List.Item>
      )};
}

export default Song;


