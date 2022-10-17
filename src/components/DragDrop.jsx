import React from "react";
import { useDropzone } from "react-dropzone";
/*function Dropzone({ open }) {
  const { getRootProps, getInputProps } = useDropzone({});
  return (
    <div {...getRootProps({ className: "dropzone" })}>
      <input className="input-zone" {...getInputProps()} />
      <div className="text-center">
        <p>Drag n Drop</p>
      </div>
    </div>
  );
}*/
function Dropzone({ open }) {
    const { getRootProps, getInputProps, acceptedFiles } =
      useDropzone({});
    const files = acceptedFiles.map((file) => (
      <li key={file.path}>
        {file.path} - {file.size} bytes
      </li>
    ));
    return (
      <div className="container">
        <div {...getRootProps({ className: "dropzone" })}>
          <input {...getInputProps()} />
          <p>Drag 'n' drop some files here</p>
        </div>
        <aside>
          <ul>{files}</ul>
        </aside>
      </div>
    );
  }
export default Dropzone;