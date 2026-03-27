/**
 * @file troops_deployment.js
 * @title Automated Troop Deployment System
 * @author Dmytro Ivanenko
 * @version 1.1.0
 * * @description
 * An educational JavaScript project for Minecraft Education Edition.
 * This script automates the creation of two opposing military squads (Attackers and Defenders)
 * using advanced loops and relative coordinate systems.
 * * @educational_objectives
 * 1. Procedural Programming: Organizing logic into discrete functions.
 * 2. Nested Loops: Generating 2D grid layouts (lines x figures) using camelCase iteration.
 * 3. Spatial Awareness: Mastering relative coordinates (~x ~y ~z) and entity facing.
 * 4. Command Integration: Executing Minecraft Bedrock commands within a JavaScript environment.
 * * @platform Minecraft Education Edition (MakeCode JavaScript)
 * @namespace minecraft:armor_stand
 */



player.onChat("troops", function() {
    player.say("§6I'm starting ... ")    

    attackers();
    defenders();
    patrons();

    blocks.place(BLOCK_OF_NETHERITE, pos(0, -1, 0));
    player.say("§2§lTask completed!");
})


// ===  1. Attacking squad  ===
function attackers() {
    player.say("§4Creating attackers...");

    // 1.1. Layout: 2 lines x 30 figures
    let x = -10;

    for (let eastCounter = 1; eastCounter <= 2; eastCounter++) {
        let z = -29;
            for (let southCounter = 1; southCounter <= 30; southCounter++) {
            // 1.1.1. Spawn and face orientation
            player.execute(`/summon armor_stand "§4Attacker" ~${x} ~0 ~${z}`);
            player.execute(`/tp @e[type=armor_stand, c=1, x=~${x}, y=~0, z=~${z}] ~${x} ~0 ~${z} facing ~0 ~0 ~${z}`);
    
            let search = `@e[type=armor_stand, c=1, x=~${x}, y=~0, z=~${z}]`;


            // 1.1.2. Equip: chest, legs, feet
            player.execute(`/replaceitem entity ${search} slot.armor.chest 0 diamond_chestplate 1 0`);
            player.execute(`/replaceitem entity ${search} slot.armor.legs 0 diamond_leggings 1 0`);
            player.execute(`/replaceitem entity ${search} slot.armor.feet 0 diamond_boots 1 0`);


            // 1.1.3. Head (helmet), weapon and shield in hands
            player.execute(`/replaceitem entity ${search} slot.armor.head 0 skull 1 0`);
            player.execute(`/replaceitem entity ${search} slot.weapon.mainhand 0 trident 1 0`);
            player.execute(`/replaceitem entity ${search} slot.weapon.offhand 0 shield 1 0`);

            z += 2;
        }

        x -= 2;
    }


    // 1.2. Commander of attackers
    player.execute(`/summon armor_stand "§4Commander" ~-6 ~0 ~0`);
    player.execute(`/tp @e[type=armor_stand, c=1, x=~-6, y=~0, z=~0] ~-6 ~0 ~0 facing ~6 ~0 ~0`);

    let search = `@e[type=armor_stand, c=1, x=~-6, y=~0, z=~0]`;


        // 1.2.1. Equip: chest, legs, feet
        player.execute(`/replaceitem entity ${search} slot.armor.chest 0 diamond_chestplate 1 0`);
        player.execute(`/replaceitem entity ${search} slot.armor.legs 0 diamond_leggings 1 0`);
        player.execute(`/replaceitem entity ${search} slot.armor.feet 0 diamond_boots 1 0`);


        // 1.2.2. Head (helmet), weapon and shield in hands
        player.execute(`/replaceitem entity ${search} slot.armor.head 0 skull 1 0`);
        player.execute(`/replaceitem entity ${search} slot.weapon.mainhand 0 trident 1 0`);
        player.execute(`/replaceitem entity ${search} slot.weapon.offhand 0 shield 1 0`);

    player.say("§4 Attackers are created!");
}


// ===  2. Defending squad  ===
function defenders() {
    player.say("§2Creating defenders...");

    // 2.1. Defenders: lancers
    // Layout: 1 line x 30 figures
    let z = -29;

    for (let southCounter = 1; southCounter <= 30; southCounter++) {
        // 2.1.1. Spawn and face orientation
        player.execute(`/summon armor_stand "§7Lancer" ~10 ~0 ~${z}`);
        player.execute(`/tp @e[type=armor_stand, c=1, x=~10, y=~0, z=~${z}] ~10 ~0 ~${z} facing ~0 ~0 ~${z}`);
    
        let search = `@e[type=armor_stand, c=1, x=~10, y=~0, z=~${z}]`;


        // 2.1.2. Equip: chest, legs, feet
        player.execute(`/replaceitem entity ${search} slot.armor.chest 0 netherite_chestplate 1 0`);
        player.execute(`/replaceitem entity ${search} slot.armor.legs 0 netherite_leggings 1 0`);
        player.execute(`/replaceitem entity ${search} slot.armor.feet 0 netherite_boots 1 0`);


        // 2.1.3. Head (helmet), weapon and shield in hands
        player.execute(`/replaceitem entity ${search} slot.armor.head 0 skull 1 1`);
        player.execute(`/replaceitem entity ${search} slot.weapon.mainhand 0 netherite_spear 1 0`);
        player.execute(`/replaceitem entity ${search} slot.weapon.offhand 0 shield 1 0`);

        z += 2;
    }


    // 2.2. Defenders: swordsmen
    // Layout: 2 lines x 30 figures
    let x = 12;

    for (let eastCounter = 1; eastCounter <= 2; eastCounter++) {
        let z = -29;

        for (let southCounter = 1; southCounter <= 30; southCounter++) {
            // 2.2.1. Spawn and face orientation
            player.execute(`/summon armor_stand "§6Swordsman" ~${x} ~0 ~${z}`);
            player.execute(`/tp @e[type=armor_stand, c=1, x=~${x}, y=~0, z=~${z}] ~${x} ~0 ~${z} facing ~0 ~0 ~${z}`);
    
            let search = `@e[type=armor_stand, c=1, x=~${x}, y=~0, z=~${z}]`;


            // 2.2.2. Equip: chest, legs, feet
            player.execute(`/replaceitem entity ${search} slot.armor.chest 0 iron_chestplate 1 0`);
            player.execute(`/replaceitem entity ${search} slot.armor.legs 0 iron_leggings 1 0`);
            player.execute(`/replaceitem entity ${search} slot.armor.feet 0 iron_boots 1 0`);


            // 2.2.3. Head (helmet), weapon and shield in hands
            player.execute(`/replaceitem entity ${search} slot.armor.head 0 skull 1 0`);
            player.execute(`/replaceitem entity ${search} slot.weapon.mainhand 0 netherite_sword 1 0`);
            player.execute(`/replaceitem entity ${search} slot.weapon.offhand 0 shield 1 0`);

            z += 2;
        }

        x += 2;
    }


    // 2.3. Defenders: archers
    // Layout: 1 line x 30 figures
    z = -29;

    for (let southCounter = 1; southCounter <= 30; southCounter++) {
        // 2.3.1. Spawn and face orientation
        player.execute(`/summon armor_stand "§2Archer" 17 ~0 ~${z}`);
        player.execute(`/tp @e[type=armor_stand, c=1, x=~17, y=~0, z=~${z}] ~17 ~0 ~${z} facing ~0 ~0 ~${z}`);

        let search = `@e[type=armor_stand, c=1, x=~17, y=~0, z=~${z}]`;


        // 2.3.2. Equip: chest, legs, feet
        player.execute(`/replaceitem entity ${search} slot.armor.chest 0 leather_chestplate 1 0`);
        player.execute(`/replaceitem entity ${search} slot.armor.legs 0 leather_leggings 1 0`);
        player.execute(`/replaceitem entity ${search} slot.armor.feet 0 iron_boots 1 0`);


        // 2.3.3. Head (helmet), weapon and shield in hands
        player.execute(`/replaceitem entity ${search} slot.armor.head 0 skull 1 3`);
        player.execute(`/replaceitem entity ${search} slot.weapon.mainhand 0 bow 1 0`);

        z += 2;
    }


    // 2.4. Commander of defenders
    player.execute(`/summon armor_stand "§2Commander" ~6 ~0 ~0`);
    player.execute(`/tp @e[type=armor_stand, c=1, x=~6, y=~0, z=~0] ~6 ~0 ~0 facing ~-6 ~6 ~0`);

    let search = `@e[type=armor_stand, c=1, x=~6, y=~0, z=~0]`;


        // 2.4.1. Equip: chest, legs, feet
        player.execute(`/replaceitem entity ${search} slot.armor.chest 0 netherite_chestplate 1 0`);
        player.execute(`/replaceitem entity ${search} slot.armor.legs 0 netherite_leggings 1 0`);
        player.execute(`/replaceitem entity ${search} slot.armor.feet 0 netherite_boots 1 0`);


        // 2.4.2. Head (helmet), weapon and shield in hands
        player.execute(`/replaceitem entity ${search} slot.armor.head 0 skull 1 1`);
        player.execute(`/replaceitem entity ${search} slot.weapon.mainhand 0 netherite_sword 1 0`);
        player.execute(`/replaceitem entity ${search} slot.weapon.offhand 0 shield 1 0`);

    player.say("§2Defenders are created!");
}


// === 3. Patrons ===
function patrons() {
    // 3.1. Patron saint of attackers
        // 3.1.1. Platform and figure
        blocks.fill(DIAMOND_BLOCK, pos(-3, 0, 30), pos(-7, 0, 34), FillOperation.Replace);

        player.execute(`/setblock ~-5 ~5 ~32 barrier`);
        player.execute(`/tp @e[type=armor_stand, c=1, x=~-5, y=~6, z=~32] ~-5 ~6 ~32 facing ~-5 ~6 ~-32`);

        let searchPSA = `@e[type=armor_stand, c=1, x=~-5, y=~6, z=~32]`;


        // 3.1.2. Equip: chest, legs, feet
        player.execute(`/replaceitem entity ${searchPSA} slot.armor.chest 0 diamond_chestplate 1 0`);
        player.execute(`/replaceitem entity ${searchPSA} slot.armor.legs 0 diamond_leggings 1 0`);
        player.execute(`/replaceitem entity ${searchPSA} slot.armor.feet 0 diamond_boots 1 0`);


        // 3.1.3. Head (helmet), weapon and shield in hands
        player.execute(`/replaceitem entity ${searchPSA} slot.armor.head 0 skull 1 0`);
        player.execute(`/replaceitem entity ${searchPSA} slot.weapon.mainhand 0 trident 1 0`);
        player.execute(`/replaceitem entity ${searchPSA} slot.weapon.offhand 0 shield 1 0`);

    /** * NOTE FOR STUDENTS:
    * The following animation command is for demonstration purposes only.
    * In a real game map, it is better to use a REPEATING COMMAND BLOCK
    * at the patron's location with the same command to ensure the scale
    * stays permanent even after a world reload.
    */
    loops.pause(500);
    player.execute(`/playanimation @e[type = armor_stand, x=~-5, y=~6, z=~32, r=2, c=1] animation.ghast.scale a 9999999`);


    // 3.2. Patron saint of defenders
        // 3.2.1. Platform and figure
        blocks.fill(BLOCK_OF_NETHERITE, pos(3, 0, -30), pos(7, 0, -34), FillOperation.Replace);

        player.execute(`/setblock ~5 ~5 ~-32 barrier`);
        player.execute(`/tp @e[type=armor_stand, c=1, x=~5, y=~6, z=~-32] ~5 ~6 ~-32 facing ~5 ~6 ~32`);

        let searchPSD = `@e[type=armor_stand, c=1, x=~5, y=~6, z=~-32]`;


        // 3.2.1. Equip: chest, legs, feet
        player.execute(`/replaceitem entity ${searchPSD} slot.armor.chest 0 netherite_chestplate 1 0`);
        player.execute(`/replaceitem entity ${searchPSD} slot.armor.legs 0 netherite_leggings 1 0`);
        player.execute(`/replaceitem entity ${searchPSD} slot.armor.feet 0 netherite_boots 1 0`);


        // 3.2.2. Head (helmet), weapon and shield in hands
        player.execute(`/replaceitem entity ${searchPSD} slot.armor.head 0 skull 1 1`);
        player.execute(`/replaceitem entity ${searchPSD} slot.weapon.mainhand 0 netherite_sword 1 0`);
        player.execute(`/replaceitem entity ${searchPSD} slot.weapon.offhand 0 shield 1 0`);


    /** * NOTE FOR STUDENTS:
    * The following animation command is for demonstration purposes only.
    * In a real game map, it is better to use a REPEATING COMMAND BLOCK
    * at the patron's location with the same command to ensure the scale
    * stays permanent even after a world reload.
    */
    loops.pause(500);
    player.execute(`/playanimation @e[type = armor_stand, x=~5, y=~6, z=~-32, r=2, c=1] animation.ghast.scale a 9999999`);

}
