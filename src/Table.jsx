import Pagination from "./Pagination";
import './Table.css'
import React from "react";


class Table extends React.Component{
    
    state={
        currPage: 1
    }

    selectPage =(pageNum)=>{
        this.setState({currPage: pageNum});
    }

    
    render = ()=>{

        let allMovies = this.props.moviesData;
        let currFilter = this.props.selectedFilter;
        
        
        let filteredMovies = allMovies.filter((el)=>{
            if(currFilter === "AllGenres")
            return true;
            return el.genre.name === currFilter;
        })
        
        filteredMovies = filteredMovies.filter((el)=>{
            let movieTitle = el.title.toLowerCase();
            let searchString = this.props.search.toLowerCase();
            return movieTitle.includes(searchString);
        })

        let startIdx = (this.state.currPage - 1) * 4;
        let endIdx = Math.min(filteredMovies.length, this.state.currPage * 4);

        // let limMovieData = [];
        // for(let i = StartIdx; i <= EndIdx; i++){
        //     limMovieData.push(filteredMovies[i]);
        // }

        let arrToBeUsedInTable = filteredMovies.slice(startIdx, endIdx);

        let numberOfPages = Math.ceil(filteredMovies.length / 4);
        
        return (

            <>
                <table class="table m-4">
                    <thead>
                        <tr>
                            <th scope="col">S.No.</th>
                            <th scope="col">Title</th>
                            <th scope="col">Genre</th>
                            <th scope="col">Stock</th>
                            <th scope="col">Rate</th>
                            <th scope="col"></th>
                            <th scope="col"></th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            arrToBeUsedInTable.map((el, idx) => {
                                return (
                                    <tr key={el._id}>
                                        <th scope="row">{idx + 1}</th>
                                        <td>{el.title}</td>
                                        <td>{el.genre.name}</td>
                                        <td>{el.numberInStock}</td>
                                        <td>{el.dailyRentalRate}</td>
                                        <td onClick={()=>{
                                            this.props.handleLiked(el._id);
                                        }
                                        }>
                                            {el.liked?<span class="material-icons">
                                            favorite
                                            </span>: <span class="material-icons">
                                            favorite_border
                                            </span>}
                                        </td>
                                        <td><button onClick={()=>{
                                            this.props.handleDelete(el._id)
                                        }}>Delete</button></td>
                                    </tr>
                                )
                            })
                        }

                    </tbody>
                </table>

                <Pagination selectPage={this.selectPage} currPage={this.state.currPage} numberOfPages={numberOfPages}/>
            </>
        )
    }
}

export default Table;