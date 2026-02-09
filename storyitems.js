/**
 * STORY ITEMS
 *
 * Collectible items tied to story events, exploration, and lore.
 * These are NOT equipment, minerals, or consumables.
 *
 * Each item has:
 * - name: Display name
 * - desc: Flavour text / lore description
 * - rarity: "common", "uncommon", "rare", "unique"
 */

const STORY_ITEMS = [
    // Scrap & Salvage
    {
        name: "Twisted Servo Arm",
        desc: "A mangled hydraulic arm ripped from a fallen mech. Still twitches when you touch the wiring.",
        rarity: "common"
    },
    {
        name: "Burnt Circuit Board",
        desc: "Charred beyond recognition. Whatever data it held is gone, but the gold traces might be worth something.",
        rarity: "common"
    },
    {
        name: "Cracked Sensor Lens",
        desc: "A targeting optic shattered by impact. Light refracts through it in strange patterns.",
        rarity: "common"
    },
    {
        name: "Dented Dog Tags",
        desc: "Military-issue pilot tags. The name has been scratched off. Only the serial number remains: 00-4417.",
        rarity: "common"
    },
    {
        name: "Rusted Bolt Collection",
        desc: "A handful of corroded bolts rattling in a tin. Someone was collecting these. Why?",
        rarity: "common"
    },

    // Maps & Navigation
    {
        name: "Torn Sector Map",
        desc: "A partial map of the lower districts. Several routes are circled in red ink.",
        rarity: "uncommon"
    },
    {
        name: "Nav Chip Fragment",
        desc: "A broken navigation module. The coordinates it contains point somewhere deep in the Wasteland.",
        rarity: "uncommon"
    },
    {
        name: "Faded Star Chart",
        desc: "A printout of orbital trajectories. One path is highlighted — it leads to the Asteroid Belt.",
        rarity: "uncommon"
    },

    // Keys & Access
    {
        name: "Unmarked Keycard",
        desc: "A blank white keycard with no markings. It hums faintly when held near electrical panels.",
        rarity: "rare"
    },
    {
        name: "Corroded Access Fob",
        desc: "An old security fob caked in grime. The LED still blinks red every few seconds.",
        rarity: "uncommon"
    },
    {
        name: "Skeleton Key Module",
        desc: "A black-market bypass chip. It won't open everything, but it opens more than it should.",
        rarity: "rare"
    },

    // Mementos & Lore
    {
        name: "Pilot's Lucky Coin",
        desc: "A worn coin with a mech etched on one side and a skull on the other. Heads you fight, tails you run.",
        rarity: "uncommon"
    },
    {
        name: "Scorched Photograph",
        desc: "A photo of two pilots standing beside a Breaker frame. Their faces are burned away.",
        rarity: "uncommon"
    },
    {
        name: "Encrypted Data Stick",
        desc: "Military-grade encryption. Whatever is on this drive, someone wanted it buried.",
        rarity: "rare"
    },
    {
        name: "Faded Unit Patch",
        desc: "A shoulder patch from the 9th Mech Division. They were wiped out in the Dead Zone Incursion.",
        rarity: "uncommon"
    },

    // Mech Debris
    {
        name: "Shattered Cockpit Glass",
        desc: "Reinforced glass from a mech canopy. The cracks form a spiderweb pattern around a single impact point.",
        rarity: "common"
    },
    {
        name: "Blackbox Recorder",
        desc: "A flight recorder pulled from wreckage. The audio is mostly static, but there are screams near the end.",
        rarity: "rare"
    },
    {
        name: "Severed Mech Hand",
        desc: "A massive articulated hand, cleanly cut at the wrist. The fingers are still locked in a fist.",
        rarity: "common"
    },

    // Unique / Mystery
    {
        name: "Strange Signal Beacon",
        desc: "Emits a repeating pulse on a frequency no known system uses. Origin unknown.",
        rarity: "unique"
    },
    {
        name: "Unmarked Crate Key",
        desc: "A heavy iron key with no label. It doesn't match any standard lock pattern.",
        rarity: "rare"
    },
    {
        name: "Fragment of Unknown Alloy",
        desc: "A shard of metal that doesn't match anything in the materials database. Cold to the touch. Always.",
        rarity: "unique"
    }
];
