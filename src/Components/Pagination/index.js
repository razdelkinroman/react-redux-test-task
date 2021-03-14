import React, { memo } from 'react';
import ReactPaginate from 'react-paginate';
import './styles.css';

export const Pagination = memo(props => {
  const { totalPages, onPageChange } = props;

  return (
    <ReactPaginate
      nextLabel="&rarr;"
      previousLabel="&larr;"
      pageCount={totalPages}
      marginPagesDisplayed={2}
      pageRangeDisplayed={5}
      onPageChange={onPageChange}
      containerClassName={'pagination'}
      activeLinkClassName={'active-page'}
    />
  );
});
