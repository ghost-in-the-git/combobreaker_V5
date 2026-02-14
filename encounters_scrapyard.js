/**
 * SCRAP YARD - ENCOUNTER CONFIGURATION
 *
 * Junkers, scavengers, and makeshift dealers picking through the wreckage.
 */

const ENCOUNTERS_SCRAPYARD = [
    {
        name: "[COMMON] Mech Junker",
        type: "shop",
        description: "A wandering Junker's vessel has appeared on radar. They're broadcasting a trade signal.",
        engageText: "The Junker greets your mech as it arrives at the hangar bay door. They motion to a shelf of salvaged mech parts.",
        appearanceRate: 20,
        minLevel: 1,
        itemSlot1: [],
        itemSlot2: [],
        itemSlot3: []
    },
    {
        name: "[COMMON] Scrap Dealer",
        type: "shop",
        description: "A Scrap Dealer's cargo ship is passing through. Their comms crackle with offers of rare components.",
        engageText: "The Scrap Dealer eyes your mech approvingly. 'Got some quality salvage here, pilot. Take a look.'",
        appearanceRate: 20,
        minLevel: 1,
        itemSlot1: [],
        itemSlot2: [],
        itemSlot3: []
    },
    {
        name: "[COMMON] Field Mechanic",
        type: "shop",
        description: "A lone field mechanic truck sits next to a decommissioned mech. A field mechanic is offering tune-ups and spare parts.",
        engageText: "A grease-stained tech waves you in. 'I can patch armor, swap actuators, or sell you something that won't explode. Probably.'",
        appearanceRate: 15,
        minLevel: 1,
        itemSlot1: [],
        itemSlot2: [],
        itemSlot3: []
    },
    {
        name: "[COMMON] Derelict Vending Array",
        type: "shop",
        description: "A derelict station's vending array still has power. The interface flickers—prices fluctuate wildly.",
        engageText: "Your mech taps the terminal. Ancient menus scroll past. A slot clunks open with something inside.",
        appearanceRate: 10,
        minLevel: 1,
        itemSlot1: [],
        itemSlot2: [],
        itemSlot3: []
    },
    {
        name: "The Mapmaker",
        type: "shop",
        discoverable: true,
        description: "A hooded figure stands motionless nearby, a rolled chart clutched in one hand.",
        engageText: "He says nothing. His eyes flick to you, then to the map.",
        appearanceRate: 15,
        minLevel: 1,
        itemSlot1: ["Map: Old Battlefield"],
        itemSlot2: [],
        itemSlot3: []
    },
    {
        name: "The Mineral Trader",
        type: "shop",
        discoverable: true,
        description: "A woman with a portable smelter strapped to her mech offers to refine raw ore.",
        engageText: "She fires up the smelter. 'Got raw minerals? I'll turn them into something useful.'",
        appearanceRate: 15,
        minLevel: 1,
        itemSlot1: ["Refined Limestone"],
        itemSlot2: ["Refined Sandstone"],
        itemSlot3: ["Refined Clay"]
    }
];
