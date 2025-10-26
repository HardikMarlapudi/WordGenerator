import React, {useState} from 'react';
import axios from 'axios'

function WordGenerator() {

    const [word, setWord] = useState('');
    const [definition, setDefinition] = useState('');

    const generateWord = async () => {
        try {
            const response = await axios.get("https://api.api-ninjas.com/v1/dictionary?word=code", {
                headers: {
                    'X-Api-Key': '1QaEXXiMr42UQHgffVLNDA==uoRjZZaDnhJg5v1O',
                    'Content-Type': 'application/json'
                }
            });
            const wordData = response.data;
            setWord(wordData.word);
            setDefinition(wordData.definition);
        } catch (error) {
            console.error("Cannot fetch word", error);
        }
    }

    const copyWord = () => {
        if (word) {
            navigator.clipboard.writeText(word);
            alert("Word has been copied");
        } else {
            alert("Word has not been copied");
        }
    }

    return (
        <>
        <h2 id="title">Word Generator</h2>
        <center><div className="border">
        <h4 id="word">{word}</h4>
        <p id="meaning">{definition}</p>
        </div>
        </center>
        <center><button id="copyWord" onClick={copyWord}>Copy</button></center>
        <center><button id="generateWord" onClick={generateWord}>Generate Word</button></center>
        </>
    )
}

export default WordGenerator;
