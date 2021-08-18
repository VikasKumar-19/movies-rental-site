let Search = (props)=>{

    return(
        <>
            <div className="m-4">
                <p>showing {props.totalMovies} movies from the database</p>
                <button type="button" class="btn btn-secondary">Add</button>
            </div>
            <div className="row">
                <div className="col-6 mx-4">
                    <div class="input-group mb-3">
                        <input type="text" class="form-control" onChange={(e)=>{
                            props.updateSearch(e.currentTarget.value);
                        }}
                        placeholder="Search..." value={props.searchString} aria-describedby="basic-addon2" />
                    </div>
                </div>
            </div>
        </>
    )
}

export default Search;