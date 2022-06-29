onEvent('recipes', e => {

  e.remove({id: 'ftbic:shaped/roller'})
  e.shaped('ftbic:roller', ['GcG', 'PMP'], {
    P: 'minecraft:piston',
    M: 'ftbic:machine_block',
    C: 'ftbic:electronic_circuit',
    G: '#forge:gears/aluminum'
})
})
