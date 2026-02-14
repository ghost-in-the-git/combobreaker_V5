/**
 * HOME - ENCOUNTER CONFIGURATION
 *
 * A quiet place. The Professor is always here, waiting.
 */

const ENCOUNTERS_HOME = [
    {
        name: "The Professor",
        type: "shop",
        description: "The Professor is in the workshop, surrounded by blueprints and half-assembled components. A faint hum of machinery fills the room.",
        engageText: "The Professor looks up from a disassembled servo unit and adjusts their goggles. 'Ah, you're back. Let me see what I've got for you.'",
        appearanceRate: 100,
        minLevel: 1,
        itemSlot1: ["Rusty Pipe [+1 ATK]"],
        itemSlot2: [],
        itemSlot3: []
    },
    {
        name: "The Forger",
        type: "shop",
        description: "A heavily augmented smith works at a glowing forge, shaping refined minerals into mech components.",
        engageText: "The Forger looks up from her anvil, sparks cascading from molten metal. 'Got refined materials? I can make something worth wearing.'",
        appearanceRate: 50,
        minLevel: 1,
        itemSlot1: ["Forged Alloy Plating [+50 HP][+5 DEF]"],
        itemSlot2: ["Tempered Combat Blade [+6 ATK][+4 COMBO]"],
        itemSlot3: ["Resonance Core Implant [+8 REGEN]"]
    }
];
