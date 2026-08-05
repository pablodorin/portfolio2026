- ID: `technical-interview-failure`
- Número: `7`
- Fecha: `2026-08-08`
- Línea temática: `TECHNICAL INTERVIEWS AND PROFESSIONAL DEVELOPMENT`
- Título: `Failing a technical interview`
- Extracto de portada: `One poor technical interview does not define professional ability. It can, however, reveal the distance between doing, understanding and explaining.`
- Etiquetas: `Technical Interviews`, `Software Careers`, `Professional Development`, `Learning`, `Impostor Syndrome`
- Bajada: `Failing a technical interview does not automatically prove that someone cannot program. It can reveal an uncomfortable distance between what they can do, what they understand and what they manage to explain under pressure.`
- Copete: `Not every interview evaluates the same thing: a technical conversation, a live coding exercise, a pair programming session or a system design interview demand different skills. Analysing where the difficulty appeared can turn the result into a concrete programme of study, practice and preparation before getting back into the arena.`
- Nota de idioma: `This article was originally written in Spanish. This English version was translated with AI assistance and is pending the author’s final linguistic review.`
- *Slug*: `failing-a-technical-interview`
- Idioma original: `en`
- Descripción SEO: `Types of technical interviews in IT, pair programming difficulties, impostor syndrome and a guide to studying and getting back into the arena.`

<!-- ARTICLE_START -->
<!-- CUERPO -->

## A technical interview can go wrong in many ways

We may not know an answer. We may understand a concept but fail to find the words. We may have used a tool for years without ever organising an explanation of how it works. We may also freeze while trying to program as another person watches every movement of the cursor.

The result usually feels the same: we finish the interview replaying every silence, every incomplete answer and every mistake that, outside that situation, seemed easy to avoid.

Then an idea that is especially familiar to people working in technology appears:

**“I am an impostor.”**

Not simply “I did badly” or “I need to study this subject”, but something more radical: “I never really knew; I merely managed to make other people believe that I did.”

Before turning a poor interview into a definitive judgement about our professional identity, it is worth understanding what kind of test we have just taken. There is no single kind of technical interview.

## Seven kinds of technical interview

Companies combine different formats. Each requires different skills and provides only partial information about the candidate. Preparing for “a technical interview” without knowing the format is therefore like preparing for “an exam” without knowing whether it will be oral, written or practical.

### 1. Conversational technical interview

The interviewer asks questions about programming, design, architecture, databases, testing, infrastructure or ways of working. They do not necessarily ask the candidate to write code: they expect them to define concepts, connect them and justify decisions.

Some typical, deliberately general questions might be:

- What is the difference between inheritance and composition? When would you choose each one?
- What problem does dependency injection solve?
- How would you organise error handling in an API?
- What is the difference between a unit test and an integration test?
- How would you investigate an endpoint that has begun responding slowly?
- What is a database index and what cost does it introduce?
- When would you choose a relational database and when a non-relational one?
- What benefits and difficulties do microservices present?
- How would you protect a publicly exposed API?
- How would you decide what information to record in logs?
- What does it mean for an operation to be transactional?
- What would you do if a solution works but is difficult to maintain?
- How would you verify that a change has not broken existing functionality?
- When would you avoid a technology you know well?

The difficulty is not merely remembering a definition. Follow-up questions require proof that there is understanding behind it:

- Why?
- What alternative was available?
- What cost does that decision introduce?
- In what situation would you choose the opposite?
- How would you test it?
- What would happen if the system grew?

A memorised answer may survive the first question. It rarely survives the ones that follow.

### 2. *Live coding*

The candidate must solve a problem while one or more interviewers observe. It may be an algorithm, a data transformation, a function, a visual component, a small API or a modification to a project prepared in advance.

The evaluation is not limited to whether the program eventually works. It may also cover understanding the requirements, breaking down the problem, choosing data structures, code clarity, edge cases, debugging method and time management.

The format does not fully reproduce everyday work. At work we can consult documentation, explore code, test hypotheses and remain silent for several minutes. During an interview, every pause seems to need an explanation. A competent person can therefore perform poorly at *live coding*, while someone highly trained in interview exercises may perform better than their professional experience would suggest.

The test is not useless, but neither is it a neutral reproduction of real work.

### 3. *Pair programming*

In *pair programming*, the candidate and interviewer work together on a problem. One may type while the other observes, asks questions, proposes alternatives or points out possible mistakes.

Used well, this format shows how a person collaborates, listens, explains decisions and modifies a solution when new information appears. It is not merely programming while somebody watches. [Thoughtworks describes](https://www.thoughtworks.com/en-us/insights/blog/what-expect-pair-programming-interview) a process in which communication, reasoning, teamwork, design, code and testing matter even when the complete solution is not finished.

The format presents particular difficulties.

#### Thinking and speaking at the same time

Some people solve problems better in silence. During a *pair programming* session, they must program, review what they have written and construct a comprehensible narrative at the same time.

If they remain silent, the interviewer cannot know whether they are reasoning or blocked. If they narrate every character, they disrupt their own thinking. The balance consists of verbalising decisions, doubts and alternatives, not every line being written.

#### Working in an unfamiliar environment

The exercise may use an editor, operating system, repository or set of shortcuts that the candidate does not know. An incidental difficulty with the environment may consume time and appear to be a technical weakness.

#### Understanding incomplete requirements

Many exercises contain deliberate ambiguities. The candidate is expected to ask questions before programming. Under pressure, however, it is common to assume too much, start immediately and discover several minutes later that the wrong problem has been solved.

#### Receiving suggestions without becoming defensive

A suggestion from the interviewer may be help, a correction or a way of observing how feedback is processed. Rejecting it automatically may show rigidity; accepting it without understanding does not help either. The candidate needs to pause, evaluate the proposal and explain what it would change.

#### Recovering from an observed mistake

A trivial syntax error can cause a disproportionate block when someone is watching. The candidate starts changing several things at once, abandons their debugging method and turns a simple defect into a chaotic situation.

#### Balancing speed and quality

Time is limited, but names, design, readability, validations and tests may also be evaluated. Pursuing a perfect solution can prevent completion of a minimum version. Moving too quickly can produce code that is impossible to defend.

#### Understanding the interviewer’s role

It is not always clear whether the other person will act as a partner, an observer or an examiner. It is worth asking: may we consult documentation? Do you expect tests? Would you prefer us to explain the design first? May we ask for a hint?

*Pair programming* examines several overlapping abilities: programming, communicating, listening and correcting while everything happens at once.

### 4. Take-home exercise

The candidate receives an assignment and has a few hours or days to deliver a solution. This format allows research, use of the familiar environment and calmer work.

Its difficulties are different: interpreting scope, deciding how much time to invest, avoiding overengineering, documenting installation, writing enough tests and delivering something complete by the deadline. In addition, the time announced by the company does not always match what a competitive solution actually requires.

The evaluation often continues after delivery. The candidate may be asked to explain the design, change a part or defend the decisions made. If they cannot explain the submitted code, the repository’s apparent quality loses value.

### 5. System design

A broad problem is presented: designing a messaging service, payment platform, reservation system or another distributed solution.

The candidate must discover requirements, state assumptions and propose components. The conversation may include APIs, databases, caches, queues, events, scalability, consistency, security, fault tolerance, observability and costs.

There is usually no single correct answer. What matters is converting an imprecise need into a reasoned design and explaining the trade-offs: what we gain, what we sacrifice and under what conditions we would change the solution.

### 6. Code review and debugging

Instead of building something from scratch, the candidate receives existing code to review or repair. They may be asked to detect a functional defect, vulnerability, inefficient query, race condition, poor separation of responsibilities, insufficient test or readability problem.

This format resembles a very common part of real work: understanding somebody else’s code before modifying it. It also avoids confusing typing speed with engineering ability.

### 7. Technical case or presentation

The candidate receives a scenario and must present a proposal. They may explain an architecture, analyse an incident, defend a solution or discuss a project completed previously.

Knowledge, organisation and communication are evaluated simultaneously. Knowing how to build a solution does not guarantee knowing how to present it. More senior positions, however, usually require both abilities.

A [taxonomy of technical interviews published by Zahra Traboulsi](https://zahra.dev/blog/technical-interview-taxonomy/) shows that even these categories contain many variants: algorithms or practical work, live or take-home exercises, individual or pair programming, system design, data modelling, code reading, pull request review and presentations.

## Doing, understanding and explaining

Much professional knowledge becomes tacit. After repeating a task for long enough, we stop consciously reconstructing its foundations. We know where to put a configuration, which structure to apply or which error to look for. The procedure becomes familiar.

That may be enough to work. It is not always enough to explain.

A technical conversation forces us to turn habits into concepts. It is no longer enough to say that something “is done this way”. We must identify the problem it solves, how it works, which alternatives exist and what consequences it produces.

Someone may therefore use a technology and still answer an elementary question about it poorly. Their practice may have become mechanical, partial or highly dependent on a particular project’s context.

The opposite can also happen: the person understands the subject but cannot retrieve the knowledge under pressure. They recognise a good explanation when they hear it, although they cannot produce it themselves.

It helps to distinguish problems that look identical from the outside:

1. Not knowing the subject.
2. Knowing only its name.
3. Having applied it without fully understanding its foundations.
4. Understanding it but being unable to retrieve it quickly.
5. Retrieving it but being unable to organise an explanation.
6. Knowing how to explain it but freezing in the interview format.

To improve, we need to discover which of these things happened. Simply saying “I was nervous” may conceal a real gap. Concluding “I know nothing” turns a localised difficulty into a total condemnation.

## Explaining is also part of seniority

A senior professional is not an encyclopaedia. They may forget syntax, consult documentation and know nothing about entire technologies. The breadth of software development makes it impossible to remember everything.

But seniority involves more than accumulating years or participating in many projects. It means understanding problems, evaluating alternatives, justifying decisions, anticipating risks and helping other people understand the system.

That requires explanation.

One poor answer does not erase anyone’s seniority. But if a person systematically cannot explain the decisions they make, it is difficult for them to guide a team, defend an architecture, perform a deep review or communicate technical risk.

During an interview, moreover, the company cannot evaluate invisible knowledge. The candidate may know more than they managed to demonstrate, but the decision will be based on the available evidence.

Knowing is not enough. In that situation, we must also be able to demonstrate it.

## The interview as an imperfect examination

A technical interview resembles an examination: it incompletely represents a much broader ability.

A person may know the material and perform poorly. Perhaps they did not practise retrieving it, misunderstood an instruction, managed time badly or froze. They may also discover that they believed they had mastered a subject that they actually understood only superficially.

The result does not describe everything they know. But it is not necessarily devoid of information.

That nuance matters. Criticising the shortcomings of technical interviews may be valid: some use irrelevant questions, reward memorisation or place candidates in conditions far removed from real work. Pointing out those limitations should not, however, prevent us from examining what the failure revealed.

An account published on DEV Community about [lessons learned from failing several technical interviews](https://dev.to/farhanaxmustafa/what-i-learned-from-failing-my-technical-interviews-276a) provides a concrete example: each experience helped identify which content and formats required specific preparation.

## “I am an impostor”

After failing, the thought is not always “I have a gap in databases” or “I need to practise *live coding*”.

It is often:

**“I am an impostor. They finally found out.”**

The expression “impostor syndrome” is often used to describe an inability to recognise demonstrated competence as one’s own and the fear of being exposed as a fraud, even in the presence of objective achievements. That is not the same as discovering a specific weakness.

The problem arises when a partial difficulty is interpreted as proof that an entire previous career was a simulation. A one-hour interview retrospectively becomes the secret truth of a whole career.

This feeling recurs in software development. A Stack Overflow article on [impostor syndrome in the technology industry](https://stackoverflow.blog/2023/09/11/what-we-talk-about-when-we-talk-about-imposter-syndrome/) connects it with specialisation, continuous learning and the speed at which tools change; it also warns that not every insecurity should be reduced to an individual psychological failure.

Invoking impostor syndrome, however, should not become a way of avoiding a technical diagnosis.

Sometimes the person is underestimating their ability. Sometimes there really is knowledge that needs to be recovered. Both may be true at once: the interview can trigger a devastating interpretation of oneself and reveal a specific weakness.

The useful response is neither self-destruction nor denial. It is to investigate what happened.

## What to do after failing

Study.

Not accumulate prefabricated answers or memorise definitions to recite mechanically. Studying means reconstructing and organising what we know, detecting what we do not know and practising the way in which we will need to demonstrate it.

### 1. Record the interview

Immediately afterwards, it is useful to write down everything we remember:

- questions and follow-up questions;
- exercises;
- mistakes;
- moments when we froze;
- concepts we recognised too late;
- observations or hints from the interviewer.

Memory quickly reorganises the experience. What is not recorded becomes a vague impression: “I did badly.”

### 2. Classify each difficulty

For each point, we should ask:

- Did I not know the subject?
- Did I know only its name?
- Had I used it without understanding it?
- Did I understand it but fail to remember it?
- Was I missing an example?
- Was I unable to communicate it?
- Was the format the main problem?

Each cause requires different training.

### 3. Reconstruct the knowledge

For each concept, we should be able to explain at least five things:

1. What it is.
2. What problem it solves.
3. How it works.
4. What benefits and costs it presents.
5. When it should not be used.

This is the difference between remembering a definition and building a mental model.

### 4. Return to the code

Theory must become an observable experience.

If we study error handling, we should cause an error, propagate it, handle it and test it. If we study indexes, we should compare queries and analyse their execution plans. If we study design patterns, we should find a problem that justifies applying them.

Code reveals everything that an explanation seemed to have resolved but that we still did not understand.

### 5. Explain it out loud

Reading an answer creates a false sense of mastery. Recognising an explanation is not the same as producing it.

We need to close the material and answer first in thirty seconds, then develop an example and finally withstand follow-up questions and alternatives.

The explanation does not need to sound academic. It must be precise and withstand a conversation.

### 6. Practise the exact format

A conversational interview is prepared by answering questions and follow-up questions.

*Live coding* is prepared by programming under a time limit while explaining decisions.

*Pair programming* is prepared by solving a problem with another person, thinking aloud and receiving suggestions.

System design is prepared by identifying requirements, drawing architectures and defending trade-offs.

A take-home exercise is prepared by building small projects with controlled scope, tests and documentation.

There is no generic practice that prepares equally well for every format.

### 7. Get back into the arena

There is no need to wait until we feel completely prepared. That feeling will probably never arrive.

The objective is to attend the next interview with better-organised knowledge, more practice and a less catastrophic interpretation of error.

## From verdict to programme of work

A technical interview is not a perfect measurement. It may be poorly designed, use irrelevant questions or favour people who trained specifically for that format.

But even an imperfect interview can be useful.

It can show that theory is missing. That practice has become automatic. That a technology exists in our vocabulary but not in our effective knowledge. That we need to recover foundations. Or that we know how to work but do not yet know how to explain what we do.

None of that requires us to conclude: “I am an impostor.”

The conclusion can be much more concrete:

“I could not explain this.”
“I did not know this.”
“I understood this less well than I thought.”
“This format blocked me.”
“I need to study this.”

The poor interview then stops being a verdict and becomes a programme of work.

Study. Reorganise practical knowledge. Review theory. Program. Explain. Simulate.

And get back into the arena.

## References and further reading

- Zahra Traboulsi, [“A taxonomy of technical interviews”](https://zahra.dev/blog/technical-interview-taxonomy/), 29 July 2024.
- Jonathan Fernández and Raul Oliver, Thoughtworks, [“What to expect from a pair programming interview”](https://www.thoughtworks.com/en-us/insights/blog/what-expect-pair-programming-interview), 9 June 2020.
- Farhana, DEV Community, [“What I learned from failing my technical interviews”](https://dev.to/farhanaxmustafa/what-i-learned-from-failing-my-technical-interviews-276a), 17 December 2020.
- Stack Overflow, [“What we talk about when we talk about impostor syndrome”](https://stackoverflow.blog/2023/09/11/what-we-talk-about-when-we-talk-about-imposter-syndrome/), 11 September 2023.

<!-- ARTICLE_END -->
