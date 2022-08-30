onEvent('recipes', e => {
    e.remove({ id: 'aeinfinitybooster:infinity_card' })
    e.shaped('aeinfinitybooster:infinity_card', ['EBE', 'BUB', 'NNN'], {
        U: '#forge:ingots/unobtainium',
        B: 'ae2:wireless_booster',
        E: 'alltheores:enderium_plate',
        N: 'minecraft:netherite_ingot'
    })

    e.recipes.mekanismCrushing('thermal:quartz_dust', 'minecraft:quartz')
    e.recipes.immersiveengineeringCrusher('thermal:quartz_dust', 'minecraft:quartz')
    e.recipes.createCrushing('thermal:quartz_dust', 'minecraft:quartz')
    e.recipes.ftbic.macerating('thermal:quartz_dust', 'minecraft:quartz')
    e.smelting('ae2:silicon', '#forge:dusts/quartz').xp(0.35)
    e.blasting('ae2:silicon', '#forge:dusts/quartz').xp(0.35)
    e.remove({id:'mekanism:processing/quartz/to_dust'})
})
