.. vim: syntax=rst

Chapter 5
===========

Troubleshooting
^^^^^^^^^^^^^^^

Introduction
''''''''''''

When a FLO-2D storm drain model ends prematurely, it is probable that an error statement is written to the ERROR.CHK or to the STORMDRAIN_ERROR.CHK
files as well as to the report file (SWMM.RPT).
Even for successful simulations, the ERROR.CHK and STORMDRAIN_ERROR.CHK should be reviewed for warning messages.
All the potential errors that may be encountered cannot be anticipated, but some suggestions to reduce the conflicts and have a better understanding
of how to improve the storm drain model are presented:

    - Number of inlets (SWMMFLO.DAT) should be equal to the number of nodes with an ID that starts with “I” (SWMM.inp).
      The QGIS plugin and the GDS identify the inlets automatically.
      If a storm drain feature is added or deleted, the storm drain files need to be recreated to include the change.
    - The SWMMOUTF.DAT file should be created through the QGIS plug-in or the GDS, if the storm drain system has outfalls defined.
      If the number of outfalls is modified, the user must recreate the SWMMOUTF.DAT.
    - Outfall to a channel must be assigned to the left bank channel element.
    - The SWMMFLORT.DAT file needs to be created if Type 4 inlet rating tables were assigned.
    - The inlet rim elevation has to be equal to the FLO-2D grid element floodplain elevation for horizontal inlets.
      Cell elevation is adjusted to the rim elevation at runtime and a warning message is generated.
      The user has to make the adjustment permanent in FPLAIN.DAT and TOPO.DAT by deleting the files and renaming FPLAIN_SDElev.RGH and TOPO_SDElev.RGH as
      FPLAIN.DAT and TOPO.DAT.
    - The path names of FLO-2D storm drain files are recommended to be less than 254 characters.
      Paths names approaching that number of characters may cause the storm drain model to crash.
      The filenames and paths are defined as character pointers in the storm drain model so there is no text length issue but there are several opening and
      write statements in the output files that include format specifiers that could trigger this problem.
      If this problem is reported in the output \*.CHK files, then run the model in a folder with a short path and a simplified name.

FLO-2D Error Messages
'''''''''''''''''''''

Error/warning messages are listed in the ERROR.CHK file.
The most important messages are listed in Table 17.

   **Table 17.
   FLO-2D Error Messages**

.. list-table::
   :widths: 50 50
   :header-rows: 0


   * - **Issue**
     - **Message in ERROR.CHK**

   * - Channel bed elevation.
     - THERE ARE STORM DRAIN INLETS ON CHANNEL GRID ELEMENTS.

       THE CHANNEL BED ELEVATION MIGHT BE DIFFERENT  THAN THE INVERT ELEVATION.

       NO ACTION WAS TAKEN DURING THE SIMULATION.

       PLEASE REVIEW AND REVISE IF NECESSARY.

   * - Elevations for outfall nodes.
     - THE STORM DRAIN OUTFALL INVERT ELEVATION SHOULD BE  EQUAL TO OR GREATER

       THAN THE FLOODPLAIN, CHANNEL, STREET ELEVATION.

       NO ACTION IS TAKEN.
       PLEASE REVIEW AND REVISE IF NECESSARY.

   * - Outfall node in channelinterior element.
     - THE FOLLOWING STORM DRAIN OUTFALL NODES ARE IN CHANNEL INTERIOR ELEMENTS,

       RE-ASSIGN TO THE CHANNEL ELEMENTS IN CHAN.DAT.

   * - Outfall node assigned to aFLO-2D outflow element.
     - THERE IS AN OUTFLOW NODE AND A STORM DRAIN OUTFALL ASSIGNED TO THE SAME GRID CELL.

   * - Grid element floodplain has tobe revised.
     - THE GRID ELEMENT FLOODPLAIN WAS REVISED DURING THE SIMULATION TO THE STORM DRAIN

       INLET RIM ELEVATIONS FOR THE FOLLOWING GRID ELEMENTS (PLEASE REVIEW

       AND REVISE FPRIMELEV.OUT FILE IF NECESSARY).

   * - Horizontal type 4 storm draininlet elevations.
     - THE HORIZONTAL TYPE 4 STORM DRAIN INLET ELEVATIONS  WERE REVISED DURING THE

       SIMULATION TO THE STORM  DRAIN INLET RIM ELEVATIONS FOR THE FOLLOWING GRID

       ELEMENTS (PLEASE REVIEW AND REVISE FPRIMELEV.OUT FILE IF NECESSARY).

   * - Type 4 inlet is a verticalinlet and it is in afloodplain cell.
     - THE GRID ELEMENT ELEVATIONS IN "FLOODPLAIN  SWALES" WERE REVISED DURING THE

       SIMULATION TO THE TYPE 4 VERTICAL INLET INVERT ELEVATIONS.

       PLEASE REVIEW FPRIMELEV.OUT FILE.

       .. note:: If a floodplain swale is discharging into a storm drain pipe or culvert,

                 the invert elevation should be equal to the swale bed elevation.

   * - Type 4 inlet is a verticalinlet and it is in a channelcell.
     - THERE ARE VERTICAL TYPE 4 INLETS ASSIGNED TO CHANNEL ELEMENTS AND THE CHANNEL BED

       ELEVATION IS DIFFERENT THAN THE INVERT ELEVATION.

       NO ACTION WAS TAKEN DURING THE SIMULATION.

       PLEASE REVIEW AND REVISE IF NECESSARY.

       .. note:: If an inlet is assigned to the end of a 1-D channel segment and the channel

                 flow discharges into the storm drain, the invert elevation should

                 equal to the channel bed elevation.

   * - No elevation differencesbetween surface and stormdrain layers.
     - NOTE: THERE ARE NO DIFFERENCES BETWEEN FLOODPLAIN GRID AND STORM DRAIN RIM ELEVATIONS.

       .. note:: THERE ARE NO DIFFERENCES BETWEEN FLOODPLAIN GRID AND TYPE 4 INVERT INLET

                 ELEVATIONS. FPRIMELEV.OUT FILE WAS NOT CREATED.

   * - Elevations are revised.
     - THE GRID ELEMENT FLOODPLAIN OR STREET ELEVATIONS WERE  REVISED DURING THE SIMULATION

       TO THE STORM DRAIN IN-  LET RIM ELEVATIONS FOR THE FOLLOWING GRID

       ELEMENTS  (PLEASE REVIEW THE FPRIMELEV.OUT FILE)

   * - More than one storm draininlet is assigned to one gridelement.

       Simulation does notstart.

     - THERE ARE POTENTIAL DATA ERROR(S) IN FILE SWMM.inp AND  SWMMFLO.DAT.

       MULTIPLE INLETS ASSIGNED TO ONE GRID CELL

   * - Multiple cells are assigned toone inlet.

       Simulation does notstart.

     - MULTIPLE CELLS ASSIGNED TO ONE INLET

   * - Missing storm drain inletgeometry or inappropriategeometry, simulation does notstart.

     - THERE ARE A MISSING OR INAPPROPIATE STORM DRAIN INLET  GEOMETRY IN FILE: SWMMFLO.DAT.

       REVIEW STORM DRAIN  INLET: XX, DRAIN TYPE: IX ON GRID CELL: XXX

   * - Missed or inappropriategeometry.
     - 'LENGTH MUST BE GREATER THAN ZERO'  'WIDTH OR HEIGHT MUST BE GREATER THAN ZERO'

       'PERIMETER MUST BE GREATER THAN ZERO'  'TYPICAL WEIR COEFFICIENT:

       2.3'  'TYPICAL WEIR COEFFICIENT RANGE: 2.8 - 3.2'

   * - General Error in SWMM Model.
     - COMPUTATIONAL ERROR IN SWMM MODEL: REVIEW \*.RPT FILE FOR THE ERROR DESCRIPTION

   * - General Error in SWMM Modelreported to the ERROR.CHK fileand to theSTORMDRAIN_ERROR.CHK.
     - THERE IS AN ERROR IN THE SWMM MODEL.

       PLEASE REVIEW  THE FOLLOWING ERROR CODE IN THE SWMM ERROR LIST OR  CONTACT

       THE FLO-2D TEAM FOR SUPPORT  Error Code: XXX. (See Table 18 below.)


SWMM error messages
'''''''''''''''''''

Table 18 lists the errors reported by SWMM (Rossman, 2005) to the SWMM.RPT file as well as to the STOMRDRAIN_ERROR.CHK file.
Some of these errors could be not relevant to the FLO-2D storm drain model.

   **Table 18.
   SWMM Error Numbers.**

.. list-table::
   :widths: 50 50
   :header-rows: 0


   * - Storm DrainEngine ErrorNumber
     - Description of the error

   * - 101
     - Memory allocation error

   * - 103
     - Cannot solve KW equations for Link

   * - 105
     - Cannot open ODE solver

   * - 107
     - Cannot compute a valid time step

   * - 108
     - Ambiguous outlet ID name for subcatchment

   * - 109
     - Invalid parameter values for aquifer

   * - 110
     - Ground elevation is below water table for Subcatchment

   * - 111
     - Invalid length for conduit

   * - 112
     - Elevation drop exceeds length for conduit

   * - 113
     - Invalid roughness for conduit

   * - 114
     - Invalid number of barrels for conduit

   * - 115
     - Adverse slope for conduit

   * - 117
     - No cross section defined for link


.. list-table::
   :widths: 50 50
   :header-rows: 0


   * - 119
     - Invalid cross section for link

   * - 121
     - Missing or invalid pump curve assigned to pump

   * - 131
     - The following links form cyclic loops in the drainage system

   * - 133
     - Node xxx has more than one outlet link

   * - 134
     - Node has illegal DUMMY link connections

   * - 135
     - Divider xxx does not have two outlet links

   * - 136
     - Divider xxx has invalid diversion link

   * - 137
     - Weir Divider xxx has invalid parameters

   * - 138
     - Node xxx has initial depth greater than maximum depth

   * - 139
     - Regulator xxx is the outlet of a non-storage node

   * - 141
     - Outfall xxx has more than 1 inlet link or an outlet link

   * - 143
     - Regulator xxx has invalid cross-section shape

   * - 145
     - Drainage system has no acceptable outlet nodes

   * - 151
     - A Unit Hydrograph in set xxx has invalid time base

   * - 153
     - A Unit Hydrograph in set xxx has invalid response ratios

   * - 155
     - Invalid sewer area for RDII at node

   * - 156
     - Inconsistent data file name for rain gage

   * - 157
     - Inconsistent rainfall format for rain gage


.. _`158`:

158:

Time series for rain gage xxx is used by another object

.. _`159`:

159:

Recording interval > time series interval for Rain Gage

.. _`161`:

161:

Cyclic dependency in treatment functions at node

.. _`171`:

171:

Curve xxx has invalid or out of sequence data

.. _`173`:

173:

Time series xxx has its data out of sequence

.. _`181`:

181:

Invalid snow melt climatology parameters

.. _`182`:

182:

Invalid parameters for snow pack

.. _`183`:

183:

No type specified for LID

.. _`184`:

184:

Missing layer for LID

.. _`185`:

185:

Invalid parameter value for LID

.. _`186`:

186:

Invalid parameter value for LID placed in subcatchment

.. _`187`:

187:

LID area exceeds total area for subcatchment

.. _`188`:

188:

LID capture area exceeds impervious area for subcatchment

.. _`191`:

191:

Simulation start date comes after ending date

.. _`193`:

193:

Report start date comes after ending date

.. _`195`:

195:

Reporting time step or duration is less than routing time step

.. _`200`:

200:

One or more errors in input file

.. _`201`:

201:

Too many characters in input line


.. list-table::
   :widths: 50 50
   :header-rows: 0


   * - 203
     - Too few items

   * - 205
     - Invalid keyword xxx

   * - 207
     - Duplicate ID name xxx

   * - 209
     - Undefined object xxx

   * - 211
     - Invalid number xxx

   * - 213
     - Invalid date/time xxx

   * - 217
     - Control rule clause out of sequence

   * - 219
     - Data provided for unidentified transect

   * - 221
     - Transect station out of sequence

   * - 223
     - Transect xxx has too few stations

   * - 225
     - Transect xxx has too many stations

   * - 227
     - Transect xxx has no Manning's n

   * - 229
     - Transect xxx has invalid overbank locations

   * - 231
     - Transect xxx has no depth

   * - 233
     - Invalid treatment function expression

   * - 301
     - Files share same names

   * - 303
     - Cannot open input file

   * - 305
     - Cannot open report file


.. _`307`:

307:

Cannot open binary results file

.. _`309`:

309:

Error writing to binary results file

.. _`311`:

311:

Error reading from binary results file

.. _`313`:

313:

Cannot open scratch rainfall interface file

.. _`315`:

315:

Cannot open rainfall interface file

.. _`317`:

317:

Cannot open rainfall data file

.. _`318`:

318:

Date out of sequence in rainfall data file

.. _`319`:

319:

Invalid format for rainfall interface file

.. _`321`:

321:

No data in rainfall interface file for gage

.. _`323`:

323:

Cannot open runoff interface file

.. _`325`:

325:

Incompatible data found in runoff interface file

.. _`327`:

327:

Attempting to read beyond end of runoff interface file

.. _`329`:

329:

Error in reading from runoff interface file

.. _`330`:

330:

Hotstart interface files have same names

.. _`331`:

331:

Cannot open hotstart interface file

.. _`333`:

333:

Incompatible data found in hotstart interface file

.. _`335`:

335:

Error in reading from hotstart interface file

.. _`336`:

336:

No climate file specified for evaporation and/or wind speed


.. list-table::
   :widths: 50 50
   :header-rows: 0


   * - 337
     - Cannot open climate file

   * - 338
     - Error in reading from climate file

   * - 339
     - Attempt to read beyond end of climate file

   * - 341
     - Cannot open scratch RDII interface file

   * - 343
     - Cannot open RDII interface file

   * - 345
     - Invalid format for RDII interface file

   * - 351
     - Cannot open routing interface file

   * - 353
     - Invalid format for routing interface file

   * - 355
     - Mismatched names in routing interface file

   * - 357
     - Inflows and outflows interface files have same name

   * - 361
     - Could not open external file used for time series

   * - 363
     - Invalid data in external file used for time series

   * - 401
     - General system error

   * - 402
     - Cannot open new project while current project still open

   * - 403
     - Project not open or last run not ended

   * - 405
     - Amount of output produced will exceed maximum file size; either reduce Ending Date or increase


Up-

dating FLOPro.exe
'''''''''''''''''

To run a new FLO-2D model update (FLOPro.exe) but keep the previous version of the storm drain engine VC2005-CON.DLL for other projects, do the
following:

1. Rename the previous VC2005-CON.dll file as VC2005-CON_OLD.dll from all the specified locations (C:\\Program Files (x86)\\FLO-2D PRO,
   C:\\Windows\\System32 or C:\\Windows\\SysWOW64).

2. Copy the new VC2005-CON.dll into the project folder along with the new FLOPRO.exe.

Dynamic Link Library VC2005-CON.DLL
'''''''''''''''''''''''''''''''''''

VC2005-CON.dll is the dynamic link library (engine) that runs the storm drain system in the FLO2D model.
When updating FLOPRO.exe, it is necessary to update VC2005-CON.dll.
An out of date DLL library may cause a crash error or inconsistent results.
The VC2005-CON.dll file (based on the file date) should be current in the following directories:

- C:\\Program Files (x86)\\FLO-2D PRO

- C:\\Windows\\System32 [1]_

- C:\\Windows\\SysWOW64\ :sup:`1`

The versions of the FLO-2D and the Storm Drain versions are reported in the STORMDRAIN_ERROR.CHK file, see example below.

\**\* FLO-2D Pro Model - Build No.20.07.22 \**\*

\**\* Storm Drain Model - Build No.20.07.22 \**\*

Volume Conservation and Numerical Instability
'''''''''''''''''''''''''''''''''''''''''''''

When a model run is completed, volume conservation is reported in the SWMM.RPT file under

Flow Routing Continuity.
The FLO-2D model volume conservation results are written to the SUMMARY.OUT file.
Volume conservation represents the difference between the inflow volume and the outflow plus storage volumes for the system.
The storm drain system should be reviewed if the mass continuity error in SWMM.RPT exceeds some reasonable level, such as plus or minus 1 percent.
Ideally, this error should be less than 1 percent.
The original SWMM model might have volume conservation errors as high as 10 percent and this should not occur with the FLO-2D storm drain model.
Excessive volume conservation error is primarily the result of short conduit lengths.
It is recommended that the minimum pipe length be at least the size

of the FLO-2D grid element side.
Generally, the volume conservation errors and numerical instabilities may be reduced or eliminated by:

- Increasing pipe roughness n-values;

- Reviewing the selection of reporting timestep (REPORT_STEP) in the SWMM.inp file and the simulation time (TOUT) in the CONT.DAT file;

- Reviewing the system connectivity for adverse slopes and incorrect inlet geometry.

Reviewing the interaction at key features between the surface and the storm drain models.

The most common sources of numerical instability are:

- Short conduits;

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


The SWMM.RPT file lists those nodes of the drainage network that have the largest flow continuity errors.
The following is an example from a SWMM.RPT file:

High Flow Instability Indexes

\\*

Link C9 (9)

Link C8 (8)

Link C10 (7)

Link C7 (6)

Link C6 (6)

To improve the volume conservation error, the links listed on the HFII table have to be reviewed.
Fixing the top 5 listed HFII links usually result in a more stable model.
The index is the number of flow turns that exists in a link during the simulation.
A flow turn occurs when the difference between a new and old flow results in a perturbation which is defined as a significant flow difference or a
change in flow direction.

Timestep and Conduit Length


Similar to the Courant criteria used on the FLO-2D surface water model, stability issues can arise if the timestep is greater than about two times the
travel time through a pipe.
This would be comparable to the wave celerity being equal to about 1.5 times the average flow velocity V in the pipe.
To improve a model with numerical stability issues:

- A minimum conduit length of 20 ft or the FLO-2D grid element side length is recommended.
  Pipes shorter than 20 ft are reported as a warning message in the ERROR.CHK file and by the GDS.

- Dynamic wave routing numerical stability requires that the timestep be less than the time it takes for a dynamic wave (flow velocity plus wave
  celerity) to travel through the shortest conduit in the storm drain system.
  A maximum timestep of 1 second is sufficient for most storm drain simulations.
  The FLO-2D timesteps are used for both the surface water and the storm drain model and they are small enough for the storm drain solution to converge.
  A timestep calculation of a short pipe is:

..

   Conduit length ∆x = 20 ft

   Average conduit velocity V = 7.30 fps

   COURANTFP from CONT.DAT C = 0.6

   Wave celerity c = 1.5 x V

   Applying the Courant equation:

   ∆t = C ∆x/(V + c) = 0.6 (20 ft) / (7.3 fps + 1.5 x 7.3 fps) = 0.66 seconds

Unstable Results


Oscillations that grow in time are a form of numerical instability.
The solution is not converging, and the following issues should be reviewed:

- A pipe is short relative to other adjacent pipes.
  A longer pipe length is recommended.
  A careful check of the storm drain connections in all contiguous connections of the unstable pipe should be completed prior to pipe length
  adjustments.

- Excessive discharges in adjacent downstream pipe elements generate an excessive decrease in the upstream water surface.

- A node dries on each timestep despite an increasing inflow.
  This is the result of an excessive discharges in adjacent downstream pipe elements.

- Excessive velocities (over 20 ft/sec) and discharges grow without limit.
  Increase the pipe length or the pipe roughness.

- There is a large continuity error.
  If the continuity error exceeds ± 10%, the user should check the pipe results for zero flow or oscillating flow.
  This may indicate an improperly connected system.

In general, excessive discharge or pressure head oscillations should be eliminated.
There are physical system configurations that in reality might generate some instability oscillations, but these will usually decay over time.
Other possible modifications to reduce storm drain numerical instability include:

- Increasing pipe roughness;

- Decreasing pipe slope;

- Increasing or adjusting pipe geometry;

- Eliminating a junction between two short pipe sections;

- Reducing or eliminating connections to isolate the unstable portion of the pipe network.

Conservatively high n-values (0.1 and higher) have been used to reduce pipe network instability.
Uncertainty associated with pipe material, obstructions, debris, pipe bends, junction entrance and exit losses, and unsteady flow may warrant the
application of conservative n-values.
The numerical stability will improve with n-values higher than those typically assigned to straight pipes with uniform geometry in a steady flow
condition.
To save time, there are two checks that can be made prior starting a complete simulation:

1. Perform a short test run to confirm that the different links, nodes, subcatchments, etc.
   are properly connected and represent the actual pipe network.

2. Review the node inverts to make sure that they are at same elevation as the invert of the lowest pipe entering or leaving the junction otherwise
   errors in the pipe hydraulics can occur.

.. list-table::
   :widths: 100
   :header-rows: 0


   * - For complex models, it is sometimes difficult to differentiate between oscillations that are produced bya numerical instability and those real
       oscillations that represent rapid discharge flux

   * - |    Storm Drain Manual


linked to inlets, junctions, conduits and outfall.
Resolving potential error sources requires an understanding of the project and model application.
Troubleshooting storm drain instability during the initial phase of a project can be accomplished with test runs.
To summarize, the following are some of the methods for reducing storm drain pipe routing instability:

1. Conservatively high n-values (up to 0.100) can be used to reduce pipe network dynamic instability.
   For large complex project, local conservative pipe n-values can reduce oscillations in return flows.

2. Eliminate short conduits in the simulation.
   Conduits should be longer than 20 ft (6 m) or at least the length of a FLO-2D grid element.
   A careful check of the storm drain connections in all contiguous connections of the unstable pipe should be completed prior to pipe length
   adjustments.

3. Investigate flooded or surcharged inlets.
   Storm drain systems may have local conditions that may be explained by analyzing the actual physical behavior of the system.
   For flooded or surcharge inlets or junctions displaying oscillations, upstream inlets should be examined to determine where the oscillations
   originate.

4. Review the system connectivity.
   Search for adverse slopes and incorrect inlet geometry.

5. Review the SWMM.rpt file for critical timestep elements and check the highest flow instability indexes (HFII).
   This index is normalized with respect to the expected number of flow reversals (turns) that would occur for a purely random series of values and can
   range from 0 to 150.
   Inflow and flooding hydrographs for the HFII elements should be checked for oscillations.
   Check upstream and downstream plots (flow, depth, velocity, Froude No., and capacity) of the links having the highest HFII's numbers.

6. Check for oscillations or instabilities associated with pumps.

7. If an instability or oscillation cannot be explained as a physical response of the system then try to isolate the problem by changing roughness in
   contiguous links or by removing sections of the storm drain system.

.. _`8.`:

8.:

Reduce the reporting timestep (30 s or smaller) when oscillations are identified to have a more complete picture of the dynamic behavior of the
system.


The storm drain dynamic wave routing uses an explicit scheme numerical solution that may fluctuate or oscillate.
In the original SWWM model, most volume conservation errors were associated with numerical surging and typically volume conservation errors of 10% or
more were acceptable.
If the volume conservation error exceeds 1 % in the FLO-2D storm drain system, the model can be improved.

.. [1]
   It is necessary to put the VC2005-CON.dll in the system folders only
   if the FLOPro.exe is run from a project folder.
