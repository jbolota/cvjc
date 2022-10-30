import { TeckStack } from "../types/types"

interface TechStackProps {
    items: TeckStack[]
}

export function TechStack({items}: TechStackProps){
    return(
        <div>
        <div className="flex">
            <div className="flex-child">
                <div className="label">TECHSTACK</div>
            </div>
        </div>
        <div className="techstack align-text-center">
            {items.map((item) => ( <item.icon key={item.id} size={64} />))}
        </div>
    </div>) 
}