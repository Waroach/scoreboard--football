## Required Skills

- Git version control system
- Javascript and/or Typescript
- One of the four frameworks/libraries: React, Angular(2+), Vue, or Svelte for front-end work.

## Rules

1. It should only take about 3-10 hours to complete the assessment. If you need more time, that is allowed, however the amount of time from your first commit to last will be used to assess. Only start the assessment when you are ready to give it your full attention.
2. You may use any code or text editor to complete the assessment you choose. We recommend [Visual Studio Code](https://code.visualstudio.com/) as a free choice.
3. You may use Javascript or Typescript, and any library or framework to complete the assessment.
4. If you use others' code (i.e. Stack overflow answers), make sure you credit the author/answer in comments inline with your work

## Assessment Scenario

You have recently been contracted by a local high school to build a scoreboard portal for their team. They plan on using this website so visitors can navigate to the page during live games, and displaying it on a digital scoreboard at their games. You have been tasked with building this.

You may use Javascript or Typescript for a programming language, and React, Angular(2+), Vue, or Svelte as a framework/library choice.

The scoreboard needs the following features:

- A public web page where individuals can see the current score.
- An admin page where game referees can add events to the scoreboard:
  - Add team names
  - End current down
  - Change in current yards
  - Team control of the ball changeover
  - Field goal score
  - Touchdown score
- Actions of the events above should reflect on the UI of the scoreboard based on the current state of the game. (I.E. ending a down on the fourth down should automatically trigger a ball changeover.)
- You can find the rules of football [here](https://operations.nfl.com/the-rules/2021-nfl-rulebook/).

You have not been given designs for this project.

## Criteria

You will not be judged on:

- Technology or framework/library choice of the choices listed in the rules section (unless otherwise specified by the job description)
- Look/feel of the application.
- Security/deployment concerns (though that would be a bonus).
- Use of boilerplate code generators or additional code libraries.

You WILL be judged on:

- How long did it take to complete the assessment?
- Does the application build? Are there warnings or errors?
- Does the application work as expected **IMPORTANT**?
- Is there a public page for viewing the current scores/downs/yard **IMPORTANT**?
- Is there an admin page for changing the team info/scores/downs/yards **IMPORTANT**?
- Does updating the score on the admin page reflect in both places?
- How is state persisted between pages?
- Is state persistent regardless of who visits the page **OPTIONAL**?
- Code quality and consistency of style.
- Code readability.
- Compliance with linters and industry standards. As an example, using `eslint:recommended` would be preferred.
- State management rules simplicity.

## Instructions

1. Copy DO NOT FORK this repository to your personal github page. You will need to create a github account if you don't have one.
2. Clone the repository to your machine.
3. Complete the assessment and push your code up to github.
4. <ADD INSTRUCTIONS FOR LAUNCHING PROJECT HERE>.
