import React, { useEffect, useState } from 'react'
import { Fade } from 'react-awesome-reveal';
import ReactPaginate from 'react-paginate';
import PlaceCard from '../PlaceCard';

const Pagination = ({itemsPerPage, array, container, item}) => {

        // We start with an empty list of items.
        const [currentItems, setCurrentItems] = useState(null);
        const [pageCount, setPageCount] = useState(0);
        // Here we use item offsets; we could also use page offsets
        // following the API or data you're working with.
        const [itemOffset, setItemOffset] = useState(0);
      
        useEffect(() => {
          // Fetch items from another resources.
          const endOffset = itemOffset + itemsPerPage;
          console.log(`Loading items from ${itemOffset} to ${endOffset}`);
          setCurrentItems(array.slice(itemOffset, endOffset));
          setPageCount(Math.ceil(array.length / itemsPerPage));
        }, [itemOffset, itemsPerPage]);
      
        // Invoke when user click to request another page.
        const handlePageClick = (event) => {
          const newOffset = (event.selected * itemsPerPage) % array.length;
          console.log(
            `User requested page number ${event.selected}, which is offset ${newOffset}`
          );
          setItemOffset(newOffset);
        };

  return (
    <div className="">
        <ul className="grid gap-6 md:gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 overflow-x-hidden "  style={{ minHeight: "22rem" }}
            >
          {currentItems && currentItems.map((places) => {
              return <PlaceCard {...places} aspect="" />
          })}
        </ul>
      <ReactPaginate
        breakLabel="..."
        nextLabel="next >"
        onPageChange={handlePageClick}
        pageRangeDisplayed={5}
        pageCount={pageCount}
        previousLabel="< previous"
        renderOnZeroPageCount={null}
      />
    </div>
  )
}

export default Pagination