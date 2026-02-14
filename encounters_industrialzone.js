/**
 * INDUSTRIAL ZONE - ENCOUNTER CONFIGURATION
 *
 * Factory surplus outlets, union supply depots, and automated
 * vending rigs along the production lines.
 */

const ENCOUNTERS_INDUSTRIALZONE = [
    {
        name: "[COMMON] Factory Surplus Outlet",
        type: "shop",
        description: "A factory loading dock is open. Surplus components from the latest production run are stacked high.",
        engageText: "A foreman waves you in. 'Overstock from the line. Corporate says sell it cheap, so here we are.'",
        appearanceRate: 20,
        minLevel: 1,
        itemSlot1: [],
        itemSlot2: [],
        itemSlot3: []
    },
    {
        name: "[COMMON] Union Supply Depot",
        type: "shop",
        description: "A workers' union depot sits between the smokestacks. Mechanics share tools and trade parts.",
        engageText: "A union rep slides open a locker. 'We look out for our own. You fight the bots, you're one of us.'",
        appearanceRate: 20,
        minLevel: 1,
        itemSlot1: [],
        itemSlot2: [],
        itemSlot3: []
    },
    {
        name: "[COMMON] Automated Vending Rig",
        type: "shop",
        description: "A mobile vending rig trundles along the factory floor, dispensing parts from its rotating shelves.",
        engageText: "The rig stops and plays a jingle. 'INSERT CREDITS. RECEIVE PARTS. HAVE A PRODUCTIVE DAY.'",
        appearanceRate: 15,
        minLevel: 1,
        itemSlot1: [],
        itemSlot2: [],
        itemSlot3: []
    },
    {
        name: "[COMMON] Shift Supervisor's Stash",
        type: "shop",
        description: "A shift supervisor flags you down near a locked storage unit. They glance around nervously.",
        engageText: "The supervisor unlocks the crate. 'These fell off the line. Officially they don't exist.'",
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
        discoveredDescription: "The Mapmaker is where you left him, hood drawn, charts spread across a makeshift table.",
        discoveredEngageText: "He glances up as you approach. A faint nod — he's already reaching for his charts.",
        appearanceRate: 15,
        minLevel: 1,
        itemSlot1: ["Map: Frozen Reach"],
        itemSlot2: [],
        itemSlot3: []
    },
    {
        name: "The Mineral Trader",
        type: "shop",
        discoverable: true,
        description: "A woman with a portable smelter strapped to her mech offers to refine raw ore.",
        engageText: "She fires up the smelter. 'Got raw minerals? I'll turn them into something useful.'",
        discoveredDescription: "The Mineral Trader's smelter is already fired up, heat shimmering off the forge. She sees your mech and waves.",
        discoveredEngageText: "She grins as you pull up. 'Back again? Good. Forge is hot. Show me what you've got.'",
        appearanceRate: 15,
        minLevel: 1,
        itemSlot1: ["Refined Chromite"],
        itemSlot2: ["Refined Ilmenite"],
        itemSlot3: ["Refined Argentite"]
    }
];
