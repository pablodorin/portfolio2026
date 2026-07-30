---
id: "microservices-problems-and-complexity"
number: "03"
datePublished: "2026-07-28"
tags: ["Microservices","Architecture","Distributed Systems"]
language: "en"
slug: "microservices-when-they-solve-problems"
kicker: "AI and development"
cardCopete: "Microservices provide value when they solve real boundaries, not when they merely distribute complexity."
title: "Microservices: When They Solve Problems and When They Multiply Them"
copete: "Microservices can provide autonomy, scalability, and clearer ownership. They can also turn one understandable application into a network of deployments, contracts, failures, and operational dependencies."
bajada: "Microservices are not automatically a more advanced architecture. Their value depends on organisational boundaries, deployment needs, scale, team autonomy, and operational maturity. This article examines when distributing a system solves a real problem and when it merely distributes complexity."
---

## A microservice is an operational boundary

A microservice is not simply a large class converted into a small application. It is a bounded capability that can evolve and deploy with reasonable independence, owns explicit contracts, and has clear accountability. That independence covers code, data, observability, security, and operations. If every change requires coordination across the system, separation is mainly visual.

Line count does not define the boundary. A service can be small and poorly isolated, or broader and represent a coherent context. The useful question is which decision it can make autonomously and which knowledge it protects. Without a recognisable domain boundary, division adds communication without reducing coupling.

## Why teams choose microservices

Legitimate reasons include independent deployment, team autonomy, different scaling needs, and different rates of change. A capability with a particular load can scale without replicating the entire application. A team can deliver an improvement without waiting for a coordinated window, provided it preserves compatible contracts and accepts operational responsibility.

Less sound motivations also exist: following a trend, imitating a company at a different scale, or assuming that more services mean greater modernity. Architecture should answer a concrete pressure. If the problem does not require deployment independence, separate ownership, or load isolation, distribution may purchase costs without providing a useful capability.

## Bounded contexts come before the network

Bounded contexts help separate models and vocabularies that should not be confused. They are a domain-design tool, not an automatic instruction to create remote processes. Responsibilities, dependencies, and language should be identified first. A later decision can determine whether a boundary needs to become an independently deployable unit.

Separating too early fixes assumptions that have not yet been learned. A mistaken boundary produces frequent calls, duplicated data, and coordinated changes. A modular monolith allows teams to experiment with boundaries inside one deployment. When modules demonstrate real autonomy, extracting one can be an evolution rather than an initial wager.

## Distributed communication can fail

A local call is usually fast and fails immediately. A network call introduces latency, timeouts, message loss, retries, and partial responses. Every remote dependency expands the states the system must handle. Designing microservices means accepting that another component may be slow, unavailable, or running a different version.

Uncontrolled retries can duplicate operations or worsen overload. Idempotency, limits, circuit breakers, and degradation strategies are required. These mechanisms are not infrastructure details that arrive for free. They are part of product semantics because they determine what a person sees and which commitment the system maintains during failure.

## Consistency and transactions change character

Within one database, a transaction can maintain invariants using familiar tools. Across services, a business operation often crosses different owners and timelines. Eventual consistency may be suitable, but it requires explicit intermediate states, compensation, duplicate handling, and reconciliation. Not every process tolerates the same delay or uncertainty.

Trying to reproduce a global transaction through extensive coordination often reduces the autonomy being pursued. Explicit flows and a clear authority for each item of data are preferable. Events and sagas can help, but they also add tracing and recovery work. The choice requires precise business language, not only familiarity with a pattern.

## Operating the network is part of the architecture

More deployable units mean more pipelines, configurations, secrets, permissions, metrics, and alerts. Investigating failure requires correlation, distributed traces, and consistent logs. Without a reliable platform, a simple incident can become a search across services with different clocks, versions, and owners.

Testing changes as well. Unit tests remain necessary, but contract, integration, and selective end-to-end scenarios must complement them. Versioned APIs and events need compatibility during gradual deployments. Operational capability, not merely the ability to write services, determines whether the architecture will remain sustainable.

## The organisational cost is real

Autonomy requires teams capable of owning design, delivery, and operation. If a central group must approve every change or resolve every incident, distributed services do not create genuine ownership. Communication about standards, contracts, and evolution is also necessary. Independence does not mean isolation between people.

Every service adds permanent work: upgrades, vulnerabilities, capacity, support, and retirement. That cost can be justified when it enables genuinely independent teams and rhythms. In small organisations or unstable products, it may consume energy that should be spent understanding users and domain. Organisational maturity is an architectural condition.

## When to choose a modular monolith

A modular monolith is often preferable while the domain is changing, the team is small, scale is moderate, and coordinated deployment does not constrain the business. It can provide clear boundaries, fast tests, simple transactions, and understandable operations. Monolith does not mean disorganised code; modularity and discipline remain essential.

Microservices are justified when stable contexts, autonomous teams, independent deployment pressure, differentiated scaling profiles, and mature operational capability exist. The decision should follow evidence, not prestige. Good architecture removes unnecessary complexity and places inevitable complexity where it can be managed. Fashion does the opposite by distributing problems before understanding them. Architecture should remain a response to context rather than become a fashionable technical identity.
