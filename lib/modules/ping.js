function PingModule(settings) {
  this.settings = settings;
  this.routes = [
    [/ping/, this.onPing]
  ]
}

exports.Module = PingModule;

PingModule.prototype.onPing = function(from, command) {
  return from + ', ' + command;
}
