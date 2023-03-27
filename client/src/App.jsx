import { useState } from "react";
import "./App.css";
import Upload from "./components/Upload";
import useMutation from "./hooks/useMutation";

const validFileTypes = ["image/jpg", "image/jpeg", "image/png"];
const URL = "http://localhost:8000/image/upload/";

function App() {
  const {
    mutate: uploadImage,
    isLoading: uploading,
    error: uploadError,
  } = useMutation({ url: URL });

  const [error, setError] = useState("");

  const handleChange = async (e) => {
    //console.log(e);
    const file = e.target.files[0];
    console.log(file);
    if (!validFileTypes.find((type) => type === file.type)) {
      return setError("File must be of JPG/PNG format only");
    }
    const form = new FormData();
    form.append("image", file);

    await uploadImage(form);
  };

  return (
    <div className="main-div">
      <Upload handleChange={handleChange} isLoading= {uploading} />
      {error && error}
      {uploadError && uploadError}
    </div>
  );
}

export default App;
