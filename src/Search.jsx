let Search = (props)=>{

    let filteredMovies = props.moviesData.filter((el)=>{
        if(props.selectedFilter === "AllGenres")
            return true;

        return el.genre.name === props.selectedFilter;
    })

    return(
        <>
            <div className="m-4">
                <p>showing {filteredMovies.length} movies from the database</p>
                <button type="button" class="btn btn-secondary">Add</button>
            </div>
            <div className="row">
                <div className="col-6 mx-4">
                    <div class="input-group mb-3">
                        <input type="text" class="form-control" onChange={(e)=>{
                            
                        }}
                        placeholder="Search..." aria-label="Recipient's username" aria-describedby="basic-addon2" />
                    </div>
                </div>
            </div>
        </>
    )
}

export default Search;