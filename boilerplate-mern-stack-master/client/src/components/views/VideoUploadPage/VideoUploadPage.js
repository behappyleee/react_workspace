import React, { useState } from 'react'
import Axios from 'axios';
import { Typography, Button, Form, Message, Input, Icon } from 'antd';
import Dropzone from 'react-dropzone';

const { TextArea } = Input;
const { Title } = Typography;
const PrivateOptions = [
    {value: 0, label: 'Private'},   
    {value: 1, label: 'Public'},
]
const CategoryOptions = [
    { value:0, label: 'Film & Animation' },
    { value:1, label: 'Autos & Vehicles' },
    { value:2, label: 'Music' },
    { value:3, label: 'Pets & Animals' }
]
function VideoUploadPage() {
    const [VideoTitle, setVideoTitle] = useState('');
    const [Description, setDescription] = useState('');
    const [Private, setPrivate] = useState(0);
    const [Category, setCategory] = useState('Film & Animation');
    const [FilePath, setFilePath] = useState('');
    const [Duration, setDuration] = useState('');    
    const [ThumbnailPath, setThumbnailPath] = useState('');


    const onTitleChange = (e) => {
        // e 는 키보르를 칠때마다 event 가 발생 함 
        setVideoTitle( e.currentTarget.value ); 
        console.log( e.currentTarget.value )
    }
    const onDescriptionChange = (e) => {
        setDescription( e.currentTarget.value);
    }
    const onPirvateChange = (e) => {
        setPrivate( e.currentTarget.value );
    }
    const onCategoryChange = (e) => {
        setCategory( e.currentTarget.value );
    }

    const onDrop = (files) => {

        let formData = new FormData;
        const config = {
            // file 전송시에는 header 에다가 content-type 을 기입하야 주어야 함 그래야 오류 방지
            header : {'content-type': 'multipart/form-data'}
        }

        formData.append('file', files[0]);
        console.log('files Console Log ~~~ !! ', files);
        // 파일을 넣고 바로 서버에 보내기
        // /api/video 부분은 router 에 /api/video 가 있으므로 굳이 안적어 주어도 됨
        // Axios.post('{/api/video/uploadfiles', formData, config)
        Axios.post('/api/video/uploadfiles', formData, config)
        
            .then(response => {
                // 응답이 성공으로 돌아 올 시
                if(response.data.success) {
                    console.log( 'success Data ~ ! ', response.data );
                    // 성공 후
                    let variable = {
                        url: response.data,
                        fileName: response.data.fileName,
                    }

                    Axios.post('/api/video/thumbnail', variable)   
                        .then(response => {
                            if(response.data.success) {
                                console.log(response.data);
                                setDuration(response.data.fileDuration)
                                setThumbnailPath(response.data.url)
                            } else {
                                alert('Thmbnail 생성에 실패하였 습니다.')
                            }
                        })
                // success 가 아닐 시 
                } else {
                    console.log('formData : ', formData);
                    console.log('config : ', config);
                    console.log('실패 후 respose', response );
                    alert('비디오 업로드에 실패하였습니다.');
                }

            })

    }

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
                            onDrop={ onDrop }   // Drop 시 이벤트 처리
                            multiple={ false } // 파일 여러개 복수 허용할지
                            maxSize={ 1000000000 }
                        >
                            {({ getRootProps, getInputProps }) => (
                                  <div style={{ width: '300px', height: '240px', border:'1px solid lightgray',
                                    alignItems:'center', justifyContent:'center'}} { ...getRootProps() }>
                                            <input {...getInputProps() } />
                                            <Icon type="plus" style={{ fontSize: '3rem' }} />
                                  </div> 
                            )}
                        </Dropzone>
                        {/* Thumb */}
                        {ThumbnailPath &&  
                        <div>
                            <img src={`http://localhost:5000/${ThumbnailPath}`} alt='thumnnail' />
                        </div>
                        }
                     </div>   
                    <div>
                        <img src alt />
                    </div>
                </div>
                <br></br><br></br>
                <label>Title</label>
                <Input
                    onChange={ onTitleChange }
                    value={ VideoTitle }
                ></Input>
                <br></br> <br></br>
                <label>Description</label>
                <TextArea
                    onChange={ onDescriptionChange }
                    value={Description}
                >
                </TextArea>
                <br></br><br></br>
                <select onChange={ onPirvateChange }>
                    { PrivateOptions.map((item, index) => (
                        <option key={ index } value={item.value} >{item.label}</option>
                    )) }
                </select>
                <br></br><br></br>
                <select onChange={ onCategoryChange } >
                    { CategoryOptions.map((item, index) => (
                           <option key={ index } value = { item.value }> { item.label } </option> 
                    ))}
                </select>
                <br></br><br></br>
                <Button type="primary" size="large" onClick>
                  Submit
                </Button>
            </Form>
        </div>
    )
}

export default VideoUploadPage
