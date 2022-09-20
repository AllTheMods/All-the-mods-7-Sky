onEvent('jei.hide.items', e => {
  //#region consts
  let typeFirst = ['mekanism', 'immersiveengineering']

  //#endregion
  //#region functions
  function hideMetal(mod, name, types) {
    types.forEach(type => {
      let id = typeFirst.includes(mod) ? `${mod}:${type}_${name}` : `${mod}:${name}_${type}`
      if (!Ingredient.of(id).stacks.empty) e.hide(id)
    })
  }
  function hideStuff(mod, type, names) {
    names.forEach(name => {
      let id = typeFirst.includes(mod) ? `${mod}:${type}_${name}` : `${mod}:${name}_${type}`
      if (!Ingredient.of(id).stacks.empty) e.hide(id)
    })
  }
  //#endregion

  e.hide([
    /extrastorage:disk_.+/,
    /extrastorage:block_.+/,
    /extrastorage:storagepart_.+/,
	  'beyond_earth:iron_plate',
    'occultism:silver_ore',
    'occultism:silver_ore_deepslate',
    'immersiveengineering:stick_iron',
    'immersiveengineering:stick_steel',
    'immersiveengineering:stick_aluminum',
    'ftbic:silicon',
    'twilightforest:uncrafting_table',
    'projecte:collector_mk1',
    'projecte:collector_mk2',
    'projecte:collector_mk3',
    'projecte:watch_of_flowing_time',
    'notenoughwands:protection_wand',
    'notenoughwands:moving_wand',
    'notenoughwands:swapping_wand',
    'notenoughwands:displacement_wand',
    'reliquary:rod_of_lyssa',
    'apotheosis:iron_mining_arrow',
    'apotheosis:diamond_mining_arrow',
    'apotheosis:explosive_arrow',
    'industrialforegoing:iron_gear',
    'industrialforegoing:gold_gear',
    'industrialforegoing:diamond_gear',
    'thermal:raw_tin',
    'thermal:raw_lead',
    'thermal:raw_silver',
    'thermal:raw_nickel',
    'kubejs:dust_cobalt',
  ])

  ftbicMetals.forEach(metal => {
    hideMetal('ftbic', metal, ['ore', 'ingot', 'dust', 'nugget', 'block', 'gear', 'plate', 'rod'])
    e.hide(`ftbic:deepslate_${metal}_ore`);
    e.hide(`ftbic:${metal}_chunk`);
  });
  ftbicAlloys.forEach(metal => hideMetal('ftbic', metal, ['ingot', 'dust', 'nugget', 'block', 'gear', 'plate', 'rod']));
  vanillaMetals.forEach(metal => hideMetal('ftbic', metal, ['dust', 'gear', 'plate', 'rod']));
  hideMetal('ftbic', 'copper', ['nugget']);

  sequentiaMetals.forEach(metal => {
    e.hide(`exnihilosequentia:${metal}_ingot`);
    e.hide(`exnihilosequentia:raw_${metal}`);
  });

  //#region hideMetal
  hideMetal('immersiveengineering', 'copper', ['ingot', 'ore', 'dust', 'nugget', 'storage', 'slab_storage'])
  hideMetal('immersiveengineering', 'silver', ['ingot', 'ore', 'dust', 'nugget', 'storage', 'slab_storage'])
  hideMetal('immersiveengineering', 'aluminum', ['ingot', 'ore', 'dust', 'nugget', 'storage', 'slab_storage'])
  hideMetal('immersiveengineering', 'uranium', ['ingot', 'ore', 'dust', 'nugget', 'storage', 'slab_storage'])
  hideMetal('immersiveengineering', 'lead', ['ingot', 'ore', 'dust', 'nugget', 'storage', 'slab_storage'])
  hideMetal('immersiveengineering', 'nickel', ['ingot', 'ore', 'dust', 'nugget', 'storage', 'slab_storage'])
  hideMetal('immersiveengineering', 'steel', ['ingot', 'dust', 'nugget', 'storage', 'slab_storage'])
  hideMetal('immersiveengineering', 'electrum', ['ingot', 'dust', 'nugget', 'storage', 'slab_storage'])
  hideMetal('immersiveengineering', 'constantan', ['ingot', 'dust', 'nugget', 'storage', 'slab_storage'])
  hideMetal('mekanism', 'copper', ['ingot', 'dust', 'nugget', 'block'])
  hideMetal('mekanism', 'tin', ['ingot', 'dust', 'nugget', 'block'])
  hideMetal('mekanism', 'uranium', ['ingot', 'dust', 'nugget', 'block'])
  hideMetal('mekanism', 'lead', ['ingot', 'dust', 'nugget', 'block'])
  hideMetal('mekanism', 'osmium', ['ingot', 'dust', 'nugget', 'block'])
  hideMetal('mekanism', 'bronze', ['ingot', 'dust', 'nugget', 'block'])
  hideMetal('create', 'copper', ['ingot', 'ore', 'nugget', 'block'])
  hideMetal('create', 'zinc', ['ingot', 'ore', 'nugget', 'block'])
  hideMetal('thermal', 'copper', ['dust', 'nugget', 'block', 'plate', 'gear'])
  hideMetal('thermal', 'tin', ['ingot', 'ore', 'dust', 'nugget', 'block', 'plate', 'gear'])
  hideMetal('thermal', 'lead', ['ingot', 'ore', 'dust', 'nugget', 'block', 'plate', 'gear'])
  hideMetal('thermal', 'silver', ['ingot', 'ore', 'dust', 'nugget', 'block', 'plate', 'gear'])
  hideMetal('thermal', 'nickel', ['ingot', 'ore', 'dust', 'nugget', 'block', 'plate', 'gear'])
  hideMetal('thermal', 'signalum', ['ingot', 'ore', 'dust', 'nugget', 'block', 'plate', 'gear'])
  hideMetal('thermal', 'enderium', ['ingot', 'ore', 'dust', 'nugget', 'block', 'plate', 'gear'])
  hideMetal('thermal', 'electrum', ['ingot', 'ore', 'dust', 'nugget', 'block', 'plate', 'gear'])
  hideMetal('thermal', 'constantan', ['ingot', 'ore', 'dust', 'nugget', 'block', 'plate', 'gear'])
  hideMetal('thermal', 'bronze', ['ingot', 'ore', 'dust', 'nugget', 'block', 'plate', 'gear'])
  hideMetal('thermal', 'lumium', ['ingot', 'ore', 'dust', 'nugget', 'block', 'plate', 'gear'])
  hideMetal('thermal', 'invar', ['ingot', 'ore', 'dust', 'nugget', 'block', 'plate', 'gear'])
  //#endregion
  //#region hideStuff
  hideStuff('thermal', 'dust', ['iron', 'gold'])
  hideStuff('thermal', 'gear', ['iron', 'gold'])
  hideStuff('thermal', 'plate', ['iron', 'gold'])
  hideStuff('immersiveengineering', 'dust', ['iron', 'gold', 'sulfur', 'wood'])
  hideStuff('immersiveengineering', 'plate', ['iron', 'gold', 'copper', 'lead', 'silver', 'nickel', 'constantan', 'electrum', 'steel', 'uranium', 'aluminum'])
  hideStuff('mekanism', 'dust', ['lapis_lazuli', 'emerald', 'diamond', 'quartz', 'iron', 'gold'])
  hideStuff('alltheores', 'crystal', ['osmium', 'copper', 'tin', 'lead', 'uranium'])
  hideStuff('alltheores', 'shard', ['osmium', 'copper', 'tin', 'lead', 'uranium'])
  hideStuff('alltheores', 'dirty_dust', ['osmium', 'copper', 'tin', 'lead', 'uranium'])
  hideStuff('alltheores', 'clump', ['osmium', 'copper', 'tin', 'lead', 'uranium'])
  hideStuff('appliedenergistics2', 'dust', ['nether_quartz', 'ender', 'iron', 'gold'])
  hideStuff('create', 'sheet', ['iron', 'golden', 'copper', 'brass'])
  hideStuff('iceandfire', 'ore', ['silver', 'copper'])
  hideStuff('tmechworks', 'ore', ['aluminum', 'copper'])
  hideStuff('solarflux', 'sp', [6, 7, 8])
  hideStuff('quark', 'crate', ['apple', 'carrot', 'beetroot', 'potato'])
  hideStuff('quark', 'block', ['bamboo', 'charcoal', 'sugar_cane'])
  hideStuff('mysticalagriculture', 'seeds', maDisabledSeeds)
  hideStuff('mysticalagriculture', 'essence', maDisabledSeeds)
  //#endregion
})


onEvent('jei.remove.categories', event => {
  //removes the uncrafting tab
  event.remove('twilightforest:uncrafting')
})