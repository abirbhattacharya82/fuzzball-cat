import React from "react";
import './Body.css';
import { useState } from "react";
import axios from "axios";
import ChatBox from "../Chatbox/Chatbox";

function Body() {
    const [messages, setMessages] = useState([]);

    function send() {
		const api_key="";
        document.getElementById('status').innerHTML = "typing...";
        var message = document.getElementById('message').value;
        var role = "User";
        var newMessage = { message, role };
        setMessages(prevMessages => [...prevMessages, newMessage]);

        const physicsRegex = /(?:\bwhat|\bhow|\bwhen|\bwhere|\bwho|\bwhy|\bexplain|\bcalculate|\bderive|\bfind|\bmeasure|\bdetermine|\bdefine).*?\b(?:physics|force|energy|motion|acceleration|gravity|mass|magnet|magnetic|magnetic lines|electromagnet|right hand thumb rule|loop|faraday|fleming's|snell's|generator|solenoid|conductor|inducer|capacitor|electron|proton|neutron|motor|velocity|light|electricity|circuit|current|ohm's|ohm|resistance|oersted|voltage|refractive index|lens|reflection|spherical|formula|celcius|fahrenheit|convert|magnification|application|concave|convex|refraction|laws\s(of|for)\s(reflection|refraction)|\bpull\b|\bejects\b|\brecoil velocity\b|\bmasses\b|\bvelocities\b|\bcollision\b)/i;

        if (physicsRegex.test(message)) {
            const headers = {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${api_key}`
              };
              
              const payload = {
                "model": "gpt-3.5-turbo",
                "messages": [{"role": "user", "content": message}],
                "temperature": 0.7
              };
              
              axios.post('https://api.openai.com/v1/chat/completions', payload, { headers })
                .then(response => {
                  message = response.data.choices[0].message.content;
                  role = "Application";
                  newMessage = { message, role };
                  setMessages(prevMessages => [...prevMessages, newMessage]);
                  document.getElementById('status').innerHTML = "Online";
                })
                .catch(error => {
                  console.error(error);
                });              
        }
        else {
            setTimeout(function () {
                message = "I am Sorry I don't know that";
                role = "Application";
                newMessage = { message, role };
                setMessages(prevMessages => [...prevMessages, newMessage]);
                document.getElementById('status').innerHTML = "Online";
            }, 1000);
        }
        document.getElementById('message').value="";
    }

    return (
        <div className="Body">
            <ChatBox messages={messages} />
            <div className="InputArea">
                <div className="Input"><input type="text" id="message" /></div>
                <div className="Button"><button onClick={send}>Send</button></div>
            </div>
        </div>
    )
};

export default Body;
