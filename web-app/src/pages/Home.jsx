import React, { useEffect, useState } from 'react'
import Wilder from '../components/Wilder'


export default function Home() {

    const [wilders, setWilders] = useState(null)
    const [isLoading, setIsLoading] = useState(true)
    useEffect(() => {
        (async () => {
            const response = await fetch ("/wilders");
            setWilders(await response.json());
            setIsLoading(false);
        })();

    }, [])

    return (
        <>
            <h2>Wilders</h2>
            <section className="card-row">
                {isLoading?
                    <p> Loading... </p>
                    
                    :
                    
                    wilders?.map((wilder) => 
                    <Wilder key={wilder.id} firstName={wilder.firstName} lastName={wilder.lastName} skills={wilder.skills} isTrainer={wilder.isTrainer}/>
                    )
                }
                
            </section>
        </>
  )
}
