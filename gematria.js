function get_gematria(letters) {
    let res=0;
    let numbers = Array('א','ב','ג','ד','ה','ו','ז','ח','ט','י','כ','ל','מ','נ','ס','ע','פ','צ','ק','ר','ש','ת','ך','ם','ן','ף','ץ');
    Array.from(letters).forEach(letter => {
        if (numbers.includes(letter)){
            x = numbers.indexOf(letter)+1;
            res += (10**(Math.floor((x-1)/9)))*(((x-1) % 9)+1);    
        }
    });   
    return res;     
}
