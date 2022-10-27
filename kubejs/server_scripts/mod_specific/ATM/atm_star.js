onEvent('recipes', e => {
  //#region RECIPES
  //#region Dragon Soul
  e.shaped('allthetweaks:dragon_soul', ['CDA', 'SNI', 'BSE'], {
    A: 'occultism:soul_gem',
    C: 'forbidden_arcanus:dark_soul',
    D: 'forbidden_arcanus:arcane_dragon_egg',
    N: 'allthemodium:piglich_heart',
    B: 'minecraft:dragon_breath',
    S: 'botania:dragonstone',
    E: 'forbidden_arcanus:golden_dragon_scale',
    I: Item.of('blue_skies:nature_arc', '{ArcLevel:2}')
  }).id('kubejs:allthetweaks/dragon_soul')
  //#endregion
  //#region Dimensional Seed
  e.shaped('allthetweaks:dimensional_seed', ['ABC', 'DEF', 'GHI'], {
    A: 'allthecompressed:blackstone_block_4x',
    B: 'allthecompressed:end_stone_block_4x',
    C: 'allthecompressed:netherrack_block_4x',
    D: 'allthecompressed:clay_block_4x',
    E: 'allthecompressed:emerald_block_4x',
    F: 'allthecompressed:soul_sand_block_4x',
    G: 'allthecompressed:gravel_block_4x',
    H: 'allthecompressed:red_sand_block_4x',
    I: 'allthecompressed:obsidian_block_4x'
  }).id('kubejs:allthetweaks/dimensional_seed')
  //#endregion
  //#region Withers Compass
  e.shaped('allthetweaks:withers_compass', ['DCD', 'ABA', 'DED'], {
    A: 'mekanism:module_gravitational_modulating_unit',
    B: 'ars_nouveau:glyph_wither',
    C: 'allthecompressed:nether_star_block_2x',
    D: Item.of('apotheosis:potion_charm', { Damage: 0, Potion: "apotheosis:strong_wither" }),
    E: 'mekanism:module_gravitational_modulating_unit'
  }).id('kubejs:allthetweaks/withers_compass')
  //#endregion

//#region philosopher's fuel
    e.custom({
    type: 'pneumaticcraft:pressure_chamber',
    inputs: [
      { 'type': 'pneumaticcraft:stacked_item', 'item': 'mysticalagradditions:insanium_coal_block', 'count': 1 },
      { 'type': 'pneumaticcraft:stacked_item', 'item': 'mekanism:pellet_antimatter', 'count': 1 },
      { 'type': 'pneumaticcraft:stacked_item', 'item': 'projecte:rm_furnace', 'count': 1 },
      { 'type': 'pneumaticcraft:stacked_item', 'item': 'mysticalagriculture:supremium_furnace', 'count': 1 },
      { 'type': 'pneumaticcraft:stacked_item', 'item': 'allthecompressed:uranium_block_4x', 'count': 1 },
      { 'type': 'pneumaticcraft:stacked_item', 'item': 'projecte:aeternalis_fuel_block', 'count': 1 },
      { 'type': 'pneumaticcraft:stacked_item', 'item': 'allthemodium:soul_lava_bucket', 'count': 1 },
      { 'type': 'pneumaticcraft:stacked_item', 'item': 'ftbic:nuclear_reactor', 'count': 1 },
      { 'type': 'pneumaticcraft:stacked_item', 'item': 'ftbic:antimatter', 'count': 1 }
    ],
    pressure: 4.9,
    results: [
      {
        'item': 'allthetweaks:philosophers_fuel'
      }
    ]
  }).id('kubejs:allthetweaks/philosophers_fuel')

//    B: Item.of('ftbic:quad_uranium_fuel_rod', '{Damage:0}'),
//    F: Item.of('elementalcraft:jewel', '{elementalcraft:{jewel:"elementalcraft:phoenix"}}'),

  //#endregion
  //#region Improbable Probaility Device
  e.shaped('allthetweaks:improbable_probability_device', ['AHB', 'CGE', 'FDF'], {
    A: 'computercraft:monitor_advanced',
    B: 'mekanismgenerators:module_solar_recharging_unit',
    C: 'ae2:cell_component_256k',
    D: 'forbidden_arcanus:eternal_obsidian_skull',
    E: Item.of('apotheosis:potion_charm', { Damage: 0, Potion: "apotheosis:strong_knowledge" }),
    F: 'allthecompressed:enderium_block_3x',
    G: 'ftbic:nuke',
    H: 'solargeneration:solar_panel_advanced'  
  }).id('kubejs:allthetweaks/improbable_probability_device')
  //#endregion

  //#region Nexium Emitter
  e.shaped('allthetweaks:nexium_emitter', ['AGC', 'HBF', 'CED'], {
    A: 'ftbic:ev_solar_panel',
    B: 'ae2:dense_energy_cell',
    C: 'alltheores:platinum_block',
    D: 'allthecompressed:netherite_block_4x',
    E: 'ae2:singularity',
    F: 'mekanismgenerators:module_solar_recharging_unit',
    G: 'ae2:wireless_receiver',
    H: 'ae2:crafting_terminal'
  }).id('kubejs:allthetweaks/nexium_emitter')
  //#endregion


  //#region Pulsating Black Hole
  e.shaped('allthetweaks:pulsating_black_hole', ['ABC', 'DEF', 'GHI'], {
    A: 'mekanism:pellet_antimatter',
    B: 'ftbic:antimatter',
    C: 'ftbic:nuke',
    D: 'mekanism:quantum_entangloporter',
    E: 'allthecompressed:unobtainium_block_2x',
    F: 'allthecompressed:unobtainium_block_2x',
    G: 'ae2:quantum_ring',
    H: 'forbidden_arcanus:quantum_catcher',
    I: 'forbidden_arcanus:quantum_catcher'
  }).id('kubejs:pulsating_black_hole')
  //#endregion


  //#region Oblivion Shard
  e.shaped('allthetweaks:oblivion_shard', [' AB', 'ACA', 'BA '], {
    A: 'allthemodium:unobtainium_block',
    C: 'twilightforest:snow_queen_trophy',
    B: 'forbidden_arcanus:dark_nether_star_block'
  }).id('kubejs:allthetweaks/oblivion_shard')
  //#endregion
  //#region Creative Essence
  e.shaped('mysticalagradditions:creative_essence', ['CAC', 'ABA', 'CAC'], {
    A: 'mysticalagradditions:insanium_block',
    C: 'mysticalagradditions:insanium_gemstone_block',
    B: 'mysticalagriculture:master_infusion_crystal'
  }).id('kubejs:allthetweaks/creative_essence')
  //#endregion
  //#region Patrick Star
  e.recipes.create.mechanical_crafting('allthetweaks:patrick_star', [
    '    B    ',
    '   BCA   ',
    'BBBGCABBB',
    'ACGCGGGCA',
    ' AAGGGBA ',
    '  EDDDE  ',
    ' EFEDEFE ',
    'BEDD DDEB',
    'AAA   AAA'
  ], {
    A: 'minecraft:magenta_concrete',
    B: 'minecraft:pink_concrete',
    C: 'minecraft:pink_concrete_powder',
    D: 'minecraft:green_concrete',
    E: 'minecraft:green_concrete_powder',
    F: 'minecraft:lime_concrete',
    G: 'minecraft:magenta_concrete_powder'
  }).id('kubejs:allthetweaks/patrick_star')
  //#endregion
  //#region ATM Star
  e.recipes.create.mechanical_crafting('allthetweaks:atm_star', [
    '    O    ',
    '   AJA   ',
    'OOAJFJAOO',
    'OJJCDEJJO',
    ' ANBIHMA ',
    '  AKGLA  ',
    ' AJJAJJA ',
    'OJJA AJJO',
    'OOA   AOO'
  ], {
    A: 'allthemodium:unobtainium_allthemodium_alloy_block',
    B: 'allthetweaks:nexium_emitter',
    C: 'allthetweaks:dragon_soul',
    D: 'allthetweaks:withers_compass',
    E: 'allthetweaks:pulsating_black_hole',
    F: 'allthetweaks:oblivion_shard',
    G: 'allthetweaks:improbable_probability_device',
    H: 'allthetweaks:dimensional_seed',
    I: 'allthetweaks:patrick_star',
    J: 'allthecompressed:nether_star_block_1x',
    K: 'allthetweaks:philosophers_fuel',
    L: 'mysticalagradditions:creative_essence',
    M: 'mythicbotany:muspelheim_rune',
    N: 'mythicbotany:nidavellir_rune',
    O: 'projecte:dark_matter_block'
  }).id('kubejs:allthetweaks/atm_star')
  //#endregion
  //#endregion
  
  e.recipes.create.mechanical_crafting('allthetweaks:atm_star',[
    '    S    ',
    '   SSS   ',
    'SSSSSSSSS',
    'SSSSSSSSS',
    ' SSSPSSS ',
    '  SSSSS  ',
    ' SSSSSSS ',
    'SSSS SSSS',
    'SSS   SSS'
  ], {
    S: 'allthetweaks:atm_star_shard',
    P: 'allthetweaks:patrick_star',
  }).id('kubejs:allthetweaks/atm_shard_star')
})
