'use client'
import { Button, Container, Input } from '@mui/material';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import React, { useState } from 'react';
import { teal, red, green ,grey} from '@mui/material/colors';
const ChatBox = () => {
    const [inputText, setInputText] = useState('');
    const [chatContent, setChatContent] = useState([]);

    const handleInputChange = (e) => {
        setInputText(e.target.value);
    };

    const handleButtonClick = () => {
        if (inputText) {
            setChatContent([...chatContent, inputText]);
            setInputText('');
        }
        };

    function clickPress(e) {
        if (e.key == "Enter") {
            if(inputText){
            setChatContent([...chatContent, inputText]);
            setInputText('');
        }
    }

    }
    return (
        <div style={{ display: 'flex', flexDirection: 'column', position: "relative", gap: '10px' }}>
            <Container sx={{ border: 'solid 2px 2px 2px black', overflowY: 'auto', position: "relative", height: '35rem',backgroundImage:"url(https://t3.ftcdn.net/jpg/01/99/79/88/360_F_199798806_PAFfWGapie6Mk8igqKHbhIIa9LwQcvQr.jpg)", paddingBottom: '5px' }}>
                {chatContent.map((message, index) => (
                    <div key={index} style={{ margin: '5px', padding: '10px', backgroundColor: '#f0f0f0',width:"400px",borderRadius:"20px" }}>{message}</div>
                ))}

            </Container>
            <div style={{ display: 'flex', flexDirection: 'column',justifyContent:"flex-end", height: '10%', position: "static" }}>
                <div style={{ textAlign: 'center', display: 'flex',  position: "absolute", margin: "10px" }}>
                    <input
                        placeholder='write here...'
                        style={{ width: "750px" , border:"  2px grey solid" ,borderRadius:"20px",paddingLeft:"20px"}}
                        value={inputText}
                        onChange={handleInputChange}
                        onKeyDown={clickPress}
                
                        
                        
                    />
                    <Button
                        style={{ fontWeight: 'bold',marginLeft:"20px"  ,backgroundColor:grey[400]}}
                        variant="contained"

                        onClick={handleButtonClick}
                    >
                        <ArrowForwardIosIcon style={{color:"black" ,fontWeight:"bold"}} />
                        </Button>
                </div>
            </div>
        </div>
    );
};

export default ChatBox;
