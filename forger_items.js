/**
 * THE FORGER - CRAFTABLE EQUIPMENT
 *
 * Special equipment sold by The Forger at home.
 * Costs refined minerals instead of XP.
 */

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
