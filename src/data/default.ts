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
["Body harnesses", "Clothed sex", "Corsets", "Costumes", "Strip Tease", "Face Mask", "Dresses", "Heels", "Murrsuits", "Nudity", "Panties", "Shirts", "Stockings", "Glasses", "Uniforms", "Wigs"], defaultRating),
    createKinkCategory("General sex", ["Giving/Doing", "Receiving"], 
["Assjobs", "Romance / Affection", "Breast/Chest Play", "Deep throat", "Teasing", "Double barreling", "Double penetration", "3+ Penetration", "Fingering", "Fisting", "Footjobs", "Handjobs", "Hickies", "Kissing", "Nipple Play", "Oral Sex", "Penis in ass", "Penis in vagina", "Teasing", "Titjobs"], defaultRating),
    createKinkCategory("Toys", ["Self", "Partner"], 
["Air-suction", "Anal beads", "Buttplugs", "Cock rings", "Dildos", "DIY", "Fuck machines", "Insertable inflatables", "Insertable vibrators", "Strap-ons"], defaultRating),
    createKinkCategory("Body Worship", ["Giving", "Receiving"], 
["Ass worship", "Breast worship", "Cock worship", "Foot worship", "Pussy worship"], defaultRating),
    createKinkCategory("Domination", ["Top", "bottom"], 
["Begging", "Caregiver / little", "Crawling", "Discipline", "Master/Pet", "Puppy/Pony Play", "Facesitting", "Forced orgasm", "Kneeling", "Caging", "Pain training", "Pet play", "Ruined orgasm"], defaultRating),
    createKinkCategory("Restrictive", ["Giving/On Partner", "Receiving/On Me"], 
["Ball Gag", "Cages", "Chains", "Chastity", "Collar", "Leash", "Immobilization", "Handcuffs", "Gag", "Ropes (Standard)", "Spider Gag", "Suspension (Hook)", "Suspension (Rope)"], defaultRating),
    createKinkCategory("Impact Play", ["Hitting", "Receiving"], 
["Belts", "Caning", "Cock torture", "Paddling", "Slapping", "Spanking", "Strapping", "Whipping"], defaultRating),
    createKinkCategory("Consensual Nonconsent", ["Aggressor", "Victim"], 
["Alcohol", "Being woken up for play", "Blackmail / coercion", "Drugs", "Kidnapping", "Sex while asleep"], defaultRating),
    createKinkCategory("Sensations", ["Giving/Top", "Receiving/bottom"], 
["Clothespins", "Feathers", "Figging", "Fur", "Head petting/stroking hair", "Hot wax", "Ice", "Long nails", "Nipple clamps", "Tickling", "Vampire gloves", "Wartenberg Wheel"], defaultRating),
    createKinkCategory("Sensory Deprivation", ["Giving/Top", "Receiving/bottom"], 
["Blindfold", "Earplugs", "Full-head Hoods"], defaultRating),
    createKinkCategory("Primal", ["Predator", "prey"], 
["Biting", "Growling", "Hair Pulling", "Howling", "Scratching", "Screaming", "Wrestling"], defaultRating),
    createKinkCategory("Fluids", ["Giving", "Receiving"], 
["Blood", "Blood (drinking)", "Creampie", "Blood", "Lactation (body)", "Excessive Semen", "Pee (body)", "Pee (drinking)", "Semen", "Semen (body)", "Semen (face)", "Squirt", "Squirt (body)", "Vaginal fluids"], defaultRating),
    createKinkCategory("Misc. Fetish", ["Giving/Actor", "Receiving/Subject"], 
["Futanari", "Furries", "Monster or Alien", "Tentacles", "Food play", "Puppy/Pony Play", "Impregnation", "Bestiality", "Voyeurism/Exhibitionism"], defaultRating),
]
