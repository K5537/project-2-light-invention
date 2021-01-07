while True:
    print(input.light_level())
    if input.light_level() < 6:  
        light.set_all(light.rgb(255, 0, 0))
        pause(500)
        light.clear()
        pause(500)
    elif input.light_level() < 10:
        light.set_all(light.rgb(0, 0, 90))
    else:
        light.clear()