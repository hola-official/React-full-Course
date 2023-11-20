import useAxios from "../hooks/useAxios"

const Jokes = () => {
    const [joke, error, loading] = useAxios({
        url: 'https://official-api.codersforcauses.org/jokes'
    })
  return (
    <div>
        <h1>Jokes</h1>
    </div>
  )
}

export default Jokes