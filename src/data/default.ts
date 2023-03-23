import { generateId } from '@/util/idGenerator';
import { InKinkCategory } from '../types/kinks';
import { Rating } from '../types/ratings';

export const getDefaultRatings = (): Rating[] => [
    { name: 'Not Entered', color: '#FFF' },
    { name: 'Want to try', color: '#FF1493' },
    { name: 'I Love it', color: '#23FD22' },
    { name: 'I Like it', color: '#6DB5FE' },
    { name: 'It\'s okay', color: '#FDFD6B' },
    { name: 'Maybe', color: '#F57900' },
    { name: 'No', color: '#000000' },
];

const createKinkCategory = (name: string, subcategories: string[], kinks: string[], defaultRating: string): InKinkCategory => ({
    id: generateId(),
    name,
    subcategories,
    kinks: kinks.map((kinkname) => ({
        id: generateId(),
        name: kinkname,
        ratings: subcategories.reduce((map: Record<string, string>, subcategory: string) => ({ ...map, [subcategory]: defaultRating }), {}),
    })),
});

export const getDefaultKinkContent = (defaultRating: string): InKinkCategory[] => [
    createKinkCategory("Clothing", ["Self", "Partner"], 
["Body harnesses", "Boy shorts", "Clothed sex", "Corsets", "Costumes", "Crossdressing", "Dresses", "Heels", "Jockstraps", "Murrsuits", "No underwear", "Nudity", "Panties", "Shirts", "Shoes", "Stockings", "Thongs", "Uniforms", "Wigs"], defaultRating),
    createKinkCategory("General sex", ["Giving/Doing", "Receiving"], 
["Assjobs", "Barebacking", "Breast/Chest Play", "Deep throat", "Docking", "Double barreling", "Double penetration", "Edging", "Fingering", "Fisting", "Footjobs", "Handjobs", "Hickies", "Kissing", "Nipple Play", "Oral Sex", "Penis in ass", "Penis in vagina", "Rimming", "Teasing", "Titjobs"], defaultRating),
    createKinkCategory("Toys", ["Self", "Partner"], 
["Air-suction", "Anal beads", "Buttplugs", "Cock rings", "Dildos", "DIY", "Fuck machines", "External vibrators", "Insertable inflatables", "Insertable vibrators", "Strap-ons"], defaultRating),
    createKinkCategory("Body Worship", ["Giving", "Receiving"], 
["Ass worship", "Breast worship", "Cock worship", "Foot worship", "Pussy worship"], defaultRating),
    createKinkCategory("Domination", ["Top", "bottom"], 
["Begging", "Caregiver / little", "Crawling", "Discipline", "Domestic servitude", "Eye-contact restriction", "Facesitting", "Forced orgasm", "Kneeling", "Learned postures", "Pain training", "Pet play", "Ruined orgasm", "Slavery"], defaultRating),
    createKinkCategory("Restrictive", ["Giving/On Partner", "Receiving/On Me"], 
["Ball Gag", "Cages", "Chains", "Chastity", "Collar", "Handcuffs", "Immobilization", "Leash", "Mummification", "Phallic Gag", "Ring Gag", "Ropes (Shibari)", "Ropes (Standard)", "Spider Gag", "Suspension (Hook)", "Suspension (Rope)"], defaultRating),
    createKinkCategory("Impact Play", ["Hitting", "Receiving"], 
["Belts", "Caning", "Cock torture", "Paddling", "Slapping", "Spanking", "Strapping", "Whipping"], defaultRating),
    createKinkCategory("Consensual Nonconsent", ["Aggressor", "Victim"], 
["Alcohol", "Being woken up for play", "Blackmail / coercion", "Drugs", "Kidnapping", "Sex while asleep"], defaultRating),
    createKinkCategory("Sensations", ["Giving/Top", "Receiving/bottom"], 
["Blades", "Clothespins", "Cutting", "Feathers", "Figging", "Fur", "Head petting/stroking hair", "Hot wax", "Ice", "Long nails", "Nipple clamps", "Tickling", "Vampire gloves", "Wartenberg Wheel"], defaultRating),
    createKinkCategory("Sensory Deprivation", ["Giving/Top", "Receiving/bottom"], 
["Blindfold", "Earplugs", "Full-head Hoods"], defaultRating),
    createKinkCategory("Primal", ["Predator", "prey"], 
["Biting", "Growling", "Hair Pulling", "Howling", "Scratching", "Screaming", "Wrestling"], defaultRating),
    createKinkCategory("Fluids", ["Giving", "Receiving"], 
["Blood", "Blood (drinking)", "Creampie", "Creampie eating (felching)", "Lactation (body)", "Lactation (drinking)", "Pee (body)", "Pee (drinking)", "Semen", "Semen (body)", "Semen (face)", "Semen (eating)", "Spit", "Spit (body)", "Spit (face)", "Squirt", "Squirt (body)", "Squirt (face)", "Squirt (drinking)", "Vaginal fluids"], defaultRating),
    createKinkCategory("Misc. Fetish", ["Giving/Actor", "Receiving/Subject"], 
["Fire play", "Food play", "Forniphilia", "Impregnation", "Bestiality", "Pregnancy"], defaultRating),
]
