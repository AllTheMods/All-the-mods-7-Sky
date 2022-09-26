function SoulTransmutation() {
    this.inputentity = 'spirit:soul'
    this.outputentity = ''
    this.consumed = false
    this.duration = 60
    this.mob = false
    this.inputItems = []
}
SoulTransmutation.prototype = {
    isConsumed: function () {
        this.consumed = true
        return this
    },
    setActivator: function (itemString) {
        this.activator = Ingredient.of(itemString).toJson()
        return this
    },
    spawnMob: function () {
        this.mob = true
        return this
    },
    setInputEntity: function (entityInputString) {
        this.inputentity = entityInputString
        return this
    },
    setOutputEntity: function (entityString) {
        this.outputentity = entityString
        return this
    },
    setDuration: function (ticks) {
        this.duration = ticks
        return this
    },
    setMobNbt: function (compoundTagString) {
        this.mobNbt = compoundTagString
        return this
    },
    setItemInputs: function (itemList) {
        this.inputItems = itemList
        return this
    },
    addItemInput: function (itemString) {
        this.inputItems.push(Ingredient.of(itemString).toJson())
        return this
    },
    build: function () {
        let recipe = {
            type: 'spirit:soul_transmutation',
            entityInput: this.inputentity,
            consumesActivator: this.consumed,
            itemInputs: this.inputItems,
            entityOutput: this.outputentity,
            duration: this.duration,
            shouldSummonMob: this.mob,
        }
        if (this.mobNbt !== undefined) {
            recipe.outputNbt = this.mobNbt
        }
        if (this.activator !== undefined) {
            recipe.activatorItem = this.activator
        }
        return recipe
    }
}

onEvent('recipes', event => {
    event.custom(
        new SoulTransmutation()
            .setInputEntity('minecraft:guardian')
            .addItemInput('minecraft:sea_lantern')
            .addItemInput('minecraft:prismarine_crystals')
            .addItemInput('minecraft:cod')
            .addItemInput('minecraft:prismarine_shard')
            .addItemInput('minecraft:sea_lantern')
            .addItemInput('minecraft:prismarine_crystals')
            .addItemInput('minecraft:cod')
            .addItemInput('minecraft:prismarine_shard')
            .setOutputEntity('minecraft:elder_guardian')
            .spawnMob()
            .build()
    ).id('kubejs:spirit/elder_guardian')

    event.custom(
        new SoulTransmutation()
            .setActivator('minecraft:water_bucket')
            .isConsumed()
            .addItemInput('minecraft:clay')
            .addItemInput('minecraft:moss_block')
            .addItemInput('minecraft:tropical_fish')
            .addItemInput('minecraft:azalea')
            .addItemInput('minecraft:clay')
            .addItemInput('minecraft:moss_block')
            .addItemInput('minecraft:tropical_fish')
            .addItemInput('minecraft:azalea')
            .setOutputEntity('minecraft:axolotl')
            .spawnMob()
            .build()
    ).id('kubejs:spirit/axolotl')

    event.custom(
        new SoulTransmutation()
            .setInputEntity('minecraft:blaze')
            .addItemInput('minecraft:lightning_rod')
            .addItemInput('#forge:dusts/niter')
            .addItemInput('minecraft:sand')
            .addItemInput('#forge:dusts/niter')
            .addItemInput('minecraft:lightning_rod')
            .addItemInput('#forge:dusts/niter')
            .addItemInput('minecraft:sand')
            .addItemInput('#forge:dusts/niter')
            .setOutputEntity('thermal:blitz')
            .spawnMob()
            .build()
    ).id('kubejs:spirit/thermal/blitz')

    event.custom(
        new SoulTransmutation()
            .setInputEntity('minecraft:blaze')
            .addItemInput('minecraft:ice')
            .addItemInput('minecraft:snowball')
            .addItemInput('minecraft:snow_block')
            .addItemInput('minecraft:snowball')
            .addItemInput('minecraft:ice')
            .addItemInput('minecraft:snowball')
            .addItemInput('minecraft:snow_block')
            .addItemInput('minecraft:snowball')
            .setOutputEntity('thermal:blizz')
            .spawnMob()
            .build()
    ).id('kubejs:spirit/thermal/blizz')

    event.custom(
        new SoulTransmutation()
            .setInputEntity('minecraft:blaze')
            .addItemInput('minecraft:dirt')
            .addItemInput('#forge:dusts/obsidian')
            .addItemInput('minecraft:stone')
            .addItemInput('#forge:dusts/obsidian')
            .addItemInput('minecraft:dirt')
            .addItemInput('#forge:dusts/obsidian')
            .addItemInput('minecraft:stone')
            .addItemInput('#forge:dusts/obsidian')
            .setOutputEntity('thermal:basalz')
            .spawnMob()
            .build()
    ).id('kubejs:spirit/thermal/basalz')

    event.custom(
        new SoulTransmutation()
            .setActivator('minecraft:fishing_rod')
            .setInputEntity('minecraft:bee')
            .addItemInput('minecraft:pink_concrete')
            .addItemInput('minecraft:pink_concrete')
            .addItemInput('minecraft:lime_concrete')
            .addItemInput('minecraft:magenta_concrete')
            .addItemInput('exnihilosequentia:sea_water_bucket')
            .addItemInput('minecraft:magenta_concrete')
            .addItemInput('minecraft:lime_concrete')
            .addItemInput('minecraft:pink_concrete')
            .setOutputEntity('productivebees:configurable_bee')
            .setMobNbt({type:"productivebees:patrick"})
            .spawnMob()
            .build()
    ).id('kubejs:spirit/productivebees/patrick')

    event.custom(
        new SoulTransmutation()
            .setActivator('minecraft:fishing_rod')
            .setInputEntity('minecraft:bee')
            .addItemInput('minecraft:prismarine_shard')
            .addItemInput('minecraft:prismarine_crystals')
            .addItemInput('minecraft:prismarine_shard')
            .addItemInput('minecraft:prismarine_crystals')
            .addItemInput('exnihilosequentia:sea_water_bucket')
            .addItemInput('minecraft:prismarine_crystals')
            .addItemInput('minecraft:prismarine_shard')
            .addItemInput('minecraft:prismarine_crystals')
            .setOutputEntity('productivebees:configurable_bee')
            .setMobNbt({type:"productivebees:prismarine"})
            .spawnMob()
            .build()
    ).id('kubejs:spirit/productivebees/prismarine')

    event.custom(
        new SoulTransmutation()
            .setActivator('minecraft:fishing_rod')
            .setInputEntity('minecraft:bee')
            .addItemInput('minecraft:bone')
            .addItemInput('minecraft:stone')
            .addItemInput('minecraft:moss_block')
            .addItemInput('minecraft:stone')
            .addItemInput('exnihilosequentia:sea_water_bucket')
            .addItemInput('minecraft:stone')
            .addItemInput('minecraft:moss_block')
            .addItemInput('minecraft:stone')
            .setOutputEntity('productivebees:configurable_bee')
            .setMobNbt({type:"productivebees:oily"})
            .spawnMob()
            .build()
    ).id('kubejs:spirit/productivebees/oily')
})