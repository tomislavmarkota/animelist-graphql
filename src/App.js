import './App.css'
import "bootswatch/dist/cyborg/bootstrap.min.css"
import {ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Characters from './components/Characters'
import CharacterInfo from './components/CharacterInfo'


const client = new ApolloClient({
  uri: 'https://graphql.anilist.co/',
  cache: new InMemoryCache()
});



function App() {
  return (
    <ApolloProvider client={client}>
      <Router>
        <div className='container'> 
        <Routes>
          <Route  path='/' element={<Characters />}/>
          <Route path='/characterinfo/:id' element={<CharacterInfo />} />
        </Routes>
        </div> 
      </Router>
    </ApolloProvider>
  );
}

export default App;
