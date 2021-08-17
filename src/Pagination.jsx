let Pagination = (props)=>{
    
    let pageNoArr = [];
    for(let i = 1; i <= props.numberOfPages; i++){
        pageNoArr.push(i);
    }

    return(
        <nav aria-label="Page navigation example" className="m-4">
            <ul class="pagination">
                {pageNoArr.map((el)=>{
                    return <li class={`page-item ${props.currPage === el ? "active": ""} `} onClick={()=>{
                        props.selectPage(el);
                    }}><a class="page-link" href="#">{el}</a></li>
                })}
            </ul>
        </nav>
    )
}

export default Pagination;