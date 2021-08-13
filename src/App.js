import React from 'react';
import Navbar from './Navbar';
import Filter from './Filter';
import Search from './Search';
import Table from './Table';
class App extends React.Component{

  state = {
    movies:[],
    genres:[],
    selectedFilter:""
  }

  handleFilters=(filterName)=>{
    this.setState({selectedFilter: filterName})
  }

  handleLiked=(sel_id)=>{
    console.log(sel_id);
    let idx = this.state.movies.findIndex((el)=>{
      return el._id == sel_id;
    });
  
    let currState = this.state.movies.map((el) =>{
      return el;
    });

    if(!currState[idx].liked){
      currState[idx].liked = true;
    }
    else{
      currState[idx].liked = false;
    }
    this.setState({movies: currState});
  }

  componentDidMount = ()=>{
    let f = async()=>{
      let moviesResponse = await fetch("/movies");
      let genreResponse = await fetch("/genre")
      
      let allMovies = await moviesResponse.json();
      let allGenres = await genreResponse.json();

      this.setState({
        movies: allMovies,
        genres: allGenres,
        selectedFilter: "AllGenres"
      })
    }
    f();
  }

  render = ()=>{
    return(
      <div>
        <Navbar />
        <div className="container-fluid">
          <div className="row">
            <div className="col-3">
              <Filter handleFilters={this.handleFilters} selectedFilter={this.state.selectedFilter} genresData={this.state.genres} />
            </div>
            <div className="col-9">
            <Search />
            <div className="row">
              <div className="col-10">
                <Table selectedFilter={this.state.selectedFilter} handleLiked={this.handleLiked} moviesData={this.state.movies} />
              </div>
            </div>
          </div>
          </div>
        </div>
      </div>
    )
  }
}

export default App;
