import React from "react";
import { useDropzone } from "react-dropzone";
import UploadIcon from '@mui/icons-material/Upload';

const Dropzone = ({ onDrop, accept }) => {
    // Initializing useDropzone hooks with options
    const { getRootProps, getInputProps, isDragActive } = useDropzone({
      onDrop,
      accept
    });
  
    /* 
      useDropzone hooks exposes two functions called getRootProps and getInputProps
      and also exposes isDragActive boolean
    */
  
    return (
      <div className="dropzone-div" {...getRootProps()}>
        <input className="dropzone-input" {...getInputProps()} />
        <div className="text-center">
           <UploadIcon  fontSize="large"/>
          {isDragActive ? (
            <p  className="dropzone-content"> Release to drop the files here</p>
          ) : (
            <p className="dropzone-content">
             <b> Choose a file </b> or drag it here
            </p>
          )}
        </div>
      </div>
    );
  };
export default Dropzone;