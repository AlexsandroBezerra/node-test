import { useCallback, useState } from 'react'
import Head from 'next/head'

import api from '../services/api'

import styles from '../styles/main.module.css'

export default function Main() {
  const [name, setName] = useState('')

  const handleChangeName = useCallback((event: React.ChangeEvent<HTMLInputElement>) => {
    setName(event.target.value)
  }, [])

  const handleSubmit = useCallback(async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()

    const response = await api.post('pages', { name })

    const url = `${process.env.NEXT_PUBLIC_WEB_URL}/${response.data.path}`

    alert(`Page created. URL: ${url}`)

  } , [name])

  return (
    <>
      <Head>
        <title>Admin Page</title>
      </Head>

      <div className={styles.main}>
        <h1>Admin Page</h1>

        <form onSubmit={handleSubmit}>
          <input value={name} onChange={handleChangeName} placeholder="Page name" />

          <button type="submit" className={styles.button}>Submit</button>
        </form>
      </div>
    </>
  )
}
