import React from 'react'
import Wilder from '../components/Wilder'

export default function Home() {
    const wilders = [
        {
            id:1,
            firstName:"Ryota",
            lastName:"wild",
            skills:[
            {
                id:1,
                skillName:"PHP"
            },
            {
                id:2,
                skillName:"javascript"
            },
            {
                id:3,
                skillName:"react"
            },
            
            ]
        },
        {
            id:2,
            firstName:"Alan",
            lastName:"wild",
            skills:[
            {
                id:2,
                skillName:"javascript"
            }
            ]
        },
        {
            id:3,
            firstName:"Hayato",
            lastName:"wild",
            skills:[
            {
                id:2,
                skillName:"javascript"
            }
            ]
        },
        {
            id:4,
            firstName:"Leo",
            lastName:"wild",
            skills:[
            {
                id:2,
                skillName:"javascript"
            }
            ]
        },
        {
            id:5,
            firstName:"Ryuto",
            lastName:"wild",
            skills:[
            {
                id:2,
                skillName:"javascript"
            }
            ]
        },
        {
            id:6,
            firstName:"Mandy",
            lastName:"wild",
            skills:[
            {
                id:2,
                skillName:"javascript"
            }
            ]
        },
        {
            id:4,
            firstName:"yuta",
            lastName:"wild",
            skills:[
            {
                id:2,
                skillName:"javascript"
            }
            ]
        },
    ]
    return (
        <>
            <h2>Wilders</h2>
            <section className="card-row">
            {
                wilders.map((wilder) => 
                <Wilder key={wilder.id} firstName={wilder.firstName} lastName={wilder.lastName} skills={wilder.skills}/>
                )
            }
            </section>
        </>
  )
}
