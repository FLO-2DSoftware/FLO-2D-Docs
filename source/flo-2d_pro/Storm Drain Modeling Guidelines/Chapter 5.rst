.. vim: syntax=rst

Chapter 5
============

Troubleshooting
-----------------

Introduction
^^^^^^^^^^^^^^^

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
^^^^^^^^^^^^^^^^^^^^^^^

Error/warning messages are listed in the ERROR.CHK file.
The most important messages are listed in Table 20.

*Table 20.
FLO-2D Error Messages*

.. list-table::
   :widths: 25 75
   :header-rows: 0


   * - **Issue**
     - **Message in ERROR.CHK**

   * - Channel bed elevation.
     - THERE ARE STORM DRAIN INLETS ON CHANNEL GRID ELEMENTS.

       THE CHANNEL BED ELEVATION MIGHT BE DIFFERENT  THAN THE INVERT ELEVATION.

       NO ACTION WAS TAKEN DURING THE SIMULATION.

       PLEASE REVIEW AND REVISE IF NECESSARY.

   * - Elevations for outfall nodes.
     - THE STORM DRAIN OUTFALL INVERT ELEVATION SHOULD BE  EQUAL TO OR GREATER THAN

       THE FLOODPLAIN, CHANNEL, STREET ELEVATION.

       NO ACTION IS TAKEN.
       PLEASE REVIEW AND REVISE IF NECESSARY.

   * - Outfall node in channel interior element.
     - THE FOLLOWING STORM DRAIN OUTFALL NODES ARE IN CHANNEL INTERIOR ELEMENTS,

       RE-ASSIGN TO THE CHANNEL ELEMENTS IN CHAN.DAT.

   * - Outfall node assigned to aFLO-2D outflow element.
     - THERE IS AN OUTFLOW NODE AND A STORM DRAIN OUTFALL ASSIGNED TO THE SAME GRID CELL.

   * - Grid element floodplain must be revised.
     - THE GRID ELEMENT FLOODPLAIN WAS REVISED DURING THE  SIMULATION TO THE

       STORM DRAIN INLET

       RIM ELEVATIONS FOR THE FOLLOWING GRID ELEMENTS (PLEASE REVIEW

       AND REVISE FPRIMELEV.OUT FILE IF NECESSARY).

   * - Horizontal type 4 storm drain inlet elevations.
     - THE HORIZONTAL TYPE 4 STORM DRAIN INLET ELEVATIONS  WERE REVISED

       DURING THE SIMULATION

       TO THE STORM  DRAIN INLET RIM ELEVATIONS FOR THE FOLLOWING GRID

       ELEMENTS (PLEASE REVIEW AND REVISE FPRIMELEV.OUT FILE IF NECESSARY).

   * - Type 4 inlet is a vertical inlet, and it is in a floodplain cell.
     - THE GRID ELEMENT ELEVATIONS IN "FLOODPLAIN  SWALES" WERE REVISED

       DURING THE SIMULATION

       TO THE TYPE 4 VERTICAL INLET INVERT ELEVATIONS.

       PLEASE REVIEW FPRIMELEV.OUT FILE.

       *NOTE: If a floodplain swale is discharging into a storm drain conduit or culvert,

       the invert elevation should be equal to the swale bed elevation.*


.. list-table::
   :widths: 25 75
   :header-rows: 0


   * - Type 4 inlet is a verticalinlet, and it is in a channelcell.
     - THERE ARE VERTICAL TYPE 4 INLETS ASSIGNED TO CHANNEL ELEMENTS AND THE CHANNEL BED ELEVATION

       IS DIFFERENT  THAN THE INVERT ELEVATION.

       NO ACTION WAS TAKEN DURING THE SIMULATION.

       PLEASE REVIEW AND REVISE IF NECESSARY.

       *NOTE: If an inlet is assigned to the end of a 1-D channel segment and the channel flow

       discharges into the storm drain, the invert elevation should

       equal to the channel bed elevation.*

   * - No elevation differencesbetween surface and stormdrain layers.
     - NOTE: THERE ARE NO DIFFERENCES BETWEEN FLOODPLAIN GRID AND STORM DRAIN RIM ELEVATIONS.

       *NOTE: THERE ARE NO DIFFERENCES BETWEEN FLOODPLAIN GRID AND TYPE 4 INVERT INLET ELEVATIONS.

       FPRIMELEV.OUT FILE WAS NOT CREATED*.

   * - Elevations are revised.
     - THE GRID ELEMENT FLOODPLAIN OR STREET ELEVATIONS WERE  REVISED DURING THE SIMULATION TO

       THE STORM DRAIN INLET RIM ELEVATIONS FOR THE FOLLOWING GRID

       ELEMENTS  (PLEASE REVIEW THE FPRIMELEV.OUT FILE)

   * - More than one storm draininlet is assigned to one grid element.

       Simulation does not start.
     - THERE ARE POTENTIAL DATA ERROR(S) IN FILE SWMM.inp AND  SWMMFLO.DAT.

       MULTIPLE INLETS ASSIGNED TO ONE GRID CELL

   * - Multiple cells are assigned to one inlet.

       Simulation does not start.
     - MULTIPLE CELLS ASSIGNED TO ONE INLET

   * - Missing storm drain inlet geometry or inappropriate geometry, simulation does not start.
     - THERE ARE A MISSING OR INAPPROPRIATE STORM DRAIN INLET  GEOMETRY IN FILE: SWMMFLO.DAT.

       REVIEW STORM DRAIN  INLET: XX, DRAIN TYPE: IX ON GRID CELL: XXX

   * - Missed or inappropriate geometry.
     - 'LENGTH MUST BE GREATER THAN ZERO'  'WIDTH OR HEIGHT MUST BE GREATER THAN ZERO'

       'PERIMETER MUST BE GREATER THAN ZERO'  'TYPICAL WEIR COEFFICIENT:

       2.3'  'TYPICAL WEIR COEFFICIENT RANGE: 2.8 - 3.2'

   * - General Error in SWMM Model.
     - COMPUTATIONAL ERROR IN SWMM MODEL: REVIEW \*.RPT FILE FOR THE ERROR DESCRIPTION

   * - General Error in SWMM Model reported to the ERROR.CHK file and to the STORMDRAIN_ERROR.CHK.
     - THERE IS AN ERROR IN THE SWMM MODEL.

       PLEASE REVIEW  THE FOLLOWING ERROR CODE IN THE SWMM ERROR LIST OR  CONTACT

       THE FLO-2D TEAM FOR SUPPORT  Error Code: XXX.

       (See Table 21 below.)


SWMM error messages
^^^^^^^^^^^^^^^^^^^^^^^^

Table 21 lists the errors reported by SWMM (Rossman, 2005) to the SWMM.RPT file as well as to the STOMRDRAIN_ERROR.CHK file.
Some of these errors may not be relevant to the FLO-2D storm drain model.
The internal error code is reported in SWMM.RPT.
If the end user needs help with a code, provide this code to the FLO-2D team along with the swmm.inp file and any other relevant file.

*Table 21.
SWMM Error Numbers.*

.. list-table::
   :widths: 50 50
   :header-rows: 0


   * - Storm Drain EngineError Number /Internal Error
     - Description of the error

   * - 101 / 0
     - Memory allocation error

   * - 103 / 2
     - Cannot solve KW equations for Link

   * - 105 / 3
     - Cannot open ODE solver

   * - 107 / 4
     - Cannot compute a valid time step

   * - 108 / 5
     - Ambiguous outlet ID name for subcatchment

   * - 109 / 6
     - Invalid parameter values for aquifer

   * - 110 / 7
     - Ground elevation is below water table for Subcatchment

   * - 111 / 8
     - Invalid length for conduit

   * - 112 / 9
     - Elevation drop exceeds length for conduit

   * - 113 / 10
     - Invalid roughness for conduit

   * - 114 / 11
     - Invalid number of barrels for conduit

   * - 115 / 12
     - Adverse slope for conduit

   * - 117 / 13
     - No cross section defined for link

   * - 119 / 14
     - Invalid cross section for link

   * - 121 / 15
     - Missing or invalid pump curve assigned to pump

   * - 131 / 16
     - The following links form cyclic loops in the drainage system

   * - 133 / 17
     - Node xxx has more than one outlet link

   * - 134 / 18
     - Node has illegal DUMMY link connections

   * - 135 / 19
     - Divider xxx does not have two outlet links

   * - 136 / 20
     - Divider xxx has invalid diversion link

   * - 137 / 21
     - Weir Divider xxx has invalid parameters

   * - 138 / 22
     - Node xxx has initial depth greater than maximum depth

   * - 139 / 23
     - Regulator xxx is the outlet of a non-storage node

   * - 141 / 24
     - Outfall xxx has more than 1 inlet link or an outlet link

   * - 143 / 25
     - Regulator xxx has invalid cross-section shape

   * - 145 / 26
     - Drainage system has no acceptable outlet nodes

   * - 151 / 27
     - A Unit Hydrograph in set xxx has invalid time base


.. list-table::
   :widths: 50 50
   :header-rows: 0


   * - 153 / 28
     - A Unit Hydrograph in set xxx has invalid response ratios

   * - 155 / 29
     - Invalid sewer area for RDII at node

   * - 156 / 30
     - Inconsistent data file name for rain gage

   * - 157 /31
     - Inconsistent rainfall format for rain gage

   * - 158 / 32
     - Time series for rain gage xxx is used by another object

   * - 159 / 33
     - Recording interval > time series interval for Rain Gage

   * - 161 / 34
     - Cyclic dependency in treatment functions at node

   * - 171 / 35
     - Curve xxx has invalid or out of sequence data

   * - 173 / 36
     - Time series xxx has its data out of sequence

   * - 181 / 37
     - Invalid snow melt climatology parameters

   * - 182 / 38
     - Invalid parameters for snowpack

   * - 183 / 39
     - No type specified for LID

   * - 184 / 40
     - Missing layer for LID

   * - 185 / 41
     - Invalid parameter value for LID

   * - 186 / 42
     - Invalid parameter value for LID placed in subcatchment

   * - 187 / 43
     - LID area exceeds total area for subcatchment

   * - 188 / 44
     - LID capture area exceeds impervious area for subcatchment

   * - 191 /45
     - Simulation start date comes after ending date

   * - 193 / 46
     - Report start date comes after ending date

   * - 195 / 47
     - Reporting time step or duration is less than routing time step

   * - 200 / 48
     - One or more errors in input file

   * - 201 / 49
     - Too many characters in input line

   * - 203 / 50
     - Too few items

   * - 205 / 51
     - Invalid keyword xxx

   * - 207 / 52
     - Duplicate ID name xxx

   * - 209 / 53
     - Undefined object xxx

   * - 211 / 54
     - Invalid number xxx

   * - 213 / 55
     - Invalid date/time xxx

   * - 217 / 56
     - Control rule clause out of sequence

   * - 219 / 57
     - Data provided for unidentified transect

   * - 221 / 58
     - Transect station out of sequence

   * - 223 / 59
     - Transect xxx has too few stations

   * - 225 / 60
     - Transect xxx has too many stations

   * - 227 / 61
     - Transect xxx has no Manning's n

   * - 229 / 62
     - Transect xxx has invalid overbank locations

   * - 231 / 63
     - Transect xxx has no depth

   * - 233 / 64
     - Invalid treatment function expression

   * - 301 / 65
     - Files share same names

   * - 303 / 66
     - Cannot open input file

   * - 305 / 67
     - Cannot open report file

   * - 307 / 68
     - Cannot open binary results file

   * - 309 / 69
     - Error writing to binary results file

   * - 311 / 70
     - Error reading from binary results file

   * - 313 / 71
     - Cannot open scratch rainfall interface file

   * - 315 / 72
     - Cannot open rainfall interface file

   * - 317 / 73
     - Cannot open rainfall data file

   * - 318 / 74
     - Date out of sequence in rainfall data file

   * - 319 / 75
     - Invalid format for rainfall interface file

   * - 321 / 76
     - No data in rainfall interface file for gage

   * - 323 / 77
     - Cannot open runoff interface file

   * - 325 / 78
     - Incompatible data found in runoff interface file

   * - 327 / 79
     - Attempting to read beyond end of runoff interface file

   * - 329 / 80
     - Error in reading from runoff interface file

   * - 330 / 81
     - Hotstart interface files have same names

   * - 331 / 82
     - Cannot open hotstart interface file

   * - 333 / 83
     - Incompatible data found in hotstart interface file

   * - 335 / 84
     - Error in reading from hotstart interface file

   * - 336 / 85
     - No climate file specified for evaporation and/or wind speed

   * - 337 / 86
     - Cannot open climate file

   * - 338 / 87
     - Error in reading from climate file

   * - 339 / 88
     - Attempt to read beyond end of climate file

   * - 341 / 89
     - Cannot open scratch RDII interface file

   * - 343 / 90
     - Cannot open RDII interface file

   * - 345 / 91
     - Invalid format for RDII interface file

   * - 351 / 92
     - Cannot open routing interface file

   * - 353 / 93
     - Invalid format for routing interface file

   * - 355 / 94
     - Mismatched names in routing interface file

   * - 357 / 95
     - Inflows and outflows interface files have same name

   * - 361 / 96
     - Could not open external file used for time series

   * - 363 / 97
     - Invalid data in external file used for time series

   * - 401 / 98
     - General system error

   * - 402 / 99
     - Cannot open new project while current project still open

   * - 403 / 100
     - Project not open or last run not ended

   * - 405 / 101
     - Amount of output produced will exceed maximum file size; either reduce Ending Date or increase


Dynamic Link Library VC2005-CON.DLL
^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^

VC2005-CON.dll is the dynamic link library (engine) that runs the storm drain system in the FLO2D model.
When updating FLOPRO.exe, it is necessary to update VC2005-CON.dll.
An out-ofdate DLL library may cause a crash error or inconsistent results.
The VC2005-CON.dll file (based on the file date) should be current in the following directories:

   • C:\\Program Files (x86)\\FLO-2D PRO

The versions of the FLO-2D and the Storm Drain versions are reported in the STORMDRAIN_ERROR.CHK file, see example below.

    \**\* FLO-2D Pro Model - Build No.20.07.22 \**\*

    \**\* Storm Drain Model - Build No.20.07.22 \**\*

Volume Conservation and Numerical Instability
^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^

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
'''''''''''''''''''''''''''''''''''''''''

The SWMM.RPT file lists those nodes of the drainage network that have the largest flow continuity errors.
The following is an example from a SWMM.RPT file:

    High Flow Instability Indexes
    \******************************

    \\*

    Link C9 (9)

    Link C8 (8)

    Link C10 (7)

    Link C7 (6)

    Link C6 (6)

To improve the volume conservation error, the links listed on the HFII table must be reviewed.
Fixing the top 5 listed HFII links usually result in a more stable model.
The index is the number of flow turns that exists in a link during the simulation.
A flow turn occurs when the difference between a new and old flow results in a perturbation which is defined as a significant flow difference or a
change in flow direction.

Timestep and Conduit Length
'''''''''''''''''''''''''''''''''''

Like the Courant criteria used on the FLO-2D surface water model, stability issues can arise if the timestep is greater than about two times the
travel time through a pipe.
This would be comparable to the wave celerity being equal to about 1.5 times the average flow velocity V in the pipe.
To improve a model with numerical stability issues:

    - A minimum conduit length of 20ft or the FLO-2D grid element side length is recommended.
      Pipes shorter than 20 ft are reported as a warning message in STORMDRAIN_ERROR.CHK.
    - Dynamic wave routing numerical stability requires that the timestep be less than the time it takes for a dynamic wave (flow velocity plus wave
      celerity) to travel through the shortest conduit in the storm drain system.
      A maximum timestep of 1 second is sufficient for most storm drain simulations.
      The FLO-2D timesteps are used for both the surface water and the storm drain model and they are small enough for the storm drain solution to converge.
      A timestep calculation of a short pipe is:

           Conduit length ∆x = 20 ft

           Average conduit velocity V = 7.30 fps

           COURANTFP from CONT.DAT C = 0.6

           Wave celerity c = 1.5 x V

           Applying the Courant equation:

           ∆t = C ∆x/(V + c) = 0.6 (20 ft) / (7.3 fps + 1.5 x 7.3 fps) = 0.66 seconds

Unstable Results
'''''''''''''''''''''''''''''''''''

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

    7. If an instability or oscillation cannot be explained as a physical response of the system, then try to isolate the problem by changing roughness in
       contiguous links or by removing sections of the storm drain system.

    8. Reduce the reporting timestep (30 s or smaller) when oscillations are identified to have a more complete picture of the dynamic behavior of the
       system.

The storm drain dynamic wave routing uses an explicit scheme numerical solution that may fluctuate or oscillate.
In the original SWWM model, most volume conservation errors were associated with numerical surging and typically volume conservation errors of 10% or
more were acceptable.
If the volume conservation error exceeds 1 % in the FLO-2D storm drain system, the model can be improved.
