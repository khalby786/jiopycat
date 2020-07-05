# jiopycat

Reliance Jio recently made a shameless and exact copy of WhatsApp called JioChat. This is a website trolling Jio. You can find possible copycat versions of apps Jio might create next!

## How It Works

You can put your copycat ideas in the `jiocat.json` file in the following format. 

```json
{
    "title": "JickJock",
    "logo": "images/logos/jickjock.png",
    "description": "Desi short video app which stalk your phone and sell your details in black market."
}

```

* The `title` and the `description` fields are necessary while the `logo` field is optional (just leave it blank).
* Make sure to follow the JSON format as adding even trailing commas can break the whole thing.

The script will parse it and show with ```jindex.html```.
