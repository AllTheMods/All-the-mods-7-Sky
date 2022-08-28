// temp fix for compacting drawers
onEvent('recipes', event=> {
    event.remove({id:'functionalstorage:compacting_framed_drawer'})
    event.shaped('functionalstorage:compacting_framed_drawer', [
        'SSS',
        'PDP',
        'NIN'
    ],{
        S:'minecraft:stone',
        P:'minecraft:piston',
        D:[
            'functionalstorage:framed_1',
            'functionalstorage:framed_2',
            'functionalstorage:framed_4'
        ],
        N:'#forge:nuggets/iron',
        I:'#forge:ingots/iron'
    }).id('kubejs:compacting_framed_drawer')
})