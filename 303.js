function ackermann (m, n) {
    if( m==0 ) {
        return n+1;
    }
    else if ( n==0 && m>0) {
        return ackermann( (m-1), 1);
    }
    else if ( m>0 && n>0 ) {
        return ackermann( (m-1), ackermann( m, (n-1)));
    }
}
console.log(ackermann(0,2));
