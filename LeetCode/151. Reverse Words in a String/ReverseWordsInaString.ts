function reverseWords(s: string): string {
    return s.split(' ')
        .filter(word => word !== '')
        .reverse()
        .join(' ');
    // let results = '';
    // const wordsArr = s.split(' ');

    // for(let i = wordsArr.length - 1; i >= 0; i--){
    //     let word = wordsArr[i];
    //     console.log('word:', word);
    //     if(word != '') results += word + " ";
    // }
    // return results.trim();
};