const ParsinService = require('../services/parsing.service');

module.exports = class {
    static convertSettingsToJSON(settings) {
        return ParsinService.parseSettingsToJSON(settings);
    }

    static convertSettingsToText(settings) {
        return ParsinService.parseSettingsToText(settings);
    }
}