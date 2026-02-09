/**
 * STORY ITEMS
 *
 * Collectible items tied to story events, exploration, and lore.
 * These are NOT equipment, minerals, or consumables.
 *
 * Categories:
 * - "log"    : System Logs (battle reports, experiments, world events)
 * - "key"    : Keys (access cards, fobs, unlock devices)
 * - "dna"    : DNA Tags (biological samples, genetic markers)
 * - "debris" : Mech Debris (random mech parts and wreckage)
 */

const STORY_ITEMS = [
    // Starter Items
    {
        name: "Mysterious Note",
        desc: "A crumpled note found in your cockpit on day one. The handwriting is yours, but you don't remember writing it.",
        category: "log"
    },
    {
        name: "Old Key",
        desc: "A tarnished key you've had as long as you can remember. Whatever it opens, you haven't found it yet.",
        category: "key"
    },
    {
        name: "Unreadable DNA Tag",
        desc: "A smudged genetic tag clipped to your pilot jacket. The data is too degraded to scan.",
        category: "dna"
    },
    {
        name: "Destroyed Mech Heart",
        desc: "The fused core reactor of a mech you once piloted. It's dead now, but it's warm when you hold it.",
        category: "debris"
    },

    // System Logs
    {
        name: "Battle Report: Sector 7 Collapse",
        desc: "A fragmented log detailing the fall of Sector 7. The defending unit was overwhelmed in under three minutes.",
        category: "log"
    },
    {
        name: "Experiment Log: Project Lazarus",
        desc: "Notes on a failed attempt to reboot a destroyed mech's AI core. The core rebooted — then refused to comply.",
        category: "log"
    },
    {
        name: "Distress Signal Transcript",
        desc: "A decoded transmission from an orbital station. The last line reads: 'They're inside the walls.'",
        category: "log"
    },
    {
        name: "Incident Report: Dead Zone Breach",
        desc: "An official report on the first incursion into the Dead Zone. Casualty rate: 97%. Classification: BURIED.",
        category: "log"
    },
    {
        name: "Maintenance Log: Unit 00-4417",
        desc: "Routine service record for a mech that was decommissioned. The final entry just says 'IT MOVED'.",
        category: "log"
    },
    {
        name: "Encrypted Comms Fragment",
        desc: "A partial intercept between two unknown callsigns. They reference something called 'The Fold'.",
        category: "log"
    },
    {
        name: "Blackbox Audio Log",
        desc: "Recovered from wreckage. The audio is mostly static, but there are screams near the end.",
        category: "log"
    },

    // Keys
    {
        name: "Unmarked Keycard",
        desc: "A blank white keycard with no markings. It hums faintly when held near electrical panels.",
        category: "key"
    },
    {
        name: "Corroded Access Fob",
        desc: "An old security fob caked in grime. The LED still blinks red every few seconds.",
        category: "key"
    },
    {
        name: "Skeleton Key Module",
        desc: "A black-market bypass chip. It won't open everything, but it opens more than it should.",
        category: "key"
    },
    {
        name: "Unmarked Crate Key",
        desc: "A heavy iron key with no label. It doesn't match any standard lock pattern.",
        category: "key"
    },
    {
        name: "Orbital Docking Permit",
        desc: "An expired docking authorization for Bay 12. The station it references no longer exists on any map.",
        category: "key"
    },

    // DNA Tags
    {
        name: "DNA Tag: Unknown Pilot",
        desc: "A blood-smeared tag with a corrupted genetic profile. Species classification: PENDING.",
        category: "dna"
    },
    {
        name: "DNA Tag: Mech-Hybrid Sample",
        desc: "Biological tissue fused with synthetic fibre. The cell structure is still actively dividing.",
        category: "dna"
    },
    {
        name: "DNA Tag: Contaminated Sample",
        desc: "A sealed vial of irradiated blood from the Dead Zone. The cells glow faintly under UV light.",
        category: "dna"
    },
    {
        name: "DNA Tag: Cloned Signature",
        desc: "Two identical genetic profiles from two different bodies. Recovered six months apart.",
        category: "dna"
    },
    {
        name: "DNA Tag: Non-Human Marker",
        desc: "A genetic sequence that doesn't match any known terrestrial organism. Origin: CLASSIFIED.",
        category: "dna"
    },

    // Mech Debris
    {
        name: "Twisted Servo Arm",
        desc: "A mangled hydraulic arm ripped from a fallen mech. Still twitches when you touch the wiring.",
        category: "debris"
    },
    {
        name: "Shattered Cockpit Glass",
        desc: "Reinforced glass from a mech canopy. The cracks form a spiderweb pattern around a single impact point.",
        category: "debris"
    },
    {
        name: "Severed Mech Hand",
        desc: "A massive articulated hand, cleanly cut at the wrist. The fingers are still locked in a fist.",
        category: "debris"
    },
    {
        name: "Burnt Circuit Board",
        desc: "Charred beyond recognition. Whatever data it held is gone, but the gold traces might be worth something.",
        category: "debris"
    },
    {
        name: "Cracked Sensor Lens",
        desc: "A targeting optic shattered by impact. Light refracts through it in strange patterns.",
        category: "debris"
    },
    {
        name: "Dented Dog Tags",
        desc: "Military-issue pilot tags. The name has been scratched off. Only the serial number remains: 00-4417.",
        category: "debris"
    },
    {
        name: "Fragment of Unknown Alloy",
        desc: "A shard of metal that doesn't match anything in the materials database. Cold to the touch. Always.",
        category: "debris"
    }
];
