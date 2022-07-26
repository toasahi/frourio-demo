import useAspidaSWR from '@aspida/swr'
import { apiClient } from '~/utils/apiClient'

const Test = () => {
  const { data: data } = useAspidaSWR(apiClient.test)
  return (
    <div>
      <h1>{data}</h1>
    </div>
  )
}

export default Test
