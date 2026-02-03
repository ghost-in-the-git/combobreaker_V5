/**
 * ITEMS CONFIGURATION
 *
 * Edit this file to add, remove, or modify items.
 *
 * Each item has:
 * - name: Display name
 * - type: "body", "legs", "arms", "weapon", or "chip"
 * - stats: Object with stat bonuses { hp, defence, speed, attack, combo }
 * - dropRate: Relative chance to drop (higher = more common)
 * - droppedBy: Array of enemy names that can drop this item (empty = all enemies)
 * - cost: XP cost to purchase from shops
 */

const ITEMS = [
    // ==================== BODY (HP & Defence) ====================
    {
        name: "Low-Grade Chassis [+10 HP][+1 DEF]",
        type: "body",
        stats: { hp: 10, defence: 1 },
        dropRate: 10,
        droppedBy: [],
        cost: 10
    },
    {
        name: "Standard Chassis [+20 HP][+2 DEF]",
        type: "body",
        stats: { hp: 20, defence: 2 },
        dropRate: 10,
        droppedBy: [],
        cost: 20
    },
    {
        name: "Advanced Chassis [+30 HP][+3 DEF]",
        type: "body",
        stats: { hp: 30, defence: 3 },
        dropRate: 10,
        droppedBy: [],
        cost: 35
    },
    {
        name: "Military Chassis [+40 HP][+4 DEF]",
        type: "body",
        stats: { hp: 40, defence: 4 },
        dropRate: 10,
        droppedBy: [],
        cost: 50
    },
    {
        name: "Old Breaker Chassis [+50 HP][+5 DEF]",
        type: "body",
        stats: { hp: 50, defence: 5 },
        dropRate: 10,
        droppedBy: [],
        cost: 70
    },
    {
        name: "Breaker Chassis [+60 HP][+6 DEF]",
        type: "body",
        stats: { hp: 60, defence: 6 },
        dropRate: 10,
        droppedBy: [],
        cost: 90
    },
        {
        name: "EVO1 Breaker Chassis [+70 HP][+7 DEF]",
        type: "body",
        stats: { hp: 70, defence: 7 },
        dropRate: 10,
        droppedBy: [],
        cost: 115
    },
            {
        name: "EVO2 Breaker Chassis [+80 HP][+8 DEF]",
        type: "body",
        stats: { hp: 80, defence: 8 },
        dropRate: 10,
        droppedBy: [],
        cost: 140
    },
                {
        name: "EVO3 Breaker Chassis [+90 HP][+9 DEF]",
        type: "body",
        stats: { hp: 10, defence: 1 },
        dropRate: 10,
        droppedBy: [],
        cost: 170
    },
                {
        name: "EVO4 Breaker Chassis [+100 HP][+10 DEF]",
        type: "body",
        stats: { hp: 10, defence: 1 },
        dropRate: 10,
        droppedBy: [],
        cost: 200
    },

     // ==================== LEGS (Speed) ====================
    {
        name: "Standard Servos [+2 SPD]",
        type: "legs",
        stats: { speed: 2 },
        dropRate: 60,
        droppedBy: [],
        cost: 8
    },
    {
        name: "Enhanced Servos [+4 SPD]",
        type: "legs",
        stats: { speed: 4 },
        dropRate: 50,
        droppedBy: [],
        cost: 18
    },
    {
        name: "Quick Striders [+6 SPD]",
        type: "legs",
        stats: { speed: 6 },
        dropRate: 40,
        droppedBy: [],
        cost: 30
    },
    {
        name: "Hydraulic Boosters [+8 SPD]",
        type: "legs",
        stats: { speed: 8 },
        dropRate: 30,
        droppedBy: ["Droid Scout", "Droid Enforcer"],
        cost: 45
    },
    {
        name: "Reflex Actuators [+10 SPD]",
        type: "legs",
        stats: { speed: 10 },
        dropRate: 22,
        droppedBy: ["Droid Scout", "Droid Enforcer", "Droid Sentinel"],
        cost: 60
    },
    {
        name: "Kinetic Stabilizers [+12 SPD]",
        type: "legs",
        stats: { speed: 12 },
        dropRate: 16,
        droppedBy: ["Droid Enforcer", "Droid Sentinel"],
        cost: 80
    },
    {
        name: "Phase Shift Legs [+14 SPD]",
        type: "legs",
        stats: { speed: 14 },
        dropRate: 12,
        droppedBy: ["Droid Sentinel"],
        cost: 100
    },
    {
        name: "Quantum Thrusters [+16 SPD]",
        type: "legs",
        stats: { speed: 16 },
        dropRate: 8,
        droppedBy: ["Droid Sentinel", "Droid Destroyer"],
        cost: 125
    },
    {
        name: "Temporal Drives [+18 SPD]",
        type: "legs",
        stats: { speed: 18 },
        dropRate: 5,
        droppedBy: ["Droid Destroyer"],
        cost: 150
    },
    {
        name: "Singularity Runners [+20 SPD]",
        type: "legs",
        stats: { speed: 20 },
        dropRate: 3,
        droppedBy: ["Droid Destroyer"],
        cost: 180
    },

    // ==================== ARMS (Attack or Defence) ====================
    {
        name: "Standard Manipulators [+2 ATK]",
        type: "arms",
        stats: { attack: 2 },
        dropRate: 55,
        droppedBy: [],
        cost: 10
    },
    {
        name: "Shield Bracers [+2 DEF]",
        type: "arms",
        stats: { defence: 2 },
        dropRate: 55,
        droppedBy: [],
        cost: 10
    },
    {
        name: "Power Gauntlets [+4 ATK]",
        type: "arms",
        stats: { attack: 4 },
        dropRate: 40,
        droppedBy: ["Droid Scout", "Droid Enforcer"],
        cost: 25
    },
    {
        name: "Barrier Arms [+4 DEF]",
        type: "arms",
        stats: { defence: 4 },
        dropRate: 40,
        droppedBy: ["Droid Scout", "Droid Enforcer"],
        cost: 25
    },
    {
        name: "Crusher Claws [+6 ATK]",
        type: "arms",
        stats: { attack: 6 },
        dropRate: 26,
        droppedBy: ["Droid Enforcer", "Droid Sentinel"],
        cost: 45
    },
    {
        name: "Fortress Gauntlets [+6 DEF]",
        type: "arms",
        stats: { defence: 6 },
        dropRate: 26,
        droppedBy: ["Droid Enforcer", "Droid Sentinel"],
        cost: 45
    },
    {
        name: "Ravager Arms [+8 ATK]",
        type: "arms",
        stats: { attack: 8 },
        dropRate: 14,
        droppedBy: ["Droid Sentinel", "Droid Destroyer"],
        cost: 70
    },
    {
        name: "Aegis Bracers [+8 DEF]",
        type: "arms",
        stats: { defence: 8 },
        dropRate: 14,
        droppedBy: ["Droid Sentinel", "Droid Destroyer"],
        cost: 70
    },
    {
        name: "Decimator Arms [+10 ATK]",
        type: "arms",
        stats: { attack: 10 },
        dropRate: 6,
        droppedBy: ["Droid Destroyer"],
        cost: 100
    },
    {
        name: "Citadel Arms [+10 DEF]",
        type: "arms",
        stats: { defence: 10 },
        dropRate: 6,
        droppedBy: ["Droid Destroyer"],
        cost: 100
    },

    // ==================== WEAPON (Attack, Combo, or Defence) ====================
    {
        name: "Pulse Pistol [+2 ATK]",
        type: "weapon",
        stats: { attack: 2 },
        dropRate: 55,
        droppedBy: [],
        cost: 10
    },
    {
        name: "Energy Shield [+2 DEF]",
        type: "weapon",
        stats: { defence: 2 },
        dropRate: 55,
        droppedBy: [],
        cost: 10
    },
    {
        name: "Chain Blade [+3 ATK][+2 COMBO]",
        type: "weapon",
        stats: { attack: 3, combo: 2 },
        dropRate: 40,
        droppedBy: ["Droid Scout"],
        cost: 25
    },
    {
        name: "Plasma Rifle [+5 ATK]",
        type: "weapon",
        stats: { attack: 5 },
        dropRate: 30,
        droppedBy: ["Droid Scout", "Droid Enforcer"],
        cost: 35
    },
    {
        name: "Combo Striker [+4 COMBO]",
        type: "weapon",
        stats: { combo: 4 },
        dropRate: 26,
        droppedBy: ["Droid Scout", "Droid Enforcer"],
        cost: 30
    },
    {
        name: "Fortress Module [+5 DEF]",
        type: "weapon",
        stats: { defence: 5 },
        dropRate: 22,
        droppedBy: ["Droid Enforcer", "Droid Sentinel"],
        cost: 40
    },
    {
        name: "Railgun [+8 ATK]",
        type: "weapon",
        stats: { attack: 8 },
        dropRate: 14,
        droppedBy: ["Droid Sentinel"],
        cost: 65
    },
    {
        name: "Breaker Blade [+10 ATK][+6 COMBO]",
        type: "weapon",
        stats: { attack: 10, combo: 6 },
        dropRate: 10,
        droppedBy: ["Droid Sentinel", "Droid Destroyer"],
        cost: 100
    },
    {
        name: "Annihilator Cannon [+12 ATK]",
        type: "weapon",
        stats: { attack: 12 },
        dropRate: 6,
        droppedBy: ["Droid Destroyer"],
        cost: 120
    },
    {
        name: "Omega Rupture Cannon [+14 ATK][+8 COMBO]",
        type: "weapon",
        stats: { attack: 14, combo: 8 },
        dropRate: 3,
        droppedBy: ["Droid Destroyer"],
        cost: 175
    },

    // ==================== SYSTEMS CHIP (Any stat) ====================
    {
        name: "Health Booster Chip I [+10 HP]",
        type: "chip",
        stats: { hp: 10 },
        dropRate: 45,
        droppedBy: [],
        cost: 8
    },
    {
        name: "Health Booster Chip II [+20 HP]",
        type: "chip",
        stats: { hp: 20 },
        dropRate: 18,
        droppedBy: ["Droid Enforcer", "Droid Sentinel"],
        cost: 20
    },
    {
        name: "Speed Processor I [+2 SPD]",
        type: "chip",
        stats: { speed: 2 },
        dropRate: 44,
        droppedBy: [],
        cost: 8
    },
    {
        name: "Speed Processor II [+4 SPD]",
        type: "chip",
        stats: { speed: 4 },
        dropRate: 17,
        droppedBy: ["Droid Enforcer", "Droid Sentinel"],
        cost: 20
    },
    {
        name: "Attack Subroutine I [+2 ATK]",
        type: "chip",
        stats: { attack: 2 },
        dropRate: 43,
        droppedBy: [],
        cost: 10
    },
    {
        name: "Attack Subroutine II [+4 ATK]",
        type: "chip",
        stats: { attack: 4 },
        dropRate: 16,
        droppedBy: ["Droid Enforcer", "Droid Sentinel"],
        cost: 25
    },
    {
        name: "Combo Algorithm I [+4 COMBO]",
        type: "chip",
        stats: { combo: 4 },
        dropRate: 42,
        droppedBy: [],
        cost: 15
    },
    {
        name: "Combo Algorithm II [+8 COMBO]",
        type: "chip",
        stats: { combo: 8 },
        dropRate: 15,
        droppedBy: ["Droid Sentinel", "Droid Destroyer"],
        cost: 40
    },
    {
        name: "Defence Matrix I [+2 DEF]",
        type: "chip",
        stats: { defence: 2 },
        dropRate: 41,
        droppedBy: [],
        cost: 10
    },
    {
        name: "Defence Matrix II [+4 DEF]",
        type: "chip",
        stats: { defence: 4 },
        dropRate: 14,
        droppedBy: ["Droid Sentinel", "Droid Destroyer"],
        cost: 25
    }

];

// Item type labels for UI
const ITEM_TYPES = {
    body: "READY FOR INSTALLATION",
    legs: "READY FOR INSTALLATION",
    arms: "READY FOR INSTALLATION",
    weapon: "READY FOR INSTALLATION",
    chip: "READY FOR INSTALLATION"
};
