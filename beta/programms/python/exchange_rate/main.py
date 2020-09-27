# -*- coding: utf-8 -*-
# programma exchange rate (курс валюты)
# version 1.0

import requests
from bs4 import BeautifulSoup as Bs
import time
import smtplib


class Currency:
    DOLLAR_RUB = 'https://ru.investing.com/currencies/usd-rub'

    headers = {
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/84.0.4147.89 Safari/537.36'
    }

    current_converted_price = 0
    difference = 0.1

    def __init__(self):
        self.current_converted_price = float(
            self.get_currency_price().replace(",", "."))

    def get_currency_price(self):
        full_page = requests.get(self.DOLLAR_RUB, headers=self.headers)
        soup = Bs(full_page.content, 'html.parser')
        convert = soup.findAll("span", {"id": "last_last"})
        return convert[0].text

    def check_currency(self):
        currency = float(self.get_currency_price().replace(",", "."))
        if currency >= self.current_converted_price + self.difference:
            print("курс вырос")
            self.send_mail()
        elif currency <= self.current_converted_price - self.difference:
            print("курс упал")
            self.send_mail()
        print("1 доллар = " + str(currency))
        time.sleep(3)
        self.check_currency()

    def send_mail(self):
        server = smtplib.SMTP('smtp.gmail.com', 587)
        server.ehlo()
        server.starttls()
        server.ehlo()
        server.login('kotelnikovrm@gmail.com', 'Te/_f3.-+29/\C')

        subject = 'Курс доллара'
        body = 'Курс изменился!'
        message = f'Subject: {subject}\n\n{body}'

        server.sendmail(
            'kotelnikovrm@gmail.com',
            'kotelnikovrm@gmail.com',
            message
        )

        server.quit()


currency = Currency()
currency.check_currency()
