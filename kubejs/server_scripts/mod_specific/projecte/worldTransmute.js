const WorldTransmutation = java('moze_intel.projecte.utils.WorldTransmutations')

onEvent('recipes', e => {
    WorldTransmutation.resetWorldTransmutations()
    // WorldTransmutation.register(BlockState original, BlockState result, (@Nullable) BlockState sneakResult)
    let blue = Block.id("ars_nouveau:blue_archwood_sapling").getBlockState()
    let purple = Block.id("ars_nouveau:purple_archwood_sapling").getBlockState()
    let green = Block.id("ars_nouveau:green_archwood_sapling").getBlockState()
    let red = Block.id("ars_nouveau:red_archwood_sapling").getBlockState()
    WorldTransmutation.register(blue, purple, red)
    WorldTransmutation.register(purple, green, blue)
    WorldTransmutation.register(green, red, purple)
    WorldTransmutation.register(red, blue, green)
})