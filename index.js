const SettingsController = require('./src/controllers/settings.controller');
const fs = require('fs');

class ArkConfigGenerator {
    constructor() {
        const defaultGameUserSettings = fs.readFileSync('./src/settings/GameUserSettings.ini', 'utf8');
        const defaultGameSettings = fs.readFileSync('./src/settings/Game.ini', 'utf8');

        this.gameUserSettings = {
            json: SettingsController.convertSettingsToJSON(defaultGameUserSettings),
            text: defaultGameUserSettings
        }

        this.gameSettings = {
            json: SettingsController.convertSettingsToJSON(defaultGameSettings),
            text: defaultGameSettings
        }
    }

    getDefaultGameUserSettings(type) {
        if (type === 'JSON') {
            return this.gameUserSettings.json;
        } else {
            return this.gameUserSettings.text;
        }
    }

    getDefaultGameSettings(type) {
        if (type === 'JSON') {
            return this.gameSettings.json;
        } else {
            return this.gameSettings.text;
        }
    }

    convertSettingsToJson(settings) {
        return SettingsController.convertSettingsToJSON(settings);
    }

    convertSettingsToText(settings) {
        return SettingsController.convertSettingsToText(settings);
    }
}

let instance;
function getInstance() {
    if (!instance) {
        instance = new ArkConfigGenerator();
    }
    return instance;
}
module.exports = getInstance();