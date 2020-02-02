import React, { useContext, useEffect, useState } from 'react'
import { QuizContext } from '../store/store'
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import { useSpring, animated, useTransition } from 'react-spring'

function NamePageInfo() {
  let [nameAbsent, isNameAbsent] = useState(false)
  const [toggle, on] = useState(false)
  let { score } = useContext(QuizContext)
  let { beAnonymous } = useContext(QuizContext)
  let { name } = useContext(QuizContext)
  let { handleInputChange } = useContext(QuizContext)
  let { time } = useContext(QuizContext)
  let { addScore } = useContext(QuizContext)
  let { setPage } = useContext(QuizContext)
  useEffect(() => {
    if (name != "") {
      isNameAbsent(false)
    }
  })
const namePageInfoCon = {
  height: "100vh",
  display: "grid",
  gridTemplateColumns: "auto",
  alignItems: "center",
  width: "50%",
  margin: "0 auto"
}
  const infoStyles = {
    fontSize: '4vh',
    textAlign: 'center'

  }
  const buttonStyle = {
    textAlign: "Center"
  }

  const textStyle = {
    textAlign: "center",
    fontSize: "3vh"
  }
  const numberCircleStyle = {
    display: 'inline-block',
    width: "1.5em",
    height: "1.5em",
    textAlign: 'center',
    borderRadius: "50%",
    margin: '1rem auto',
    background: "DeepSkyBlue"
  }

  let scoreAnim = useSpring({
    delay: 250,
    to: { number: score },
    from: { number: 0 },
    config: { duration: (score * 500) }
  })

  let timeAnim = useSpring({
    delay: (score == 0) ? 1500 : (score * 500) +  500,
    to: { number: time },
    from: { number: 0 },
    config: { duration: (2000) }
  })

  const delayChange = () => {
    if (name !== "") {
      on(!toggle)
      const interval = setInterval(function () {
        setPage("HighScore")
        clearInterval(interval)
      }, 250);//run this thang every 2 seconds
    } else {

      isNameAbsent(true)
    }

  }

  return (
    <div style = {namePageInfoCon}>
      <div>
      <div style={infoStyles}> Score:
      <animated.div style={numberCircleStyle}>
          {scoreAnim.number.interpolate(val => (score !== 0) ? Math.floor(val) : 0)}
        </animated.div>
      </div>

      <div  style={infoStyles} >Time left:
          <animated.div style={numberCircleStyle}>
          {timeAnim.number.interpolate(val => (time !== 0) ? Math.floor(val) : 0)}
        </animated.div>
      </div>


      <div style={{ textAlign: "Center" }}>
        <TextField style={{ fontSize: "4vh" }} id="standard-basic" value={name}
          onChange={(e) => { handleInputChange(e) }}
          label="Enter name here"
          error={nameAbsent}
          helperText={nameAbsent ? 'Empty field!' : ' '}
        />
      </div>
      <div style={textStyle}>
        OR
    </div>
      <div style={buttonStyle}>
        <Button style={{ fontSize: "3vh" }} color="secondary" onClick={(e) => { beAnonymous() }}>
          Be anyonymous
      </Button>
      </div>
      <div style={textStyle}>
        Then
    </div>
      <div style={buttonStyle}>
        <Button style={{ fontSize: "3vh" }} color="primary" onClick={(e) => { addScore(); delayChange() }}>
          View high scores!
      </Button>
      </div>
      </div>
    </div>
  )
}

export default NamePageInfo
