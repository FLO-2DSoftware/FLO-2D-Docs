.. vim: syntax=rst

CHAPTER 5: TROUBLESHOOTING
===========================

Introduction
------------

When a FLO-2D storm drain model ends prematurely, it is probable that an error statement is written to the ERROR.CHK or to the STORMDRAIN_ERROR.CHK
files as well as to the report file (SWMM.RPT).
Even for successful simulations, the ERROR.CHK and STORMDRAIN_ERROR.CHK should be reviewed for warning messages.
All the potential errors that may be encountered cannot be anticipated, but some suggestions to reduce the conflicts and have a better understanding
of how to improve the storm drain model are presented:

- Number of inlets (SWMMFLO.DAT) should be equal to the number of nodes with an ID that starts with “I” (SWMM.inp).
  The QGIS plugin identify the inlets automatically.
  If a storm drain feature is added or deleted, the storm drain files need to be recreated to include the change.

- The SWMMOUTF.DAT file should be created through the QGIS plug-in, if the storm drain system has outfalls defined.
  If the number of outfalls is modified, the user must recreate the SWMMOUTF.DAT.

- Outfall to a channel must be assigned to the left bank channel element.

- The SWMMFLORT.DAT file needs to be created if Type 4 inlet rating tables or culvert conditions were assigned.

- The inlet rim elevation must be equal to the FLO-2D grid element floodplain elevation for horizontal inlets.
  Cell elevation is adjusted to the rim elevation at runtime and a warning message is generated.
  The user must make the adjustment permanent in FPLAIN.DAT and TOPO.DAT by deleting the files and renaming FPLAIN_SDElev.RGH and TOPO_SDElev.RGH as
  FPLAIN.DAT and TOPO.DAT.

- The path names of FLO-2D storm drain files are recommended to be less than 254 characters.
  Paths names approaching that number of characters may cause the storm drain model to crash.
  The filenames and paths are defined as character pointers in the storm drain model so there is no text length issue but there are several opening and
  write statements in the output files that include format specifiers that could trigger this problem.
  If this problem is reported in the output \*.CHK files, then run the model in a folder with a short path and a simplified name.

FLO-2D Error Messages
---------------------

Error/warning messages are listed in the ERROR.CHK file.
The most important messages are listed in Table 20.

.. image:: ../img/Storm_Drain_Modeling_Guidelines/Chapter5/image1a.png
.. image:: ../img/Storm_Drain_Modeling_Guidelines/Chapter5/image1b.png

SWMM error messages
-------------------

Table 21 lists the errors reported by SWMM (Rossman, 2005) to the SWMM.RPT file as well as to the STOMRDRAIN_ERROR.CHK file.
Some of these errors may not be relevant to the FLO-2D storm drain model.
The internal error code is reported in SWMM.RPT.
If the end user needs help with a code, provide this code to the FLO-2D team along with the swmm.inp file and any other relevant file.

.. image:: ../img/Storm_Drain_Modeling_Guidelines/Chapter5/image2a.png
.. image:: ../img/Storm_Drain_Modeling_Guidelines/Chapter5/image2b.png
.. image:: ../img/Storm_Drain_Modeling_Guidelines/Chapter5/image2c.png


Dynamic Link Library VC2005-CON.DLL
-----------------------------------

VC2005-CON.dll is the dynamic link library (engine) that runs the storm drain system in the FLO-2D model.
When updating FLOPRO.exe, it is necessary to update VC2005-CON.dll.
An out-of-date DLL library may cause a crash error or inconsistent results.
The VC2005-CON.dll file (based on the file date) should be current in the following directories:

- C:\\Program Files (x86)\\FLO-2D PRO

The versions of the FLO-2D and the Storm Drain versions are reported in the STORMDRAIN_ERROR.CHK file, see example below.

   \**\* FLO-2D Pro Model - Build No.20.07.22 \**\*

   \**\* Storm Drain Model - Build No.20.07.22 \**\*

Volume Conservation and Numerical Instability
---------------------------------------------

When a model run is completed, volume conservation is reported in the SWMM.RPT file under Flow Routing Continuity.
The FLO-2D model volume conservation results are written in the SUMMARY.OUT file.
Volume conservation represents the difference between the inflow volume and the outflow plus storage volumes for the system.
The storm drain system should be reviewed if the mass continuity error in SWMM.RPT exceeds some reasonable level, such as plus or minus 1 percent.
The original SWMM model might have volume conservation errors as high as 10 percent and this should not occur with the FLO-2D storm drain model.
Excessive volume conservation error is primarily the result of short conduit lengths.
It is recommended that the minimum pipe length be at least the size of the FLO-2D grid element side.
The volume conservation errors, and numerical instabilities may be reduced or eliminated by:

- Increasing pipe roughness n-values.

- Reviewing the selection of reporting timestep (REPORT_STEP) in the SWMM.inp file and the simulation time (TOUT) in the CONT.DAT file.

- Reviewing the system connectivity for adverse slopes and incorrect inlet geometry.

Reviewing the interaction of key features between the surface and the storm drain models.

The most common sources of numerical instability are:

- Short conduits.

- Conflicting or poor system connectivity in the pipe network.

Discharge oscillations at inlets primarily occur when the pipe system is under pressure (full capacity).
In the original SWMM model, when the pipe pressure exceeded the rim elevation, the inlet inflow discharge ceased and the water in the pipe could
either be lost to ‘flooding’ or stored in artificial ‘ponding’ to be returned to the pipe when capacity became available.
The artificial ponding routine was removed from the FLO-2D storm drain component.

For a given water surface elevation condition, the storm drain can receive inflow or discharge overflow to the surface water based on the pipe
capacity.
If the pipe is full, there is no inflow discharge for that computational timestep.
As the water flows through or out of the storm drain and pipe capacity becomes available, inlet inflow can occur.
The model will only allow inlet inflow if there is available capacity.
There is zero inflow if the storm drain system is full regardless of the surface water elevation above the rim.

High Flow Instability Indices (HFII)
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

The SWMM.RPT file lists those nodes of the drainage network that have the largest flow continuity errors.
The following is an example from a SWMM.RPT file:

 .. image:: ../img/Storm_Drain_Modeling_Guidelines/Chapter5/image3.png

To improve the volume conservation error, the links listed on the HFII table must be reviewed.
Fixing the top 5 listed HFII links usually result in a more stable model.
The index is the number of flow turns that exists in a link during the simulation.
A flow turn occurs when the difference between a new and old flow results in a perturbation which is defined as a significant flow difference or a
change in flow direction.

Timestep and Conduit Length
~~~~~~~~~~~~~~~~~~~~~~~~~~~

Like the Courant criteria used on the FLO-2D surface water model, stability issues can arise if the timestep is greater than about two times the
travel time through a pipe.
This would be comparable to the wave celerity being equal to about 1.5 times the average flow velocity V in the pipe.
To improve a model with numerical stability issues:

- A minimum conduit length of 20ft or the FLO-2D grid element side length is recommended.
  Pipes shorter than 20 ft are reported as a warning message in STORMDRAIN_ERROR.CHK.

- Dynamic wave routing numerical stability requires that the timestep be less than the time it takes for a dynamic wave (flow velocity plus wave
  celerity) to travel through the shortest conduit in the storm drain system.
  A maximum timestep of 1 second is sufficient for most storm drain simulations.
  The FLO-2D timesteps are used for both the surface water and the storm drain model and they are small enough for
  the storm drain solution to converge.
  A timestep calculation of a short pipe is:

  Conduit length ∆x = 20 ft

  Average conduit velocity V = 7.30 fps

  COURANTFP from CONT.DAT C = 0.6

  Wave celerity c = 1.5 x V

  Applying the Courant equation:

.. math::
   :label:

   \Delta t = \frac{C \, \Delta x}{C \, + \, V}


= 0.6 (20 ft) / (7.3 fps + 1.5 x 7.3 fps)

= 0.66 seconds

Unstable Results
~~~~~~~~~~~~~~~~

Oscillations that grow in time are a form of numerical instability.
The solution is not converging, and the following issues should be reviewed:

- A pipe is short relative to other adjacent pipes.
  A longer pipe length is recommended.
  A careful check of the storm drain connections in all contiguous connections of the unstable pipe should be completed prior to pipe length
  adjustments.

- Excessive discharges in adjacent downstream pipe elements generate an excessive decrease in the upstream water surface.

- A node dries on each timestep despite an increasing inflow.
  This is the result of excessive discharges in adjacent downstream pipe elements.

- Excessive velocities (over 20 ft/sec) and discharges grow without limit.
  Increase the pipe length or the pipe roughness.

- There is a large continuity error.
  If the continuity error exceeds ± 10%, the user should check the pipe results for zero flow or oscillating flow.
  This may indicate an improperly connected system.

In general, excessive discharge or pressure head oscillations that grows in time should be eliminated.
There are physical system configurations that might generate some oscillations, but these will usually decay over time.
Other modifications to reduce storm drain numerical instability include:

- Increasing pipe roughness.

- Decreasing pipe slope.

- Increasing or adjusting pipe geometry.

- Eliminating a junction between two short pipe sections.

- Reducing or eliminating connections to isolate the unstable portion of the pipe network.

Conservatively high n-values (0.1 and higher) have been used to reduce pipe network instability.
Uncertainty associated with pipe material, obstructions, debris, pipe bends, junction entrance and exit losses, and unsteady flow may warrant the
application of conservative n-values.
The numerical stability will improve with n-values higher than those typically assigned to straight pipes with uniform geometry in a steady flow
condition.
To save time, there are two checks that can be made prior starting a complete simulation:

1. Perform a short test run to confirm that the system passes internal checks.

2. Review the node inverts to make sure that they are at same elevation as the invert of the lowest pipe entering or leaving the junction otherwise
   errors in the pipe hydraulics can occur.

For complex models, it is sometimes difficult to differentiate between oscillations that are produced by a numerical instability and those real
oscillations that represent rapid discharge flux linked to inlets, junctions, conduits, and outfall.
Resolving potential error sources requires an understanding of the project and model application.
Troubleshooting storm drain instability during the initial phase of a project can be accomplished with test runs.
To summarize, the following are some of the methods for reducing storm drain conduit routing instability:

1. Conservatively high n-values (up to 0.100) can be used to reduce pipe network dynamic instability.
   For a complex project, local conservative pipe n-values can reduce oscillations in return flows.

2. Eliminate short conduits in the simulation.
   Conduits should be longer than 20 ft (6 m) or at least the length of a FLO-2D grid element.
   A careful check of the storm drain connections in all contiguous connections of the unstable pipe should be completed prior to pipe length
   adjustments.

3. Investigate flooded or surcharged inlets.
   Storm drain systems may have local conditions that may be explained by analyzing the actual physical behavior of the system.
   For flooded or surcharge inlets or junctions displaying oscillations, upstream inlets should be examined to determine where the oscillations
   originate.

4. Review the system connectivity.
   Search for adverse slopes and incorrect inlet geometry.

5. Review the SWMM.rpt file for critical timestep elements and check the highest flow instability indexes (HFII).
   This index is normalized with respect to the expected number of flow reversals (turns) that would occur for a purely random series of values and can
   range from 0 to 150.
   Inflow and flooding hydrographs for the HFII elements should be checked for oscillations.
   Check upstream and downstream plots (flow, depth, velocity, Froude No., and capacity) of the links having the highest HFII's numbers.

6. Check for oscillations or instabilities associated with pumps.

7. If an instability or oscillation cannot be explained as a physical response of the system, then try to isolate the
   problem by changing roughness in contiguous links or by removing sections of the storm drain system.

8. Reduce the reporting timestep (30 s or smaller) when oscillations are identified to have a more complete picture of
   the dynamic behavior of the system.

The storm drain dynamic wave routing uses an explicit scheme numerical solution that may fluctuate or oscillate.
In the original SWWM model, most volume conservation errors were associated with numerical surging and typically
volume conservation errors of 10% or more were acceptable.
If the volume conservation error exceeds 1 % in the FLO-2D storm drain system, the model can be improved.
