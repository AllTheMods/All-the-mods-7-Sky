onEvent('recipes', e => {
  e.remove({id: 'mysticalagriculture:infusion_altar'})
  e.shaped('mysticalagriculture:infusion_altar', ['GRG', 'DSD', 'SSS'], {
     S: '#forge:stone',
     D: 'projecte:dark_matter',
     G: '#forge:ingots/gold',
     R: 'minecraft:red_carpet'
 })

 })