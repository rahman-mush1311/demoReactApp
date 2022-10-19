import React, { useCallback,useState } from "react";
import './App.css';
import Form from './components/Form';
import DragDrop from './components/DragDrop';
import ImageList from "./components/ImageList";
import cuid from "cuid";

function App() {
  const [images, setImages] = useState([]);
  const [errorMessage, setErrorMessage] = useState([]);
  const onDrop = useCallback(acceptedFiles => {
   
    // Loop through accepted files
    acceptedFiles.map(file => {
      // Initialize FileReader browser API
      if (!file.name.match(/\.(jpg|jpeg|PNG|gif|JPEG|png|JPG|gif)$/)) {
        setErrorMessage('please select valid file image');
        //this.setState({ invalidImage: 'Please select valid image.' });
        return false;
      }
      if(file.name.match(/\.(jpg|jpeg|PNG|gif|JPEG|png|JPG|gif)$/)){
      const reader = new FileReader();
     
      // onload callback gets called after the reader reads the file data
      reader.onload = function(e) {
        // add the image into the state. Since FileReader reading process is asynchronous, its better to get the latest snapshot state (i.e., prevState) and update it. 
        setImages(prevState => [
          ...prevState,
          { id: cuid(), src: e.target.result }
        ]);
        setErrorMessage();
      };
      // Read the file as Data URL (since we accept only images)
      reader.readAsDataURL(file);
    }
      return file;
    });
  }, []);
  return (
    <main className="App">
    <h2 className="App">Drag and Drop Example</h2>
    <br />
    <div className=".dropzone-div">
    <DragDrop onDrop={onDrop} accept={ 'image/*'}/>
    </div>
    <div className="App">
    {errorMessage && <span> {errorMessage} </span>}
    <ImageList images={images} />
   
    </div>
  </main>
  );
}

export default App;
