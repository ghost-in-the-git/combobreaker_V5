/**
 * STORY ITEMS
 *
 * Collectible items tied to story events, exploration, and lore.
 * These are NOT equipment, minerals, or consumables.
 *
 * Each item has:
 * - name: Display name
 * - desc: Flavour text / lore description
 * - category: "log", "key", "dna", "debris", "scrap", "map"
 * - image: Path to item image
 *
 * Categories:
 * - "log"    : System Logs (battle reports, experiments, world events)
 * - "key"    : Keys (access cards, fobs, unlock devices)
 * - "dna"    : DNA Tags (biological samples, genetic markers)
 * - "debris" : Mech Debris (random mech parts and wreckage)
 * - "scrap"  : Scrap (salvageable junk and miscellaneous finds)
 * - "map"    : Maps (zone navigation charts and location data)
 */

const STORY_ITEMS = [
    // Starter Items
    {
        name: "Mysterious Note",
        desc: "A crumpled note found in your cockpit on day one. The handwriting is yours, but you don't remember writing it.",
        category: "log",
        image: "images/IMAGE.gif"
    },
    {
        name: "Old Key",
        desc: "A tarnished key you've had as long as you can remember. Whatever it opens, you haven't found it yet.",
        category: "key",
        image: "images/IMAGE.gif"
    },
    {
        name: "Unreadable DNA Tag",
        desc: "A smudged genetic tag clipped to your pilot jacket. The data is too degraded to scan.",
        category: "dna",
        image: "images/IMAGE.gif"
    },
    {
        name: "Destroyed Mech Heart",
        desc: "The fused core reactor of a mech you once piloted. It's dead now, but it's warm when you hold it.",
        category: "debris",
        image: "images/IMAGE.gif"
    },

    // System Logs
    {
        name: "Battle Report: Sector 7 Collapse",
        desc: "A fragmented log detailing the fall of Sector 7. The defending unit was overwhelmed in under three minutes.",
        category: "log",
        image: "images/IMAGE.gif"
    },
    {
        name: "Experiment Log: Project Lazarus",
        desc: "Notes on a failed attempt to reboot a destroyed mech's AI core. The core rebooted — then refused to comply.",
        category: "log",
        image: "images/IMAGE.gif"
    },
    {
        name: "Distress Signal Transcript",
        desc: "A decoded transmission from an orbital station. The last line reads: 'They're inside the walls.'",
        category: "log",
        image: "images/IMAGE.gif"
    },
    {
        name: "Incident Report: Dead Zone Breach",
        desc: "An official report on the first incursion into the Dead Zone. Casualty rate: 97%. Classification: BURIED.",
        category: "log",
        image: "images/IMAGE.gif"
    },
    {
        name: "Maintenance Log: Unit 00-4417",
        desc: "Routine service record for a mech that was decommissioned. The final entry just says 'IT MOVED'.",
        category: "log",
        image: "images/IMAGE.gif"
    },
    {
        name: "Encrypted Comms Fragment",
        desc: "A partial intercept between two unknown callsigns. They reference something called 'The Fold'.",
        category: "log",
        image: "images/IMAGE.gif"
    },
    {
        name: "Blackbox Audio Log",
        desc: "Recovered from wreckage. The audio is mostly static, but there are screams near the end.",
        category: "log",
        image: "images/IMAGE.gif"
    },

    // Keys
    {
        name: "Unmarked Keycard",
        desc: "A blank white keycard with no markings. It hums faintly when held near electrical panels.",
        category: "key",
        image: "images/IMAGE.gif"
    },
    {
        name: "Corroded Access Fob",
        desc: "An old security fob caked in grime. The LED still blinks red every few seconds.",
        category: "key",
        image: "images/IMAGE.gif"
    },
    {
        name: "Skeleton Key Module",
        desc: "A black-market bypass chip. It won't open everything, but it opens more than it should.",
        category: "key",
        image: "images/IMAGE.gif"
    },
    {
        name: "Unmarked Crate Key",
        desc: "A heavy iron key with no label. It doesn't match any standard lock pattern.",
        category: "key",
        image: "images/IMAGE.gif"
    },
    {
        name: "Orbital Docking Permit",
        desc: "An expired docking authorization for Bay 12. The station it references no longer exists on any map.",
        category: "key",
        image: "images/IMAGE.gif"
    },

    // DNA Tags
    {
        name: "DNA Tag: Unknown Pilot",
        desc: "A blood-smeared tag with a corrupted genetic profile. Species classification: PENDING.",
        category: "dna",
        image: "images/IMAGE.gif"
    },
    {
        name: "DNA Tag: Mech-Hybrid Sample",
        desc: "Biological tissue fused with synthetic fibre. The cell structure is still actively dividing.",
        category: "dna",
        image: "images/IMAGE.gif"
    },
    {
        name: "DNA Tag: Contaminated Sample",
        desc: "A sealed vial of irradiated blood from the Dead Zone. The cells glow faintly under UV light.",
        category: "dna",
        image: "images/IMAGE.gif"
    },
    {
        name: "DNA Tag: Cloned Signature",
        desc: "Two identical genetic profiles from two different bodies. Recovered six months apart.",
        category: "dna",
        image: "images/IMAGE.gif"
    },
    {
        name: "DNA Tag: Non-Human Marker",
        desc: "A genetic sequence that doesn't match any known terrestrial organism. Origin: CLASSIFIED.",
        category: "dna",
        image: "images/IMAGE.gif"
    },

    // Mech Debris
    {
        name: "Twisted Servo Arm",
        desc: "A mangled hydraulic arm ripped from a fallen mech. Still twitches when you touch the wiring.",
        category: "debris",
        image: "images/IMAGE.gif"
    },
    {
        name: "Shattered Cockpit Glass",
        desc: "Reinforced glass from a mech canopy. The cracks form a spiderweb pattern around a single impact point.",
        category: "debris",
        image: "images/IMAGE.gif"
    },
    {
        name: "Severed Mech Hand",
        desc: "A massive articulated hand, cleanly cut at the wrist. The fingers are still locked in a fist.",
        category: "debris",
        image: "images/IMAGE.gif"
    },
    {
        name: "Burnt Circuit Board",
        desc: "Charred beyond recognition. Whatever data it held is gone, but the gold traces might be worth something.",
        category: "debris",
        image: "images/IMAGE.gif"
    },
    {
        name: "Cracked Sensor Lens",
        desc: "A targeting optic shattered by impact. Light refracts through it in strange patterns.",
        category: "debris",
        image: "images/IMAGE.gif"
    },
    {
        name: "Dented Dog Tags",
        desc: "Military-issue pilot tags. The name has been scratched off. Only the serial number remains: 00-4417.",
        category: "debris",
        image: "images/IMAGE.gif"
    },
    {
        name: "Fragment of Unknown Alloy",
        desc: "A shard of metal that doesn't match anything in the materials database. Cold to the touch. Always.",
        category: "debris",
        image: "images/IMAGE.gif"
    },

    // Location Maps (encounter discoveries — granted on first engage)
    {
        name: "The Ratpile: The Mapmaker",
        desc: "Coordinates to a hooded cartographer's position in the Ratpile tunnels. He never moves.",
        category: "locationmap",
        image: "images/IMAGE.gif"
    },
    {
        name: "Scrap Yard: The Mapmaker",
        desc: "Coordinates to the Mapmaker's outpost in the Scrap Yard. He watches from between the wreckage.",
        category: "locationmap",
        image: "images/IMAGE.gif"
    },
    {
        name: "Scrap Yard: The Mineral Trader",
        desc: "A marked route to the Mineral Trader's smelting rig in the Scrap Yard.",
        category: "locationmap",
        image: "images/IMAGE.gif"
    },
    {
        name: "Old Battlefield: The Mapmaker",
        desc: "Coordinates to the Mapmaker's foxhole on the Old Battlefield. He sells maps from a rusted bunker.",
        category: "locationmap",
        image: "images/IMAGE.gif"
    },
    {
        name: "Old Battlefield: The Mineral Trader",
        desc: "Directions to the Mineral Trader's mobile forge, parked between shell craters.",
        category: "locationmap",
        image: "images/IMAGE.gif"
    },
    {
        name: "Downtown: The Mapmaker",
        desc: "An address scrawled on synth-paper. The Mapmaker operates from a back-alley kiosk Downtown.",
        category: "locationmap",
        image: "images/IMAGE.gif"
    },
    {
        name: "Downtown: The Mineral Trader",
        desc: "GPS lock on the Mineral Trader's workshop hidden beneath a neon sign Downtown.",
        category: "locationmap",
        image: "images/IMAGE.gif"
    },
    {
        name: "Orbital Station: The Mapmaker",
        desc: "Docking bay coordinates for the Mapmaker's berth on the Orbital Station.",
        category: "locationmap",
        image: "images/IMAGE.gif"
    },
    {
        name: "Orbital Station: The Mineral Trader",
        desc: "Deck coordinates for the Mineral Trader's zero-g smelting bay on the station.",
        category: "locationmap",
        image: "images/IMAGE.gif"
    },
    {
        name: "Wasteland: The Mapmaker",
        desc: "A beacon frequency for the Mapmaker's camp in the irradiated Wasteland.",
        category: "locationmap",
        image: "images/IMAGE.gif"
    },
    {
        name: "Wasteland: The Mineral Trader",
        desc: "Coordinates to a rad-shielded smelter the Mineral Trader operates in the Wasteland.",
        category: "locationmap",
        image: "images/IMAGE.gif"
    },
    {
        name: "Undercity: The Mapmaker",
        desc: "A tunnel junction number where the Mapmaker deals charts by lantern light.",
        category: "locationmap",
        image: "images/IMAGE.gif"
    },
    {
        name: "Undercity: The Mineral Trader",
        desc: "Pipe junction coordinates for the Mineral Trader's underground forge in the Undercity.",
        category: "locationmap",
        image: "images/IMAGE.gif"
    },
    {
        name: "Industrial Zone: The Mapmaker",
        desc: "A factory bay number where the Mapmaker has set up shop between idle machines.",
        category: "locationmap",
        image: "images/IMAGE.gif"
    },
    {
        name: "Industrial Zone: The Mineral Trader",
        desc: "Assembly line coordinates for the Mineral Trader's smelter rig in the Industrial Zone.",
        category: "locationmap",
        image: "images/IMAGE.gif"
    },
    {
        name: "Frozen Reach: The Mapmaker",
        desc: "Thermal coordinates for the Mapmaker's heated outpost on the Frozen Reach ice shelf.",
        category: "locationmap",
        image: "images/IMAGE.gif"
    },
    {
        name: "Frozen Reach: The Mineral Trader",
        desc: "A geothermal vent location where the Mineral Trader runs a forge in the Frozen Reach.",
        category: "locationmap",
        image: "images/IMAGE.gif"
    },
    {
        name: "Neon Strip: The Mapmaker",
        desc: "A back-room address on the Neon Strip. The Mapmaker deals from behind a beaded curtain.",
        category: "locationmap",
        image: "images/IMAGE.gif"
    },
    {
        name: "Neon Strip: The Mineral Trader",
        desc: "VIP coordinates for the Mineral Trader's private smelting lounge on the Neon Strip.",
        category: "locationmap",
        image: "images/IMAGE.gif"
    },
    {
        name: "Dead Zone: The Mapmaker",
        desc: "Hazmat-sealed coordinates for the Mapmaker's contamination bunker in the Dead Zone.",
        category: "locationmap",
        image: "images/IMAGE.gif"
    },
    {
        name: "Dead Zone: The Mineral Trader",
        desc: "Radiation-shielded coordinates for the Mineral Trader's forge deep in the Dead Zone.",
        category: "locationmap",
        image: "images/IMAGE.gif"
    },

    // Maps
    {
        name: "Map: The Ratpile",
        desc: "A crude sketch of tunnel networks beneath the scrapyard. Rat nests are circled in red ink.",
        category: "map",
        image: "images/IMAGE.gif",
        cost: 0
    },
    {
        name: "Map: Scrap Yard",
        desc: "A salvager's chart marking safe paths through the wreckage. Some routes have been crossed out.",
        category: "map",
        image: "images/IMAGE.gif",
        cost: 20
    },
    {
        name: "Map: Old Battlefield",
        desc: "A faded military topographic map. Minefields and kill zones are marked in deteriorating ink.",
        category: "map",
        image: "images/IMAGE.gif",
        cost: 25
    },
    {
        name: "Map: Downtown",
        desc: "A street-level map of the urban core. Gang territories are colour-coded. Most overlap.",
        category: "map",
        image: "images/IMAGE.gif",
        cost: 30
    },
    {
        name: "Map: The Forge",
        desc: "Directions to a hidden workshop scrawled on heat-resistant foil. The ink smells like molten iron.",
        category: "map",
        image: "images/IMAGE.gif",
        cost: 100
    },
    {
        name: "Map: Orbital Station",
        desc: "A schematic of the station's deck layout. Several sections are labelled DEPRESSURISED.",
        category: "map",
        image: "images/IMAGE.gif",
        cost: 40
    },
    {
        name: "Map: Wasteland",
        desc: "A radiation heatmap of the badlands. The safe corridors shift daily. This one is dated last week.",
        category: "map",
        image: "images/IMAGE.gif",
        cost: 50
    },
    {
        name: "Map: Undercity",
        desc: "A hand-drawn tunnel map on synthetic paper. Annotations warn of collapse zones and ambush points.",
        category: "map",
        image: "images/IMAGE.gif",
        cost: 65
    },
    {
        name: "Map: Industrial Zone",
        desc: "A factory floor plan with conveyor routes and power grid overlays. Someone marked the blind spots.",
        category: "map",
        image: "images/IMAGE.gif",
        cost: 80
    },
    {
        name: "Map: Frozen Reach",
        desc: "A thermal survey of the arctic zone. Heat signatures cluster around geothermal vents.",
        category: "map",
        image: "images/IMAGE.gif",
        cost: 100
    },
    {
        name: "Map: Neon Strip",
        desc: "A nightlife district guide doubling as a tactical map. Back alleys and escape routes are highlighted.",
        category: "map",
        image: "images/IMAGE.gif",
        cost: 125
    },
    {
        name: "Map: Dead Zone",
        desc: "A contamination chart of the killing fields. The safe path is a single line through a sea of red.",
        category: "map",
        image: "images/IMAGE.gif",
        cost: 160
    },
    {
        name: "Map: Asteroid Belt",
        desc: "A navigation chart plotting orbital paths through the belt. Mining coordinates are encoded.",
        category: "map",
        image: "images/IMAGE.gif",
        cost: 200
    }
];
