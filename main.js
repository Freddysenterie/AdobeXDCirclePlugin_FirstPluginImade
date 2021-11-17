const { Ellipse, Color } = require("scenegraph");
const commands = require("commands");

function ellipse(selection) {
    console.log(selection.items);
    const ellipse = new Ellipse();
    ellipse.radiusX = 20;
    ellipse.radiusY = 20;
    ellipse.width = 200;
    ellipse.height = 200;
    ellipse.fill = new Color("red");
    ellipse.stroke = new Color("blue");
    
    selection.insertionParent.addChild (ellipse);
    ellipse.moveInParentCoordinates(100, 100);

}

module.exports = {
    commands: {
        ellipse
    }
}
