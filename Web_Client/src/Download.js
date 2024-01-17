import React from 'react';
const fileUrl = require('../build/client.apk');

class FileDownloadComponent extends React.Component {
  downloadFile = () => {
    const filename = 'client.apk';

    // Create a link element
    const link = document.createElement('a');

    // Create the file URL using the public URL of your 'Assets' directory
    // const fileUrl = './Assets/' + filename;

    // Set the href and download attributes of the link
    link.href = fileUrl;
    link.download = filename;

    // Append the link to the body
    document.body.appendChild(link);

    // Trigger a click on the link to start the download
    link.click();

    // Remove the link from the body
    document.body.removeChild(link);
  };

  render() {
    return (
      <div>
        <button onClick={this.downloadFile}>Download Apk</button>
      </div>
    );
  }
}

export default FileDownloadComponent;

