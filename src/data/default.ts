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
["Body harnesses", "Clothed sex", "Piercings", "Corsets", "Uniform / Costume", "Strip Tease", "Face Mask", "Tattoos", "Roleplay", "Gloves", "Dresses", "Heels", "Murrsuits", "Nudity", "Wearing symbolic jewelry", "Shirts", "Stockings", "Glasses", "Cosplay", "Wigs"], defaultRating),
    createKinkCategory("General sex", ["Giving/Doing", "Receiving"], 
["Assjobs", "Romance / Affection", "Slow Sex Play", "Dirty talk", "Uniforms", "Erotic Dance", "Breast/Chest Play", "Deep throat", "Teasing", "Double barreling", "Double penetration", "3+ Penetration", "Fingering", "Fisting", "Footjobs", "Handjobs", "Hickies", "Kissing", "Nipple Play", "Oral Sex", "Penis in ass", "Penis in vagina", "Teasing", "Titjobs"], defaultRating),
    createKinkCategory("Toys", ["Self", "Partner"], 
["Air-suction", "Anal beads", "Buttplugs", "Cock rings", "Dildos", "DIY", "Fuck machines", "Insertable inflatables", "Insertable vibrators", "Strap-ons"], defaultRating),
    createKinkCategory("Body Worship", ["Giving", "Receiving"], 
["Ass worship", "Breast worship", "Cock worship", "Foot worship", "Cuddling", "Pussy worship"], defaultRating),
    createKinkCategory("Domination", ["Top", "bottom"], 
["Begging", "Obedience training", "Crawling", "Discipline", "Master/Pet", "Puppy/Pony Play", "Facesitting", "Face Fucking", "Forced orgasm", "Rough Sex", "Kneeling", "Caging", "Pain training", "Pet play"], defaultRating),
    createKinkCategory("Restrictive", ["Giving/On Partner", "Receiving/On Me"], 
["Cages", "Chains", "Chastity", "Collar", "Leash", "Immobilization", "Handcuffs", "Gag", "Ropes (Standard)"], defaultRating),
    createKinkCategory("Impact Play", ["Hitting", "Receiving"], 
["Caning", "Cock torture", "Paddling", "Slapping", "Spanking", "Strapping", "Whipping"], defaultRating),
    createKinkCategory("Consensual Nonconsent", ["Aggressor", "Victim"], 
["Alcohol", "Being woken up for play", "Blackmail / coercion", "Drugs", "Sex while asleep"], defaultRating),
    createKinkCategory("Sensations", ["Giving/Top", "Receiving/bottom"], 
["Clothes pins", "Feathers", "Fur", "Silk", "Head petting/stroking hair", "Hot wax", "Ice", "Nipple clamps", "Tickling", "Vampire gloves"], defaultRating),
    createKinkCategory("Sensory Deprivation", ["Giving/Top", "Receiving/bottom"], 
["Blindfold", "Earplugs", "Full-head Hoods"], defaultRating),
    createKinkCategory("Primal", ["Predator", "prey"], 
["Biting", "Growling", "Hair Pulling", "Howling", "Scratching", "Screaming", "Wrestling"], defaultRating),
    createKinkCategory("Fluids", ["Giving", "Receiving"], 
["Blood", "Creampie", "Blood play", "Excessive Semen", "Golden Showers", "Semen (body)", "Semen (face)", "Swallowing semen", "Squirt"], defaultRating),
    createKinkCategory("Misc. Fetish", ["Giving/Actor", "Receiving/Subject"], 
["Futanari", "Furries", "Animal Roles", "Monster or Alien", "Tentacles", "Food play", "Puppy/Pony Play", "Impregnation", "Bestiality", "Feral Play", "Exhibitionism"], defaultRating),
]
