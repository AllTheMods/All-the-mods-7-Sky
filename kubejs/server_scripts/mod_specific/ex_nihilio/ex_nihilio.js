// priority: 5
onEvent(`recipes`, e => {
  const exDust = `exnihilosequentia:dust`
  const exRack = `exnihilosequentia:crushed_netherrack`
  const exEnd = `exnihilosequentia:crushed_end_stone`
  
  const pieces = [
    `lead`,
    `nickel`,
    `silver`,
    `tin`,
    `aluminum`,
    `platinum`,
    `uranium`,
    `zinc`,
  ]

  function sieve(mesh, chance, input, result, wlog) {
    e.custom({
      type: `exnihilosequentia:sieve`,
      rolls: [{
        chance: chance,
        mesh: mesh
      }],
      input: Ingredient.of(input).toJson(),
      result: Item.of(result).toResultJson(),
      waterlogged: wlog
    })
  }

  function hammer(input, result) {
    e.custom({
      type: `exnihilosequentia:hammer`,
      input: Ingredient.of(input).toJson(),
      results: [Item.of(result).toResultJson()]
    })
  }

  function heat(block, heat) {
    e.custom({
      type: `exnihilosequentia:heat`,
      block: block,
      amount: heat
    })
  }

  function hhammer(input, output, count) {
    e.custom({
      type: `exnihilosequentia:hammer`,
      input: Ingredient.of(input).toJson(),
      results: [Item.of(output).withCount(count).toResultJson()]
    })
  }

  function crushEm(result, crush) {
    e.recipes.mekanism.crushing(Item.of(result), crush)
    e.recipes.thermal.pulverizer(Item.of(result), crush)
    e.recipes.immersiveengineering.crusher(Item.of(result), crush)
    e.recipes.create.milling(Item.of(result), Item.of(crush))
    e.custom({
      type: `integrateddynamics:squeezer`,
      item: Ingredient.of(crush).toJson(),
      result: {
        items: [Item.of(result).toResultJson()]
      }
    })
    e.custom({
      type: `integrateddynamics:mechanical_squeezer`,
      item: Ingredient.of(crush).toJson(),
      result: {
        items: [Item.of(result).toResultJson()]
      },
      duration: 40
    })
  }

  //Crucible heating blocks
  heat(`botania:blaze_block`, 8)
  heat(`alltheores:uranium_block`, 20)
  heat(`minecraft:magma_block`, 3)
  heat(`minecraft:fire`, 4)
  heat(`minecraft:lava`, 5)
  heat(`mekanism:superheating_element`, 60)

  //Params: Mesh, Drop chance, Input item, Output item, Waterlogged.
  //Overworld sieve
  sieve(`diamond`, 0.2, `minecraft:gravel`, `mysticalagriculture:prosperity_shard`, null)
  sieve(`diamond`, 0.1, `minecraft:gravel`, `ars_nouveau:mana_gem`, null)
  sieve(`iron`, 0.25, `#minecraft:sand`, `minecraft:ink_sac`, true)
  sieve(`iron`, 0.02, `minecraft:sand`, `mekanism:salt`, null)
  sieve(`flint`, 0.09, `minecraft:sand`, `mana-and-artifice:vinteum_dust`, null)
  sieve(`iron`, 0.1, `#forge:gravel`, `thermal:apatite`, null)
  sieve(`iron`, 0.1, `#forge:gravel`, `thermal:cinnabar`, null)
  sieve(`iron`, 0.1, `#forge:gravel`, `thermal:niter`, null)
  sieve(`iron`, 0.1, `#forge:gravel`, `thermal:sulfur`, null)
  sieve(`emerald`, 0.25, `#forge:gravel`, `forbidden_arcanus:arcane_crystal`, null)
  sieve(`emerald`, 0.05, `minecraft:dirt`, `integrateddynamics:menril_berries`, true)

  //Nether sieve
  sieve(`netherite`, 0.2, exRack, `appliedenergistics2:fluix_crystal_seed`, null)
  sieve(`netherite`, 0.3, exRack, `mysticalagriculture:inferium_essence`, null)
  sieve(`diamond`, 0.2, exRack, `minecraft:netherite_scrap`, null)
  sieve(`diamond`, 0.15, exRack, `create:rose_quartz`, null)
  sieve(`netherite`, 0.15, exRack, `ae2:certus_quartz_crystal`, null)
  sieve(`iron`, 0.2, exRack, `minecraft:quartz`, null)
  sieve(`iron`, 0.15, `#forge:soul_sand`, `mysticalagriculture:soulium_dust`, null)

  //End sieve
  sieve(`diamond`, 0.1, exEnd, `minecraft:chorus_flower`, null)

  //Hammer recipes
  hammer(`#minecraft:logs`, `thermal:sawdust`)

  //Heavy hammer
  hhammer(`allthecompressed:cobblestone_block_1x`, `minecraft:gravel`, 9)
  hhammer(`allthecompressed:gravel_block_1x`, `minecraft:sand`, 9)
  hhammer(`allthecompressed:sand_block_1x`, exDust, 9)
  hhammer(`allthecompressed:netherrack_block_1x`, exRack, 9)
  hhammer(`allthecompressed:endstone_block_1x`, exEnd, 9)

  crushEm(exDust, `#minecraft:sand`)
  crushEm(exRack, `#forge:netherrack`)
  crushEm(exEnd, `#forge:end_stones`)

  e.remove({id:`/exnihilosequentia:ens_raw/`})
  e.remove({id:`exnihilomekanism:ens_raw_osmium`})  

  e.shaped('minecraft:raw_iron', ['PP', 'PP'], {
    P: 'exnihilosequentia:iron_pieces',
})

  e.shaped('minecraft:raw_gold', ['PP', 'PP'], {
    P: 'exnihilosequentia:gold_pieces',
})

  e.shaped('minecraft:raw_copper', ['PP', 'PP'], {
    P: 'exnihilosequentia:copper_pieces',
})

  e.shaped('alltheores:raw_osmium', ['PP', 'PP'], {
    P: 'exnihilomekanism:osmium_pieces',
})
  
  pieces.forEach(name => {
    e.shaped(`alltheores:raw_${name}`, [
      `aa`,
      `aa`
    ], {
      a: `exnihilosequentia:${name}_pieces`
    })
  })
})

