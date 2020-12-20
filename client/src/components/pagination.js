import React from 'react';

const Pagination = (props) => {
  const pageNumbers = [];
console.log("pagination rendered")
  for (let i = 1; i <= Math.ceil(props.totalItems / props.itemsPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <nav style={{display:'inline-block'}}>
      <ul className='pagination'>
        {pageNumbers.map(number => (
          <li key={number} style={{cursor:'pointer'}} className={props.currentPage==number?'page-item active':'page-item'}>
            <div onClick={() => props.changeCurrentPage(number)}  className='page-link'>
              {number}
            </div>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Pagination;