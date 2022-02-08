import React from 'react';
import FileIcon from './../icons/FileIcon';


const FileMessage = (props) => {
  return (
    <a className="sc-message--file" onClick={props.data.onClick}>
      <FileIcon />
      <p>{props.data.fileName}</p>
    </a>
  );
};

export default FileMessage;
