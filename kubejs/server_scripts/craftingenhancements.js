onEvent('tags.items', event => {
  event.remove('minecraft:logs_that_burn', ['#botania:livingwood_logs', '#botania:dreamwood_logs'])
})

onEvent('recipes', e => {
  e.shaped('4x minecraft:chest',
    ['LLL', 'L L', 'LLL'],
    { 'L': '#minecraft:logs' }
  ).id(`kubejs:minecraft/chests_from_logs`)

  e.shaped('16x minecraft:stick',
    ['L', 'L'],
    { 'L': '#minecraft:logs' }
  ).id(`kubejs:minecraft/sticks_from_logs`)

  e.shapeless('4x minecraft:clay_ball', 'minecraft:clay').id(`kubejs:minecraft/clay_from_clay_block`)

  e.forEachRecipe({type:'minecraft:crafting_shaped',output:'#minecraft:slabs'}, recipe => {
    let slab = recipe.outputItems[0]
    let block = recipe.inputItems[0]
    if (e.countRecipes({output:block,input:slab}) == 0) {
      e.shaped(block.withCount(1), ['S','S'], {S: slab.withCount(1)}).id(`kubejs:block_from_slab/${block.getMod()}/${block.getItem()}`)
    }
  })
})