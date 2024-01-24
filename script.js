function checkPlagiarism() {
    const textInput = document.getElementById('textInput').value.toLowerCase();
    const isPlagiarized = simulatePlagiarismDetection(textInput);

    const resultMessage = document.getElementById('resultMessage');
    if (isPlagiarized)
    {
        alert("Warning: This text may be plagiarized.");
    }
    else
    {
        alert("Great! This text does not contain any plagiarized word.");
    }
}

function simulatePlagiarismDetection(text) {
    const knownPhrases = ['abhishek','sample text','original content','recreation'];
    for (const phrase of knownPhrases)
    {
        if (text.includes(phrase))
        {
            return true;
        }
    }
    return false;
}