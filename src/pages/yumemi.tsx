import useAspidaSWR from '@aspida/swr'
import { apiClient } from '~/utils/apiClient'

const Yumemi = () => {
  const { data: data } = useAspidaSWR(apiClient.test)
  return (
    <div>
      <h1>{data}</h1>
        <h1>{data}</h1>
    </div>
  )
}

export default Yumemi
