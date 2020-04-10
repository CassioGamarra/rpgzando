
import DwarfImage from './../images/races/dwarf.png'
import DragonbornImage from './../images/races/dragonborn.png'
import ElfImage from './../images/races/elf.png'
import GnomeImage from './../images/races/gnome.png'
import HalflingImage from './../images/races/halfling.png'
import HumanImage from './../images/races/human.png'
import PaladinImage from './../images/calsses/paladin.png'
import BarbaricImage from './../images/calsses/barbaric.png'
import BardImage from './../images/calsses/bard.png'
import RogueImage from './../images/calsses/rogue.png'
import WizardImage from './../images/calsses/wizard.png'
import ClericImage from './../images/calsses/cleric.png'
import RangerImage from './../images/calsses/ranger.png'
import DruidImage from './../images/calsses/druid.png'
import FighterImage from './../images/calsses/fighter.png'
import WarlockImage from './../images/calsses/warlock.png'
import SorcererImage from './../images/calsses/sorcerer.png'
import MonkImage from './../images/calsses/monk.png'

export const races = [
    {
        id: 1, 
        name: 'Anão da Colina', 
        race: 1, 
        subRace: 1, 
        desc: '+2 CON, +1 SAB',
        image: DwarfImage
    },
    {
        id: 2, 
        name: 'Anão da Montanha', 
        race: 1, 
        subRace: 2, 
        desc: '+2 CON, +2 FOR',
        image: DwarfImage
    },
    {
        id: 3, 
        name: 'Draconato', 
        race: 2, 
        subRace: 1, 
        desc: '+2 FOR, +1 CAR',
        image: DragonbornImage
    },
    {
        id: 4, 
        name: 'Elfo Alto', 
        race: 3, 
        subRace: 1, 
        desc: '+2 DES, +1 INT',
        image: ElfImage
    },
    {
        id: 5, 
        name: 'Elfo da Floresta', 
        race: 3, 
        subRace: 2, 
        desc: '+2 DES, +1 SAB',
        image: ElfImage
    },
    {
        id: 6, 
        name: 'Elfo Negro', 
        race: 3, 
        subRace: 3, 
        desc: '+2 DES, +1 INT',
        image: ElfImage
    },
    {
        id: 7, 
        name: 'Gnomo da Floresta', 
        race: 4, 
        subRace: 1, 
        desc: '+2 INT, +1 DES',
        image: GnomeImage
    },
    {
        id: 8, 
        name: 'Gnomo da Pedra', 
        race: 4, 
        subRace: 2, 
        desc: '+2 INT, +1 CON',
        image: GnomeImage
    },
    {
        id: 9, 
        name: 'Halfling Leve', 
        race: 5, 
        subRace: 1, 
        desc: '+2 DES, +1 CAR',
        image: HalflingImage
    },
    {
        id: 10, 
        name: 'Halfing robusto', 
        race: 5, 
        subRace: 2, 
        desc: '+2 DES, +1 CON',
        image: HalflingImage
    },
    {
        id: 11, 
        name: 'Humano', 
        race: 6, 
        subRace: 1, 
        desc: '+1 FOR, +1 DES, +1 CON, +1 INT, +1 SAB, +1 CAR',
        image: HumanImage
    },
]

// 1- FOR
// 2- DES
// 3- CON
// 4- INT
// 5- SAB
// 6- CAR

const expertise = [
    {id: 1, desc: 'Atletismo', type: 1},
    {id: 2, desc: 'Acrobacia', type: 2},
    {id: 3, desc: 'Furtividade', type: 2},
    {id: 4, desc: 'Prestidigitação', type: 2},
    {id: 5, desc: 'Arcanismo', type: 4},
    {id: 6, desc: 'História', type: 4},
    {id: 7, desc: 'Investigação', type: 4},
    {id: 8, desc: 'Natureza', type: 4},
    {id: 9, desc: 'Religião', type: 4},
    {id: 10, desc: 'Adestrar Animais', type: 5},
    {id: 11, desc: 'Intuição', type: 5},
    {id: 12, desc: 'Medicina', type: 5},
    {id: 13, desc: 'Percepção', type: 5},
    {id: 14, desc: 'Sobrevivência', type: 5},
    {id: 15, desc: 'Atuação', type: 6},
    {id: 16, desc: 'Enganação', type: 6},
    {id: 17, desc: 'Intimidação', type: 6},
    {id: 18, desc: 'Persuasão', type: 6},
]

export const classes = [
    {
        id: 1,
        name: 'Paladino',
        hp: '1d10',
        image: PaladinImage,
        expertise: [
            expertise[0],
            expertise[10],
            expertise[16],
            expertise[11],
            expertise[17],
            expertise[8],
        ],
        quantityExpertise: 2,
    },
    {
        id: 2,
        name: 'Barbaro',
        hp: '1d12',
        image: BarbaricImage,
        expertise: [
            expertise[0],
            expertise[9],
            expertise[16],
            expertise[7],
            expertise[12],
            expertise[13],
        ],
        quantityExpertise: 2,
    },
    {
        id: 3,
        name: 'Bardo',
        hp: '1d8',
        image: BardImage,
        image: PaladinImage,
        expertise: expertise,
        quantityExpertise: 3,
    },
    {
        id: 4,
        name: 'Ladino',
        hp: '1d8',
        image: RogueImage,
        expertise: [
            expertise[0],
            expertise[1],
            expertise[14],
            expertise[15],
            expertise[2],
            expertise[16],
            expertise[10],
            expertise[6],
            expertise[12],
            expertise[17],
            expertise[3],
        ],
        quantityExpertise: 4,
    },
    {
        id: 5,
        name: 'Mago',
        hp: '1d6',
        image: WizardImage,
        expertise: [
            expertise[4],
            expertise[5],
            expertise[10],
            expertise[6],
            expertise[11],
            expertise[8],
        ],
        quantityExpertise: 2,
    },
    {
        id: 6,
        name: 'Clerigo',
        hp: '1d8',
        image: ClericImage,
        expertise: [
            expertise[5],
            expertise[10],
            expertise[11],
            expertise[17],
            expertise[8],
        ],
        quantityExpertise: 2,
    },
    {
        id: 7,
        name: 'Patrulheiro',
        hp: '1d10',
        image: RangerImage,
        expertise: [
            expertise[1],
            expertise[9],
            expertise[0],
            expertise[2],
            expertise[10],
            expertise[6],
            expertise[7],
            expertise[12],
            expertise[14],
        ],
        quantityExpertise: 3,
    },
    {
        id: 8,
        name: 'Druida',
        hp: '1d8',
        image: DruidImage,
        expertise: [
            expertise[4],
            expertise[9],
            expertise[10],
            expertise[11],
            expertise[7],
            expertise[12],
            expertise[8],
            expertise[13],
        ],
        quantityExpertise: 2,
    },
    {
        id: 9,
        name: 'Guerreiro',
        hp: '1d10',
        image: FighterImage,
        expertise: [
            expertise[1],
            expertise[9],
            expertise[1],
            expertise[5],
            expertise[10],
            expertise[16],
            expertise[12],
            expertise[13],
        ],
        quantityExpertise: 2,
    },
    {
        id: 10,
        name: 'Bruxo',
        hp: '1d8',
        image: WarlockImage,
        expertise: [
            expertise[4],
            expertise[15],
            expertise[5],
            expertise[16],
            expertise[6],
            expertise[7],
            expertise[8],
        ],
        quantityExpertise: 2,
    },
    {
        id: 11,
        name: 'Feiticeiro',
        hp: '1d6',
        image: SorcererImage,
        expertise: [
            expertise[4],
            expertise[15],
            expertise[10],
            expertise[16],
            expertise[17],
            expertise[8],
        ],
        quantityExpertise: 2,
    },
    {
        id: 12,
        name: 'Monge',
        hp: '1d8',
        image: MonkImage,
        expertise: [
            expertise[1],
            expertise[0],
            expertise[2],
            expertise[5],
            expertise[10],
            expertise[8],
        ],
        quantityExpertise: 2,
    },
]

export const handleRace = (race, type) =>
{
    let isError = false
    const attributes = {
        for: 0,
        des: 0,
        con: 0,
        sab: 0,
        int: 0,
        car: 0,
    }

    switch (race) {
        case 1:
            attributes.con = attributes.con + 2 

            if(type === 1) 
                attributes.sab = attributes.sab + 1
            else if(type === 2) 
                attributes.for = attributes.for + 2
            else
                isError = true
        break;
        case 2:
            attributes.for = attributes.for + 2 
            attributes.car = attributes.car + 1
        break;
        case 3:
            attributes.des = attributes.des + 2 

            if(type === 1) 
                attributes.int = attributes.int + 1
            else if(type === 2) 
                attributes.sab = attributes.sab + 1
            else if(type === 2) 
                attributes.car = attributes.car + 1
            else
                isError = true
        break;
        case 4:
            attributes.int = attributes.int + 2 

            if(type === 1) 
                attributes.des = attributes.des + 1
            else if(type === 2) 
                attributes.con = attributes.con + 1
            else
                isError = true
        break;
        case 5:
            attributes.des = attributes.des + 2 

            if(type === 1) 
                attributes.car = attributes.car + 1
            else if(type === 2) 
                attributes.con = attributes.con + 1
            else
                isError = true
        break;
        case 6:
            attributes.for = attributes.for + 1 
            attributes.des = attributes.des + 1 
            attributes.con = attributes.con + 1 
            attributes.sab = attributes.sab + 1 
            attributes.int = attributes.int + 1 
            attributes.car = attributes.car + 1
        break;
        default:
            isError = true;
        break;
    }

    return isError ? null : attributes
}