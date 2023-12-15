let mebleg = prompt("Pul miqdari yaz")
let text = "";
if (parseInt(mebleg / 500)) {
    text += `${parseInt(mebleg / 500)} 500 manat, `;
    mebleg = mebleg - 500 * parseInt (mebleg / 500)
}
if (parseInt(mebleg / 200)) {
    text += `${parseInt(mebleg / 200)} 200 manat, `;
    mebleg = mebleg - 200 * parseInt (mebleg / 200)
}
if (parseInt(mebleg / 100)) {
    text += `${parseInt(mebleg / 100)} 100 manat, `;
    mebleg = mebleg - 100 * parseInt (mebleg / 100)
}
if (parseInt(mebleg / 50)) {
    text += `${parseInt(mebleg / 50)} 50 manat, `;
    mebleg = mebleg - 50 * parseInt (mebleg / 50)
}
if (parseInt(mebleg / 20)) {
    text += `${parseInt(mebleg / 20)} 20 manat, `;
    mebleg = mebleg - 20 * parseInt (mebleg / 20)
}
if (parseInt(mebleg / 10)) {
    text += `${parseInt(mebleg / 10)} 10 manat, `;
    mebleg = mebleg - 10 * parseInt (mebleg / 10)
}
if (parseInt(mebleg / 5)) {
    text += `${parseInt(mebleg / 5)} 5 manat, `;
    mebleg = mebleg - 5 * parseInt (mebleg / 5)
}
if (parseInt(mebleg / 1)) {
    text += `${parseInt(mebleg / 1)} 1 manat, `;
    mebleg = mebleg - 1 * parseInt (mebleg / 1)
}
console.log(text);;