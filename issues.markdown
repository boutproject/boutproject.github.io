---
layout: default
title: Issues 
nav-state: issues
---

# Contributing to BOUT++

If you would like to help contribute to BOUT++ then there are many things
you can do which will make a difference. There are projects large and small 
which a student or researcher could use to get started with BOUT++ and
get more familiar with the code. You don't need to be particularly familar
with BOUT++ or C++ to work on many of these.

Some outstanding issues are listed below, divided into problems suitable for
beginners; those which need some familiarity with the code; and those
which may come under the heading of ongoing research. As these issues are fixed
they can be added to the [changes](changes.html) page, along with suitable attribution.

# Beginner

* Finding errors and inconsistencies in the user manual. As you're learning to use the code,
  note which parts of the manual are incorrect or incomplete. Once you figure out 
  (or are told) the solution to your problem, you could write it up in the manual.
  The coordinates manual also contains many derivations and useful identities, some of which
  are probably incorrect. If you find errors or derive additional useful quantities,
  please update the manual.
* Python routines for post-processing. 
* Pre- and post-processing routines to couple to MDSplus or other external database. 
* Write a pre-processing code (in Python preferably) which finds the valid numbers of processors
  for a given mesh.


# Intermediate

* Parallel input / output

# Advanced

* Interface to the [Hypre](http://computation.llnl.gov/casc/linear_solvers/sls_hypre.html) library, including
  3D geometry, branch-cuts and twist-shift condition. This would allow solution to more general boundary-value problems
  arising from polarisation equations and preconditioning.
* Generalise the mesh so that the number of points in X and Y can vary between processors.
