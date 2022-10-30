export interface HeaderCvInfo {
    id: string;
    name: string;
    role: string;
    email: string;
    address: string;
    phone: number;
    datebirth: string;
    nationality: string;
    urlLinkdin: string;
}

export interface KnowMoreCvInfo {
    id: string;
    title: string;
    info: string;
}

export interface Experience {
    id: string;
    datestart: string;
    dateend: string;
    role: string;
    company: string;
    place: string;
    task: string;
}

export interface Education {
    id: string;
    datestart: string;
    dateend: string;
    course: string;
    school: string;
}

export interface ExtraInfo {
    id: string;
    info: string;
}

export interface TeckStack {
    id: string;
    icon: icon;
}