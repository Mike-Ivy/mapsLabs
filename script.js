function calcWordFrequencies() {
    var words = prompt();
    if (words != null) {
        words = words.split(" ");
        var uniqueWords = [...new Set(words)];
        for (var i=0; i<uniqueWords.length; i++) {
            var count = 0;
            for (var j=0; j<words.length; j++) {
                if (uniqueWords[i] == words[j]) 
                    count++;
            }
        console.log(uniqueWords[i] +" " +count)
        }
    }
}
calcWordFrequencies();