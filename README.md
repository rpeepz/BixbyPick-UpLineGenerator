<p align="Center">
  <img src="https://bixbydevelopers.com/dev/docs-assets/resources/dev-guide/bixby_logo_github-11221940070278028369.png">
  <br/>
  <h1 align="Center">Bixby Pickup line Capsule</h1>
</p>

## Overview

Do you have some interesting or funny pickup lines to share? Try the pickup line generator capsule! It's the perfect place to find **and** share the content you're looking for by using our Bixby capsule. We hope they're not too offensive or crude, becuase we wouldn't want to offend anyone... but it's all for a laugh and good clean fun

Lots of the basic building blocks of a Bixby capsule are highlighted; This is a great capsule to start learning how to develop for Bixby.

You can easily customize this capsule with your own content without any development! Just use the spreadsheet in the `contentUtility` folder and cut and paste from there into the `content.js` file, update the `capsule.id` and `training` as necessary and you have made this capsule your own!

## How to try
Ask bixby for a pickup line! Maybe you'll get lucky with:

```
Tell me a pickup line (Bixby says a random pickup line)

Tell me a magical pickup line (Bixby says a pickup line with the tag magic)

Tell me a clean pickup line (Bixby says a cheesy pickup line)
```

## How to customize
* Put your own content (facts and associated tags and images) into `code/content.js` - You may also use the spreadsheet located in `contentUtility/CreateContent.xslx` to create content
* If you want to use images in your content you can either use a web URL or you can save your image under `assets/images` and refer to them with a relative path, e.g. `images/cow.png` (you might have to wait a little until the IDE uploads images to the cloud)
* Change the capsule id to reflect your organization and your content. The capsule id is defined in the `capsule.bxb` file
* You can customize the NoResult dialog (`resources/base/dialog/Content_NoResult.dialog.bxb`)
* Add more training / change the training
* Have fun!

---

## Additional Resources

### Your Source for Everything Bixby
* [Bixby Developer Center](http://bixbydevelopers.com) - Everything you need to get started with Bixby Development!

### Guides & Best Practices
* [Quick Start Guide](https://bixbydevelopers.com/dev/docs/get-started/quick-start) - Build your first capsule
* [Design Guides](https://bixbydevelopers.com/dev/docs/dev-guide/design-guides) - Best practices for designing your capsules
* [Developer Guides](https://bixbydevelopers.com/dev/docs/dev-guide/developers) - Guides that take you from design and modeling all the way through deployment of your capsules

### Video Guides
* [Introduction to Bixby](https://youtu.be/DFvpK4PosvI) - Bixby and the New Exponential Frontier of Intelligent Assistants
* [Bixby Fundamentals](https://bixby.developer.samsung.com/newsroom/en-us/22/01/2019/Teaching-Bixby-Fundamentals-What-You-Need-to-Know) - Bixby Fundamentals: What You Need to Know

### Need Support?
* Have a feature request? Please suggest it in our [Support Community](https://support.bixbydevelopers.com/hc/en-us/community/topics/360000183273-Feature-Requests) to help us prioritize.
* Have a technical question? Ask on [Stack Overflow](https://stackoverflow.com/questions/tagged/bixby) with tag “bixby”
