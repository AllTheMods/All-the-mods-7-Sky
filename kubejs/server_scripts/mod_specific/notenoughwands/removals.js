onEvent('recipes',event => {
    event.remove({id:'notenoughwands:protection_wand'}),
    event.remove({id:'notenoughwands:moving_wand'}),
    event.remove({id:'notenoughwands:swapping_wand'}),
    event.remove({id:'notenoughwands:displacement_wand'})
})