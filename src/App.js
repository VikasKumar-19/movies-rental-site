import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Navbar from './Navbar';
import Filter from './Filter';
import Search from './Search';
import Table from './Table';
import Login from './Login';
import Customers from './Customers';
import Rentals from './Rentals';

class App extends React.Component {

  state = {
    movies: [],
    genres: [],
    selectedFilter: "",
    search: ""
  }

  updateSearch = (searchString) => {
    this.setState({ search: searchString });
  }

  handleFilters = (filterName) => {
    this.setState({ selectedFilter: filterName })
  }

  handleLiked = (sel_id) => {

    let idx = this.state.movies.findIndex((el) => {
      return el._id == sel_id;
    });

    let currState = this.state.movies;

    if (currState[idx].liked) {
      currState[idx].liked = false;
    }
    else {
      currState[idx].liked = true;
    }

    this.setState({ movies: currState });
  }

  handleDelete = (sel_id) => {

    let currState = this.state.movies;

    let filteredMovies = currState.filter((el) => {
      if (sel_id !== el._id) {
        return true;
      }
    })

    this.setState({ movies: filteredMovies });
  }

  componentDidMount = () => {
    let f = async () => {
      // let moviesResponse = await fetch("/movies");
      // let genreResponse = await fetch("/genre")

      // let allMovies = await moviesResponse.json();
      // let allGenres = await genreResponse.json();

      this.setState({
        movies: [{ "_id": "5b21ca3eeb7f6fbccd471815", "title": "Terminator", "genre": { "_id": "5b21ca3eeb7f6fbccd471818", "name": "Action" }, "numberInStock": 6, "dailyRentalRate": 2.5 }, { "_id": "5b21ca3eeb7f6fbccd471816", "title": "Die Hard", "genre": { "_id": "5b21ca3eeb7f6fbccd471818", "name": "Action" }, "numberInStock": 5, "dailyRentalRate": 2.5 }, { "_id": "5b21ca3eeb7f6fbccd471817", "title": "Get Out", "genre": { "_id": "5b21ca3eeb7f6fbccd471820", "name": "Thriller" }, "numberInStock": 8, "dailyRentalRate": 3.5 }, { "_id": "5b21ca3eeb7f6fbccd471819", "title": "Trip to Italy", "genre": { "_id": "5b21ca3eeb7f6fbccd471814", "name": "Comedy" }, "numberInStock": 7, "dailyRentalRate": 3.5 }, { "_id": "5b21ca3eeb7f6fbccd47181a", "title": "Airplane", "genre": { "_id": "5b21ca3eeb7f6fbccd471814", "name": "Comedy" }, "numberInStock": 7, "dailyRentalRate": 3.5 }, { "_id": "5b21ca3eeb7f6fbccd47181b", "title": "Wedding Crashers", "genre": { "_id": "5b21ca3eeb7f6fbccd471814", "name": "Comedy" }, "numberInStock": 7, "dailyRentalRate": 3.5 }, { "_id": "5b21ca3eeb7f6fbccd47181e", "title": "Gone Girl", "genre": { "_id": "5b21ca3eeb7f6fbccd471820", "name": "Thriller" }, "numberInStock": 7, "dailyRentalRate": 4.5 }, { "_id": "5b21ca3eeb7f6fbccd47181f", "title": "The Sixth Sense", "genre": { "_id": "5b21ca3eeb7f6fbccd471820", "name": "Thriller" }, "numberInStock": 4, "dailyRentalRate": 3.5 }, { "_id": "5b21ca3eeb7f6fbccd471821", "title": "The Avengers", "genre": { "_id": "5b21ca3eeb7f6fbccd471818", "name": "Action" }, "numberInStock": 7, "dailyRentalRate": 3.5 }],
        
        genres: [{"_id":"5b21ca3eeb7f6fbccd471818","name":"Action"},{"_id":"5b21ca3eeb7f6fbccd471820","name":"Thriller"},{"_id":"5b21ca3eeb7f6fbccd471814","name":"Comedy"}],
        
        selectedFilter: "AllGenres"
      })
    }
    f();
  }

  render = () => {
    return (
      <Router>
        <div>
          <Navbar />

          <Switch>
            <Route exact path='/rentals'>
              <Rentals />
            </Route>
            <Route exact path='/customers'>
              <Customers />
            </Route>
            <Route exact path='/login'>
              <Login />
            </Route>
            <Route exact path='/'>
              <div className="container-fluid">
                <div className="row">
                  <div className="col-3">
                    <Filter handleFilters={this.handleFilters} selectedFilter={this.state.selectedFilter} genresData={this.state.genres} />
                  </div>
                  <div className="col-9">
                    <Search searchString={this.state.search} updateSearch={this.updateSearch} totalMovies={this.state.movies.length} />
                    <div className="row">
                      <div className="col-10">
                        <Table search={this.state.search} selectedFilter={this.state.selectedFilter} handleDelete={this.handleDelete} handleLiked={this.handleLiked} moviesData={this.state.movies} />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </Route>
          </Switch>
        </div>
      </Router>
    )
  }
}

export default App;
