/**
 * THE FORGER - CRAFTABLE EQUIPMENT
 *
 * The Forger offers equipment crafted from refined minerals.
 * Each mineral tier has 3 minerals, and each mineral covers 3 installation types:
 *   - Mineral 1 (pos 0): body, legs, arms
 *   - Mineral 2 (pos 1): weapon, chip, processor
 *   - Mineral 3 (pos 2): pilot, implant, drill
 *
 * This means each tier covers all 9 installation types across its 3 minerals.
 */

// Mineral groupings by tier (order matters: position determines slot types)
const FORGER_TIERS = [
    { tier: 1, zone: "Scrapyard", minerals: ["Limestone", "Sandstone", "Tanzanite"] },
    { tier: 2, zone: "Old Battlefield", minerals: ["Quartz", "Feldspar", "Gypsum"] },
    { tier: 3, zone: "Downtown", minerals: ["Fluorite", "Calcite", "Mica"] },
    { tier: 4, zone: "Orbital Station", minerals: ["Hematite", "Magnetite", "Alexandrite"] },
    { tier: 5, zone: "Wasteland", minerals: ["Bauxite", "Galena", "Sphalerite"] },
    { tier: 6, zone: "Undercity", minerals: ["Chalcopyrite", "Cassiterite", "Cinnabar"] },
    { tier: 7, zone: "Industrial Zone", minerals: ["Chromite", "Vanadinite", "Scheelite"] },
    { tier: 8, zone: "Frozen Reach", minerals: ["Gold", "Platinum", "Garnet"] },
    { tier: 9, zone: "Neon Strip", minerals: ["Uraninite", "Cobaltite", "Molybdenite"] },
    { tier: 10, zone: "Dead Zone", minerals: ["Diamond", "Emerald", "Sapphire"] }
];

// Installation types assigned to each mineral position within a tier
const FORGER_SLOT_GROUPS = [
    ["body", "legs", "arms"],
    ["weapon", "chip", "processor"],
    ["pilot", "implant", "drill"]
];

// Forger items - looked up by mineralCost.mineral + type
const FORGER_ITEMS = [
    {
        name: "Forged Alloy Plating [+50 HP][+5 DEF]",
        type: "body",
        desc: "Hand-forged chassis plating, hammered from refined stone. Heavier than standard issue, but impossibly tough.",
        image: "images/IMAGE.gif",
        stats: { hp: 50, defence: 5 },
        mineralCost: { mineral: "Refined Limestone", category: "refined", count: 3 },
        dropRate: 0,
        droppedBy: []
    },
    {
        name: "Tempered Combat Blade [+6 ATK][+4 COMBO]",
        type: "weapon",
        desc: "A blade forged from smelted hematite. The edge never dulls, and each strike flows into the next.",
        image: "images/IMAGE.gif",
        stats: { attack: 6, combo: 4 },
        mineralCost: { mineral: "Refined Hematite", category: "refined", count: 3 },
        dropRate: 0,
        droppedBy: []
    },
    {
        name: "Resonance Core Implant [+8 REGEN]",
        type: "implant",
        desc: "A pulsing core of refined gold, wired directly into the mech's repair systems. Heals damage at an alarming rate.",
        image: "images/IMAGE.gif",
        stats: { regen: 8 },
        mineralCost: { mineral: "Refined Gold", category: "refined", count: 3 },
        dropRate: 0,
        droppedBy: []
    }
];
