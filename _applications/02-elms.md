---
title: Edge Localised Modes (ELMs)
image: elm-pb.png
description: Edge Localised Mode (ELM) physics model in BOUT++
nav-state: applications
---

[ELMs](https://doi.org/10.1088/0741-3335/38/2/001) are instabilities driven by pressure gradients and currents
at the edge of high performance tokamak plasmas. They result in repetitive bursts which could result in large
heat heat loads on the walls of large tokamaks, and so are a concern for [ITER](http://www.iter.org/).

The [elm-pb model](https://github.com/boutproject/BOUT-dev/tree/master/examples/elm-pb) included in the BOUT++ repository
solves a 4-field model for pressure, vorticity, the parallel component of the plasma velocity and electromagnetic potential.
It has been used for studies of ELM eruptions, mainly in circular geometry plasmas.
