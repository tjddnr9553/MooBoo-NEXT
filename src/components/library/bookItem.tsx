'use client'

import styles from '@/components/library/bookItem.module.scss'

import Image from 'next/image'
import { useRouter } from 'next/navigation'

import { BookData } from '@/types/types'

import StarRating from '@/components/common/starRating'
import { ProgressBar } from '@/components/common/progressBar'

export default function BookItem({ book }: { book: BookData }) {
  const router = useRouter()
  const { isbn13, title, rating, cover, author, progress } = book

  return (
    <div className={styles.bookItem} onClick={() => router.push(`/book/${isbn13}`)}>
      <div className={styles.bookItem__coverContainer}>
        <Image src={cover} alt={title} width={220} height={330} className={styles.bookItem__cover} />
        <StarRating size={1.25} rating={rating} color={'#B6B6B6'} />
      </div>
      <div className={styles.bookItem__infoContainer}>
        <div className={styles.bookItem__info}>
          <div className={styles.bookItem__info__header}>
            <div className={styles.bookItem__info__title}>{title}</div>
            <div className={styles.bookItem__info__author}>{author}</div>
          </div>
          <div className={styles.bookItem__info__body}>
            <div className={styles.bookItem__info__progress}>{progress}%</div>
            <div className={styles.bookItem__info__page}>105<span>/276</span></div>
          </div>
          <ProgressBar propProgress={progress} />
        </div>
      </div>
    </div>
  )
}
