---
title: "A quick note on math notation"
date: "2026-06-28"
description: "A tiny demo post showing that inline and block LaTeX render correctly with KaTeX."
---

One reason I moved this blog to Gatsby was to write math without fighting the
tooling. This post exists mostly to prove it works.

Inline math is easy: the area of a circle is $A = \pi r^2$, and Euler's identity
$e^{i\pi} + 1 = 0$ still feels like a magic trick.

Block equations get their own line. Here is the Gaussian integral:

$$
\int_{-\infty}^{\infty} e^{-x^2} \, dx = \sqrt{\pi}
$$

The Basel problem, which took the best mathematicians of the 1600s decades to
crack:

$$
\sum_{n=1}^{\infty} \frac{1}{n^2} = \frac{\pi^2}{6}
$$

And because it is the obligatory example, mass–energy equivalence:

$$
E = mc^2
$$

To write your own, wrap inline math in single dollar signs (`$...$`) and block
math in double dollar signs (`$$...$$`) on their own lines. That's the whole
workflow.
