import React, { Component } from 'react'
import { Accordion, AccordionAccordion } from 'semantic-ui-react'


/* creates accordians for degrees, undergrad and grad */
const degreeAccord = ({degrees}) => {

    /* Maps undergrad degrees into divs to display information */
    const mappedundergrad = (
        <>{degrees.undergraduate.map((d)=>
            <div className = "degreeAccordItem" key={d.degreeName}>
                <h2>{d.title}</h2>
                <h5>{d.description}</h5>
                <h3>Concentrations:</h3>
                {d.concentrations.map((conc)=>
                  <h5 key={conc} className="degreeConcentrations">{conc}</h5>  
                )}
            </div>
            )}</>
    )
    console.log({degrees});
    /* Maps graduate degrees into divs to display information */
    const mappedgrad = (
        <>{degrees.graduate.map((d)=>
            <div className = "degreeAccordItem" key={d.degreeName}>
            <h2>{d.title}</h2>
            <h5>{d.description}</h5>
            {d.concentrations && <h3>Concentrations:</h3>}
                {d.concentrations && d.concentrations.map((conc)=>
                    <h5 key={conc} className="degreeConcentrations">{conc}</h5>  
                )}
            {d.availableCertificates && <h2>Graduate Advanced Certificates:</h2>}
            {d.availableCertificates && d.availableCertificates.map((cert)=>
                    <h3 key={cert} className="degreeCertificates">{cert}</h3>  
                )}
            </div>
            )}</>
    )
    
    /* panels to be inserted into accordion */
    const panels = [{
        key: 1,
        title: {content:<nobr style={{fontSize: "200%", fontWeight: "bold"}} className="degreeAccordTitle">Undergraduate Degrees</nobr>,},
        content: {content: mappedundergrad}
                },
        {
        key: 2,
        title: {content:<nobr style={{fontSize: "200%", fontWeight: "bold"}} className="degreeAccordTitle">Graduate Degrees</nobr>,},
        content: {content: mappedgrad}
        },
    ]

    return(
        <>
            <Accordion
            
            defaultActiveIndex={[0, 2]}
            panels={panels}
            exclusive={false}
            fluid
            />
        </>
    );
}

export default degreeAccord
