//priority: 1000
onEvent('tags.blocks', e => {
  e.add('allthemodium:other_te_whitelist', ['mekanism:teleporter', 'rftoolsutility:matter_receiver'])
  e.add('minecraft:mineable/shovel', ['snad:snad', 'snad:red_snad', 'snad:suol_snad'])
  e.add('minecraft:mineable/pickaxe', ['cobblefordays:tier_1', 'cobblefordays:tier_2', 'cobblefordays:tier_3', 'cobblefordays:tier_4', 'cobblefordays:tier_5', 'enderstorage:ender_chest', 'enderstorage:ender_tank'])
  e.add('exnihilosequentia:mineable/hammer', ['allthecompressed:cobblestone_block_1x', 'allthecompressed:gravel_block_1x', 'allthecompressed:sand_block_1x'])
  e.add('minecraft:mineable/axe', ['integrateddynamics:menril_log_stripped', 'integrateddynamics:menril_wood_stripped'])
  e.add('minecraft:logs', ['integrateddynamics:menril_log_stripped', 'integrateddynamics:menril_wood_stripped', /allthemodium:stripped_\w+_log/])
  e.add('create:passive_boiler_heaters', 'allthemodium:soul_lava_block')
  e.add('minecraft:climbable', ['minecraft:chain', /additionallanterns:.*_chain/])
  e.add('forge:relocation_not_supported', [/productivebees:.+/, 'minecraft:beehive', 'minecraft:bee_nest', /integrateddynamics:.+/, /exnihilosequentia:.+/, /botania:.+/, /compactmachines:.+/, /pipez:.*_pipe/, /functionalstorage:.+/, 'rftoolsutility:screen'])
  e.add('ae2:blacklisted/spatial','#forge:relocation_not_supported')
  e.add('forge:ores', 'forbidden_arcanus:arcane_crystal_ore')
})

onEvent('tags.items', e => {
  e.add('misctags:farmland/tier6', ['mysticalagradditions:insanium_farmland'])
  e.add('misctags:farmland/tier5', ['mysticalagriculture:supremium_farmland', '#misctags:farmland/tier6'])
  e.add('misctags:farmland/tier4', ['mysticalagriculture:imperium_farmland', '#misctags:farmland/tier5'])
  e.add('misctags:farmland/tier3', ['mysticalagriculture:tertium_farmland', '#misctags:farmland/tier4'])
  e.add('misctags:farmland/tier2', ['mysticalagriculture:prudentium_farmland', '#misctags:farmland/tier3'])
  e.add('misctags:farmland/tier1', ['mysticalagriculture:inferium_farmland', '#misctags:farmland/tier2'])
  e.add('misctags:immersive_engineering_hammer', 'immersiveengineering:hammer')
  e.add('misctags:immersive_engineering_wirecutter', 'immersiveengineering:wirecutter')
  e.add('forge:soul_sand', 'minecraft:soul_sand')

  e.add('forge:ores/inferium', ['mysticalagradditions:nether_inferium_ore', 'mysticalagradditions:end_inferium_ore'])
  e.add('exnihilosequentia:pieces', 'exnihilomekanism:osmium_pieces');
  e.add('forge:raw_ores/cobalt', 'tconstruct:raw_cobalt');
  e.add('forge:dusts/netherite', 'alltheores:netherite_dust');

  e.add('forge:raw_ores/iridium', 'ftbic:iridium_chunk');
  e.remove('forge:silicon', 'ftbic:silicon')

  e.add('forge:melons', 'minecraft:melon_slice')
  e.add('forbidden_arcanus:modifier/eternal_incompatible', ['#alltheores:ore_hammers', '@ftbic', '#tconstruct:modifiable', 'minecraft:nether_star', 'mythicbotany:faded_nether_star', 'bloodmagic:sanguinereverter'])

  // fix raw block crafting for other mods
  e.add('forge:raw_ores/zinc', 'create:raw_zinc')
  mekanismMetals.forEach(metal => e.add(`forge:raw_ores/${metal}`, `mekanism:raw_${metal}`))
  immersiveMetals.forEach(metal => e.add(`forge:raw_ores/${metal}`, `immersiveengineering:raw_${metal}`))

  atmMetals.forEach(metal => e.add(`forge:storage_blocks/raw_${metal}`, `allthemodium:raw_${metal}_block`));
  e.add('forge:rods/metal', atoMetals.concat(vanillaMetals, atoAlloys).map(metal => `alltheores:${metal}_rod`));
  e.add('forge:rods/metal', atmMetals.map(metal => `allthemodium:${metal}_rod`));
  e.add('forge:rods/all_metal', '#forge:rods/metal');
  e.add('forge:plates', atmMetals.map(metal => `allthemodium:${metal}_plate`))

  e.add('exnihilosequentia:pebbles', /exnihilosequentia:.*_pebble/)
  e.add('exnihilosequentia:pieces', 'kubejs:cobalt_pieces')

  e.remove('forge:storage_blocks/copper', 'minecraft:cut_copper')

  e.add('minecraft:logs', ['integrateddynamics:menril_log_stripped', 'integrateddynamics:menril_wood_stripped', /allthemodium:stripped_\w+_log/])
  e.add('forge:stripped_logs', [/allthemodium:stripped_\w+_log/])

  e.add('forge:hoes', [/twilightforest:.*_hoe/, /mekanismtools:.*_hoe/, /projecte:.*_hoe/, /mysticalagriculture:.*_hoe/, /allthemodium:.*_hoe/, /botania:.*_hoe/, /ae2:.*_hoe/, /forbidden_arcanus:.*_sword/])
  e.add('forge:bows', [/twilightforest:.*_bow/, /mysticalagriculture:.*_bow/])
  e.add('forge:armor', [/mekanismtools:.*_helmet/, /mekanismtools:.*_chestplate/, /mekanismtools:.*_leggings/, /mekanismtools:.*_boots/])
  e.add('forge:swords', [/mekanismtools:.*_sword/, /mysticalagriculture:.*_sword/, /allthemodium:.*_sword/, /ae2:.*_sword/, /twilightforest:*_sword/, /projecte:*_sword/, /redstone_arsenal:.*_sword/, /tconstruct:sword/, 'twilightforest:fiery_sword', 'twilightforest:ironwood_sword', 'twilightforest:steeleaf_sword', 'twilightforest:knightmetal_sword', 'twilightforest:ice_sword', 'twilightforest:glass_sword', 'twilightforest:giant_sword'])
  e.add('forge:pickaxes', [/mekanismtools:.*_pickaxe/, /forbidden_arcanus:.*_pickaxe/, /mysticalagriculture:.*_pickaxe/, "botania:manasteel_pick", /botania:.*_pickaxe/, /allthemodium:.*_pickaxe/, /ae2:.*_pickaxe/, /twilightforest:.*_pickaxe/, /projecte:*_pickaxe/, /redstone_arsenal:.*_pickaxe/, /occultism:.*_pickaxe/, /spirit:*_pickaxe/, /immersiveengineering:pickaxe_.*/, /tconstruct:pickaxe/])
  e.add('forge:axes', [/botania:.*_axe/, /allthemodium:.*_axe/, /ae2:.*_axe/, /mysticalagriculture:.*_axe/, /twilightforest:.*_axe/, /redstone_arsenal:.*_axe/, /forbidden_arcanus:.*_axe/, /mekanismtools:.*_axe/, /spirit:*_axe/, /tconstruct:.*_axe/])
  e.add('forge:shovels', [/allthemodium:.*_shovel/, /ae2:.*_shovel/, /bloodmagic:.*shovel/, /botania:.*_shovel/, /forbidden_arcanus:.*_shovel/, /immersiveengineering:shovel_.*/, /mekanismtools:.*_shovel/, /mysticalagriculture:.*_shovel/, /projecte:.*_shovel/, /redstone_arsenal:.*_shovel/, /spirit:.*_shovel/, /twilightforest:.*_shovel/])
  e.add('forge:cheese', ['#forge:cheeses', 'thermal:cheese_wedge'])

})

onEvent('tags.entity_types', e => {
  e.add('mob_grinding_utils:noswab', [/productivebees:.+/, 'allthemodium:piglich',])
  e.add('mob_grinding_utils:no_spawn', '#mob_grinding_utils:noswab')
  e.add('pneumaticcraft:vacuum_trap_blacklisted', [/productivebees:.+/, 'allthemodium:piglich',])
  e.add('industrialforegoing:mob_duplicator_blacklist', [/productivebees:.+/, 'allthemodium:piglich',])
})
