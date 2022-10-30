import { Education } from "../types/types"

interface EducationProps {
    items: Education[]
}

export function EducationCv({ items }: EducationProps) {
    return (
        <div>
            <div className="flex">
                <div className="flex-child">
                    <div className="label">EDUCATION</div>
                </div>
            </div>
            {items.map((item) => (
                <div className="flex" key={item.id}>
                    <div className="flex-child">
                        <p><i>{item.datestart} - {item.dateend}</i></p>
                    </div>
                    <div className="flex-child">
                        <h2>{item.course}</h2>
                        <h5>{item.school}</h5>
                    </div>
                </div>
            ))}

        </div>)
}