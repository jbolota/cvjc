import { ExtraInfo } from "../types/types"

interface SkillsLanguageCvProps {
    skills : ExtraInfo[],
    languages: ExtraInfo[]
}

export function SkillsLanguageCv({skills, languages}:SkillsLanguageCvProps){
    return(
        <div>
        <div className="flex">

            <div className="flex-child">
                <div className="label">SKILLS</div>
                <ul>
                {skills.map((skill) => (
                    <li key={skill.id}>{skill.info}</li>
                ))}
                </ul>
            </div>

            <div className="flex-child">
                <div className="label">LANGUAGES</div>
                <ul>
                {languages.map((language) => (
                    <li key={language.id}>{language.info}</li>
                ))}
                </ul>
            </div>
        </div>


    </div>) 
}