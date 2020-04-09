const colors = {
    mainYellow : '#F7C01F',
    gray33 : '#333333',
    gray54 : '#545454',
    white : '#FFFFFF',
    whiteF0: '#F0F0F0',
    black : '#000000',
}

export default colors;

export function hex2rgb(hex: string, opacity: Number) {
    var h=hex.replace('#', '') as any;
    h =  h.match(new RegExp('(.{'+h.length/3+'})', 'g'));

    for(var i=0; i<h.length; i++)
        h[i] = parseInt(h[i].length==1? h[i]+h[i]:h[i], 16);

    if (typeof opacity != 'undefined')  h.push(opacity);

    return 'rgba('+h.join(',')+')';
}