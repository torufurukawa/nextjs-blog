import useSWR from 'swr'

export default function Page() {
  const greet = useGreet()
  return (
    <div>
      <Greeting {...greet} />
      <UpdateButton {...greet} />
    </div>
  )
}

function Greeting({ data, isLoading, isError }) {
  if (isLoading) return <div>loading...</div>
  if (isError) return <div>error</div>
  return <div>{data.text}</div>
}

function UpdateButton({ data, mutate }) {
  return (
    <button
      onClick={async () => {
        mutate({ ...data, text: 'bye' }, false)
      }}
    >
      update
    </button>
  )
}

const fetcher = (...args) => fetch(...args).then((res) => res.json())
function useGreet() {
  const { data, error, mutate } = useSWR('/api/hello', fetcher)
  return {
    data: data,
    isLoading: !error && !data,
    isError: error,
    mutate: mutate,
  }
}
