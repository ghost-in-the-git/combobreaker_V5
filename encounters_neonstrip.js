/**
 * NEON STRIP - ENCOUNTER CONFIGURATION
 *
 * Back-alley dealers, casino prize counters, and syndicate
 * fences working the entertainment district.
 */

const ENCOUNTERS_NEONSTRIP = [
    {
        name: "[COMMON] Back-Alley Dealer",
        type: "shop",
        description: "A dealer leans against a flickering holographic ad, a briefcase of components at their feet.",
        engageText: "The dealer flips open the case. 'Top shelf stuff. Fell off a corp transport. You didn't hear that.'",
        appearanceRate: 20,
        minLevel: 1,
        itemSlot1: [],
        itemSlot2: [],
        itemSlot3: []
    },
    {
        name: "[COMMON] Casino Prize Counter",
        type: "shop",
        description: "A casino's prize redemption counter has mech parts on display between the stuffed animals.",
        engageText: "The attendant grins. 'You don't need tickets, just credits. Way easier than winning, trust me.'",
        appearanceRate: 20,
        minLevel: 1,
        itemSlot1: [],
        itemSlot2: [],
        itemSlot3: []
    },
    {
        name: "[COMMON] Syndicate Fence",
        type: "shop",
        description: "A syndicate contact pings your secure channel. They have goods that need to move fast.",
        engageText: "The fence slides a datapad across. 'No receipts, no records. Pick what you need and walk.'",
        appearanceRate: 15,
        minLevel: 1,
        itemSlot1: [],
        itemSlot2: [],
        itemSlot3: []
    },
    {
        name: "[COMMON] High-Roller Lounge",
        type: "shop",
        description: "A VIP lounge door opens as your mech approaches. Inside, premium parts are displayed on velvet.",
        engageText: "A host bows slightly. 'Only the finest for our distinguished guests. Credits speak louder than names.'",
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
        itemSlot1: ["Map: Dead Zone"],
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
        itemSlot1: ["Refined Uraninite"],
        itemSlot2: ["Refined Cobaltite"],
        itemSlot3: ["Refined Molybdenite"]
    }
];
