/**
 * Copyright (C) 2016 yanni4night.com
 * plugin.js
 *
 * changelog
 * 2016-06-04[13:28:52]:revised
 *
 * @author yanni4night@gmail.com
 * @version 1.0.0
 * @since 1.0.0
 */
require(["gitbook", "jquery"], function (gitbook, $) {
    gitbook.events.bind("page.change", function () {
        $('code.lang-flow').each(function (index, element) {
            var $element = $(element),
                code = $element.text(),
                chart;

            var wrapper = $("<div id='canvas" + index + "'></div>");
            $element.parent().replaceWith(wrapper);

            chart = flowchart.parse(code);
            chart.drawSVG('canvas' + index)
        });
    });
});