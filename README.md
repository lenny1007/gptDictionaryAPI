# GPT Dictionary API

There was no free, comprehensive dictionary API on the web, so I made one for myself. 

GPT Dictionary API contains 66589 words, with words definitions and a paragraph explains the word.
All definition including part of speech, CEFR (The Common European Framework of Reference for Languages) for the word level, and an example for it.

Lastly, each word has a url link for the audio file (.mp3) that speak out the word.

# Important Note
The API usage has been ramping up rapidly, making it difficult for me to keep the server running due to increased costs.

Your support directly helps the development of Dictionary API and keeps the server running.

<a href="https://www.buymeacoffee.com/lenny0929"><img src="https://img.buymeacoffee.com/button-api/?text=Buy me a coffee&emoji=&slug=lenny0929&button_colour=FFDD00&font_colour=000000&font_family=Lato&outline_colour=000000&coffee_colour=ffffff" /></a>

## Getting Started

### Usage 

The basic syntax of a URL request to the API is shown below:

`https://en.dictionary-api.com/v1/<--word-->`

As an example, to get definition of English word **hello** , you can send request to

`https://en.dictionary-api.com/v1/hello` and the result returned will be:

```json
[
  {
    "word": "hello",

    "definitions": [
      {
        "pos": "noun",
        "definition": "a greeting or expression of goodwill or acknowledgment",
        "cefr": "A2",
        "example": "As Mary entered the room, everyone turned to her and said, 'Hello!'"
      }
    ],
    
    "phonic": "/heˈloʊ/", 
    "audio": "https://storage.googleapis.com/dictionary_api_audio_files/src/hello.mp3", 

    "paragraph": "When greeting someone or starting a conversation, it is common to use the word \"hello.\" \"Hello\" is a friendly and polite way to acknowledge someone's presence or to initiate interaction. It is a versatile word that can be used in both formal and informal settings. Additionally, \"hello\" can also be used as an exclamation to express surprise or to get someone's attention. For example, if you witness something unexpected, you might say \"Hello! Did you see that?\" or if you want to get someone's attention, you may say \"Hello! Can I ask you a question?\" \n\nOverall, \"hello\" is a versatile word that is commonly used as a greeting, a way to initiate conversation, or as an exclamation to express surprise or gain attention."
  }
]


```

### Paths

| Location | Endpoint |
| :-- | :-- |
| Root path | `https://en.dictionary-api.com/`|

### HTTP request and query methods

| Method | Endpoint | Description | Examples |
| :-- | :-- | :-- | :-- |
| `GET` | `/v1/<QUERY_WORD>`| Retrieves the definition of the given word. | [`/v1/wonderful`](https://en.dictionary-api.com/v1/wonderful) |

## Data Downloads

If your need is to scrapy all the words in the api, and build one for yourself. 
Check out the downloads.

You can purchase and download all the files used in the GPT Dictionary API.
Total GPT Dictionary contains 66589 words, with English words definitions and a paragraph explains the word.

Easy to import to any database and simple to use.

<a href="https://www.buymeacoffee.com/lenny0929/extras"><img src="https://img.buymeacoffee.com/button-api/?text= Check out Downloads &emoji=📂&slug=lenny0929&button_colour=5F7FFF&font_colour=ffffff&font_family=Poppins&outline_colour=000000&coffee_colour=FFDD00"></a>


## Support & Thank you

If you need any assistance or find any bugs, feel free to contact me directly via [email](mailto:lenny0929@gmail.com).

