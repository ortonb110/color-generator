const componentTohHex = (c) => {
    let hex = c.toString(16);
    return hex.length === 1 ? "0"+hex : hex;
}

const componentToRGB =(r,g,b)=> {
    return '#' + componentTohHex(r) + componentTohHex(g) + componentTohHex(b); 
}

export default componentToRGB;