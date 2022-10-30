import { Experience } from "../types/types"

interface ExperienceCvProps {
    items: Experience[]
}

export function ExperienceCv({ items }: ExperienceCvProps) {
    return (
        <div>
            <div className="flex">

                <div className="flex-child">
                    <div className="label">EXPERIENCE</div>
                </div>

            </div>
            {items.map((item) => (
                <div key={item.id} className="flex">
                    <div className="flex-child">
                       
                        <p><i>{item.datestart} - {item.dateend}</i></p>
                        <span><b>{item.place}</b></span>
                    </div>
                    <div className="flex-child">
                        <h3>{item.role}</h3>
                        <span>{item.company}</span>
                        <p>{item.task}</p>
                    </div>
                </div>
            ))}

        </div>


    )
}