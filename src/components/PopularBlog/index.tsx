import React from 'react'
import styles from './popularblog.module.css'
import {New} from '../../data/new'

type DataType = {
    id: number,
    img: string,
    title: string
}

const SinglePopularBlog = ({New}: {New: DataType}) => {
    return (
        <div className={styles.PopularBlog_Item}>
            <a className='row' href="javascript:void(0)">
                <div className={`${styles.img} col-6`}><img src={New.img} alt="" /></div>
                <div className={`${styles.caption} col-6`}>{New.title}</div>
            </a>
        </div>
    )
}

const PopularBlog = () => {
  return (
    <div className={styles.PopularBlog_Component}>
        <div className={styles.title}><h3>Popular Blogs</h3></div>
        {New.map((item) => (
                <SinglePopularBlog key={item.id} New={item} />
            ))}
    </div>
  )
}

export default PopularBlog