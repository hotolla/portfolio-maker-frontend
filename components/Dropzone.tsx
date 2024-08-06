import React, { useCallback } from 'react';
import { useDropzone } from 'react-dropzone';

export const Dropzone = () => {
  const onDrop = useCallback((acceptedFiles: string) => {
    const text = 'Hello, this is a text file!';
    const blob = new Blob([ text ], { type: 'text/plain' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = acceptedFiles;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
  }, []);
  const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop });

  return (
    <div {...getRootProps()}>
      <input {...getInputProps()} />
      {
        isDragActive ?
          <p>Drop the files here ...</p> :
          <p>Click to select files</p>
      }
    </div>
  );
};