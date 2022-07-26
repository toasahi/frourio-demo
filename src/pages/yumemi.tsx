import useAspidaSWR from '@aspida/swr'
import { apiClient } from '~/utils/apiClient'
import type { NextPage } from 'next'

const Yumemi:NextPage = () => {
  const { data: data } = useAspidaSWR(apiClient.test)
  return (
    <div>
      <h1>{data}</h1>
    </div>
  )
}

export default Yumemi
