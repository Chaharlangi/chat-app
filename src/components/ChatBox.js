import React, { useState, useEffect } from 'react';

function ChatBox() {
    const [chat, setChat] = useState([]);

    const send = (e) => {
        e.preventDefault();
        const input = document.querySelector('#input');

        setChat(oldArray => [...oldArray, {
            role: 'you',
            text: input.value
        }])

        setChat(oldArray => [...oldArray, {
            role: 'robot',
            text: input.value.split("").reverse().join("")
        }])

        // input.value = ""

        window.localStorage.setItem('chat', JSON.stringify(chat))
    };
    
   
    
    useEffect(() => {
        const savedChat = window.localStorage.getItem('chat');

        if (savedChat) {
            setChat(() => [...JSON.parse(savedChat)])
        }
    }, []);

    return (
        <div className="flex flex-col">
            <div className="mt-20 mb-16">
                {
                    chat.map((text, index) => {
                        return (
                            <div key={index} className={"my-2 flex " + (text.role === "robot" ? "justify-start" : "justify-end")}>
                                <div className={"w-3/4 mx-4 my-2 p-2 rounded-lg " + (text.role === "robot" ? "bg-gray-300" : "bg-blue-300")}>
                                    {text.text}
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        
            <form onSubmit={send} className="sticky bottom-0 z-10 bg-white border-t flex items-center">
                <input id="input" className="py-5 focus:outline-none w-full" placeholder="say hi..." />
                <button type="submit" className="bg-purple-600 hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-purple-600 focus:ring-opacity-50 px-4 py-2 text-white rounded">Send</button>
            </form>
        </div>
    )
}

export default ChatBox
