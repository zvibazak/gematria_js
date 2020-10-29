# gematria_js
Minimum Gematria function written in JavaScript. ***Just copy paste to your code.***

## Usage

```javascript
$chay = get_gematria("חי");
console.log($chay);
```

Output will be: ```18```

## How does it works?
I followed the equation mention on the [Gematria Wikipedia page](https://en.m.wikipedia.org/wiki/Gematria):

![\Large \left(10^{\lfloor \left(x-1\right)\div 9\rfloor}\right)\times\left(\left(\left(x-1\right)\ \mathrm{mod}\ 9\right)+1\right)](https://latex.codecogs.com/svg.latex?f(x)=%5Cleft(10%5E%7B%5Clfloor%20%5Cleft(x-1%5Cright)%5Cdiv%209%5Crfloor%7D%5Cright)%5Ctimes%5Cleft(%5Cleft(%5Cleft(x-1%5Cright)%5C%20%5Cmathrm%7Bmod%7D%5C%209%5Cright)+1%5Cright))

where ```x``` is the position of the letter in the language letters index (Regular order of letters), and the ```floor``` and ```modulo``` functions are used.
