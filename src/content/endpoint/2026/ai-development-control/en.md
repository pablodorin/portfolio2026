---
id: "ai-development-control"
number: "08"
datePublished: "2026-08-10"
tags: ["AI","Software Development","Code Review","Testing","Software Architecture"]
language: "en"
slug: "challenges-using-ai-keeping-control"
kicker: "AI and developer practice"
cardCopete: "AI can produce code faster than we can understand it. The challenge is not to compete with that speed, but to keep control of the decisions, tests, and system around it."
title: "The Challenges of Using AI: Keeping Control"
copete: "AI proposes solutions, writes code, and accelerates tasks that once took hours. But the easier it becomes to produce an implementation, the more important it is to know what we are accepting, how it fits the system, and what evidence allows us to trust it."
bajada: "Loss of control is not simply about no longer writing every line by hand. It begins when code exists before our understanding does: when we introduce tools we have not evaluated, accept decisions we cannot explain, delegate the tests as well, or build more than the requirement ever asked for."
disclosure: "Originally written in Spanish. This English version was translated with AI assistance and is pending the author's final linguistic review."
---

## An answer that felt incomplete

Today, during a job interview, I was asked what challenges I encounter in my work as a developer when using AI.

The first thing that came to mind was quite clear:

**The loss of control.**

But while I was answering, the phrase began to feel imprecise. What control are we actually losing?

After the interview, I decided to think about that question more carefully.

The problem is not simply that AI writes code for us. Developers have been delegating work to compilers, frameworks, libraries, ORMs, IDEs, code generators, and cloud platforms for decades.

The difference is that a tool can now propose an entire solution — and do it in seconds.

When I write a piece of code myself, even imperfectly, I can usually reconstruct why its main decisions are there. When AI produces twenty, fifty, or two hundred lines almost instantly, that relationship can easily reverse: **the code exists before I fully understand it**.

I think that is where the real loss of control begins.

## AI proposes; the human decides

A simple rule captures much of the problem:

**AI proposes, but the developer decides.**

A technically valid solution is not necessarily the right solution for a particular system.

AI may suggest a new library, framework, pattern, database, caching layer, abstraction, or additional service because it elegantly solves the problem in front of it.

But before accepting the proposal, the human questions remain:

Should this tool be in this system at all?

Is there already another mechanism that solves the same problem?

Is it compatible with the project's real versions and constraints?

Will the team be able to maintain it?

Are we solving a need or merely adding sophistication?

GitHub's documentation on [reviewing AI-generated code](https://docs.github.com/en/copilot/tutorials/review-ai-generated-code) explicitly includes checking intent, quality, and dependencies. Not because a dependency proposed by AI is necessarily wrong, but because a plausible suggestion cannot know the entire technical and organisational history of a system by itself.

AI can propose tools. **It cannot own the consequences of introducing them.**

## Working is not enough

The next question can no longer be only:

**Does it work?**

It also has to be:

**Do I understand why it works?**

If I cannot explain what the generated code does, why a dependency was added, what responsibility a class has, how an exception propagates, where state lives, or how two components communicate, then I do not really control that code.

I simply have it.

This connects with something I explored previously in [“AI-Augmented Engineering: Developer Productivity Without Surrendering Judgment”](/endpoint/ai-augmented-engineering/): generating code is only one part of engineering work. Integrating it, understanding it, reviewing it, and answering for its consequences remain separate tasks.

Paradoxically, the easier software becomes to write, the more important it becomes to understand.

## More than ever: tests

Then there are tests.

More than ever: **tests**.

Preferably tests that I understand, design, and — at least at critical points — can write or review myself.

They may become my last bastion as a *code monkey*.

There is a conceptual risk when the same AI writes the implementation and then produces the tests that are supposed to validate it: both can share the same mistaken assumption. A green test tells us little if the test was born from the same misunderstanding as the code.

A test is not merely a mechanism for executing code and obtaining a result.

It is also a statement about **what I believe the system should do**.

AI can help identify edge cases, produce data, suggest repetitive tests, and point to uncovered paths. But the criterion of correctness has to come from somewhere else: requirements, business rules, contracts, existing behaviour, and technical judgement.

The [NIST Secure Software Development Framework](https://csrc.nist.gov/pubs/sp/800/218/final) was not written specifically for coding assistants, but it is a useful reference because it places verification, review, and vulnerability reduction inside the development process rather than treating them as properties that can be assumed when an implementation is generated.

Empirical evidence also suggests caution. A study by Perry, Srivastava, Kumar, and Boneh, published at CCS 2023, found that in the security tasks they evaluated, participants using the studied assistant produced less secure code while also tending to be more confident in the security of the result. It is a study of a specific model and task set, not a universal law about every current assistant, but it shows why independent validation matters.

## Know the system, not only the code

The consequence that interests me most is another one: with AI, we need to understand the system **more**, not less.

Its architecture.

Its components.

Its dependencies.

Its data flows.

Its boundaries.

Its business rules.

How its services communicate.

Where state lives.

Where it can fail.

Which assumptions support what already exists.

When AI can generate a class, controller, endpoint, or migration almost instantly, knowing how to write those pieces still matters, but it is no longer the exclusive centre of the job.

Knowing **where they belong** becomes even more important.

The developer's unit of understanding moves upward: from the line of code to the system.

The [2025 DORA State of AI-assisted Software Development report](https://dora.dev/research/2025/dora-report/) is interesting here because it describes AI primarily as an amplifier. Teams and systems with strong foundations can turn local acceleration into better outcomes; weak foundations can have their problems amplified. The tool does not replace the system of work in which it is used.

## Meet the requirement: no more, no less

Finally, there is a much less glamorous responsibility: verifying that the solution does exactly what was requested.

**No more. No less.**

AI tends to be helpful. Sometimes too helpful.

Ask for an endpoint and it may propose an additional abstraction. Ask for a validation rule and suddenly there is a service, DTO, mapper, dependency, and new configuration class.

Each addition can look reasonable in isolation.

Together, they can create complexity nobody asked for.

Control also means knowing how to reject code that has no sufficient reason to exist.

Requirements therefore act as a boundary: what the system must do, what it must not do, which constraints it must respect, and which conditions allow us to consider the task complete.

The right solution is not the most impressive one. It is the one that satisfies the requirements with the least reasonable complexity while remaining understandable, verifiable, and maintainable.

## So, what control can we lose?

After thinking about it, my answer to that interview question would now be more precise.

AI does not make it inevitable that developers lose control.

It makes losing control **extraordinarily easy**.

We can produce code faster than we can read it. We can accept a library before investigating whether we need it. We can delegate an architectural decision without noticing. We can ask for tests for an implementation whose behaviour we have not yet defined clearly. We can mistake code volume for progress.

The challenge is not to compete with AI to see who can write faster.

It is to keep control of the decisions surrounding what AI produces:

which tools enter the system;

which architecture we are building;

what the code actually does;

what evidence demonstrates that it works;

and whether the result fulfils, no more and no less, what was requested.

AI can accelerate development enormously.

But speed without understanding is not control.

And every time writing code becomes cheaper, **understanding what we are building becomes more valuable**.

## References and further reading

- GitHub Docs, [“Review AI-generated code”](https://docs.github.com/en/copilot/tutorials/review-ai-generated-code). A practical guide to checking functionality, intent, quality, dependencies, and AI-specific pitfalls.
- DORA, [“State of AI-assisted Software Development 2025”](https://dora.dev/research/2025/dora-report/). Research on how AI amplifies existing capabilities and problems within software-development systems.
- NIST, [“Secure Software Development Framework (SSDF) Version 1.1”](https://csrc.nist.gov/pubs/sp/800/218/final). A general framework for secure development, verification, and vulnerability reduction.
- Neil Perry, Megha Srivastava, Deepak Kumar, and Dan Boneh, [“Do Users Write More Insecure Code with AI Assistants?”](https://par.nsf.gov/biblio/10472235-do-users-write-more-insecure-code-ai-assistants), CCS 2023. An experimental study of developer interaction with an AI code assistant in security-related tasks.
- Srivathsan G. Morkonda, Mahmoud Selim, and Hala Assal, [“Security of LLM-generated Code: A Comparative Analysis”](https://arxiv.org/abs/2605.23091), 2026. A recent preprint comparing vulnerabilities in code generated by several LLMs.
