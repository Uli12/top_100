import React, { Component } from 'react';
import SongList from './components/SongList'
import SongForm from './components/SongForm'
import { Container, Header } from 'semantic-ui-react';


class App extends Component {

  render() {
    return (
      <Container>
        <Header as='h1'>Billboard</Header>
        <SongForm />
        <SongList />
      </Container>
      
    );
  }
}

export default App;
