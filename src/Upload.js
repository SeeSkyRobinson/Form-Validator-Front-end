
import React, {useState} from 'react';
import axios from "axios";

export default function Upload(props) {
    const [selectedFile, setSelectedFile] = useState()
    const [isSelected, setIsSelected] = useState(false)
    const [fileTypeErrorMessage, setFileTypeErrorMessage] = useState(null)

    const changeHandler = (e) => {
        setSelectedFile(e.target.files[0])
        setIsSelected(true)
    }

    const handleSubmission = () => {
        const formData = new FormData()
        formData.append('File', selectedFile)
        axios.post('/upload', formData, {
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        })
        .then((res) => {
            if (res.data.message) {
                setFileTypeErrorMessage(res.data.message)
            } else {
                props.updateResult(res.data)
                props.updateIsFileUploaded(true)
            }
        })
        .catch((error) => {
            console.error('Error:', error);
        });
    }
 
    return (
        <div>
            <input type="file" name="file" onChange={changeHandler} />
            {isSelected ? (
                <div>
                    <p>Filename: {selectedFile.name}</p>
                    <p>Filetype: {selectedFile.type}</p>
                    <p>Size in bytes: {selectedFile.size}</p>
                    <p>
                        lastModifiedDate:{' '}
                        {selectedFile.lastModifiedDate.toLocaleDateString()}
                    </p>
                </div>
            ) : (
                <p>Select a file to show details</p>
            )}
            <div>
                <button onClick={handleSubmission}> Upload</button>
            </div>
            <div>{fileTypeErrorMessage && fileTypeErrorMessage}</div>
        </div>
    )


}