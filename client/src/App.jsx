import "./App.css";
import Upload from "./components/Upload";


function App() {
  const handleChange = (e) => {
    //console.log(e);
    const file = e.target.files[0];
    console.log(file)
  };

  return (
    <div className="main-div">
      <Upload handleChange={handleChange} />
    </div>
  );
}

export default App;
