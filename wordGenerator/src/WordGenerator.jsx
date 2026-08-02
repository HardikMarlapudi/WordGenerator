import React, {useState} from 'react';
import axios from 'axios';

function WordGenerator() {

    const [word, setWord] = useState('');

    const generateWord = async () => {
        try {
            const response = await axios.get("https://api.api-ninjas.com/v1/randomword",
                 {
                    headers: {
                    "X-Api-Key": '1QaEXXiMr42UQHgffVLNDA==uoRjZZaDnhJg5v1O',
                    'Content-Type': "application/json"
                    }
            });
            const wordData = response.data;
            setWord(wordData.word);
        } catch (error) {
            console.error("Error fetching word", error);
        }
    }

    const copyWord = () => {
        if (word) {
            navigator.clipboard.writeText(word);
            alert("Word copied to clipboard");
        } else {
            alert("Word not copied to clipboard");
        }
    }

    return (
        <>
        <div className="flex min-h-screen items-center px-10 py-20 justify-center">
        <div className="flex-col justify-center-safe items-center bg-blue-300 px-30 py-10 max-h-md rounded-2xl">
        
        <div className="block px-5 py-5 text-2xl text-center font-semibold">Word Generator</div>

        <div className="border-2 rounded-2xl text-center max-w-md mx-auto px-4 py-10 text-2xl font-bold">{word}</div>
        
        <center><button className="text-center text-lg font-mono border-2 rounded-2xl border-blue-500 m-10 px-5 py-5 bg-blue-600 text-white hover:bg-blue-700 cursor-pointer" onClick={copyWord}>Copy</button></center>
        <center><button className="text-center text-lg font-mono border-2 rounded-2xl border-green-500 px-5 py-5 bg-green-500 text-white hover:bg-green-600 cursor-pointer" onClick={generateWord}>Generate Word</button></center>
        
        </div>
        </div>
        </>
    )
}

export default WordGenerator;
