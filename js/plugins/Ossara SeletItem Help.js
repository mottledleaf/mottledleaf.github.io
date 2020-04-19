/*:
 * @plugindesc 0.3 Display help text for select items.
*/

var Ossra = Ossra || {};

Ossra.Window_EventItem_updatePlacement = Window_EventItem.prototype.updatePlacement;

Window_EventItem.prototype.updatePlacement = function() {
    Ossra.Window_EventItem_updatePlacement.call(this);

    if (this._helpWindow) {
      this._helpWindow.y = this.y;
      this.y = this._helpWindow.y + this._helpWindow.height;
      this._helpWindow.width = 400;
    }
};

Window_EventItem.prototype.setHelpWindow = function(helpWindow) {
    Window_ItemList.prototype.setHelpWindow.call(this, helpWindow);
    if (this._helpWindow) {
      this._helpWindow.hide();
      this._helpWindow.close();
    }
};

Window_EventItem.prototype.open = function() {
    Window_ItemList.prototype.open.call(this);
    if (this._helpWindow) {
      this._helpWindow.show();
      this._helpWindow.open();
    }
};

Window_EventItem.prototype.close = function() {
    Window_ItemList.prototype.close.call(this);
    if (this._helpWindow) {
      this._helpWindow.hide();
      this._helpWindow.close();
    }
};

Ossra.Window_Message_subWindows = Window_Message.prototype.subWindows;

Window_Message.prototype.subWindows = function() {
  var tmpWindows = Ossra.Window_Message_subWindows.call(this);
  tmpWindows.push(this._helpWindow)
  return tmpWindows;
};

Ossra.Window_Message_createSubWindows = Window_Message.prototype.createSubWindows;

Window_Message.prototype.createSubWindows = function() {
    Ossra.Window_Message_createSubWindows.call(this);

    this._helpWindow = new Window_Help();
    this._itemWindow.setHelpWindow(this._helpWindow);
};