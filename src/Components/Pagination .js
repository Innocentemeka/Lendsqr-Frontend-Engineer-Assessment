import React, { useEffect, useState } from 'react';
import ReactPaginate from 'react-paginate';
import SelectLimit from './SelectLimit';

const Pagination = (props) => {
  const { data, setCurrentItems } = props;

  const [pageCount, setPageCount] = useState(0);
  const [itemOffset, setItemOffset] = useState(0);
  const itemsPerPage = 10;

  useEffect(() => {
    const endOffset = itemOffset + itemsPerPage;
    setCurrentItems(data.slice(itemOffset, endOffset));
    setPageCount(Math.ceil(data.length / itemsPerPage));
  }, [itemOffset, itemsPerPage, data, setCurrentItems]);

  const handlePageClick = (event) => {
    const newOffset = (event.selected * itemsPerPage) % data.length;
    setItemOffset(newOffset);
  };

  return (
    <>

      <div className='pagination-container'>
        <SelectLimit setPageCount={itemsPerPage} />
        <ReactPaginate
          breakLabel="..."
          nextLabel=">"
          onPageChange={handlePageClick}
          pageRangeDisplayed={3}
          pageCount={pageCount}
          previousLabel="< "
          renderOnZeroPageCount={null}
          containerClassName='pagination'
          pageLinkClassName='page-num'
          previousClassName='prev-btn'
          nextLinkClassName='next-btn'
          activeLinkClassName='active'
        />
      </div>
    </>
  );
}

export default Pagination 