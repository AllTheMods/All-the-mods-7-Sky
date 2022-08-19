onEvent('recipes', e => {
  let shard = ('allthetweaks:atm_star_shard')


//#Thermal
  e.shaped('thermal:machine_efficiency_creative_augment', ['ABA', 'CDC', 'AEA'], {
    A: 'thermal:upgrade_augment_3',
    B: 'powah:charged_snowball',
    C: 'thermal:energy_cell',
    D: shard,
    E: 'thermal:lightning_charge'
  })
//#waterstrainer
  e.shaped('waterstrainer:super_worm', ['DSD', 'DWD', 'DDD'], {
    D: '#forge:dirt',
    S: shard,
    W: 'waterstrainer:worm'
  }).id('kubejs:waterstrainer/super_worm')

})
