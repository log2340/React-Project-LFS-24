import React from 'react'
import PeopleModal from './PeopleModal';

const PeopleGroup = ({title, whichGroup})=>{
    return(
        <>
            <h2>{title}</h2>
            <div className="peopleList">
                {whichGroup.map((p)=>
                    <div key={p.username}>
                        <PeopleModal {...p}/>
                    </div>
                )}
            </div>

        </>
    );


}

export default PeopleGroup;