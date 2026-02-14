/**
 * OLD BATTLEFIELD - ENCOUNTER CONFIGURATION
 *
 * Military supply caches, salvage auctions, and pilgrim caravans
 * moving through the scarred terrain.
 */

const ENCOUNTERS_OLDBATTLEFIELD = [
    {
        name: "[COMMON] Salvage Auction Pod",
        type: "shop",
        description: "A drifting auction pod broadcasts rotating lots of recovered mech gear—first come, first served.",
        engageText: "A synthetic voice lists items at high speed. A timer starts. 'BID CONFIRMED' flashes across your HUD.",
        appearanceRate: 20,
        minLevel: 1,
        itemSlot1: [],
        itemSlot2: [],
        itemSlot3: []
    },
    {
        name: "[COMMON] Corporate Supply Cache",
        type: "shop",
        description: "A corporate resupply buoy is active in this sector. Access requires credits and a clean transaction.",
        engageText: "The kiosk chirps politely. 'Welcome, valued contractor. Please select from approved inventory.'",
        appearanceRate: 15,
        minLevel: 1,
        itemSlot1: [],
        itemSlot2: [],
        itemSlot3: []
    },
    {
        name: "[COMMON] Pilgrim Parts Caravan",
        type: "shop",
        description: "A convoy of civilian haulers moves in formation, offering parts in exchange for fuel, ammo, or coin.",
        engageText: "A tired caravan captain nods. 'We don't fight, we survive. Trade fair and we'll both make it home.'",
        appearanceRate: 20,
        minLevel: 1,
        itemSlot1: [],
        itemSlot2: [],
        itemSlot3: []
    },
    {
        name: "[COMMON] Experimental R&D Vendor",
        type: "shop",
        description: "A research craft requests a brief rendezvous. Prototype components available for combat testing.",
        engageText: "A scientist peers at your mech telemetry. 'Sign the waiver. If it glows, that's normal. Mostly.'",
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
        itemSlot1: ["Map: Downtown"],
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
        itemSlot1: ["Refined Quartz"],
        itemSlot2: ["Refined Feldspar"],
        itemSlot3: ["Refined Gypsum"]
    }
];
