---
title: Let your users build Mongo aggregation pipelines
author: Ross Keenan
createdAt: 2023-02-19
description: A guide to building the backend for a secure Mongo aggregation builder
tags:
  - MongoDB
  - Zod
hide: true
---

<script>
	import Admonition from '$lib/components/admonition.svelte';
</script>

In this post, we'll build the backend for a secure Mongo aggregation builder. The tools here can be applied to any frontend, you just need to build the form that passes in the query inputs.

## Prerequisites

- Basic knowledge of MongoDB
  - And a MongoDB database (you can use <a target="_blank" href="https://www.mongodb.com/cloud/atlas">MongoDB Atlas</a> for free).
- A frontend that can send HTTP requests to your backend.
- Knowledge of <a target="_blank" href="https://zod.dev">Zod</a>.

## The problem

MongoDB is a document database that stores data in JSON-like documents. It has a powerful query language called the <a href="https://www.mongodb.com/docs/manual/reference/command/aggregate/" target="_blank">aggregation pipeline</a> - a series of stages that transform the documents in a collection. The aggregation pipeline is a great tool for querying data, but it can be difficult to let users build custom pipelines.

In this example, we'll use a collection of `Houses`. Each house has a few fields (conveniently, all of different data types!):

```ts
interface House {
	/** The name of the architect who built the house */
	architect: string;
	/** The price the house was sold / is selling for */
	price: number;
	/** Whether the house is currently occupied */
	occupied: boolean;
	/** The date the house was built */
	builtAt: Date;
}
```

We want to let users query the `Houses` collection on all combinations of these fields, sort them, and limit the number of results.
For example:

```ts
[
	{ $match: {
        architect: 'Frank Lloyd Wright',
        price: { $gt: 1000000 },
        occupied: true
        builtAt: { $gt: new Date('1990-01-01') }
     }},
	{ $sort: { builtAt: -1 } },
    { $limit: 10 }
];
```
