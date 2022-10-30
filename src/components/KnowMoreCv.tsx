import { KnowMoreCvInfo } from "../types/types"

interface KnowMoreCvProps {
    item: KnowMoreCvInfo;
}

export function KnowMoreCv({ item } : KnowMoreCvProps){
    return(
        <div className="flex">
        <div className="flex-child">
             <div className="label">{item.title} </div> 
        </div>
        <div className="flex-child text align-text-right">
            <p>
                {item.info}
            </p>
        </div>
     </div>) 
}