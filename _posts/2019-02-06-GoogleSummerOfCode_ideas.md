---
layout: post
title: Google Summer of Code Ideas
categories: announcement
author: Peter Hill
description: Ideas List for the Google Summer of Code 2019
tags: projects
---

The BOUT++ Project is participating in the Google Summer of Code
(GSoC) 2019. GSoC is open to University students aged 18 or over.

If you are interested, see https://summerofcode.withgoogle.com/ for
more information.

## Ideas for Projects with BOUT++

Here is a non-exhaustive list for suggested projects. We are of course
open to ideas for projects not on this list!

1. Make [xarray](https://xarray.pydata.org/en/stable/) work with
   BOUT++. A [proof-of-concept
   exists](https://github.com/boutproject/xBOUT), but the majority of
   the BOUT++ post-processing library needs porting over.
2. Improving the Python wrapper to the C++ API by using
   e.g. [pybind11](https://github.com/pybind/pybind11) or similar.
3. Calling Python from BOUT++. This could use much of the same code
   (bindings, type conversion) as calling BOUT++ from Python. It would
   allow input files or physics models to use python expressions to
   extend the code.
4. Improve user extensibility of the library, by making all factories
   use the generic factory class. This would allow users to easily add
   things like solvers and boundary conditions in their physics
   models, without needing to modify the core library.
5. Self-describing data output format. Make the output data files
   easier to interpret for generic tools, by including more metadata
   in a standardised way. This would make the data easier to
   manipulate and work with. This complements, maybe is part of, the
   work on xarray.

