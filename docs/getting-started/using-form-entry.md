---
sidebar_position: 3
---

# Using Form Entry

Form Entry supports a single variable being piped into your messages - the person's name.

It also supports sending group texts / MMS messages.

Here's an example that may be useful to teachers.

A `Message` like this:

> Hi {name}, we just finished grading the exams - you can see your score online!

And a `Numbers, Names` field like this:

> (111) 222-3333, Steffanie  
(111) 222-3334 / (111) 222-4445, Jack

Would generate these 2 texts:
* `(111) 222-3333` => `Hi Steffanie, we just finished grading the exams - you can see your score online!`
* `(111) 222-3334, (111) 222-4445` => `Hi Jack, we just finished grading the exams - you can see your score online!`

Alternatively, if you've disabled sending group texts in the `Settings for Sending` panel, it would generate these 3 individual texts:
* `(111) 222-3333` => `Hi Steffanie, we just finished grading the exams - you can see your score online!`
* `(111) 222-3334` => `Hi Jack, we just finished grading the exams - you can see your score online!`
* `(111) 222-4445` => `Hi Jack, we just finished grading the exams - you can see your score online!`

So you could use Form Entry to easily send custom individual messages to both students and parents about a recent test.

## Additional tips for Form Entry
* You can format your `Message` field however you want (line breaks, emoji, spacing, etc), but you should include `{name}` in order to pipe in the name.
* The `Numbers, Names` field should have one line per message that will be generated, with the phone number(s) going first, then a comma (`,`), and then the person's name.
