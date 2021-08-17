import './Filter.css'

let Filter = (props)=>{
    return(
        <>
            <ul class="list-group m-4">
                <li class={`list-group-item ${props.selectedFilter === "AllGenres"?"active": ""}`} onClick={
                        ()=>{
                            props.handleFilters("AllGenres")
                        }
                    }>All Genres</li>
                {props.genresData.map((el)=>{
                    return <li class={`list-group-item ${props.selectedFilter === el.name?"active": ""}`} onClick={
                        ()=>{
                            props.handleFilters(el.name)
                        }
                    } key={el._id}>{el.name}</li>
                })}
            </ul>
        </>
    )
}

export default Filter;