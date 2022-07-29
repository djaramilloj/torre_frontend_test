export interface Person {
    name: string;
    username: string;
    photo?: string;
    skills?: Skill[];
}

export interface Skill {
    name: string;
    proficiency: 'master' | 'expert' | 'proficient' | 'novice' | 'no-experience-interested';
}

export interface Opportunity {
    job: string;
    name:  string;
    skills: Skill[];
}