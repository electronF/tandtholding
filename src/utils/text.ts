/**
 * 
 * @param text The string to capitalize the first word 
 * @returns The String with the first word capitalized or the input object given object. 
 */
function capitalize(text: String): String 
{
    if(typeof(text) === 'string')
        return text.charAt(0).toUpperCase()+text.substring(1)
    return text;
}

/**
 * 
 * @param text The string to capitalize the first word 
 * @returns The String with the first word of each phrase capitalized 
 * or the input object given object. 
 */
function capitalizeFirstPhraseWord(text: String): String 
{
    if(typeof(text) === 'string')
        return text.split('.').map((phrase)=>phrase.charAt(0).toUpperCase()+text.substring(1)).join(' ')
    return text;
}


/**
 * 
 * @param text The string to capitalize all words 
 * @returns The String with all words capitalized or the input object `text`. Note, if the given element
 *  is not a string, then return this object. 
 */
function capitalizeAllWords(text:String):String
{   
    if(typeof(text)==='string')
        return text.split(' ').map(word => (word.charAt(0).toUpperCase() + word.substring(1))).join(" ")
    return text;
}



export {capitalize, capitalizeAllWords, capitalizeFirstPhraseWord}