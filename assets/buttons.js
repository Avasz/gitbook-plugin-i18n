require(['gitbook', 'jquery'], function(gitbook, $) {

    gitbook.events.bind('start', function(e, config) {
        var SITES = {
            'english': {
                'label': 'English',
                'icon': 'fa fa-globe',
                'onClick': function(e) {
                    e.preventDefault();
                    //window.open(config.i18n.EnglishUrl, '_self');
					window.location.href = window.location.href.replace('ne_NP', 'en_US');
                }
            },
            'nepali': {
                'label': 'नेपाली',
                'icon': 'fa fa-globe',
                'onClick': function(e) {
                    e.preventDefault();
                    //window.open(config.i18n.NepaliUrl, '_self');
					window.location.href = window.location.href.replace('en_US', 'ne_NP');
                }
            }
        };

        var opts = config.i18n;

        var menu = $.map(opts.all, function(id) {
            var site = SITES[id];

            return {
                text: site.label,
                onClick: site.onClick
            };
        });

        if (menu.length > 0) {
            gitbook.toolbar.createButton({
                icon: 'fa fa-globe',
                label: 'Share',
                position: 'left',
                dropdown: [menu]
            });
        }

    });
});
