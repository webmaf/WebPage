/**
 * Created with JetBrains PhpStorm.
 * User: Maf
 * Date: 10.03.12
 * Time: 19:22
 * To change this template use File | Settings | File Templates.
 */

function Slider(container, nav, screen) {
    this.container = container;
    this.nav = nav.show();
    this.screen = screen || 500;

    this.box = this.container.children('li');
    this.quantity = this.box.length;

    this.current = 0;
}

Slider.prototype.transition = function(coords) {
    this.container.animate({
        'margin-left':coords || -(this.current * this.screen)
    });
};

Slider.prototype.setCurrent = function(dir) {
    var pos = this.current;
    //~~(cast boolean to number) = 0 or 1, if 0 than false than -1 else 1
    pos += ( ~~(dir === 'next') || -1);
    this.current = (pos < 0 ) ? this.quantity - 1 : pos % this.quantity;
    return pos;
};
