#!/usr/bin/env node


function listPrimes( nPrimes ) {
    var primes = [];
    for( var n = 2;  nPrimes > 0;  n++ ) {
        if( isPrime(n) ) {
            primes.push( n );
            --nPrimes;
        }
    }
    return primes;
}

function isPrime( n ) {
    var max = Math.sqrt(n);
    for( var i = 2;  i <= max;  i++ ) {
        if( n % i === 0 )
            return false;
    }
    return true;
}
/*format print out*/
var fmt = function(arr){
	return arr.join(",");
}
//*if need print prime to output file*/
var fs = require('fs');
fs.writeFileSync( 'prime.txt', fmt(listPrimes(100)) );


///*=====just print prime to console*/
//console.log(fmt(listPrimes(100)));
