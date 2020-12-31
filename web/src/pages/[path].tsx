import { useCallback, useState } from 'react'

import {useRouter} from 'next/router'
import DefaultErrorPage from 'next/error'
import { GetStaticPaths, GetStaticProps } from 'next'
import Head from 'next/head'

import api from '../services/api'

import styles from '../styles/main.module.css'

interface CustomPageProps {
  page: {
    id: string
    name: string
    path: string
    deepLink: string
  }
}

export default function CustomPage({ page }: CustomPageProps) {
  const [showDeepLink, setShowDeepLink] = useState(false)
  const { isFallback } = useRouter()

  if(isFallback) {
    return (
      <div className={styles.main}>
        <h1>Carregando...</h1>
      </div>
    )
  }

  if(!page) {
    return (
      <>
        <Head>
          <meta name="robots" content="noindex" />
        </Head>

        <DefaultErrorPage statusCode={404} />
      </>
    )
  }

  const handleShare = useCallback(async () => {
    await api.post(`pages/${page.path}/share`)

    setShowDeepLink(true)
  }, [])

  return (
    <>
      <Head>
        <title>{page.name}</title>
      </Head>

      <div className={styles.main}>
        <h1>This page is for {page.name}</h1>

        <button
          type="button"
          className={styles.button}
          onClick={handleShare}
        >
          Share
        </button>

        {showDeepLink && (
          <strong className={styles.shareLink}>
            Share link: <br />

            <a href={page.deepLink} className={styles.link}>{page.deepLink}</a>
          </strong>
        )}
      </div>
    </>
  )
}

export const getStaticProps: GetStaticProps = async (context) => {
  const { path } = context.params

  try {
    const response = await api.get(`pages/${path}`)

    return {
      props: {
        page: response.data,
      },
      revalidate: 60
    }
  } catch {
    return { props: {} }
  }
}

export const getStaticPaths: GetStaticPaths = async () => {
  const response = await api.get('pages')

  const paths = response.data.map(page => {
    return { params: { path: page.path } }
  });

  return {
    paths,
    fallback: true
  }
}
