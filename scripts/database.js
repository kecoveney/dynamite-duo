export const database = {
    heroes: [
        {
            id: 1,
            name: "Dynoguy",
            power: "Fire blasts"
        },
        {
            id: 2,
            name: "Hyperspeed",
            power: "Super speed"
        }
    ],
    villains: [
        {
            id:1,
            name:"ganon",
            power:"summoning"
        },
        {
            id:2,
            name:"JP",
            power:"Psycho Power"
        },
    ]
}

export const getVillains = () => {
    return database.villains.map(villain => ({...villain}))
}