onEvent('recipes', event => {
    function addRecipeRockGen(adjacent,below,out,id) {
        let recipe =  {
            "type": "thermal:rock_gen",
            "adjacent":adjacent,
            "result": Item.of(out)
        }
        if (below != '') {
            recipe.below = below
        }
        event.custom(recipe).id(id)
    }

    addRecipeRockGen('minecraft:packed_ice','minecraft:deepslate','forbidden_arcanus:darkstone','kubejs:rock_gen/rock_gen_darkstone')
    addRecipeRockGen('minecraft:water','minecraft:polished_diorite','minecraft:diorite','kubejs:rock_gen/rock_gen_diorite')
    addRecipeRockGen('minecraft:water','minecraft:polished_andesite','minecraft:andesite','kubejs:rock_gen/rock_gen_andesite')
    addRecipeRockGen('minecraft:water','minecraft:polished_granite','minecraft:granite','kubejs:rock_gen/rock_gen_granite')
    addRecipeRockGen('exnihilosequentia:witch_water','minecraft:redstone_block','minecraft:netherrack','kubejs:rock_gen/rock_gen_netherrack')
    addRecipeRockGen('exnihilosequentia:witch_water','minecraft:glowstone','minecraft:end_stone','kubejs:rock_gen/rock_gen_endstone')
    addRecipeRockGen('exnihilosequentia:witch_water','mysticalagriculture:soulium_block','mysticalagriculture:soulstone','kubejs:rock_gen/rock_gen_soulstone')
    addRecipeRockGen('minecraft:water','minecraft:bone_block','minecraft:calcite','kubejs:rock_gen/rock_gen_calcite')
    addRecipeRockGen('exnihilosequentia:witch_water','minecraft:bone_block','create:limestone','kubejs:rock_gen/rock_gen_limestone')
})