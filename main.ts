while (true) {
    console.log(input.lightLevel())
    if (input.lightLevel() < 6) {
        light.setAll(light.rgb(255, 0, 0))
        pause(500)
        light.clear()
        pause(500)
    } else if (input.lightLevel() < 10) {
        light.setAll(light.rgb(0, 0, 90))
    } else {
        light.clear()
    }
    
}
