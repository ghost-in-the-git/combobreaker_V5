/**
 * ENCOUNTERS CONFIGURATION
 *
 * Edit this file to add, remove, or modify story encounters.
 *
 * Each encounter has the following properties:
 * - name: Display name for the encounter
 * - type: Encounter type ("shop", etc.)
 * - description: Message shown when encounter spawns
 * - engageText: Message shown when player engages
 * - appearanceRate: Relative chance to appear (higher = more common)
 * - minLevel: Minimum player level for this encounter to appear
 * - itemSlot1: Array of item names for slot 1 (picks randomly from array, empty = random from all items)
 * - itemSlot2: Array of item names for slot 2 (picks randomly from array, empty = random from all items)
 * - itemSlot3: Array of item names for slot 3 (picks randomly from array, empty = random from all items)
 */

const ENCOUNTERS = [
    {
        name: "Junker",
        type: "shop",
        description: "A wandering Junker's vessel has appeared on radar. They're broadcasting a trade signal.",
        engageText: "The Junker greets your mech as it arrives at the hangar bay door. They motion to a shelf of salvaged mech parts.",
        appearanceRate: 30,
        minLevel: 1,
        itemSlot1: [],
        itemSlot2: [],
        itemSlot3: []
    },
    {
        name: "Scrap Dealer",
        type: "shop",
        description: "A Scrap Dealer's cargo ship is passing through. Their comms crackle with offers of rare components.",
        engageText: "The Scrap Dealer eyes your mech approvingly. 'Got some quality salvage here, pilot. Take a look.'",
        appearanceRate: 20,
        minLevel: 5,
        itemSlot1: [],
        itemSlot2: [],
        itemSlot3: []
    },
    {
        name: "Black Market Trader",
        type: "shop",
        description: "An unmarked vessel with no IFF signature is broadcasting on an encrypted channel. Black market goods available.",
        engageText: "A hooded figure appears on screen. 'No names, no questions. Just XP for parts. Choose wisely.'",
        appearanceRate: 10,
        minLevel: 10,
        itemSlot1: [],
        itemSlot2: [],
        itemSlot3: []
    }
];
