import { DriveFolderUploadOutlined } from '@mui/icons-material';
import React from 'react';
import { useState } from 'react';
import Navbar from '../../Components/Navbar/Navbar';
import Sidebar from '../../Components/Sidebar/Sidebar';
import './NewAdds.scss';

const NewAdds = ({ inputs, title }) => {
    const [file, setFile] = useState('');

    return (
        <div className="newAdds">
            <Sidebar></Sidebar>
            <div className="newContainer">
                <Navbar></Navbar>
                <div className="top">
                    <h1>{title}</h1>
                </div>
                <div className="bottom">
                    <div className="left">
                        <img src={
                            file ? URL.createObjectURL(file)
                                : "https://icon-library.com/images/no-image-icon/no-image-icon-0.jpg"
                        }
                            alt="" />
                    </div>
                    <div className="right">
                        <form>
                            <div className="formInput">
                                <label htmlFor='file'>Image:<DriveFolderUploadOutlined className='icon'></DriveFolderUploadOutlined></label>
                                <input type="file" id='file' onChange={e => setFile(e.target.files[0])}
                                    style={{ display: 'none' }} />
                            </div>
                            {inputs.map((input) => (
                                <div className="formInput" key={input.id}>
                                    <label>{input.label}</label>
                                    <input type={input.type} placeholder={input.placeholder} />
                                </div>
                            ))}

                            <button>Submit</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default NewAdds;