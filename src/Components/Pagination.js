import * as React from "react";
import {
  Link,

} from "react-router-dom";
import Pagination from "@mui/material/Pagination";
import PaginationItem from "@mui/material/PaginationItem";

export default function Content({ page, pages }) {
  return (
    <Pagination
      
      page={page}
      count={pages}
      renderItem={(item) => (
        <PaginationItem
        
        sx ={{color:"white"}}
          component={Link}
          to={`/page/${item.page === 1 ? "" : `${item.page}`}`}
          {...item}
        />
      )}
    />
  );
}
