# -*- coding: utf-8 -*-
# прогноз погоды 
# version 1.0
# для отображения погоды
from pyowm import OWM


# ключ ip
owm = OWM("7e57b58a7ac6c51a839143d4b43652d0")

city = "Шелехов, Иркутская область"
mgr = owm.weather_manager()
observation = mgr.weather_at_place(city)
w = observation.weather
temp = w.temperature('celsius')['temp']

print(w)
print("В городе " +city+ " сейчас " +str(temp)+ " градусов")

#input("\nEnter")