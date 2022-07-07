onEvent('recipes', event => {
    event.custom({
        "type": "exmachinis:compacting",
        "input": {
            "ingredient": {
                "item": `kubejs:cobalt_pieces`
            },
            "count": 4
        },
        "output": { "item": "tconstruct:raw_cobalt" }
    }).id(`kubejs:exmachinis/compacting/cobalt`)
})