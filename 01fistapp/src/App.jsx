import Nemo from "./Nemo";
function App() {
  const usesrname="Nemo Boi"

  return (
    <> 
    {/* the <> here and </> in the end ae used to wrap more than one tags in the return */}
      <h1>{usesrname}</h1>
      <Nemo />
      <h3>hello</h3>
    </>
  )
}

export default App;
