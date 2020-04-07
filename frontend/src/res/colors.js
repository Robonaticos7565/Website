const colors = {
    mainYellow : '#F7C01F',
    gray33 : '#333333',
    gray54 : '#545454',
    white : '#FFFFFF',
    black : '#000000',
}

export default colors;

export function hex2rgb(hex, opacity) {
    var h=hex.replace('#', '');
    h =  h.match(new RegExp('(.{'+h.length/3+'})', 'g'));

    for(var i=0; i<h.length; i++)
        h[i] = parseInt(h[i].length==1? h[i]+h[i]:h[i], 16);

    if (typeof opacity != 'undefined')  h.push(opacity);

    return 'rgba('+h.join(',')+')';
}