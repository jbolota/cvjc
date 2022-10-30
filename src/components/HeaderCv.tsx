import { HeaderCvInfo } from "../types/types"

interface HeaderCvProps {
    item: HeaderCvInfo;
}

export function HeaderCv({ item }: HeaderCvProps) {
    return (
        <div className="flex">
            <div className="flex-child text">
                <h1>{item.name}</h1>
                <h5>{item.role}</h5>
            </div>
            <div className="flex-child text align-text-right">
                <ul className="no-decoration-list">
                    <li><b>E-mail:</b> {item.email}</li>
                    <li><b>Address:</b> {item.address}</li>
                    <li><b>Phone:</b> {item.phone}</li>
                    <li><b>Date of birth:</b> {item.datebirth}</li>
                    <li><b>Nationality:</b> {item.nationality}</li>
                    <li><b>Linkdin:</b> <a href={item.urlLinkdin}>Check it</a></li>
                </ul>
            </div>
        </div>)
}