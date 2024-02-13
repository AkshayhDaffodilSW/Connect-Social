import React from 'react'
import "./imageInputStyles.css"
import { Text } from '@chakra-ui/react'

function ImageInput(props) {

  function previewPhoto(e){
    //passing value back to parent 
    props.previewFunciton(URL.createObjectURL(e.target.files[0]));
  }

  return (
    <div>
      <label 
      htmlFor="file-upload" 
      className="custom-file-upload">
        <Text
            color='white'
            fontSize={18}
            fontWeight={700}
        >
            {props.text}
        </Text>
    </label>
    <input type="file" id='file-upload' onChange={previewPhoto} />
    </div>
  )
}

export default ImageInput
