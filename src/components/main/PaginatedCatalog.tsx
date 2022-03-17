import React, {useEffect, useState} from 'react';
import styled from "styled-components";
import ItemsCatalog from "../ItemsCatalog";
import {useAppSelector} from "../../hooks/hooks";
import ReactPaginate from "react-paginate";
import {IRoses} from "../../models/IFlower";

const Container = styled.div`
`

const PaginatedCatalog: React.FC = () => {
    const {flowers} = useAppSelector(state => state.flowersReducer)
    const itemsPerPage: number = 6
    const [pageCount, setPageCount] = useState(0)
    const [currentItems, setCurrentItems] = useState<IRoses[]>([])
    const [itemOffset, setItemOffset] = useState(0)

    useEffect(() => {
        const endOffset = itemOffset + itemsPerPage;
        setCurrentItems(flowers.slice(itemOffset, endOffset));
        setPageCount(Math.ceil(flowers.length / itemsPerPage));
    }, [itemOffset, itemsPerPage,flowers]);

    // Invoke when user click to request another page.
    const handlePageClick = (event: any) => {
        const newOffset = event.selected * itemsPerPage % flowers.length;
        setItemOffset(newOffset);
    };


    return (
        <Container>
            <ItemsCatalog flowers={currentItems}/>
            <ReactPaginate
                className="paginate"
                breakLabel="..."
                nextLabel="."
                onPageChange={handlePageClick}
                pageRangeDisplayed={5}
                pageCount={pageCount}
                previousLabel="."
            />
        </Container>
    );
};

export default PaginatedCatalog;