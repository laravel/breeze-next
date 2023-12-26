// Pagination.jsx
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCaretLeft, faCaretRight } from '@fortawesome/free-solid-svg-icons';

const Pagination = ({
  currentPage,
  lastPage,
  handlePrevPage,
  handleNextPage,
  handlePageClick, // Add this prop
  generatePageNumbers,
}) => {
  return (
    <div className="navbar rounded-box z-20 glass my-2 w-4/5 fixed bottom-0">
      <div className="navbar-start">
        <button
          className="btn btn-neutral"
          onClick={handlePrevPage}
          disabled={currentPage === 1}
        >
          <FontAwesomeIcon icon={faCaretLeft} className="fa-lg" />
          ย้อนกลับ
        </button>
      </div>
      <div className="navbar-center hidden lg:flex">
        <div className="join">
          {generatePageNumbers().map((page, index) => (
            <button
              className={`join-item btn btn-ghost ${
                page === currentPage ? 'btn-active' : ''
              }`}
              onClick={() => handlePageClick(page)}
              key={index}
            >
              {page}
            </button>
          ))}
        </div>
      </div>
      <div className="navbar-end">
        <button
          className="btn btn-neutral"
          onClick={handleNextPage}
          disabled={currentPage === lastPage}
        >
          ถัดไป
          <FontAwesomeIcon icon={faCaretRight} className="fa-lg" />
        </button>
      </div>
    </div>
  );
};

export default Pagination;
