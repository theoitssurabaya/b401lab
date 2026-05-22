import { type Language } from "@/context/LanguageContext"

export interface I_lecturers {
    name: string,
    role: {en: string, id: string}
    specialty: {en: string, id: string}
    initials: string
}

// interface I_lecturersFiltered {
//     name: string,
//     role: string,
//     specialty: string,
//     initials: string
// }

// export function lecturersLangFilter(lang: Language, lecturers: Array<I_lecturersAll>) {
//     let role = [];
//     let specialty = [];
//     if(lang == "en")
//     {
//         for(let i = 0; i < lecturers.length; i++)
//         {
//             role.push(lecturers[i]?.roleEN);
//             specialty.push(lecturers[i]?.specialtyEN)
//         }
//     }
// }

export const lecturers: Array<I_lecturers> = [
    {
        name: "Dr. Ahmad Zaini, S.T., M.Sc.",
        role: {en:"Head of laboratory", id: "Kepala Laboratorium"},
        specialty: {en: "", id: ""},
        initials: "AZ",
    },
    {
        name: "Muhtadin, S.T., M.T.",
        role: {en:"Lecturer", id: "Dosen"},
        specialty: {en: "", id: ""},
        initials: "M",
    },
    {
        name: "Eko Pramunanto, S.T., M.T.",
        role: {en:"Lecturer", id: "Dosen"},
        specialty: {en: "", id: ""},
        initials: "EP",
    },
    {
        name: "Ir. Hany Boedinugroho, M.T.",
        role: {en:"Lecturer", id: "Dosen"},
        specialty: {en: "", id: ""},
        initials: "HB",
    },
    {
        name: "Prof. Dr. Ir. Mauridhi Hery Purnomo, M.Eng.",
        role: {en:"Lecturer", id: "Dosen"},
        specialty: {en: "", id: ""},
        initials: "MH",
    },
    {
        name: "Atar Fuady Babgei, S.T., M.Sc.",
        role: {en:"Lecturer", id: "Dosen"},
        specialty: {en: "", id: ""},
        initials: "AF",
    },
]

