import React from 'react';

const Pagination = ({ nPages, currentPage, setCurrentPage }) => {

    const pageNumbers = [...Array(nPages + 1).keys()].slice(1)

    const nextPage = () => {
            if(currentPage !== nPages) setCurrentPage(currentPage + 1)
    }
    const prevPage = () => {
        if(currentPage !== 1) setCurrentPage(currentPage - 1)
    }
    return (
        <nav>
            <ul className='pagination justify-content-center'>
                <li className="page-item">
                    <a className="page-link" style={{cursor:"pointer"}} 
                        onClick={prevPage} 
                >
                        
                        Previous
                    </a>
                </li>
                {
                    pageNumbers.map((pgNumber) => {
                    if((pgNumber==currentPage-1) || (pgNumber==currentPage+1) || (pgNumber==currentPage)){
                       
                        return <li key={pgNumber} 
                        className= {`page-item ${currentPage == pgNumber ? 'active activePage' : ''} `} >

                        <a style={{cursor:"pointer"}} onClick={() => setCurrentPage(pgNumber)}  
                            className='page-link' 
                           >
                            
                            {pgNumber}
                        </a>
                        </li>
                    }
                    })
                }
                <li className="page-item">
                    <a style={{cursor:"pointer"}} className="page-link" 
                        onClick={nextPage}
                       >
                        Next
                    </a>
                </li>
            </ul>
        </nav>
    )
}

export default Pagination