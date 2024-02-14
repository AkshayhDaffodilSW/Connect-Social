import React , {useState} from 'react'
import "./imageInputStyles.css"
import { Text } from '@chakra-ui/react'

function ImageInput(props) {


  const [fileBuffer, setFileBuffer] = useState(null);

  function previewPhoto(event){
    //passing value back to parent 
    
    const file = event.target.files[0]; 

    const reader = new FileReader();
    
    reader.onload = (e) => {
      const buffer = e.target.result; 
      // console.log(buffer);
      setFileBuffer(buffer); 
      props.previewFunciton(URL.createObjectURL(file) , buffer);
    };
    reader.readAsArrayBuffer(file);
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
