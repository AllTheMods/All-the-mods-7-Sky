const WorldTransmutation = java('moze_intel.projecte.utils.WorldTransmutations')

onEvent('recipes', e => {
    WorldTransmutation.resetWorldTransmutations()
    // WorldTransmutation.register(BlockState original, BlockState result, (@Nullable) BlockState sneakResult)

    function PhiloList(idList) {
        for (let i = 0; i < idList.length; i++) {
            let forward = (i + 1) >= idList.length ? 0 : (i + 1)
            let backward = (i - 1) < 0 ? idList.length - 1 : (i - 1)
            WorldTransmutation.register(
                Block.id(idList[i]).getBlockState(),
                Block.id(idList[forward]).getBlockState(),
                Block.id(idList[backward]).getBlockState()
            )
        }
    }
    let ars = [
        'ars_nouveau:blue_archwood_sapling',
        'ars_nouveau:purple_archwood_sapling',
        'ars_nouveau:green_archwood_sapling',
        'ars_nouveau:red_archwood_sapling'
    ]
    PhiloList(ars)
    let smallflowers = [
        'minecraft:dandelion',
        'minecraft:poppy',
        'minecraft:blue_orchid',
        'minecraft:allium',
        'minecraft:azure_bluet',
        'minecraft:red_tulip',
        'minecraft:orange_tulip',
        'minecraft:white_tulip',
        'minecraft:pink_tulip',
        'minecraft:oxeye_daisy',
        'minecraft:cornflower',
        'minecraft:lily_of_the_valley',
        'forbidden_arcanus:yellow_orchid'
    ]
    PhiloList(smallflowers)
})
