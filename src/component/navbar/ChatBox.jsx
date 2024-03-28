'use client'
import { Button, Container, Input } from '@mui/material';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import React, { useState } from 'react';

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
            setChatContent([...chatContent, inputText]);
            setInputText('');
        }
    }
    return (
        <div style={{ display: 'flex', flexDirection: 'column', position: "relative", gap: '10px' }}>
            <Container sx={{ border: 'solid 2px black', overflowY: 'auto', position: "relative", height: '30rem', paddingBottom: '5px' }}>
                {chatContent.map((message, index) => (
                    <div key={index} style={{ margin: '5px', padding: '10px', backgroundColor: '#f0f0f0' }}>{message}</div>
                ))}

            </Container>
            <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'flex-end', height: '10%', position: "static", border: '2px solid black' }}>
                <div style={{ textAlign: 'center', display: 'flex', justifyContent: 'space-around', position: "absolute", Bottom: "0px" }}>
                    <Input
                        placeholder='write here...'
                        style={{ width: "660px" }}
                        value={inputText}
                        onChange={handleInputChange}
                        onKeyDown={clickPress}
                    />
                    <Button
                        style={{ fontWeight: 'bold', color: "black" }}
                        variant="contained"

                        onClick={handleButtonClick}
                    >
                        <ArrowForwardIosIcon />
                        <arr style={{ fontSize: "30px", color: "black" }} />
                    </Button>
                </div>
            </div>
        </div>
    );
};

export default ChatBox;
