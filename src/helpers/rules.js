
import DwarfImage from './../images/races/dwarf.png'
import DragonbornImage from './../images/races/dragonborn.png'
import ElfImage from './../images/races/elf.png'
import GnomeImage from './../images/races/gnome.png'
import HalflingImage from './../images/races/halfling.png'
import HumanImage from './../images/races/human.png'


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