import React from 'react';
import ReactDOM from 'react-dom';

const listItem = React.createElement("li", {}, "Перший елемент")
const listItem1 = React.createElement("li", {}, "Другий елемент")
const listItem2 = React.createElement("li", {}, "Третій елемент")
const listItem3 = React.createElement("li", {}, "Четвертий елемент")

const unmarkedList = React.createElement("ul", {}, listItem, listItem1, listItem2, listItem3)

const navigation = React.createElement("nav", {}, unmarkedList)

ReactDOM.render(navigation, document.getElementById("root"));