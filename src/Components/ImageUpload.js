import React, { useState } from "react"; 
import AWS from "aws-sdk";
// import tub from "../images/tub.jpeg"


const ImageUpload = () => {

      let [file, setFile] = useState(null)
      let [imgLink, setImgLink] = useState(null)
     
     AWS.config.update({
             accessKeyId: "",
             secretAccessKey: "",
             region: "ap-south-1"
     })

      async function uploadFile() {
          const s3 = new AWS.S3()
          let filename = `${Date.now()}-${file.name}`
          try{
              const response  =  await s3.putObject({
                    Bucket: "colliders-bucket",
                    Key: filename,
                    Body: file,
                    ContentType: file.type,
              }).promise()
             setImgLink(`https://colliders-bucket.s3.ap-south-1.amazonaws.com/${filename}`)
          }
            catch(error){
                 console.log(error.message)
            }
     }

     return(
        <div>
                 <input type="file" onChange={e => setFile(e.target.files[0])} />
                 <button onClick={uploadFile}>Upload</button>

                 {
                        imgLink && <img src={imgLink} alt="uploaded" />
                 }
        </div>
     )



}

export default ImageUpload;