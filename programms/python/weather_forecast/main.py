# -*- coding: utf-8 -*-
# прогноз погоды 
# version 1.0

# библиотека для работы с web
import eel
# для отображения погоды
from pyowm import OWM

# ключ ip
owm = OWM("7e57b58a7ac6c51a839143d4b43652d0")

@eel.expose
def get_weather(place):

    # город по умолчанию
    mgr = owm.weather_manager()
    observation = mgr.weather_at_place(place)
    w = observation.weather
    temp = w.temperature('celsius')['temp']

    return "В городе " + place + " сейчас " + str(temp) + " градусов!"

# указываем адрес для подключения к html
eel.init("web")

# подключение к файлу
eel.start("main.html", size=(700, 700))