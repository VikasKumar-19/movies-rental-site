let Search = ()=>{
    return(
        <>
            <div className="m-4">
                <p>showing 9 movies from the database</p>
                <button type="button" class="btn btn-secondary">Add</button>
            </div>
            <div className="row">
                <div className="col-9 mx-4">
                    <div class="input-group mb-3">
                        <input type="text" class="form-control" placeholder="Search..." aria-label="Recipient's username" aria-describedby="basic-addon2" />
                        <div class="input-group-append">
                            <button class="btn btn-secondary" type="button">Button</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Search;