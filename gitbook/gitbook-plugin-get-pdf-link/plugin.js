require(["gitbook", "jQuery"], function (gitbook, $) {
  gitbook.events.bind('start', function (e, config) {
    var conf = config['get-pdf-link'];
    var label = conf.label
    var base = conf.base

    gitbook.toolbar.createButton({
      icon: 'fa fa-pdf',
      text: label,
      onClick: function () {
        window.open(base)
      }
    })
  })
})