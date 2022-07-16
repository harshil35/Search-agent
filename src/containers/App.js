import React,{Component} from 'react';
import CardList from '../components/CardList';
import Searchbox from '../components/Searchbox'
import './App.css'
import Scroll from '../components/Scroll' 

class App extends Component{
  constructor()
  {
    super();
    this.state={
      characters: [],
      searchfield: ''
    }
  }

  componentDidMount(){
    fetch('https://jsonplaceholder.typicode.com/users')
  .then(response => response.json())
  .then(json => this.setState({characters:json}))
  }
  onSearchChange=(event)=>{
    this.setState({searchfield: event.target.value});
    }
  render(){
    const filterCharacters= this.state.characters.filter(character=>{
    return character.name.toLowerCase().includes(this.state.searchfield.toLowerCase())})
    if(this.state.characters.length===0)
      return <h1>Loading...</h1>
    else
    return (
      <div className='tc'>
        <h1>Among Us</h1>
        <Searchbox searchChange={this.onSearchChange}/>
        <Scroll>
          <CardList robots={filterCharacters}/>
        </Scroll>
        <div className='quotes'>
          
        </div>
      </div>
    );
  }
}
export default App;