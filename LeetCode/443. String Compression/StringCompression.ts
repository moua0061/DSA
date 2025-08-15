function compress(chars: string[]): number {
  //chars = ["a","a","b","b","c","c","c"]
  //"a", "2", "b", "2", "c", "3"
    let pointerAindex = 0;
    let pointerBindex = 0;

    while(pointerBindex < chars.length){
        let counter = 0;
        console.log('what is pointerAindex before:', pointerAindex);

        let currentChar = chars[pointerBindex];
        console.log('what is currentChar:', currentChar);

        while(pointerBindex < chars.length && chars[pointerBindex] === chars[pointerAindex]){
            console.log("chars[pointerBindex] === chars[pointerAindex]");

            pointerBindex++;
            console.log('what is pointerBindex after:', pointerBindex);

            counter++
            console.log('what is counter:', counter);
        }

        chars[pointerAindex] = currentChar;
        console.log('what is chars[pointerAindex] after:', chars[pointerAindex]);
        console.log('what is chars after:', chars);

        pointerAindex++
        console.log('what is pointerAindex after:', pointerAindex);

        if(counter > 1){
            console.log("counter > 1");

            const strCount = counter.toString();
            console.log("what is strCount: ", strCount);

            for(let c of strCount){
                console.log('what is c:', c);

                chars[pointerAindex] = c;
                console.log("what is chars[pointerAindex] after: ", chars[pointerAindex]);
                console.log('what is chars after:', chars);

                pointerAindex++;
                console.log("what is pointerAindex after: ", pointerAindex);
            }
        }
    }
    return pointerAindex;
}
