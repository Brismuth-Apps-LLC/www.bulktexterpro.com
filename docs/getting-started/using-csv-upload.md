---
sidebar_position: 3
---

# Using CSV Upload

You can add any column you want to your CSV, and then pipe that field into your messages. 

Here's an example that may be useful to teachers.

A CSV like this:

| Student Name |	Student Number |	Parent Number |	Grade |	Subject |
| --- | --- | --- | --- | --- |
| Steffanie |	(111) 222-3333 |	(111) 222-4444 |	95 |	Algebra |
| Jack |	(111) 222-3334 |	(111) 222-4445 |	85 |	US History |

And a message like this:

> Hi {Student Name}, we just finished grading the exams and you got {Grade}% on your {Subject} test.

Would generate these 4 texts:
* `(111) 222-3333` => `Hi Steffanie, we just finished grading the exams and you got 95% on your Algebra test.`
* `(111) 222-4444` => `Hi Steffanie, we just finished grading the exams and you got 95% on your Algebra test.`
* `(111) 222-3334` => `Hi Jack, we just finished grading the exams and you got 85% on your US History test.`
* `(111) 222-4445` => `Hi Jack, we just finished grading the exams and you got 85% on your US History test.`

So you could use CSV Upload to easily send custom individual messages to both students and parents about a recent test.