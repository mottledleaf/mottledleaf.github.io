 /*:
 * @plugindesc Resize Select Item window
 * 
 */
Window_EventItem.prototype.initialize = function (messageWindow) {
    this._messageWindow = messageWindow;
    var ww = this.windowWidth();
    var wh = this.windowHeight();
    Window_ItemList.prototype.initialize.call(this, 0, 0, ww, wh);
    this.y = 0;
    this.openness = 0;
    this.deactivate();
    this.setHandler('ok', this.onOk.bind(this));
    this.setHandler('cancel', this.onCancel.bind(this));
};

Window_EventItem.prototype.windowWidth = function () {
    return Graphics.boxWidth / 2 - 10 + 100;
};

Window_EventItem.prototype.windowHeight = function () {
    return this.fittingHeight(this.numVisibleRows());
};

Window_EventItem.prototype.numVisibleRows = function () {
    return 7;
};

Window_EventItem.prototype.maxCols = function () {
    return 1;
};

Window_EventItem.prototype.updatePlacement = function() {
    this.x = 1;
    this.y = 100;
};