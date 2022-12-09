---
sidebar_position: 15
---

# FAQ

### How do I install it / set it up?
Check out our guide here: https://www.bulktexterpro.com/docs/getting-started/installing-it

### It says I need to update - how do I update it?
Check out our guide here: https://www.bulktexterpro.com/docs/getting-started/updating-it

### How much does it cost?
$4.95 a month - less than a cheeseburger! 🍔 

After installing it, you can sign up for a 7 day free trial - and then decide whether the cost is worth it to you to get hours of your life back!

### What's the difference between Bulk Texter Pro and Bulk Texter Lite?
You can see a full breakdown on the [Features page](https://www.bulktexterpro.com/docs/features/).

### How many messages can I send with Bulk Texter Pro?
Bulk Texter Pro does not impose any limits on message sending/frequency beyond what Google Voice imposes. 
We can not comment on Google Voice's limits, as they are not published, and Bulk Texter Pro is not affiliated with Google/Google Voice. 

Bulk Texter Pro is a new product, but Bulk Texter Lite has many users who have been using it for years without issue, because they are not using it for spam - they are using it as teachers, relegious clergy, coaches, etc. These users have reported that they can typically send ~50 high quality messages (i.e. not spam) per hour without issue.

If you're looking for a solution for prospecting or marketing, Google Voice and Bulk Texter Pro probably aren't the right choice.

### Bulk Texter Pro allows me to schedule messages, but they never send.
* Make sure that your account is registered or you have an active trial
* Make sure that it is up to date
* Make sure that your registered account matches the Google account you are using to send messages. Ideally, that should be the only Google account you are signed into with your chrome user / browser user.

### Some messages sent, but some didn't.
You'll want to go to the History tab in Bulk Texter Pro, and open the batch with the messages that didn't send. There should be an error message next to the messages that failed to send. If you need help troubleshooting, you can email support@bulktexterpro.com.

### Scheduled messages aren't sending unless I schedule them to send right away.
Make sure that your computer is configured to stay awake, and not sleep/hibernate/shut down. Steps for this can vary based on your computer's operating system. See the [installation guide](/docs/getting-started/installing-it#setting-up-your-computer-for-scheduled-messages) for some tips.

### My account disappeared!
Click the profile at the top right, then "Register", then click "Log In" and provide the email your previously registered with.

### I'm getting an error that I've signed in too many times, or that I've hit my install limit.
Email support@bulktexterpro.com and we'll help you out.

### Why did the extension stop working?
Occasionally, Google may make changes to Google Voice that stop Bulk Texter Pro from functioning correctly. When this happens, we will update Bulk Texter Pro to support the new changes as quickly as possible.

### How do I cancel my subscription?
You must have the extension installed in order to manage your subscription. Follow the guide in these docs to install the extension, sign in to your existing account, and click "Manage Subscription" in the user menu.

### Can I use Bulk Texter Pro with multiple Google accounts?
You'll need to use a separate Chrome Profile for each Google Voice user you want to use Bulk Texter Pro with, and register Bulk Texter Pro for each account. BulkTexterPro is only authorized to integrate with the Google Voice account that matches the paid registration.

### Can I use Bulk Texter Pro with a [Google Workspaces Google Voice](https://workspace.google.com/products/voice/) account?
Yes, you can - and many of our users do!

### How does CSV upload work?
You can add any column you want to your CSV, and then pipe that field into your messages. 

Here's an example that may be useful to teachers:

A CSV like this:
| Student Name |	Student Number |	Parent Number |	Grade |	Subject |
| --- | --- | --- | --- | --- |
| Steffanie |	(111) 222-3333 |	(111) 222-4444 |	95 |	Algebra |
| Jack |	(111) 222-3334 |	(111) 222-4445 |	85 |	US History |

And a message like this:
```
Hi {Student Name}, we just finished grading the exams and you got a {Grade} on your {Subject} test.
```

Would generate these 4 texts:
* `(111) 222-3333` => `Hi Steffanie, we just finished grading the exams and you got 95% on your Algebra test.`
* `(111) 222-4444` => `Hi Steffanie, we just finished grading the exams and you got 95% on your Algebra test.`
* `(111) 222-3334` => `Hi Jack, we just finished grading the exams and you got 85% on your US History test.`
* `(111) 222-4445` => `Hi Jack, we just finished grading the exams and you got 85% on your US History test.`

So you could use this to send custom individual messages to both students and parents about a recent test.

### When I upload a CSV, it doesn't show all my columns.
Make sure that the very first row in your CSV/spreadsheet is your column headers, and that there aren't any rows above your column headers.

### Will you still be supporting the free version - Bulk Texter Lite / Google Voice Bulk Texter?
Yes - I will make sure that the original feature set continues to function and remains completely free to use. However, the bulk of my development efforts will be spent on improving Bulk Texter Pro.

### Do you have any tips to avoid having my messages flagged as spam?
Here are some ideas that may help:
* Avoid sending more than ~50 messages per hour.
* Ensure that each message is unique (i.e. use names and other variables) and conversational.
* Some users have reported that when recipients are responsive and text back, they are less likely to experience message blocks from Google.
* Some users have reported that removing URLs/website links has helped them - but it often does not cause any problem.
* Try increasing the time between messages, if you're using a shorter delay.
* Longer messages may be more likely to be blocked as well.

### How do I appeal a Google Voice account ban?
We are not affiliated with Google or Google Voice, but you can fill out Google's form here:
https://support.google.com/accounts/contact/suspended

### Help, I have a question that isn't answered here!
You can email us at support@bulktexterpro.com, we're happy to help out!
