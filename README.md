# Ark Config Generator

This project aims to offer an easy solution to creating and updating the Ark:Survival Evolved server config files.

### Get Default Settings
In order to get the default settings you can use `getDefaultGameUserSettings` for the Game User Settings and `getDefaultGameSettings` for the Game Settings.

By default, those settings will be returned as text (as they are used by Ark) but you have the possibility to get them as JSON.

In order to do so, send `'JSON'` as the first parameter.

```
getDefaultGameUserSettings()    // Will get the default Game User Settings
getDefaultGameSettings()    // Will get the default Game Settings
getDefaultGameUserSettings('JSON')    // Will get the default Game User Settings as JSON
getDefaultGameSettings('JSON')     // Will get the default Game Settings as JSON
```

### Convert settings
You can also use the library to convert your own settings from JSON to Text or the other way around.
```
convertSettingsToJson(settings)    // Will convert from Text to JSON
convertSettingsToText(settings)    // Will convert from JSON to Text
```