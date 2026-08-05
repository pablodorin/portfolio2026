---
id: "technical-debt-what-it-is-and-what-it-isnt"
number: "06"
datePublished: "2026-08-05"
tags: ["Software Engineering","Technical Debt","Maintainability","Architecture","AI-Augmented Development"]
language: "en"
slug: "technical-debt-what-it-is-and-what-it-isnt"
kicker: "Software engineering and maintainability"
cardCopete: "Technical debt is often used as a synonym for old, imperfect or unpleasant code. That imprecision makes the concept less useful precisely when teams need it most."
title: "Technical Debt: What It Is - and What It Isn’t"
copete: "Technical debt is not every bug, obsolete dependency or inelegant implementation. It exists when a technical condition makes future work more expensive than it should be, while a credible way of reducing that cost remains deferred."
bajada: "The debt metaphor can help teams decide when speed is worth a future cost, when refactoring will repay itself, and which problems can safely remain untouched. Used carelessly, however, it turns into a moral judgement about code. This article separates debt from ordinary imperfection and examines why AI-generated code makes that distinction increasingly important."
disclosure: "Originally written in English. The Spanish and French versions were translated with AI assistance and are pending the author’s final linguistic review."
---

## A useful metaphor that became a vague accusation

Few expressions in software development are used as frequently and defined as loosely as *technical debt*.

A difficult module is called debt. An old application is called debt. Missing documentation, a defect, an outdated library and a design that a new architect dislikes may all receive the same label. Eventually, technical debt comes to mean little more than “something technical we would prefer to change”.

That is not what made the metaphor useful.

Ward Cunningham introduced the debt analogy while describing the incremental development of the WyCash system in 1992. His argument was not that every imperfect implementation represented professional failure. Initial code could help a team learn and deliver sooner. The danger appeared when that first understanding was never consolidated and every subsequent change had to work around it.

The financial comparison gave teams a way to discuss time. A solution can provide value now while creating a cost later. That cost may be acceptable, just as borrowing can be reasonable, but it does not disappear because the original decision was justified.

Technical debt is therefore not a synonym for bad code. It is a way of describing the relationship between a technical condition, its short-term benefit and its continuing future cost.

## Principal, interest and risk

The metaphor becomes clearer when its three components are separated.

The **principal** is the work required to remove or substantially reduce the debt. It may involve redesigning a module, replacing a temporary integration, consolidating duplicated logic, adding a missing test boundary or migrating away from a constraining dependency.

The **interest** is the additional cost paid while the condition remains. Every feature takes longer. Every correction must be repeated in several places. Developers need extra time to understand the flow. Testing becomes more difficult, releases require more caution, and knowledge concentrates in the few people who know where the traps are.

The **risk** is the uncertain part of the cost. The workaround may survive quietly, or it may fail during the most important release of the year. A tightly coupled architecture may remain stable until a new regulation requires one component to change independently. Security, reliability and operational problems often make the interest irregular: small for months and suddenly enormous.

Imagine that an order-processing service needs a new validation rule. The fastest solution is to copy the rule into three endpoints. It works, the release goes out, and the business receives value. Six months later, the rule changes. The team must discover all three copies, update them consistently and test every path. That repeated effort is interest. Consolidating the rule behind one explicit policy, with appropriate tests, is repayment of principal.

If no future change ever touches those endpoints, the debt may produce almost no interest. This is why technical debt cannot be measured only by looking at the code. Its cost depends on the future of the product.

## What technical debt is not

The easiest way to preserve the meaning of technical debt is to identify what does not automatically qualify.

**Old or legacy code**

Age does not create debt by itself. A twenty-year-old component that performs a stable function, rarely changes and causes no operational burden may have little economic reason to be rewritten. A six-week-old service that slows every release may already carry substantial debt.

*Legacy* describes inheritance: software received from an earlier period, team or technological context. It may contain debt, but the two concepts are not equivalent.

**A bug**

A bug is observable incorrect behaviour. Technical debt is a condition that increases the cost or risk of maintaining and evolving the system. Debt can cause defects, and a rushed fix can create debt, but the defect and the debt are not the same object.

Correcting a wrong tax calculation removes a bug. Redesigning the duplicated tax logic that repeatedly produces inconsistent calculations may repay debt.

**Complicated code**

Some domains are genuinely complicated. Banking rules, insurance products, logistics networks and identity systems contain distinctions that cannot be removed by elegant syntax. Complexity that belongs to the problem is not automatically debt.

The relevant question is whether the implementation introduces *avoidable* difficulty beyond the complexity of the domain. Simplifying code by erasing necessary business distinctions may reduce its apparent complexity while making the software less correct.

**Missing functionality**

A feature that has not been built belongs primarily to the product backlog. It becomes a technical-debt question only when an existing technical decision makes that future feature unnecessarily difficult or when deliberately omitted engineering work creates continuing maintenance costs.

**Code someone dislikes**

Style preferences, unfamiliar patterns and architectural disagreement are not enough. A team should be able to explain the future cost, the likely interest and the possible repayment. Without that explanation, “technical debt” can become a rhetorical weapon used to give personal taste the appearance of economic necessity.

## Debt does not require negligence

Technical debt is often discussed as evidence that somebody worked carelessly. That interpretation is too simple.

A team may knowingly accept debt to meet a regulatory deadline, test a market, restore a critical service or learn what customers actually need. Building a temporary adapter can be more responsible than delaying an entire release while designing a permanent integration for requirements that may change next month.

Debt can also be inadvertent. Engineers may initially misunderstand the domain and discover a better model only after the software is used. Martin Fowler’s technical-debt quadrant distinguishes deliberate from inadvertent debt and prudent decisions from reckless ones. The distinction matters because not all debt has the same origin, but even prudent debt can accumulate interest.

Some debt also emerges from change. A design that matched the organisation and workload five years ago may become restrictive after acquisitions, new regulations or a hundredfold increase in traffic. The original decision need not have been wrong for the current system to impose a new cost.

The proper question is not “Who created this bad code?” It is “What cost does this condition impose now, what future changes are likely, and what should we do about it?”

## Technical debt is an economic decision

Not every debt should be repaid immediately.

Suppose a module would require two weeks of refactoring, but the product will be retired in three months and no substantial changes are expected. Repayment may be technically satisfying and economically irrational. Conversely, a problematic component scheduled to receive ten new features may justify refactoring before the next one begins.

A useful assessment starts with five questions:

1. What future work does this condition make slower, riskier or more expensive?

2. How frequently is that work likely to occur?

3. What is the expected interest if nothing changes?

4. What would it cost to reduce or remove the condition?

5. What product, operational or business risk exists while we wait?

These questions turn an accusation into a decision. They also reveal why counting code smells is not the same as measuring debt. Static analysis can identify duplication, coupling, complexity or test gaps, but it cannot know by itself which parts of the system the business will need to change.

Debt should be prioritised by interest and risk, not by ugliness.

## AI makes production cheaper, not maintenance free

Generative AI changes the economics of creating software. A developer can request an endpoint, migration, test suite or integration and receive a plausible implementation in seconds. That can produce genuine value, but it can also separate the cost of writing code from the cost of owning it.

An AI model can generate another abstraction instead of finding the existing one. It can reproduce business logic in a new service, introduce a dependency for a small problem, create tests that confirm its own assumptions, or implement a locally coherent change that conflicts with the architecture of the wider system. Each individual result may look reasonable. The accumulated system may become harder to understand.

The problem is not that AI-generated code is automatically debt. Human-written code is not automatically sound, either. Debt appears when generated code creates avoidable future costs and is accepted faster than the team can understand, integrate and validate it.

This produces a new imbalance: code generation accelerates, while review, architectural comprehension and accountability remain constrained. If teams measure productivity by the amount of code produced or the number of tickets closed, they may interpret the creation of future interest as present efficiency.

AI can also help repay debt. It can map dependencies, explain unfamiliar modules, propose focused refactorings, generate characterisation tests and compare repeated implementations. But it cannot independently determine which debt matters most. That decision depends on expected product changes, organisational knowledge, risk tolerance and the cost of being wrong.

The scarce resource is no longer the ability to produce a possible implementation. It is the ability to decide whether that implementation deserves to become part of the system.

## Managing debt without pursuing perfection

A healthy codebase is not a debt-free codebase. It is one in which important debt is visible, its interest is understood and repayment competes honestly with other work.

When debt is accepted deliberately, the team should record more than a vague promise to “clean it up later”. It should identify the shortcut, the reason it was taken, the boundary it affects and the event that should trigger reconsideration. That trigger may be a new customer, a traffic threshold, a second implementation of the same rule or the next planned change to the component.

Repayment does not always require a rewrite. It may mean adding a test seam before changing a module, consolidating one duplicated rule, isolating an external dependency or documenting a decision that otherwise exists only in one person’s memory. Small repayments can reduce interest without creating the risk of a large transformation.

The objective is not technical purity. Software exists to support a purpose, and engineering resources are finite. The objective is to prevent short-term speed from becoming a permanent tax that nobody chose and nobody can explain.

## Debt is not a moral category

Technical debt is not proof of incompetence. It is not every imperfection in a system, and it is not an argument that refactoring must always take priority over delivery.

It is a temporal and economic relationship: a technical condition was created or retained under earlier constraints or limited understanding, while its continued existence now creates avoidable future cost. The principal is the work needed to change it. The interest is the additional effort paid while it remains. The risk is what may happen before repayment.

Used precisely, the metaphor helps developers, managers and business stakeholders discuss trade-offs in a common language. Used carelessly, it merely renames everything engineers dislike.

The goal is not to eliminate all debt. It is to know what has been borrowed, understand what it is costing, and decide deliberately whether to repay it, continue carrying it or remove the part of the system that makes the debt relevant.

## References

- Ward Cunningham, [“The WyCash Portfolio Management System”](https://c2.com/doc/oopsla92.html), OOPSLA 1992. The original paper in which Cunningham introduced the debt metaphor in the context of incremental development and consolidation.

- Martin Fowler, [“Technical Debt”](https://martinfowler.com/bliki/TechnicalDebt.html), 2019. A practical explanation of principal, interest and the economic decision to remove internal deficiencies.

- Martin Fowler, [“Technical Debt Quadrant”](https://martinfowler.com/bliki/TechnicalDebtQuadrant.html), 2009. A classification of deliberate and inadvertent, prudent and reckless debt.
