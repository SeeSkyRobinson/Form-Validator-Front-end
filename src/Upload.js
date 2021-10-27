
import React, {useState} from 'react';
import axios from "axios";


export default function Upload() {
    const [selectedFile, setSelectedFile] = useState()
    const [isSelected, setIsSelected] = useState(false)
    const [results, setResults] = useState(null)

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
            // console.log(res.data);
            if (res.data.message === "invalid file - wrong file type") {
                console.log('test');
            } else {
                setResults(res.data)
            }
        })
        .catch((error) => {
            console.error('Error:', error);
        });
    }


    return (
        <div>
            <section>
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
            </section>
            <section>
                <h3>
                    {errorMessage}
                </h3>

                <h3>
                    names
                </h3>
                    {results && Object.entries(results.names).map(ele => 
                        <p>{ele}</p>
                    )}
                <h3>
                    dates
                </h3>
                    {results && Object.entries(results.dates).map(ele => 
                        <p>{ele}</p>
                    )}
            </section>
        </div>
    )


}