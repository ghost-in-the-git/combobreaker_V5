/**
 * REFINED MINERALS
 *
 * Purchased from the Mineral Trader using raw minerals (5 raw → 1 refined).
 * Used as currency at The Forger to craft equipment.
 */

const REFINED_MINERALS = [
    // Scrapyard (common)
    { name: "Refined Limestone", desc: "Purified limestone, compressed and ready for forging.", image: "images/IMAGE.gif", mineralCost: { mineral: "Limestone", category: "common", count: 5 }, refinedMineral: true },
    { name: "Refined Sandstone", desc: "Dense, smooth sandstone stripped of impurities.", image: "images/IMAGE.gif", mineralCost: { mineral: "Sandstone", category: "common", count: 5 }, refinedMineral: true },
    { name: "Refined Clay", desc: "Kiln-fired clay, hardened to structural grade.", image: "images/IMAGE.gif", mineralCost: { mineral: "Clay", category: "common", count: 5 }, refinedMineral: true },

    // Old Battlefield (common/uncommon)
    { name: "Refined Quartz", desc: "Crystal-clear quartz, precision-cut for components.", image: "images/IMAGE.gif", mineralCost: { mineral: "Quartz", category: "common", count: 5 }, refinedMineral: true },
    { name: "Refined Feldspar", desc: "Processed feldspar suitable for high-grade alloys.", image: "images/IMAGE.gif", mineralCost: { mineral: "Feldspar", category: "common", count: 5 }, refinedMineral: true },
    { name: "Refined Gypsum", desc: "Reactive gypsum powder, ground to molecular precision.", image: "images/IMAGE.gif", mineralCost: { mineral: "Gypsum", category: "uncommon", count: 5 }, refinedMineral: true },

    // Downtown (uncommon)
    { name: "Refined Fluorite", desc: "Luminous fluorite, polished to a perfect lattice.", image: "images/IMAGE.gif", mineralCost: { mineral: "Fluorite", category: "uncommon", count: 5 }, refinedMineral: true },
    { name: "Refined Calcite", desc: "Transparent calcite, cleaved along perfect planes.", image: "images/IMAGE.gif", mineralCost: { mineral: "Calcite", category: "uncommon", count: 5 }, refinedMineral: true },
    { name: "Refined Mica", desc: "Paper-thin mica sheets, ideal for insulation layers.", image: "images/IMAGE.gif", mineralCost: { mineral: "Mica", category: "uncommon", count: 5 }, refinedMineral: true },

    // Orbital Station (scarce)
    { name: "Refined Hematite", desc: "Iron-rich hematite, smelted to a mirror finish.", image: "images/IMAGE.gif", mineralCost: { mineral: "Hematite", category: "scarce", count: 5 }, refinedMineral: true },
    { name: "Refined Magnetite", desc: "Magnetically aligned magnetite, humming with charge.", image: "images/IMAGE.gif", mineralCost: { mineral: "Magnetite", category: "scarce", count: 5 }, refinedMineral: true },

    // Wasteland (scarce)
    { name: "Refined Bauxite", desc: "Aluminium-grade bauxite, lightweight and strong.", image: "images/IMAGE.gif", mineralCost: { mineral: "Bauxite", category: "scarce", count: 5 }, refinedMineral: true },
    { name: "Refined Galena", desc: "Lead-silver galena, separated and purified.", image: "images/IMAGE.gif", mineralCost: { mineral: "Galena", category: "scarce", count: 5 }, refinedMineral: true },
    { name: "Refined Sphalerite", desc: "Zinc-rich sphalerite, chemically stable.", image: "images/IMAGE.gif", mineralCost: { mineral: "Sphalerite", category: "scarce", count: 5 }, refinedMineral: true },

    // Undercity (valuable)
    { name: "Refined Chalcopyrite", desc: "Copper-gold ore, separated into pure components.", image: "images/IMAGE.gif", mineralCost: { mineral: "Chalcopyrite", category: "valuable", count: 5 }, refinedMineral: true },
    { name: "Refined Cassiterite", desc: "Pure tin extracted from cassiterite. Bright and malleable.", image: "images/IMAGE.gif", mineralCost: { mineral: "Cassiterite", category: "valuable", count: 5 }, refinedMineral: true },
    { name: "Refined Cinnabar", desc: "Mercury extracted safely. Sealed in a containment vial.", image: "images/IMAGE.gif", mineralCost: { mineral: "Cinnabar", category: "valuable", count: 5 }, refinedMineral: true },

    // Industrial Zone (valuable)
    { name: "Refined Chromite", desc: "Chromium-plated ingot, corrosion-proof.", image: "images/IMAGE.gif", mineralCost: { mineral: "Chromite", category: "valuable", count: 5 }, refinedMineral: true },

    // Frozen Reach (precious)
    { name: "Refined Gold", desc: "Smelted gold bar, 99.9% pure. Worth a fortune.", image: "images/IMAGE.gif", mineralCost: { mineral: "Gold", category: "precious", count: 5 }, refinedMineral: true },
    { name: "Refined Platinum", desc: "Platinum ingot, impossibly dense and heat-resistant.", image: "images/IMAGE.gif", mineralCost: { mineral: "Platinum", category: "precious", count: 5 }, refinedMineral: true },
    { name: "Refined Garnet", desc: "Faceted garnet, cut to amplify energy flow.", image: "images/IMAGE.gif", mineralCost: { mineral: "Garnet", category: "precious", count: 5 }, refinedMineral: true },

    // Neon Strip (exotic)
    { name: "Refined Uraninite", desc: "Stabilized uranium compound. Handle with extreme care.", image: "images/IMAGE.gif", mineralCost: { mineral: "Uraninite", category: "exotic", count: 5 }, refinedMineral: true },
    { name: "Refined Cobaltite", desc: "Cobalt alloy, shimmering blue-black.", image: "images/IMAGE.gif", mineralCost: { mineral: "Cobaltite", category: "exotic", count: 5 }, refinedMineral: true },
    { name: "Refined Molybdenite", desc: "Molybdenum sheets, rated for extreme temperatures.", image: "images/IMAGE.gif", mineralCost: { mineral: "Molybdenite", category: "exotic", count: 5 }, refinedMineral: true },

    // Dead Zone (ultrarare)
    { name: "Refined Diamond", desc: "Flawless synthetic diamond. Harder than anything known.", image: "images/IMAGE.gif", mineralCost: { mineral: "Diamond", category: "ultrarare", count: 5 }, refinedMineral: true },
    { name: "Refined Emerald", desc: "Perfect emerald crystal, resonating with strange energy.", image: "images/IMAGE.gif", mineralCost: { mineral: "Emerald", category: "ultrarare", count: 5 }, refinedMineral: true },
    { name: "Refined Sapphire", desc: "Deep blue sapphire, cut to channel raw power.", image: "images/IMAGE.gif", mineralCost: { mineral: "Sapphire", category: "ultrarare", count: 5 }, refinedMineral: true }
];
