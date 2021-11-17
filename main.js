const commands = require("commands");
const { Rectangle, DrawEllipse, Color, TextStyle } = require("scenegraph");

function MyCreateRectangle(selection) {
    console.log(selection.items);
    const elem = new Rectangle();
    elem.width = 100;
    elem.height = 60;
    elem.fill = new Color("Purple");

    selection.insertionParent.addChild (elem);
    elem.moveInParentCoordinates(100, 100);

}

function CreateSquare(selection) {
    console.log(selection.items);
    selection.items[0].height = selection.items[0].width;
}

function TextStyle(selection) {
    console.log(selection.items);
    selection.items[0].fontSize = 30;
    selection.items[0].fill = new Color("Blue");

}

function Ellipse(selection) {
    console.log(selection.items);
    const elem = new Ellipse();
    elem.width = 100;
    elem.height = 100;
    elem.stroke = 15

    selection.insertionParent.addChild (elem);
    elem.moveInParentCoordinates(100, 100);
}

module.exports = {
    commands: {
        MyCreateRectangle:MyCreateRectangle,
        CreateSquare:CreateSquare,
        TextStyle:TextStyle,
        DrawEllipse:DrawEllipse
    }
} 
