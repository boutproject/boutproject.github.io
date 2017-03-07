---
title: Turbulence and transport in tokamaks
image: mast-u.png
caption: Hermes simulation of MAST-Upgrade
description: Physics model of turbulence and transport in tokamaks using BOUT++
nav-state: applications
---

The [Hermes model](https://github.com/boutproject/hermes) combines transport and turbulence in one self-consistent model.
It is under development, but includes electric fields and drifts, neoclassical transport, neutral gas interactions, and
instabilities including ballooning modes and resistive drift waves which lead to turbulent transport. It can be run
in a "transport" mode in 2D (axisymmetric) geometry with specified cross-field diffusion coefficients, or in 3D
with cross-field transport determined by the turbulence.
