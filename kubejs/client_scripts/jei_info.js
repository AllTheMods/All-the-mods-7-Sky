onEvent('jei.information', event => {
    event.add('occultism:iesnium_ore',['Throwing Netherrack Block 1x in §5Spiritfire§r will turn it into Netherrack with Iesnium in it'])
    event.add('productivebees:sand_nest', 'In this Skyblock, this nest will attract bees in any overworld biome.')
    event.add('productivebees:snow_nest', 'In this Skyblock, this nest will attract bees in any overworld biome.')
    event.add('productivebees:gravel_nest', 'In this Skyblock, this nest will attract bees in any overworld biome.')
    event.add('productivebees:slimy_nest', 'In this Skyblock, this nest will attract bees in any overworld biome.')
    
    event.add('mekanism:creative_energy_cube',[
        'Needs to be energized in a Powah energizing rod with a ATM star.',
        'Otherwise acts as an expensive energy trash can.',
    ])
      
    event.add('pylons:infusion_pylon',[ 
        'Chunkloads a single chunk. Only one pylon per player will load at a time, and only while the player is online.',
    ])
    
})
