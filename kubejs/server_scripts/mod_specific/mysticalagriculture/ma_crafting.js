onEvent('recipes', e => {
  maDisabledSeeds.forEach(name => {
    ['seeds', 'essence'].forEach(type => {
      e.remove({ output: `mysticalagriculture:${name}_${type}` , id: '/mysticalagriculture/'})
      e.remove({ input: `mysticalagriculture:${name}_${type}` , id: '/mysticalagriculture/'})
    });
  });

  maInfusion(e,'kubejs:magical_soil', 'botania:overgrowth_seed', 'botania:gaia_ingot', 'mysticalagradditions:insanium_block', 'botania:gaia_ingot', 'mysticalagradditions:insanium_block', 'botania:gaia_ingot', 'mysticalagradditions:insanium_block', 'botania:gaia_ingot', 'mysticalagradditions:insanium_block')
})
