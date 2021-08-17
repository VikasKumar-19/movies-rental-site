import Pagination from "./Pagination";
import './Table.css'

let Table = (props) => {
    let filteredMovies = props.moviesData.filter((el)=>{
        if(props.selectedFilter === "AllGenres")
            return true;

        return el.genre.name === props.selectedFilter;
    })

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
                        filteredMovies.map((el, idx) => {
                            return (
                                <tr key={el._id}>
                                    <th scope="row">{idx + 1}</th>
                                    <td>{el.title}</td>
                                    <td>{el.genre.name}</td>
                                    <td>{el.numberInStock}</td>
                                    <td>{el.dailyRentalRate}</td>
                                    <td onClick={()=>{
                                        props.handleLiked(el._id);
                                    }
                                    }>
                                        {el.liked?<span class="material-icons">
                                        favorite
                                        </span>: <span class="material-icons">
                                        favorite_border
                                        </span>}
                                    </td>
                                    <td><button>Delete</button></td>
                                </tr>
                            )
                        })
                    }

                </tbody>
            </table>

            <Pagination />
        </>
    )

}

export default Table;