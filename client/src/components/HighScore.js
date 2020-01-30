import React, { useState, useEffect } from 'react'
import { useTrail, animated, useTransition } from 'react-spring'


function HighScore() {
  useEffect(()=>{
    set(true)
  })
  const [toggle, set] = useState(false)
  const config = { mass: 5, tension: 2000, friction: 200 }

  const [highScores, setHighScores] = useState([""])

  const liCon = {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
    justifyItems: "center"
  };

  const highScoreCon = {
    textAlign: "Center",
  }

  useEffect(() => {
    fetch("/api/highScores")
      .then(res => res.json())
      .then(
        (result) => {
          console.log(result)

          result.sort(function (a, b) {
            if (b.score - a.score){
              return b.score - a.score
            } else {
              return a.time - b.time
            }
});
          setHighScores(result)
        },
        // Note: it's important to handle errors here
        // instead of a catch() block so that we don't swallow
        // exceptions from actual bugs in components. 
        (error) => {
          console.log(error)
        }
      )
  }, []) 


  const trail = useTrail(highScores.length, {
    from:{
      transform: "translate3d(250vh,0,0)"
    },
   transform: toggle ? "translate3d(0vh,0,0)":"translate3d(250vh,0,0)"
  })




  return (
    <div style={highScoreCon}>
        <div>
        <div style={liCon}>
        <span>Rank</span><span>Score</span><span>Name</span><span>Time Left</span><span>Date</span>
        </div>
          {trail.map((props, index) => 
          props &&
          <animated.div style = {props}>
            <div style={liCon}>
                  <span>{index + 1}</span>
                  <span>{highScores[index].score}</span>
                  <span>{highScores[index].name}</span>
                  <span>{highScores[index].time}</span>
                  <span>{highScores[index].date}</span>
                </div>

          </animated.div> )}
          
            
        </div>
      
        
    </div>
  )
}

export default HighScore

// {slides.map(({ item, key, props }) => (
//   item &&
//   <animated.div style={props}>
//     <div style={{ fontSize: '1.5em', fontWeight: 'bold', marginBottom: "5vh" }}>High Scores!</div>
    // <div style={liCon}>
    //   <span>Rank</span><span>Score</span><span>Name</span><span>Time Left</span><span>Date</span>
    // </div>
//     {highScores && hSList}
//   </animated.div>
// ))}  