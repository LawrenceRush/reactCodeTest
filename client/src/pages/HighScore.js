import React,{ useState, useEffect } from 'react'

function HighScore() {
    const headCon = {
       
            display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",

            justifyItems: "center"

      };
      const liCon = {
       
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
        justifyItems: "center"

  };


    const [highScores, setHighScores] = useState([""])

    useEffect( () => {
        fetch("/api/highScores")
          .then(res => res.json())
          .then(
            (result) => {
  
              setHighScores(result)
            },
            // Note: it's important to handle errors here
            // instead of a catch() block so that we don't swallow
            // exceptions from actual bugs in components. 
            (error) => {
              console.log(error)
            }
          )
        },[])

    const highScoreCon = {
      textAlign:"Center",
      marginTop:"10vh",
      
    }
   const hSList = highScores.map((score, index) => <div style = {liCon}><span>{index + 1}</span><span>{score.score}</span>
<span>{score.name}</span><span>{score.time}</span><span>{score.date}</span></div>) 
    
    return (
        <div style = {highScoreCon}>
            <div style= { {fontSize: '1.5em', fontWeight: 'bold', marginBottom:"5vh"}}>High Scores!</div>
            <div style = {headCon}>
            <span>Rank</span><span>Score</span><span>Name</span><span>Time Left</span><span>Date</span>
            </div>
            {highScores && hSList}
        </div>
    )
}

export default HighScore
