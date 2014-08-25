## js Directory Architecture

Then new sections are as follows:

- Data: All data will be created here and attached to the App with a register method

        App.execute('registerDataType', function() {
            return {
                name: 'MyDataType'
                dataType: MyDataType // MyDataType can be a model or collection
            };
        });

- Plugins: All modules that do not need a screen and are not data modules will live here. (Think formatters, statistics gathering modules, etc...)

        App.exectue('registerPlugin', function() {
            return {
                name: 'MyPlugin'
                plugin: MyPlugin // Should be a static class (object literal), or constructor
            };
        });

- Screens: Any plugin that needs its own page in the admin is a screen and must be registered like data modules

        App.execute('registerScreen', function() {
            return {
                name: 'MyScreen'
                plugin: MyScreen, // it must return the top level view to be dumped in to the screen section of the admin
                screenKey: 'myscreen',
                controller: {
                    'path/to/:add': function(add) {
                        // the function to execute
                        // controller path will evaluate to {screenKey}/path/to/:add
                    }
                }
            };
        });

        **Important to note: we will need our own url parser that sits on top of backbone.history so we can load the screen and then send the rest of the url, may face issues here**

- Widgets: Any type of UI that is not a screen and MEANT TO BE USED IN MORE THAN ONE PLACE is a widget, this does not mean if your screen module has a childview that is only used in the screen it goes here, that would belong in the screen folder for your screen, however, a search widget that can be used anywhere would be a widget

        App.execute('registerWidget', function() {
            return {
                name: 'MyWidget',
                widget: MyWidget // the top level view of the widget
            };
        });
