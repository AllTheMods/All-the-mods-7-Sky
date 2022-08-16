onForgeEvent("net.minecraftforge.event.entity.EntityTravelToDimensionEvent", event => {
    if (event.entity.level.isClientSide()) { return }
    let dimension = event.dimension.location()
    if (dimension == "allthemodium:mining") {
        console.log("Cancelling Dimensional Travel to The Mining Dimension")
        event.setCancel()
    }
})
