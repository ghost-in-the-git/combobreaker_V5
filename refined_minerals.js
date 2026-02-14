/**
 * REFINED MINERALS
 *
 * Purchased from the Mineral Trader using raw minerals (5 raw → 1 refined).
 * Used as currency at The Forger to craft equipment.
 */

const REFINED_MINERALS = [
    // Scrapyard (Tier 1)
    { name: "Refined Limestone", desc: "Purified limestone, compressed and ready for forging.", image: "images/IMAGE.gif", mineralCost: { mineral: "Limestone", category: "tier1", count: 5 }, refinedMineral: true },
    { name: "Refined Sandstone", desc: "Dense, smooth sandstone stripped of impurities.", image: "images/IMAGE.gif", mineralCost: { mineral: "Sandstone", category: "tier1", count: 5 }, refinedMineral: true },
    { name: "Refined Tanzanite", desc: "Polished tanzanite, its violet shimmer stabilized.", image: "images/IMAGE.gif", mineralCost: { mineral: "Tanzanite", category: "tier1", count: 5 }, refinedMineral: true },

    // Old Battlefield (Tier 2)
    { name: "Refined Quartz", desc: "Crystal-clear quartz, precision-cut for components.", image: "images/IMAGE.gif", mineralCost: { mineral: "Quartz", category: "tier2", count: 5 }, refinedMineral: true },
    { name: "Refined Feldspar", desc: "Processed feldspar suitable for high-grade alloys.", image: "images/IMAGE.gif", mineralCost: { mineral: "Feldspar", category: "tier2", count: 5 }, refinedMineral: true },
    { name: "Refined Gypsum", desc: "Reactive gypsum powder, ground to molecular precision.", image: "images/IMAGE.gif", mineralCost: { mineral: "Gypsum", category: "tier2", count: 5 }, refinedMineral: true },

    // Downtown (Tier 3)
    { name: "Refined Fluorite", desc: "Luminous fluorite, polished to a perfect lattice.", image: "images/IMAGE.gif", mineralCost: { mineral: "Fluorite", category: "tier3", count: 5 }, refinedMineral: true },
    { name: "Refined Calcite", desc: "Transparent calcite, cleaved along perfect planes.", image: "images/IMAGE.gif", mineralCost: { mineral: "Calcite", category: "tier3", count: 5 }, refinedMineral: true },
    { name: "Refined Mica", desc: "Paper-thin mica sheets, ideal for insulation layers.", image: "images/IMAGE.gif", mineralCost: { mineral: "Mica", category: "tier3", count: 5 }, refinedMineral: true },

    // Orbital Station (Tier 4)
    { name: "Refined Hematite", desc: "Iron-rich hematite, smelted to a mirror finish.", image: "images/IMAGE.gif", mineralCost: { mineral: "Hematite", category: "tier4", count: 5 }, refinedMineral: true },
    { name: "Refined Magnetite", desc: "Magnetically aligned magnetite, humming with charge.", image: "images/IMAGE.gif", mineralCost: { mineral: "Magnetite", category: "tier4", count: 5 }, refinedMineral: true },
    { name: "Refined Alexandrite", desc: "Color-shifting alexandrite, its lattice perfectly aligned.", image: "images/IMAGE.gif", mineralCost: { mineral: "Alexandrite", category: "tier4", count: 5 }, refinedMineral: true },

    // Wasteland (Tier 5)
    { name: "Refined Bauxite", desc: "Aluminium-grade bauxite, lightweight and strong.", image: "images/IMAGE.gif", mineralCost: { mineral: "Bauxite", category: "tier5", count: 5 }, refinedMineral: true },
    { name: "Refined Galena", desc: "Lead-silver galena, separated and purified.", image: "images/IMAGE.gif", mineralCost: { mineral: "Galena", category: "tier5", count: 5 }, refinedMineral: true },
    { name: "Refined Sphalerite", desc: "Zinc-rich sphalerite, chemically stable.", image: "images/IMAGE.gif", mineralCost: { mineral: "Sphalerite", category: "tier5", count: 5 }, refinedMineral: true },

    // Undercity (Tier 6)
    { name: "Refined Chalcopyrite", desc: "Copper-gold ore, separated into pure components.", image: "images/IMAGE.gif", mineralCost: { mineral: "Chalcopyrite", category: "tier6", count: 5 }, refinedMineral: true },
    { name: "Refined Cassiterite", desc: "Pure tin extracted from cassiterite. Bright and malleable.", image: "images/IMAGE.gif", mineralCost: { mineral: "Cassiterite", category: "tier6", count: 5 }, refinedMineral: true },
    { name: "Refined Cinnabar", desc: "Mercury extracted safely. Sealed in a containment vial.", image: "images/IMAGE.gif", mineralCost: { mineral: "Cinnabar", category: "tier6", count: 5 }, refinedMineral: true },

    // Industrial Zone (Tier 7)
    { name: "Refined Chromite", desc: "Chromium-plated ingot, corrosion-proof.", image: "images/IMAGE.gif", mineralCost: { mineral: "Chromite", category: "tier7", count: 5 }, refinedMineral: true },
    { name: "Refined Vanadinite", desc: "Vanadium concentrate, dense and heat-resistant.", image: "images/IMAGE.gif", mineralCost: { mineral: "Vanadinite", category: "tier7", count: 5 }, refinedMineral: true },
    { name: "Refined Scheelite", desc: "Tungsten-rich scheelite, glowing faintly under UV.", image: "images/IMAGE.gif", mineralCost: { mineral: "Scheelite", category: "tier7", count: 5 }, refinedMineral: true },

    // Frozen Reach (Tier 8)
    { name: "Refined Gold", desc: "Smelted gold bar, 99.9% pure. Worth a fortune.", image: "images/IMAGE.gif", mineralCost: { mineral: "Gold", category: "tier8", count: 5 }, refinedMineral: true },
    { name: "Refined Platinum", desc: "Platinum ingot, impossibly dense and heat-resistant.", image: "images/IMAGE.gif", mineralCost: { mineral: "Platinum", category: "tier8", count: 5 }, refinedMineral: true },
    { name: "Refined Garnet", desc: "Faceted garnet, cut to amplify energy flow.", image: "images/IMAGE.gif", mineralCost: { mineral: "Garnet", category: "tier8", count: 5 }, refinedMineral: true },

    // Neon Strip (Tier 9)
    { name: "Refined Uraninite", desc: "Stabilized uranium compound. Handle with extreme care.", image: "images/IMAGE.gif", mineralCost: { mineral: "Uraninite", category: "tier9", count: 5 }, refinedMineral: true },
    { name: "Refined Cobaltite", desc: "Cobalt alloy, shimmering blue-black.", image: "images/IMAGE.gif", mineralCost: { mineral: "Cobaltite", category: "tier9", count: 5 }, refinedMineral: true },
    { name: "Refined Molybdenite", desc: "Molybdenum sheets, rated for extreme temperatures.", image: "images/IMAGE.gif", mineralCost: { mineral: "Molybdenite", category: "tier9", count: 5 }, refinedMineral: true },

    // Dead Zone (Tier 10)
    { name: "Refined Diamond", desc: "Flawless synthetic diamond. Harder than anything known.", image: "images/IMAGE.gif", mineralCost: { mineral: "Diamond", category: "tier10", count: 5 }, refinedMineral: true },
    { name: "Refined Emerald", desc: "Perfect emerald crystal, resonating with strange energy.", image: "images/IMAGE.gif", mineralCost: { mineral: "Emerald", category: "tier10", count: 5 }, refinedMineral: true },
    { name: "Refined Sapphire", desc: "Deep blue sapphire, cut to channel raw power.", image: "images/IMAGE.gif", mineralCost: { mineral: "Sapphire", category: "tier10", count: 5 }, refinedMineral: true }
];
