onEvent('recipes', event => {
    let rawOverride = {
        iron: 'minecraft',
        gold: 'minecraft',
        copper: 'minecraft',
        allthemodium: 'allthemodium',
        vibranium: 'allthemodium',
        unobtainium: 'allthemodium',
        cobalt: 'tconstruct'
    }
    atoMetals.concat(atmMetals, vanillaMetals, 'iridium', 'cobalt').forEach(metal => {
        event.custom({
            'type': 'exmachinis:compacting',
            'input': {
                'ingredient': {
                    'tag': `forge:raw_materials/${metal}`
                },
                'count': 9
            },
            'output': { 'item': `${rawOverride[metal] ?? 'alltheores'}:raw_${metal}_block` }
        }).id(`kubejs:exmachinis/compacting/storage/raw_${metal}`)
    })
})