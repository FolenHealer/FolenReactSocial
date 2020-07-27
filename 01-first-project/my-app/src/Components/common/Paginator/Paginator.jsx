import React, {useState} from "react";
import classes from './Paginator.module.css'

const Paginator = ({totalItemsCount, pageSize, currentPage, onPageChanged, portionSize = 35}) => {

    let pagesCount = Math.ceil(totalItemsCount / pageSize)
    let pages = []
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i)
    }

    let portionCount = Math.ceil(pagesCount / portionSize)
    let [portionNumber, setPortionNumber] = useState(1)
    let leftPortionNumber = [portionNumber - 1] * portionSize + 1
    let rightPortionNumber = portionNumber * portionSize

    return <div className={classes.spanContainer}>
        {portionNumber > 1 &&
        <button
            onClick={() => {setPortionNumber(portionNumber - 1)}}
            className={classes.btn}
        >PREV</button>
        }
        {pages
            .filter(p => p >= leftPortionNumber && p <= rightPortionNumber)
            .map(p => {
                return <span
                    className={currentPage === p && classes.selectedPage || classes.page}
                    onClick={(e) => {
                        onPageChanged(p)
                    }}>{p}
                </span>
            })}
        {portionCount > portionNumber && <button
            onClick={() => {setPortionNumber(portionNumber + 1)}}
            className={classes.btn}
        >NEXT</button>}
    </div>
}
export default Paginator