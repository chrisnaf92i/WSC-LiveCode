import React from 'react'

export default function Skill({name, numberOfVotes}) {
  return (
    <>
        {name}
        <span className="votes"> { numberOfVotes } </span>
    </>
  )
}
