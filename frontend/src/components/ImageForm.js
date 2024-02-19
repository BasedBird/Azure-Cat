import React from 'react'

const ImageForm = () => {
    const onSubmit = () => {
        console.log(123);
    }

  return (
    <div>
        <form method='post' enctype='multipart/form-data' action='http://localhost:5000/'>
            <input type='file' name='image'/>
            <input type='submit' value='Submit'/>
        </form>
    </div>
  )
}

export default ImageForm