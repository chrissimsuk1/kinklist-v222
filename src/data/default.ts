import { generateId } from '@/util/idGenerator';
import { InKinkCategory } from '../types/kinks';
import { Rating } from '../types/ratings';

export const getDefaultRatings = (): Rating[] => [
    { name: 'Not Entered', color: '#FFF' },
    { name: 'Want to try', color: '#C7C7C7' },
    { name: 'I Love it', color: '#6DB5FE' },
    { name: 'I Like it', color: '#23FD22' },
    { name: 'It\'s okay', color: '#FDFD6B' },
    { name: 'Maybe', color: '#F57900' },
    { name: 'Noo', color: '#910000' },
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
["Assjobs", "Barebacking", "Breast/Chest Play", "Deep throat", "Docking", "Double barreling", "Double penetration", "Edging", "Fingering", "Fisting", "Footjobs", "Handjobs", "Hickies", "Instructions (JOI/SI)", "Kissing", "Nipple Play", "Oral Sex", "Penis in ass", "Penis in vagina", "Rimming", "Teasing", "Titjobs"], defaultRating),
    createKinkCategory("Toys", ["Self", "Partner"], 
["Air-suction", "Anal beads", "Buttplugs", "Cock rings", "Dildos", "DIY", "Fuck machines", "External vibrators", "Insertable inflatables", "Insertable vibrators", "Kegel balls", "Magic wands", "Prostate massager", "Strap-ons"], defaultRating),
    createKinkCategory("Body Worship", ["Giving", "Receiving"], 
["Ass worship", "Breast worship", "Cock worship", "Foot worship", "Pussy worship"], defaultRating),
    createKinkCategory("Domination", ["Top", "bottom"], 
["Begging", "Caregiver / little", "Crawling", "Discipline", "Domestic servitude", "Eye-contact restriction", "Facesitting", "Forced orgasm", "Full-time power exchange", "Kneeling", "Learned postures", "Orders", "Pain training", "Pet play", "Ruined orgasm", "Slavery", "Speaking restriction", "Washroom restriction"], defaultRating),
    createKinkCategory("Restrictive", ["Giving/On Partner", "Receiving/On Me"], 
["Ball Gag", "Cages", "Chains", "Chastity", "Collar", "Handcuffs", "Immobilization", "Leash", "Mummification", "Phallic Gag", "Ring Gag", "Ropes (Shibari)", "Ropes (Standard)", "Spider Gag", "Suspension (Hook)", "Suspension (Rope)"], defaultRating),
    createKinkCategory("Impact Play", ["Hitting", "Receiving"], 
["Bastinado", "Belt buckles", "Belts", "Caning", "Cock torture", "Face slapping", "Flogging", "Kicking", "Paddling", "Pussy torture", "Slapping", "Spanking", "Strapping", "Whipping"], defaultRating),
    createKinkCategory("Consensual Nonconsent", ["Aggressor", "Victim"], 
["Alcohol", "Being woken up for play", "Blackmail / coercion", "Drugs", "Kidnapping", "Sex while asleep"], defaultRating),
    createKinkCategory("Sensations", ["Giving/Top", "Receiving/bottom"], 
["Blades", "Clothespins", "Cutting", "Feathers", "Figging", "Fur", "Head petting/stroking hair", "Hot wax", "Ice", "Long nails", "Nipple clamps", "Temperature play", "Tickling", "Vampire gloves", "Wartenberg Wheel"], defaultRating),
    createKinkCategory("Sensory Deprivation", ["Giving/Top", "Receiving/bottom"], 
["Blindfold", "Earplugs", "Full-head Hoods"], defaultRating),
    createKinkCategory("Primal", ["Predator", "prey"], 
["Biting", "Growling", "Hair Pulling", "Howling", "Scratching", "Screaming", "Wrestling"], defaultRating),
    createKinkCategory("Fluids", ["Giving", "Receiving"], 
["Blood", "Blood (drinking)", "Creampie", "Creampie eating (felching)", "Lactation (body)", "Lactation (drinking)", "Menstruation", "Menstruation (licking)", "Pee", "Pee (body)", "Pee (face)", "Pee (drinking)", "Scat", "Scat (body)", "Scat (face)", "Scat (eating)", "Semen", "Semen (body)", "Semen (face)", "Semen (eating)", "Spit", "Spit (body)", "Spit (face)", "Spit (drinking)", "Squirt", "Squirt (body)", "Squirt (face)", "Squirt (drinking)", "Vaginal fluids", "Vaginal fluids (body)", "Vaginal fluids (face)", "Vaginal fluids (eating)", "Vomit", "Vomit (body)", "Vomit (face)", "Vomit (drinking)"], defaultRating),
    createKinkCategory("Misc. Fetish", ["Giving/Actor", "Receiving/Subject"], 
["Fire play", "Food play", "Forniphilia", "Impregnation", "Bestiality", "Pregnancy"], defaultRating),
]
