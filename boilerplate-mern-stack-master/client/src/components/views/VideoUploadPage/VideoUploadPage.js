import React from 'react'
import { Typography, Button, Form, Message, Input, Icon } from 'antd';
import Dropzone from 'react-dropzone';


const { TextArea } = Input;
const { Title } = Typography;

function VideoUploadPage() {
    return (
        <div style={{ maxWidth: '700px', margin:'2rem auto'}} >
            <div style={{ textAlign: 'center', marginBottom:'2rem' }}>
                <Title level={2}>Upload Video</Title>
            </div>
            <Form onSubmit>
                <div style={{ display:'flex', justifyContent:'space-between' }}>
                    <div>
                        {/* Drop Zone */}
                        <Dropzone
                            onDrop
                            multiple
                            maxSize
                        
                        >
                            
                            {{{ getRootProps, getInputProps }} => {
                                  <div style={{ width: '300px', height: '240px', border:'1px solid lightgray' ,
                                    alignItems:'center', justifyContent:'center'}} {...getRootProps()}
                                  >
                                      
                                  </div> 
                            }}

                            
                        

                        </Dropzone>
                        {/* Thumb */}
                     </div>   
                    <div>
                        <img src alt />
                    </div>
                </div>
                <br>
                </br>
                <br>
                </br>
                <label>Title</label>
                <Input
                    onChange
                    value
                ></Input>
                <br></br>
                <br></br>
                <label>Description</label>
                <TextArea
                    onChange
                    value
                >
                </TextArea>
                <br></br>
                <br></br>
                <select>
                    <option key value></option>
                </select>
                <br></br>
                <br></br>
                <select>
                    <option key value></option>
                </select>
                <br></br>
                <br></br>
                <Button type="primary" size="large" onClick>
                  Submit
                </Button>
            </Form>
        </div>
    )
}

export default VideoUploadPage
