class ParsingService {
    static parseSettingsToText(categories) {
        let settings = '';
        Object.keys(categories).map(categoryName => {
            if (categoryName !== 'custom') {
                const category = ParsingService.getCategoryFromJSON(categoryName, categories[categoryName]);
                settings += category + '\r\n';
            }
        });
        return settings;
    }

    static parseSettingsToJSON(settings) {
        const convertedSettings = {};
        const categories = settings.split('\r\n\r\n');
        categories.map(category => {
            let categoryName = '';
            let categorySettings = {};
            const settings = category.split('\r\n');
            settings.map(setting => {
                if (setting[0] === '[') {
                    categoryName = setting.substring(1, setting.length-1);
                } else {
                    const keyAndValue = setting.split('=');
                    categorySettings[keyAndValue[0]] = ParsingService.convertValueToJSON(keyAndValue[1]);
                }
            });
            convertedSettings[categoryName] = categorySettings;
        });
        return convertedSettings;
    }

    static getCategoryFromJSON(categoryName, settings) {
        let parsedCategory = `[${categoryName}]\n`;
        Object.keys(settings).map(settingName => {
            const settingValue = ParsingService.convertValueFromJSON(settings[settingName]);
            parsedCategory += `${settingName}=${settingValue}\n`;
        });
        return parsedCategory;
    }

    static convertValueFromJSON(value) {
        switch(value) {
            case true:
                return 'True';
                break;
            case false:
                return 'False';
                break;
            default:
                return value;
                break;
        }
    }

    static convertSettingToJSON(setting) {
        const keyAndValue = setting.split('=');
        const key = keyAndValue[0];
        const value = ParsingService.convertValueToJSON(keyAndValue[1]);

        return { key, value };
    }

    static convertValueToJSON(value) {
        switch(value) {
            case 'True':
                return true;
                break;
            case 'False':
                return false;
                break;
            default:
                return value;
                break;
        }
    }
}

module.exports = ParsingService;