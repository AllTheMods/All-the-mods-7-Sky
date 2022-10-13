onEvent('recipes', e => {

  e.remove({id: 'projecte:collector_mk1'})
  e.remove({id: 'projecte:collector_mk2'})
  e.remove({id: 'projecte:collector_mk3'})
  e.remove({id: 'projecte:watch_of_flowing_time'})
  e.remove({id: 'projecte:conversions/gold_ingot_to_diamond'})
  e.remove({id: 'projecte:conversions/diamond_to_gold_ingot'})

  e.remove({id: 'projecte:philosophers_stone_alt'})
  e.remove({id: 'projecte:philosophers_stone'})
  e.shaped('projecte:philosophers_stone', ['GBG', 'BIB', 'GBG'], {
    I: '#forge:ingots/gold',
    G: '#forge:gunpowder',
    B: 'minecraft:blaze_powder'
  })

  e.remove({id: 'projecte:dark_matter'})
  e.shaped('projecte:dark_matter', ['AAA', 'AMA', 'AAA'], {
    A: 'projecte:aeternalis_fuel',
    M: '#forge:ingots/allthemodium'
  })

  e.remove({id: 'projecte:condenser_mk1'})
  e.shaped('projecte:condenser_mk1', ['MDM', 'DCD', 'DED'], {
    D: '#forge:gems/diamond',
    E: '#forge:storage_blocks/emerald',
    C: 'projecte:alchemical_chest',
    M: 'projecte:dark_matter'
  })

  e.remove({id: 'projecte:transmutation_table'})
  e.shaped('projecte:transmutation_table', ['DVD', 'VEV', 'DVD'], {
    D: 'projecte:dark_matter',
    V: '#forge:ingots/vibranium',
    E: '#forge:plates/enderium'
  })

  e.remove({id: 'projecte:red_matter'})
  e.remove({id: 'projecte:red_matter_alt'})
  e.shaped('projecte:red_matter', ['DUD', 'DUD', 'DUD'], {
    U: 'allthemodium:unobtainium_ingot',
    D: 'projecte:dark_matter'
  })

  e.remove({id: 'projecte:gem_leggings'})
  e.shapeless('projecte:gem_leggings', [
    'projecte:rm_leggings',
    'projecte:black_hole_band',
    'projecte:dark_matter_block',
    'projecte:klein_star_omega'
  ])
})