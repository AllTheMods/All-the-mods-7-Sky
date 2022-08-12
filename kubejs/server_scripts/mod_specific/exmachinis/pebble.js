onEvent('recipes', event => {
    ['andesite', 'basalt', 'blackstone', 'diorite', 'granite', 'stone'].forEach(pebble => {
        let output = Item.of(`minecraft:${pebble}`)
        if (pebble == 'stone') {
            output = Item.of(`minecraft:cobblestone`)
        }
        event.custom({
            "type": "exmachinis:compacting",
            "input": {
                "ingredient": {
                    "item": `exnihilosequentia:${pebble}_pebble`
                },
                "count": 4
            },
            "output": output
        }).id(`kubejs:exmachinis/compacting/${pebble}`)
    })
})