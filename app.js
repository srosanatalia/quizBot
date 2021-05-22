'use strict'

require('dotenv').config();
var express = require('express');

var app = express();
app.listen(process.env.PORT || 5000);

const Telegram = require('telegram-node-bot')
const TelegramBaseController = Telegram.TelegramBaseController
const TextCommand = Telegram.TextCommand

const chatbot = new Telegram.Telegram(process.env.TOKEN)

class EventsController extends TelegramBaseController {
    acaoMiar(scope) {

        let lista = ['Não', '...', 'Miau miaaaaaaau, ox', 'Não quero', 'Me dê um bom motivo.']
        let sentenca = lista[Math.floor(Math.random() * lista.length)]

        scope.sendMessage(sentenca)
    }

    acaoComida(scope) {

        let lista = ['Quero!']
        let sentenca = lista[Math.floor(Math.random() * lista.length)]

        scope.sendMessage(sentenca)
    }

    acaoPasseio(scope) {

        let lista = ['Oba, vamos!', 'Já estou na porta, humano. Abra!']
        let sentenca = lista[Math.floor(Math.random() * lista.length)]

        scope.sendMessage(sentenca)
    }

    acaoMimi(scope) {

        let lista = ['Não quero']
        let sentenca = lista[Math.floor(Math.random() * lista.length)]

        scope.sendMessage(sentenca)
    }

    get routes() {
        return {
            'miar': 'acaoMiar',
            'comida': 'acaoComida',
            'passeio': 'acaoPasseio',
            'mimi': 'acaoMimi',
        }
    }
}

chatbot.router.when(new TextCommand('/miar', 'miar'), new EventsController())
chatbot.router.when(new TextCommand('/comida', 'comida'), new EventsController())
chatbot.router.when(new TextCommand('/passeio', 'passeio'), new EventsController())
chatbot.router.when(new TextCommand('/mimi', 'mimi'), new EventsController())