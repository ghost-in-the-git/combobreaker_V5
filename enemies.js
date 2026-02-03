/**
 * ENEMY CONFIGURATION
 *
 * Edit this file to add, remove, or modify enemy types.
 *
 * Each enemy has the following properties:
 * - name: Display name in battle
 * - attack: Damage dealt to player per hit
 * - defence: Damage blocked from player attacks
 * - hp: Health points (hits needed to destroy)
 * - xp: Experience points gained when killed
 * - appearanceRate: Relative chance to appear (higher = more common)
 * - minLevel: Minimum player level for this enemy to appear
 * - squadMin: Minimum number of enemies in a wave
 * - squadMax: Maximum number of enemies in a wave
 */

const ENEMIES = [
    {
        name: "Lurker",
        attack: 1,
        defence: 0,
        hp: 6,
        xp: 1,
        appearanceRate: 50,
        minLevel: 1,
        squadMin: 1,
        squadMax: 5
    },
    {
        name: "Heavy Lurker",
        attack: 2,
        defence: 1,
        hp: 10,
        xp: 1,
        appearanceRate: 30,
        minLevel: 1,
        squadMin: 1,
        squadMax: 4
    },
    {
        name: "Droid Enforcer",
        attack: 3,
        defence: 3,
        hp: 5,
        xp: 8,
        appearanceRate: 15,
        minLevel: 10,
        squadMin: 1,
        squadMax: 3
    },
    {
        name: "Droid Sentinel",
        attack: 5,
        defence: 5,
        hp: 10,
        xp: 20,
        appearanceRate: 8,
        minLevel: 10,
        squadMin: 1,
        squadMax: 2
    },
    {
        name: "Droid Destroyer",
        attack: 8,
        defence: 8,
        hp: 20,
        xp: 50,
        appearanceRate: 3,
        minLevel: 10,
        squadMin: 1,
        squadMax: 1
    }
];
