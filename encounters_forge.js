/**
 * THE FORGE - ENCOUNTER CONFIGURATION
 *
 * A hidden workshop where The Forger turns refined minerals into
 * powerful mech components. No enemies, no ambushes — just fire and steel.
 */

const ENCOUNTERS_FORGE = [
    {
        name: "The Forger",
        type: "shop",
        description: "A heavily augmented smith works at a glowing forge, shaping refined minerals into mech components.",
        engageText: "The Forger looks up from her anvil, sparks cascading from molten metal. 'Got refined materials? I can make something worth wearing.'",
        appearanceRate: 100,
        minLevel: 1,
        itemSlot1: ["Forged Alloy Plating [+50 HP][+5 DEF]"],
        itemSlot2: ["Tempered Combat Blade [+6 ATK][+4 COMBO]"],
        itemSlot3: ["Resonance Core Implant [+8 REGEN]"]
    }
];
