   var lastWidget;
   var largeHeightByY = {};

    var widgets = [{
        x: 0,
        y: 0,
        h: 3,
        w: 4
    }]

    _.forEach(widgets, function (widget) {
        if (widget.y > lastWidget.y) {
            lastWidget = widget;
        } else if (widget.y === lastWidget.y && widget.x > widget.x) {
            lastWidget = widget;
        }

        largeHeightByY[widget.y] = largeHeightByY[widget.y] || widget.height;
        if (widget.height > largeHeightByY[widget.y]) {
            largeHeightByY[widget.y] = widget.height;
        }
    });

    let x, y;

    if (lastWidget.x + lastWidget.width <= 9) {
        x = lastWidget.x + lastWidget.width;
        y = lastWidget.y;
    } else {
        y = lastWidget.y + largeHeightByY[lastWidget.y];
        x = 0;
    }