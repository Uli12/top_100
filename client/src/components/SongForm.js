import React from 'react';
import { Button, Form } from 'semantic-ui-react';
import axios from 'axios';

class SongForm extends React.Component {
  state = { title: '', artist: '', billboardId: 1 }

handleChange = (e) => {
 const { title, value } = e.target
 this.setState({[title]: value})
}

handleSubmit = (e) => {
  e.preventDefault();
  const { title, artist, nextId } = this.state;
  this.setState({ title: '', artist: '', nextId: nextId + 1 })
  axios.post(`/api/billboards/:billboard_Id/${this.state.songs}`, {...this.state})
}

  render(){
    const {title, artist} = this.state;
    return(

      <Form onSubmit={this.handleSubmit}>
        <Form.Field>
          <label>Title</label>
          <input value={this.state.title} onChange={this.handleChange}
          placeholder='Title' 
          name='title'
          />
        </Form.Field>
        <Form.Field>
          <label>Artist</label>
          <input value={this.state.artist} onChange={this.handleChange}
          placeholder='Artist' 
          name='artist'
          />
        </Form.Field>
        <Button type='submit'>Submit</Button>
      </Form>
    )};
}



export default SongForm;