import axios from "axios";
import React, { useEffect, useState } from "react";

const Rhyme = () =>{
    const [word, setWord] = useState<string>("")
    const [data, setData] = useState<IRhyme[]>([])
    useEffect(()=>{
        const GetRequest = async (word:string) =>{
            await axios.get(`https://api.datamuse.com/words?rel_rhy=${word}`).then(res =>{
                let response = res.data
                setData(response)
            })
            .catch (error => {
                console.log(error)
            })
                
            
        }
        GetRequest(word)
    },[word])

    return(
        <div style={{margin: "1rem"}}>
            <h1>Rhymy input</h1>
            <input style={{padding: ".5rem"}} value={word} onChange={(e) => setWord(e.target.value)}/>
            <ul>
                {data && data.map(key =>(
                    <li>{key.word}</li>
                ))}
            </ul>
        </div>
    )

}
interface IRhyme{
    word: string,
    score: number,
    numSyllables: number
}
export default Rhyme