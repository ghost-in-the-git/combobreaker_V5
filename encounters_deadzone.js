/**
 * DEAD ZONE - ENCOUNTER CONFIGURATION
 *
 * Hazmat traders, contamination-proof drones, and desperate
 * scavengers working the most dangerous terrain.
 */

const ENCOUNTERS_DEADZONE = [
    {
        name: "[COMMON] Hazmat Trader",
        type: "shop",
        description: "A sealed hazmat vehicle idles at the contamination perimeter. A trader in full gear waves you down.",
        engageText: "The trader's voice crackles through a respirator. 'Everything's been scrubbed. You can touch it. Probably.'",
        appearanceRate: 20,
        minLevel: 1,
        itemSlot1: [],
        itemSlot2: [],
        itemSlot3: []
    },
    {
        name: "[COMMON] Decontamination Drone",
        type: "shop",
        description: "A roving decontamination drone has surplus supplies in its cargo bay. It beeps an offer.",
        engageText: "The drone projects a price list. 'DECON SURPLUS. CERTIFIED CLEAN. WARRANTY VOID IN DEAD ZONE.'",
        appearanceRate: 20,
        minLevel: 1,
        itemSlot1: [],
        itemSlot2: [],
        itemSlot3: []
    },
    {
        name: "[COMMON] Desperate Scavenger",
        type: "shop",
        description: "A lone scavenger in a patched radiation suit flags you from behind a crumbling wall.",
        engageText: "The scavenger coughs. 'I need fuel more than parts. Take what you want, just get me out of here.'",
        appearanceRate: 15,
        minLevel: 1,
        itemSlot1: [],
        itemSlot2: [],
        itemSlot3: []
    },
    {
        name: "[COMMON] Sealed Bunker Terminal",
        type: "shop",
        description: "A bunker hatch sits ajar. Inside, an emergency supply terminal still has power and stock.",
        engageText: "The terminal flickers on. 'EMERGENCY PROTOCOL. SUPPLIES AVAILABLE. BUNKER INTEGRITY: 12%.'",
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
        itemSlot1: ["Map: Asteroid Belt"],
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
        itemSlot1: ["Refined Diamond"],
        itemSlot2: ["Refined Emerald"],
        itemSlot3: ["Refined Sapphire"]
    }
];
