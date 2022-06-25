onEvent('recipes', e => {

  e.shaped('4x minecraft:chest', ['LLL', 'L L', 'LLL'],
   { 'L': '#minecraft:logs' }).id(`kubejs:minecraft/chests_from_logs`)

  e.shaped('16x minecraft:stick', ['L', 'L'],
   { 'L': '#minecraft:logs' }).id(`kubejs:minecraft/sticks_from_logs`)

  e.shapeless('4x minecraft:clay_ball',
   'minecraft:clay').id(`kubejs:minecraft/clay_from_clay_block`)

 })