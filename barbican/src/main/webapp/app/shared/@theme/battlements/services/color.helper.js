var BsColorHelper = /** @class */ (function () {
    function BsColorHelper() {
    }
    BsColorHelper.shade = function (color, weight) {
        return BsColorHelper.mix('#000000', color, weight);
    };
    BsColorHelper.tint = function (color, weight) {
        return BsColorHelper.mix('#ffffff', color, weight);
    };
    BsColorHelper.mix = function (color1, color2, weight) {
        var d2h = function (d) { return d.toString(16); };
        var h2d = function (h) { return parseInt(h, 16); };
        var result = '#';
        for (var i = 1; i < 7; i += 2) {
            var firstPart = h2d(color1.substr(i, 2));
            var secondPart = h2d(color2.substr(i, 2));
            var resultPart = d2h(Math.floor(secondPart + (firstPart - secondPart) * (weight / 100.0)));
            result += ('0' + resultPart).slice(-2);
        }
        return result;
    };
    BsColorHelper.hexToRgbA = function (hex, alpha) {
        var c;
        if (/^#([A-Fa-f0-9]{3}){1,2}$/.test(hex)) {
            c = hex.substring(1).split('');
            if (c.length === 3) {
                c = [c[0], c[0], c[1], c[1], c[2], c[2]];
            }
            c = '0x' + c.join('');
            return 'rgba(' + [(c >> 16) & 255, (c >> 8) & 255, c & 255].join(',') + ',' + alpha + ')';
        }
        throw new Error('Bad Hex');
    };
    return BsColorHelper;
}());
export { BsColorHelper };
//# sourceMappingURL=color.helper.js.map
