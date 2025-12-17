.. vim: syntax=rst

.. _two_phase_guidelines:

Two Phase Flood Routing Guidelines
====================================

Introduction
--------------

This document describes how to simulate a mudflow or a tailings dam breach failure as either a mudflow or two-phase fluid flow (water and mudflow)
using the FLO-2D model.
Two phase flow mudflows (with or without a tailings dam breach failure) can be simulated as overland flow or channel discharge with the flows being
diluted with downstream inflows (e.g. channel tributary inflows).
The tailings facility failure can be modeled either as a dam breach with or without a reservoir (supernatant storage or with flood inflow) or as a
stack collapse without simulating the dam.
These guidelines complement the Tailings Dam Modeling training tutorials that should be used for hand-on exercises.
Please contact FLO-2D Staff contact@flo-2d.com to get access to the training packages.

Background
-----------

FLO-2D Model
^^^^^^^^^^^^^

The FLO-2D model has the following two-dimensional flow routing capabilities related to tailings dam failure:

    - Sudden collapse of the tailings stacks;
    - Dam breach with prescribed rates of failure or by simulating breach erosion;
    - Conventional sediment transport with scour and deposition;
    - Hyperconcentrated sediment flow (mudflows and mud floods) with flow cessation and remobilization;
    - River channel flow (1D) and overbank flooding;
    - Urban flooding with street flow and building obstruction.

The FLO-2D Reference Manual, various White Papers and PowerPoint presentations provide additional discussion on the FLO-2D modeling system, sediment
transport and mudflows and can be accessed once the software is installed.
C:\\Users\\Public\\Documents\\FLO-2D PRO Documentation

Need for Two Phase Flow for Tailings Dam Breach
^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^

Tailing dam breach failure and the downstream mudflow routing can be simulated with water storage release combined with mudflow floodwave.
For a more accurate prediction of bed scour and deposition of the tailings material released through the breach, a two phase fluid approach combining
mudflow routing and sediment transport can be applied.
Channel mudflow simulation with downstream water inflow is also available in the model.
When released the stored water in a tailing dam will race over the tailings and contribute to the flood frontal wave progression scouring both the
tailings mudflow and channel or floodplain bed while diluting the initial mudflow release wave.
The initial FLO-2D tailings dam breach model only simulated the mudflow.
The model now has the capability of simulating the combined supernatant fluid and mudflow release as two phase flow as well as simulating any
watershed inflow flooding that may result in a hydrologic tailings dam failure.

A tailings dam breach (Figure 1) can be an instantaneous failure to bedrock, a gradual breach expanding by prescribed vertical and horizontal failure
rates, or a progressive erosion of the dam material.
The instantaneous tailings collapse can be simulated as a stack static failure or as a dam breach.
It is possible to simulate the tailings dam breach and downstream flood inundation in one model or divide the tailings dam breach and downstream
flooding into separate models by simulating the breach failure in one model and predicting the area of inundation in second model using breach
hydrograph as inflow to the second model with the same FLO-2D grid system (or with a different grid system resolution).
Dividing the project into two models will permit the breach analysis to be tested and completed, then the flood hazard downstream can be assessed.
The FLO-2D predicted tailings dam breach release volume can be estimated using the complimentary pre-processor Tailings Dam Tool (Figure 2).
Sediment volume in the breach simulation is conserved and the predicted volume through the breach is reported in the DAMBREACH_VOLUME.OUT file (end of
file).
The initial tailings dam material reported in SUMMARY.OUT file (bulked volume – minus water volume) and the percentage of the impounded tailings
deposited downstream can be compared with that predicted by the Tailings Dam Tool.

.. image:: ../img/Two_Phase_Flood_Routing_Guidelines/image1.png

*Figure 1.
Ajka Accident Hungary October 2010.
(Aljazeera.com).*

.. image:: ../img/Two_Phase_Flood_Routing_Guidelines/image2.png

*Figure 2.
FLO-2D Tailings Dam Tool Opening Control Window.*

Hyperconcentrated Multi-Phase Sediment Flow
^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^

The physical processes of sediment transport represent a continuum that ranges from particles in clear water to landslides and despite the best
efforts to characterize, classify and simulate different types of sediment laden events, the delineation between fluid flow and soil mass movement is
not strictly definitive.
When a tailings dam with water storage fails, initially there is a distinct fluid floodwave that propagates downstream as the water flows over the
reservoir tailing material.
The fluid phase scours the tailings surface and mudflow mobilizes through the breach.
Over a relatively short distance, the fluid and mudflow phases mix and become a more dilute mud flood with some mudflow deposits downstream of the
breach.
The fluid phase continues in advance of the slower mudflow and may initially scour, then deposit on the downstream bed.

In a multiphase flow (ignoring the gas phase and heat transfer considerations), the liquid and solid phases dynamically interact.
Since 1999, there have been a number of attempts to evolve a complete mathematical description of hyperconcentrated sediment flow in which equations
of motion (conservation of mass and momentum) are solved in a two phase (sediment and fluid) approach (see Amoudry, 2008 for a partial reference list).
Most of the two phase flow research involves significant assumptions and simplifications such as dilute fluids or 1-D flow.
The solution for the momentum transfer between the fluid and the sediment particle considers the turbulent fluid forces on the sediment particles
while the presence of sediment particles in the flow reduces the turbulence stress intensity.
If the fluid viscosity is minimal, the turbulence and dispersive stress from particle inertia and collision dominate.
Conversely, when the viscous stresses are dominant the turbulence and sediment dispersive stresses are suppressed.
There remains a significant flow regime (mud floods) where the turbulence, dispersive and viscous stresses are balanced rendering a complex miasma of
fluid and sediment particles that has three dimensional variability.
Following Cheng and Hsu (2014), a typical two phase solution might include Eulerian turbulence averaged two phase flow equations with exchange
momentum transfer and particle stress closure to establish a stable sediment bed.

Two phase flow models have been limited to uniform 1-D flows, steady flow cases, dilute suspensions with neglected inertial terms (Keetels, et.
al., 2017).
For most flood projects, a detailed sediment distribution in complex two phase flow is unnecessary (Garg, 2009).
Two phase flow models fall into one of two categories: 1) Homogeneous flow models; and 2) Separated flow models.
For the homogeneous model, the two phase flow solution is based on one set of equations of motion.
For the separated flow model, each flow phase represents a distinct portion of the flow field with unique hydraulics and interface boundary
conditions.

Initially the homogeneous flow approach was investigated for implementation in the FLO-2D model.
The intent was to establish a sediment transport flow regime for a fluid layer over a mudflow layer and allow sediment exchange between the two layers
at the boundary using an advection-diffusion approach.
Particle lift and drag along with fluid and particle stresses (turbulent, dispersive, and viscous stresses) would be evaluated in each layer.
An uplift function (upward flux or scour) and dropdown function (downward flux or deposition) were considered based on the analysis of Amoudry (2008).
In this work, Amoudry selected Van Rijn (1984) for the uplift function.
The dropdown function was based on the particle’s immersed weight and drag coefficient with the settling velocity being primarily a function of
particle Reynold’s number, sediment volumetric concentration and fluid viscosity.

After the code was written, an extensive testing period revealed that the uplift and dropdown functions for the same hydraulic conditions resulted in
bias toward the uplift function.
Essentially, it was impossible to achieve a balanced sediment exchange condition that resulted in numerical stability.
The homogeneous approach was abandoned for the more simplistic separate flow regime method.
In a simplified approach, the FLO-2D model has been structured to exchange sediment between the fluid portion of the flow and the mudflow as shown in
Figure 3.

.. image:: ../img/Two_Phase_Flood_Routing_Guidelines/image3.png

*Figure 3.
FLO-2D Two Phase Flow – Fluid with Sediment Transport and Mudflow.*

FLO-2D Two Phase Flow Approach
-----------------------------------

General
^^^^^^^^

An important issue for the flood modeler is selecting appropriate project scale to accurately predict the area of inundation.
For a tailings dam breach project, this depends on the flood hydrology, the tailings volumes, and potential for flow cessation.
This morphological model scale typically consists of 10 ft to 50 ft cell resolution where the flow hydraulics and sediment transport are based on a
mean flow behavior.
The challenge for the programmer is to develop a realistic model with as much physical resolution as reasonable and still have a relatively fast
simulation of a large-scale project.

Conventional Sediment Transport
^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^

Prior to undertaking the two phase flow implementation, the FLO-2D model had the option of simulating either sediment transport or hyperconcentrated
sediment flow (mudflow) but the application of the two components was exclusive.
To address mobile bed conditions in a dilute fluid (typically less than 20 percent concentration by volume), FLO-2D has a sediment transport component
that can compute sediment scour or deposition.
Within a grid element, sediment transport capacity is computed based on the flow hydraulics.
The sediment transport capacity is then compared with the sediment supply and the resulting sediment excess or deficit is uniformly distributed over
the grid element surface (or non-uniformly on the channel bed based on shear stress).
There are eleven sediment transport capacity equations that can be applied in the FLO-2D.
Each sediment transport formula was derived from unique river or flume conditions and the user is encouraged to research the applicability of a
selected equation for a particular project.
Sediment routing by size fraction and armoring are also options.
Sediment continuity is tracked on a grid element basis.

The sediment transport computation is uncoupled from the flow hydraulics.
Initially the flow hydraulics are computed for all the grid elements for a given timestep and then the sediment transport capacity is computed based
on the flow hydraulics for that timestep.
This assumes that the change in bed topography resulting from deposition or scour will not have a significant effect on the average flow hydraulics
for that timestep (Figure 4).
If the scour or deposition is less than 0.10 ft (0.3 m), the sediment storage volume is not distributed on the bed but is accumulated temporarily.
Generally, it takes several computational timesteps (~1 second) to store enough sediment so that the resulting deposition or scour will.
exceed 0.10 ft (0.03 m).
This justifies the uncoupled sediment transport approach used in FLO-2D.

.. image:: ../img/Two_Phase_Flood_Routing_Guidelines/image4.png


*Figure 4.
FLO-2D Sediment Transport Bed Exchange.*

Using a depth averaged sediment transport equation to estimate sediment transport capacity is an acceptable approach since each of the eleven sediment
transport equations have been extensively tested and utilized in FLO-2D projects.
Selecting several equations on a given project will define the range of the scour and deposition response.
Each equation is used in its original form and although the hydraulic or morphological conditions for which the equation was derived may be exceeded,
the extrapolation to higher concentrations or diverse sediment size distributions will not result in model instability because the timesteps are small.
The various sediment transport equations and recommendations for their application are discussed later in the document.

Hyperconcentrated Sediment Flows – Mud Floods and Mudflows
^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^

Most tailings dam failure mudflows fall within a range of about 20 to 55 percent sediment concentration by volume.
When the tailings dam has minimal water storage, mudflows will occur (Figure 5).
If the tailings dam has a significant water storage, the resulting breach flooding may be characterized as a water flood with high bedload and
suspended loads (less than 20% concentration by volume).
At higher sediment concentrations, a fluid mud flood of 20% to 45% concentration by volume would occur.
Mud floods may be difficult to discern from water floods because they typically have a similar flow behavior.
The fluid properties of mud floods, however, are definitively different from water floods with much higher viscosity and density.
Table 1 lists the four different categories of hyperconcentrated sediment flows and their flow characteristics.
This table was developed from actual mudflow deposits analyzed in the laboratory (O’Brien, 1986).
Almost all hyperconcentrated sediment flows are fully turbulent, unsteady and nonuniform and are characterized by surging, flow cessation, blockage
and roll waves.

.. image:: ../img/Two_Phase_Flood_Routing_Guidelines/image5.png


*Figure 5.
Tailings Dam Failure Mudflow Merriespruit, Virginia SA Feb 1994 (tailings.info).*

.. image:: ../img/Two_Phase_Flood_Routing_Guidelines/Two033.png

A quadratic solution to the friction slope equation was
formulated for the FLO-2D model to estimate the seed mudflow velocity in
the momentum equation. The seed velocity represents the flow computed
across each grid element boundary using the average flow depth between
the elements. Reasonable roughness values are assigned for overland flow
resistance and the specific weight of the fluid matrix γ\ :sub:`m`,
yield stress τ\ :sub:`y` and viscosity η vary principally with sediment
concentration. When routing the mud flood or mudflow over a floodplain,
the FLO-2D model preserves volume conservation for both the water and
sediment. For every grid element and timestep, the change in the water
and sediment volumes and the corresponding change in sediment
concentration are computed. A mudflow may cease flowing at high
concentrations and may be remobilized at dilute concentrations, but
there is no predicted sediment scour or deposition. At the end of the
simulation, the model reports on the amount of water and sediment
removed from the study area (outflow) and the volume and location of the
water and sediment remaining on the flow domain. The areal extent of
mudflow inundation and the maximum flow depths and velocities are a
function of the available sediment. Further discussion of the FLO-2D
mudflow component is presented in Appendix B.

Two Phase Flow Component
^^^^^^^^^^^^^^^^^^^^^^^^^

To apply the FLO-2D two phase flow component, the sediment transport and mudflow model components must run concurrently with an interface routine that
exchanges sediment between them as depicted in Figure 6.
To activate both components in one model simulation, the flood hydraulics for conventional sediment transport is first computed, then the mudflow
hydraulics are computed in a second loop.
Water and sediment volume conservation is tracked in both components separately on a grid element basis.
To accomplish this integration, the following tasks are completed:

       1. The data is read for both components (i.e., the SED.DAT requires both sediment transport and mudflow component data).
       2. For a tailings dam breach, the elevation or depth of the tailings is defined as an input parameter in the INFLOW.DAT file reservoir line (R-line).
       3. The sediment exchange between the fluid and mudflow phases is computed as well as sediment sharing between the fluid and the bed if there is no
          mudflow.
       4. Sediment volume conservation routines for both components are updated.
       5. Sediment concentration by volume limits for both mudflow and sediment transport components are tested and the sediment exchange when the limits are
          exceeded is adjusted.

.. image:: ../img/Two_Phase_Flood_Routing_Guidelines/image7.png

*Figure 6.
Fluid – Mudflow Two Phase Flow Exchange for a Grid Element.*

The two phase flow computations in the FLO-2D model proceed in the following manner:

    - First the fluid phase loop is completed with a sweep of all the grid elements to establish the fluid hydraulics.
    - All the grid elements are checked for numerical stability.
    - The conventional sediment transport is computed with updated volume concentrations.
    - The mudflow loop of the two phase flow with corresponding numerical stability checks is executed.
    - The sediment is exchanged with the fluid layer as either scour from the mudflow or deposition from the fluid layer to the mudflow.
    - All the sediment concentrations and volumes are then updated, and the model resumes the flood routing with an updated timestep.

The flow chart in Figure 7 depicts the component interaction within the FLO-2D simulation.
The sediment transport and mudflow routines are discussed in more detail in the Appendices.

.. image:: ../img/Two_Phase_Flood_Routing_Guidelines/image8.png

*Figure 7.
Workflow for the Two Phase Fluid and Mudflow Routing in the FLO-2D Model.*

Assumptions and Limitations
^^^^^^^^^^^^^^^^^^^^^^^^^^^^

There are some practical limitations to the sediment transport and mudflow exchange at the fluid-mudflow boundary.
All the sediment transport equations used in the FLO-2D model were developed for river or flume conditions where the sediment concentration by volume
is generally less than 10%.
Some equations such as Yang’s, Engelund-Hansen, or the Zeller-Fullerton multiple regression analysis have a theoretical approach to the physical
processes of sediment movement.
Other equations (Laursen, Karim-Kennedy) are empirically based on data sets from a particular bed condition or size fraction.
Each equation should be researched for applicability to a given range of project conditions and sediment size (See the FLO-2D Reference Manual:
C:\\Users\\Public\\Documents\\FLO-2D PRO Documentation\\flo_help\\Manuals).

The two phase flow component computes the sediment transport capacity for sediment concentrations by volume of up to 20% (Table 1).
This is an assumed sediment concentration limit for conventional sediment transport because higher concentrations (hyperconcentrated) with high fluid
viscosity and frequent particle collisions hinder particle fall velocities and negate the premise on which the original equations were based.
At this concentration, fluid motion is no longer described as Newtonian flow (linear relationship between shear stress and rate of strain).
If low sediment concentrations are calculated, the mudflow is diluted and is added to the fluid phase.
If the mudflow concentration becomes excessive, there is an exchange with the bed material or flow cessation occurs.
When the fluid phase is in direct contact with the ground, bed scour or deposition can occur.
The mudflow phase is assumed to always be under or below the fluid phase.
The coded rules for the two phase flow exchange within a grid element are as follows:

.. image:: ../img/Two_Phase_Flood_Routing_Guidelines/Two034.png

After each exchange process listed in Table 2, the fluid and
mudflow phase volume concentrations are recomputed. The Table 2 sediment
concentration by volume limits are based on the flow behavior categories
in Table 1. The lower limit for hyperconcentrated sediment flow is
assumed to be 20% concentration by volume, below which conventional
sediment transport equations for river flow apply. Above this 20%
concentration by volume, the flow is computed by the mudflow routing
component in the FLO-2D model.

A mudflow concentration of 56% (maximum concentration of uniform spheres) is assumed to constitute the lower limit for a landslide concentration
(Table 1).
Above this concentration, depending on slope, momentum, viscosity, yield stress (cohesion) and roughness, the mudflow may cease flowing within the
grid element and would be identified in the mapped results by zero final velocity.
The potential range of high concentrations where mudflows may cease flow is on the order of 56% to 62% (Bagnold’s maximum sediment concentration) by
volume.
By comparison, the porosity of ground (for sand sized sediment distribution) is typically on the order of 36% to 45% corresponding to a concentration
by volume 55% to 64% (with all the pore space filled with water).
For dense mudflows or landslides, the sediment concentration by volume must decrease with motion as the particles separate and the interstices fill
with water.

Component Availability
^^^^^^^^^^^^^^^^^^^^^^^

At the present time, there are several FLO-2D components that are superfluous to two phase flow modeling.
The following components are automatically set to ‘OFF’:

    - Evaporation
    - Storm Drain
    - Groundwater
    - Multiple Channels (rill and gully flow)

The initial focus for the two phase flow compute was to simulate tailings dam breach with water storage.
For obvious reasons, tailings dams are not located in a river channel corridor, but FLO-2D can still simulate a mud flood or mudflow with upstream or
tributary water flooding from a rainfall event.
Significant Infiltration will generally not occur when a mud flood or mud flood progresses downstream because the bed interstitial pore space becomes
clogged with sediment.

Simulating a Tailings Dam Failure
----------------------------------

General
^^^^^^^^^

A tailings dam failure can be simulated with or without water storage.
It is assumed that any supernatant water storage (Vstorage) rests over the tailings material and the water depth (F) will drain first if the breach
failure is progressive from the top of the dam (Figure 8).
The dam may be a designed feature constructed of borrow material or it could be created from as stacked layered tailings deposits.
In either case, there are four FLO-2D options for simulating the tailings dam breach failure and routing the flood downstream:

    - Stacked tailings collapse (no water storage);
    - Dam breach failure with or without water storage:
    - Instantaneous tailings dam collapse – seismic or static (prescribed failure component);
    - Prescribed failure – assign horizontal and vertical failure rates;
    - Breach erosion – progressive failure using the dam breach erosion component;

For two phase flow, the tailings dam reservoir and the downstream flood inundation area can be modeled in one flow domain grid system or split into
separate models so that the tailings dam breach discharge hydrograph can be determined and tested with faster simulations.
The discharge volume released through the breach reported in DAMBREACH_VOLUME.OUT can be checked against the volume estimated by the FLO-2D TAILINGS
DAM BREACH tool.

.. image:: ../img/Two_Phase_Flood_Routing_Guidelines/image10.png


*Figure 8.
Possible Tailings Dam Configuration Simulated by a FLO-2D Two Phase Flow Dam Breach.*

The four tailings dam failure options are briefly discussed below and additional information regarding dam breach can found in the various webinars,
PowerPoint presentations, white papers and other FLO-2D reference documents available from the website.

Stack Layer Tailings Facility Collapse
^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^

The collapse of stacked layer tailings facility is assumed to occur as either a static or seismic failure without any water storage or flood inflow.
It is the simplest FLO-2D option to apply and does not require the assignment of dam parameters (using the levee component).
In this case, the dam is assumed to comprise of layered homogeneous tailings material, not separate constructed dam core and shell material (Figure 9).

.. image:: ../img/Two_Phase_Flood_Routing_Guidelines/image11.png

*Figure 9.
Tailings Stacks Example (source: Google Earth Historical Imagery).*

The following assumptions are applied for this tailings failure option:

    - The tailing facility is constructed in relatively homogeneous horizontal layers;
    - The density and fluid property variability of the layers in the vertical direction will not significantly affect the flow properties as failure
      occurs;
    - In terms of the development of the collapse floodwave and predicting the downstream hydraulics and area of inundation, the actual failure mode is
      inconsequential;
    - The tailings material when the model simulation begins is in a failure condition with incipient motion as just being initiated;
    - There is no water storage and no dam is simulated.

To simulate the collapse, a tailings depth and sediment by volume for each grid element within the tailings facility is required in a file named
TAILINGS_CV.DAT in the following format:

 .. image:: ../img/Two_Phase_Flood_Routing_Guidelines/Two035.png

This tailings depth is assigned as flow depth at the start of the model simulation and is assumed to be at an incipient motion condition either as
static failure with a loss of shear strength or as a seismic liquefaction ready to flow downstream.
The concentration by volume should be assigned close to a fully saturated condition.
The TAILINGS_CV.DAT file can be generated by selecting the grid elements in QGIS and assigning depth and concentration.
The depth file can be created by any GIS or CADD tool using the difference between the original ground topography and the tailings surface.
The downstream slope of the tailings facility will be represented by the grid element variable tailing depth.
When the model is started, the tailings mudflow movement will be initiated as a function of slope, variable concentration, and fluid properties of
viscosity and yield stress.
If the slope is insufficient for the applied shear stress to exceed the yield stress, there will be tailings motion in that cell as a depth averaged
flow condition.

Additional data input requirements unique to tailings failures include by file name:

    - CONT.DAT: MUD = 1, ISED = 0, XCONC = Concentration Adjustment Factor (additive)
    - SED.DAT: Mudflow M-line is needed, C-line for sediment transport is not required
    - LEVEE.DAT not required.

When starting a project, performing a stack failure first is the suggested approach.
It only requires tailings dam volume, original ground surface, tailings surface or depth, estimated n-values, a selection of rheologic parameters from
Appendix Table B.1, and an estimated tailings concentration by volume C\ :sub:`v` (with the range from 0.4 < C\ :sub:`v` < 0.56).
If global mapping of the site is available, a FLO-2D static tailings stack failure can be conducted in a matter of a few hours.
The Feijao tailings stack failure in Brumadinho, Brazil is shown in Figure 10 and Figure 11.
This simulation was set up with FLO-2D in about 2-hrs.
The first model run with no calibration is relatively accurate because the tailings volume modeled is close to the failure volume.

.. image:: ../img/Two_Phase_Flood_Routing_Guidelines/Two036.png

*Figure 10.
Max Depth Stack Failure.*

.. image:: ../img/Two_Phase_Flood_Routing_Guidelines/image14.png

*Figure 11.
Final Depth Stack Failure.*

Tailings Dam Breach Failure
---------------------------

If a tailings facility has a dam constructed with core or shell material different from the tailings or if the tailings are deposited to allow water
storage, then the FLO-2D dam breach component can be applied.
In this case, there are several dam breach failure modes in the FLO-2D model: instantaneous failure, prescribed vertical and horizontal breach rates
of failure, or the physical process simulation of breach erosion.
These tailings dam breach options required that the dam itself be simulated using the FLO-2D levee component to identify a crest elevation, the dam
length and possible starting water surface and breach elevations.

For tailings dam static or seismic breach failure model without water storage, as the breach expands, more tailings mudflow is released and typically
based on historic data only a portion of the total stored tailings, on the order of 30% to 50%, flow through the breach.
If an instantaneous dam breach option is selected, the failure will simulate the static stack failure discussed in the previous section.
If the tailings dam has supernatant fluid in storage or if a hydrologic breach (from rainfall or an off-site flood inflow), then a prescribed breach
rate or breach erosion failure option should be applied in the model.
In this case, initially the water is released and scours the stationary tailings material in reservoir at the breach as the breach expands.
Then the water and sediment mixture with a low concentration scours the moving tailings material as it liquefies (mudflow phase).
Finally, the fluid phase continues to scours the downstream bed as the fluid races ahead of the mudflow until the sediment concentration reaches the
hyperconcentrated sediment flow level.
From the standpoint of identifying the downstream flood hazard, all tailings dam breach methods can be applied to evaluate the worst case:
Instantaneous breach, prescribed breach rates and breach erosion.

*Instantaneous Breach:* Intuitively, collapsing the tailings dam to the base elevation should create the fastest rising frontal wave.
Assigning more than one breach direction and grid element will intensify the breach wave progressing downstream.
The instantaneous breach is initiated by assigning the W-line in the LEVEE.DAT file.
Only the breach elevation (slightly lower than the water surface) is necessary to assign to start the instantaneous breach.

*Prescribed Failure Breach:* A prescribed rate of failure breach is orchestrated by assigning the vertical and horizontal breach rates in the same
W-line of the LEVEE.DAT file.
Suggested rates of failure in ft/hr or m/hr are not readily available in the literature.
A vertical breach rate of 10 ft/hr (3 m/hr) and a horizontal rate of 50 ft/hr (17 m/hr) can be initially applied, but the user is encouraged to
research potential tailings dam breach rates and experiment with various rates to attempt to maximize the breach peak discharge and timing.

*Breach Erosion:* Computing the tailings dam scour is complicated and the method has the following failure potential:

    - Overtopping and development of a breach channel;
    - Piping failure;
    - Piping failure, roof collapse and development into a breach channel;
    - Breach channel enlargement through side slope slumping;
    - Breach enlargement by wedge collapse.

To exercise the above breach sequence the following geometry parameters are required:

    - Crest elevation
    - Starting water surface elevation (or depth below crest) (ft or m)
    - Cumulative duration of inundation at specified elevation prior to breach initiation (hr)
    - Maximum breach width (ft or m)
    - Prescribed initial pipe elevation (ft or m)
    - Tailwater elevation (ft or m)
    - Foundation or base elevation for vertical breach cessation (ft or m)

These tailing dam breach options can be simulated with the two phase flow component discussed in detail below.
Further discussion of the required data input for a tailings dam breach simulation is presented in the FLO-2D Data Input Manual, several white papers
on dam breach and various PPT slide presentations that available from the FLO-2D website (`www.flo-2d.com <http://www.flo-2d.com>`__).

2 Phase Flow Data Input
^^^^^^^^^^^^^^^^^^^^^^^^

The data input discussed in this section is unique to the two phase flow component and supplements the data required for a typical FLO-2D flood model
or tailings dam mudflow simulation.
To initiate FLO-2D two phase flow:

    - CONT.DAT - The MUD switch = 2 instead of 1 Sediment transport switch is 0;
    - CONT.DAT XCONC is set to the average tailings concentration;
    - INFLOW.DAT – reservoir node gets a water elevation, tailings elevation and reservoir roughness.

        R 7576 318.75 315.5 0.20
    - TAILINGS.DAT – grid element and thickness.

The reservoir water surface elevation is assigned to a single grid element inside the reservoir (cell #7576).
The model will then automatically assign the reservoir starting WS Elevation to all the grid elements with a bed elevation less than the starting WS
Elevation and the reservoir will be filled with water to start the breach simulation.

If the Tailings Elevation is less than 100 ft or m, then the tailings elevation becomes a tailings depth F above the reservoir bed elevation and the
tailings elevation would not be uniform.
The individual cell tailings thickness can also be assigned in the TAILINGS.DAT file which lists the reservoir grid element and the tailings thickness
as shown below:

.. raw:: html

    <pre>
       7127 10.00 (= thickness below the cell bed elevation)
       7128 10.00
       7129 10.00
       7130 12.25
       7188 15.00
       7189 13.25
       7190 11.95
       7191 10.00
       7192 10.00
    </pre>

The tailings thickness in TAILINGS.DAT overrides the global assignment of tailings elevation or depth in Line R of the INFLOW.DAT file.
The reservoir roughness at the end of line R enables the reservoir elements n-value to be reassigned to account for potential flow with deep depths
(see White Paper on “Reservoir Routing and Ponded Flow”).
The tailings thickness or depth can be determined by the difference between the pre- and post-tailings topography.
These surfaces can be represented by rasters in the QGIS or any GIS software to compute the tailings depth.
If only the tailings surface elevation is available either the pre-tailings topography or the tailings depth will have to be estimated.

- SED.DAT – M lines, and C lines are used.

For two phase flow both the sediment transport and mudflow variables have to be assigned in the SED.DAT file.
There are no specific data changes to the SED.DAT file other than both the M-Line and C-Line are read together in the file.
A typical SED.DAT file for two phase flow may be as follows:

.. image:: ../img/Two_Phase_Flood_Routing_Guidelines/Two061.png

Refer to the FLO-2D Data Input Manual to review each variable.
A few highlights are mentioned below:

    - The mudflow parameters in LINE M should be listed first;
    - The M-Line primarily includes viscosity and yield stress coefficients and exponents;
    - The sediment transport capacity equation is entered in the C-line;
    - Scour limitation is assigned by line E.
    - At the present time sediment routing by size fractions is not available for two phase flow and is ignored if the data is assigned.

Typical tolerance values, Courant numbers, limiting Froude number, and overland flow n-values are appropriate - no special values are necessary for a
tailings dam breach simulation.
Higher n-values at the breach element and immediately downstream to reflect the high breach velocities will improve the model stability.
Some recommendations on selecting the sediment transport capacity equation are presented later in the document.

Sediment routing by size fractions is possible for both overland flow and channel routing.
If sediment routing by size fractions is initiated, bed armoring is also simulated.
When the upper bed layer (exchange layer) become coarser as the finer sediment is removed, the armoring will limit bed scour (Figure 12).
This will enable the bed coarsening or sediment deposition to be tracked in a channel.
The SED.DAT file sediment routing by size fraction data is displayed below in blue (lines Z and P) where the P-Line includes the representative
sediment size and percent finer than.

.. image:: ../img/Two_Phase_Flood_Routing_Guidelines/Two037.png

.. image:: ../img/Two_Phase_Flood_Routing_Guidelines/image16.png
]
*Figure 12.
Sediment Routing by Size Fractions and Bed Armoring.*

The data is entered using dialog windows in the FLO-2D Plugin v.
10.74 or higher for QGIS.
Figure 13 and Figure 14 show examples of the dialog boxes.
The data entry method for a simple prescribed breach tailings dam failure is defined in a Tailings Dam Two Phase Flow tutorial.

.. image:: ../img/Two_Phase_Flood_Routing_Guidelines/image17.png

*Figure 13.
Two phase data entry dialog mudflow.*

.. image:: ../img/Two_Phase_Flood_Routing_Guidelines/image18.png

*Figure 14.
Two phase data entry dialog sediment transport.*

Output Files and Reviewing the Results
------------------------------------------

Output Files
^^^^^^^^^^^^^

Several new output files were created to review the two phase flow results.
The MAXPLOT post processor program is a simple tool for graphically displaying FLO-2D model output.
It has been updated to include the new two phase flow output files.
These output files have the format:

Cell No.
X-Coordinate Y-Coordinate Variable

The variables are listed below in the following files (both existing and new files):

    - CVTFPMAX.OUT: Maximum fluid phase sediment concentration by volume Cv.
    - CVTFPMAX_MUD.OUT: Maximum mudflow phase sediment concentration by volume.
    - DEPFP.OUT: Combined maximum fluid and mudflow phase flow depths.
    - DEPFPMAX_MUD.OUT: Maximum mudflow phase flow depth.
    - DEPTHMAX.OUT: Maximum fluid phase flow depth.
    - FINALDEP.OUT: Final fluid phase flow depth at the completion of the simulation.
    - FINALDEP_MUD.OUT: Final mudflow phase flow depth at the simulation completion.
    - FINALDEP_COMBO.OUT: Final combined fluid and mudflow phase flow depths
      - end of simulation.
    - FINALVEL.OUT and FINALDIR.OUT: Final velocity and direction (1 of 8) for the fluid phase.
    - FINALVEL_MUD.OUT and FINALDIR_MUD.OUT: Final velocity and direction for the mudflow phase.
    - VELFP.OUT and VELDIREC.OUT: Maximum velocity and direction for the fluid phase.
    - VELFP_MUD.OUT and VELDIREC_MUD.OUT: Maximum velocity/direction for the mudflow phase.
    - VELRESMAX.OUT and VELRESMAX_MUD.OUT: These two files have a different format…

..

   Cell # X-Coord Y-Coord Max Vel Max Vel X-component Max Vel Y-component

The above files compliment the previously available output files in the same format that can be plotted with the original MAXPLOT or Mapper programs
some of which are listed below:

- DEPCH.OUT: Maximum channel flow depth.

- DEPCHFINAL.OUT: Final channel flow depth at the end of the simulation.

- DEPTH.OUT: Combined maximum channel and floodplain flow depth.

- IMPACT.OUT: Maximum impact pressure

- SPECENERGY.OUT: Maximum specific energy.

- STATICPRES.OUT: Maximum static pressure.

There are several additional output files and not all files are for graphical display.
For a complete list of output files see the output file section in the FLO-2D Data Input Manual.
Other FLO-2D QGIS plotting options are available for generating shape files or high-resolution mapping.

Volume Conservation
-------------------

To conduct a review of a FLO-2D simulation of tailings dam failure, the review should begin with volume conservation reported in the SUMMARY.OUT file.
There are two primary reported output data in this file to review: 1) The overall fluid and mudflow volume conservation listed in four columns at the
start of the file; 2) The sediment volume conservation below the summary disposition of the volumes.
Both columns of volume conservation reported should be practically zero.
The percent error in the volume conservation in the fourth column should be on the order of 0.000100 of one percent or less.
Often the percent error is absolute zero as shown in the example of a partial SUMMARY.OUT file below:

.. image:: ../img/Two_Phase_Flood_Routing_Guidelines/Two038.png

Later in the file, the sediment volume conservation is reported:

.. image:: ../img/Two_Phase_Flood_Routing_Guidelines/Two039.png

Numerical Stability
-------------------

Continuing with the project review, the simulation numerical stability should be verified next.
Potential numerical surging in the model is most likely to occur near the tailings breach and may necessitate lowering the Courant number to control
computational timesteps.
There are four output files that can support the conclusion that the model results are numerically stable:

- VELTIMEFP.OUT

- SUPER.OUT

- ROUGH.OUT

- TIME.OUT

If the maximum velocities reported in VELTIMEFP.OUT (sorted and listed in descending order) are reasonable, then there is no numerical surging in the
model.
This can be confirmed with the maximum supercritical Froude numbers listed in SUPER.OUT.
When the limiting Froude number (global or spatially variable) is exceeded, the revised Manning’s n-values are reported in ROUGH.OUT (sorted in
descending order).
If the highest n-value revisions are coincident with the highest reported velocity and Froude numbers, then appropriate adjustments should be made to
grid element n-values, elevations, or surface area (area and width reduction values – ARF and WRF values).
Finally, a review of the TIME.OUT file will indicate which grid elements are slowing down the model (forcing smaller timesteps).
If the culprit cells listed in the TIME.OUT file correlate with those listed in the other files (VELTIMEFP.OUT, SUPER.OUT and ROUGH.OUT), then these
are grid elements that are the cause of any model numerical instability.
The model runs by incrementing and decrementing timesteps, so some grid elements will be listed in the TIME.OUT file, but the cells reported in this
file are not sufficient by themselves to demonstrate numerical surging.
The post processor programs MAXPLOT, PROFILES and HYDROG are additional resources to review hydrograph spikes or adverse water surface elevations.
Appendix C provides some suggestions for addressing numerical instability issues.
For further information on numerical instability and troubleshooting refer to the FLO-2D Reference Manual chapter 2 available with the software
C:\\Users\\Public\\Documents\\FLO-2D PRO Documentation\\flo_help\\Manuals.

Evacuated Grid Elements
-----------------------

With tailings dam breach simulations, scour and deposition may contribute to the evacuation of shallow flow volume from floodplain elements.
Small grid elements and tolerance values and a large peak discharge associated with a tailings dam breach failure may cause a cell to be volume
evacuated at shallow flow.
Small tolerance values (TOL < 0.004 ft or 0.001 m), also referred to as depression storage, results in less volume on a cell for shallow flow.
The FLO-2D model exchanges flow with contiguous elements in eight directions so it is possible with shallow flow to completely drain an element of
volume if the outflow exceeds the inflow plus storage.
Volume conservation error is sometimes related to evacuated elements.

First review the SUMMARY.OUT file to see if there is any volume conservation error.
If the EVACUATEDFP.OUT are empty or non-existent, there are no evacuated elements slowing down the model.
Review the ROUGH.OUT and TIME.OUT files to determine if the evacuated elements listed in EVACUATEDFP.OUT are impacting the model performance.
If this is the case, review these elements in detail in terms of their attributes (n-values, elevations) or components (ARF-values, streets,
infiltration, etc.) and make some adjustments.
For most projects, a few timesteps of evacuated grid elements can be ignored.
The only consequence of the reported evacuated elements are higher n-values and TOL values and a few timestep reductions.

Scour Limitation
----------------

The selection of a given sediment transport equation to simulate the scour and deposition of the fluid phase may not match the project field
conditions resulting in some grid elements being predicted to have a large scour depth (hole).
This depends on the variables in the equation and whether they are self-adjusting related to slope, velocity, or shear stress.
For example, if a scour hole tends to be excessive, the slope into the scoured grid element may be increasingly large, but the slope out of the grid
element will decrease resulting in subsequent deposition filling the scour hole.
If the equation does not have offsetting functions or parameters, the cell scour could continue unabated with unreasonable results.
A global scour depth limitation can be assigned in the SED.DAT file (E-line) such that when the scour depth exceeds the limiting value, the predicted
sediment transport out of the grid element will not be considered when distributing the sediment exchange to contiguous elements.
A typical scour depth limitation may be 3 to 10 ft (1 to 3 m) depending on depth to bedrock.

Channel Two Phase Mudflows
--------------------------

Overland or channel mudflows without a tailings dam breach can be simulated.
The only required additional data besides the channel inflow hydrograph with sediment concentrations is the ISEDN switch for the sediment equation or
sediment group Line 1 in the CHAN.DAT file.
The switch MUD = 2 will initiate the two phase flow.
This will enable a mudflow to be simulated in a channel and then diluted by a downstream tributary contributing a water or low sediment concentration
inflow.
In the example project in Figure 15, the mudflow is introduced into the main channel and a low concentration (water flood) is simulated in the
tributary as defined by the following INFLOW.DAT file.
The main channel first cell is 7304 entering from the right in Figure 15 and the tributary channel inflow node is 5598 shown entering from the north.
The discharge in each channel can vary in time and more than only tributary or overland flow hydrograph can be simulated with the channel.
A tailings dam breach inundation area can be simulated with a downstream channel by putting the first upstream channel element near the dam breach.
When the tailings debouch onto the floodplain from the breach, they will enter the channel through the channel floodplain interface.
Overbank and return flow to the channel will be simulated.

.. image:: ../img/Two_Phase_Flood_Routing_Guidelines/Two040.png

.. image:: ../img/Two_Phase_Flood_Routing_Guidelines/Two041.png

Tributary

Fluid Flow Channel

Main Channel

Mixed Flow

Mudflow Channel

Figure 15.
Two Phase Mudflow in a Channel with Diluted Tributary Inflow.

Two Phase Flow Application - Possible Modeling Scenarios
--------------------------------------------------------

For a two phase flow tailings dam breach project application, the possible breach scenarios include:

- Water failure only: PMP or PMF plus impounded water, or PMP plus impounded water plus inflow flood hydrograph; Use instantaneous breach failure,
  prescribed rate failure or breach erosion.
  No two phase flow necessary for this scenario.

- Mudflow only: Failure of a completely mixed water and tailings material (a relatively fluid volume stored in the tailings reservoir) that will flow
  with an instantaneous breach.
  No fluid layer is assigned.
  The tailings elevation and the water surface elevation are the same.

- Breach failures that include varying tailings material sediment concentrations by volume; Use instantaneous breach failure, prescribed rates of breach
  failure, or sediment erosion breach.

- Multiple tailing dam failures cascading downstream into one another as instantaneous failures, prescribed rates of breach failure or sediment erosion
  breach.

PMP = Probable Maximum Precipitation

PMF = Probable Maximum Flood

The following tailings dam breach scenarios might include these tasks:

- Estimate tailings breach volume with Tailings Dam Tool

- Create combined tailings dam and downstream flooding grid system

- Assign water surface and tailings elevation in INFLOW.DAT, Line R

- Assign sediment transport and mudflow parameters in SED.DAT

- Select one or more fluid sediment transport equations

- Select one or more mudflow samples for varying concentrations by volume

- Check SUMMARY.OUT to compare water/sediment volume conservation

- Simulate a downstream channel and tributaries to capture the breach discharge

1. Dam is constructed from borrow material (not tailings) with impounded water

i. Prescribed failure with vertical and horizontal rates

a. Assign vertical and horizontal breach rates in LEVEE.DAT

b. Assign breach vertical/horizontal rates to zero for instantaneous failure to bedrock

c. Review breach elevation/width with respect to water surface and tailings elevation

ii.
Dam and tailings predicted erosion

a. Assign dam geometry and sediment parameters

b. Review scour depth and deposition downstream near dam breach

c. Check SUMMARY.OUT to review sediment volume contribution from dam

2. The dam is created by tailing deposits

i. Prescribed failure with vertical and horizontal rates

a. Assign vertical and horizontal breach rates in LEVEE.DAT

d. Assign breach vertical/horizontal rates to zero for instantaneous failure to bedrock

c. Review breach elevation/width with respect to water surface and tailings elevation

ii.
Dam and tailings predicted erosion

a. Establish a fake dam geometry to match tailings slope

b. Assign tailings thickness

c. Review scour depth and deposition downstream of dam breach

A tailings reservoir project as a two phase flow example project is presented.
In Figure 16 the tailings reservoir is located on the right portion of grid system using levee elements (red lines) to define the reservoir (the levee
elements defining the reservoir are shown in the insert with the final fluid depths).
There is second upstream reservoir to simulate a cascading tailings breach failure defined by the red line of levee elements, but no fluid or tailings
were assigned to the upstream tailings dam for this example.
When the tailings dam breaches, the fluid phase and the mudflow phase are released with the fluid phase reaches the end of the flow domain.
Initially the fluid (clear water) races ahead of the mudflow through the breach and immediately begins to scour and entrain sediment from both the top
of the tailings material (mudflow phase) and the bed downstream of the breach.
The tailings material thickness is on the order of about 3 to 5 m and the stored water is 3 m above the tailings bed.
Various breach simulations were performed with the tailings material sediment concentrations of up to 55% by volume and a depth of water from 0 m to
10 m.
The figures below show the breach results for a tailings material that is saturated with a concentration by volume of 40%.

.. image:: ../img/Two_Phase_Flood_Routing_Guidelines/image23.png

*Figure 16.
Example Project – Reservoir Located on the Right of the Flow Domain.*

The following two phase flow tailings dam breach scenarios were simulated:

- Instantaneous breach – seismic or static failure

- Breach erosion - dam scour to bedrock

- Prescribed breach – vertical/horizontal breach rates using the eleven sediment transport equations

Figure 16 shows an example of the predicted maximum depths for the combined fluid and mudflow phases.
This example is generated using a prescribed breach rate of 20 m/hr (for both vertical and horizontal) and the Karim-Kennedy sediment transport
equation with a tailings concentration by volume of 40%.
Figure 17 and Figure 18 depict the maximum overland flow depths for the separate fluid and mudflow phases respectively.
The following figures were generated using the FLO-2D MAXPLOT post processor program that was updated for the output files associated with tailings
dam two phase flow applications.

.. image:: ../img/Two_Phase_Flood_Routing_Guidelines/image24.png

*Figure 17.
Maximum Fluid Phase Flow Depth.*

.. image:: ../img/Two_Phase_Flood_Routing_Guidelines/image25.png

*Figure 18.
Maximum Mudflow Phase Flow Depth.*

Figure 17 indicates that the fluid phase flows to the grid system boundary, while Figure 18 shows the tailings material (mudflow) only flows about
halfway to the boundary.
The fluid depth stored in the reservoir is on the order of 3 m in Figure 17 at the start of the simulation.
The reservoir tailings thickness ranges from 1 m to 5 m in Figure 18.

After a 24 hr tailings dam prescribed breach simulation, the final fluid and mudflow depths are shown in Figure 19 and Figure 20 respectively.

.. image:: ../img/Two_Phase_Flood_Routing_Guidelines/image26.png

*Figure 19.
Final Fluid Phase Flow Depth.*

.. image:: ../img/Two_Phase_Flood_Routing_Guidelines/image27.png

*Figure 20.
Final Mudflow Phase Flow Depth.*

Corresponding to the final fluid and mudflow phase depths are the final fluid and mudflow velocities in Figure 21 and Figure 22 which show that the
final mudflow depths in Figure 20 have essentially ceased flowing.

.. image:: ../img/Two_Phase_Flood_Routing_Guidelines/image28.png

*Figure 21.
Final Fluid Phase Velocity.*

.. image:: ../img/Two_Phase_Flood_Routing_Guidelines/image29.png

*Figure 22.
Final Mudflow Phase Velocity – Ceased Flowing.*

The maximum sediment concentration by volume regardless of the time of occurrence for the fluid and mudflow phases are shown in Figure 23 and Figure
24.
Figure 23 indicates that the maximum fluid phase concentration is about 20% by volume while the maximum mudflow phase concentration by volume is
between 50% and 56%.
The maximum and final mudflow phase concentrations by volume (Figure 24 and Figure 25 respectively) are essentially identical because the mudflow
ceased flowing.

.. image:: ../img/Two_Phase_Flood_Routing_Guidelines/image30.png

*Figure 23.
Fluid Phase Maximum Concentration by Volume.*

.. image:: ../img/Two_Phase_Flood_Routing_Guidelines/image31.png

*Figure 24.
Mudflow Phase Maximum Concentration by Volume.*

.. image:: ../img/Two_Phase_Flood_Routing_Guidelines/image32.png

*Figure 25.
Mudflow Phase Final Concentration by Volume.*

The scour and deposition because of the fluid phase being in contact with bed (no mudflow) on a specific grid element is shown in Figure 26.
The occurrence of sediment transport in waves is depicted in this figure with alternating scour (blue) and deposition (red) sequences.
The added mudflow deposit on the fluid phase scour and deposition is shown in Figure 27.
Some tailings material remains in the reservoir as shown both Figure 19 and Figure 27.

These MAXPLOT maps are a simple depiction of the FLO-2D results on a grid element basis.
Higher resolution maps with interpolated flow depth shapefiles can be generated with the FLO-2D QGIS plug-in tool or any CADD or GIS software program
since the results are written to file with x- and y-coordinates in an ASCII format.

.. image:: ../img/Two_Phase_Flood_Routing_Guidelines/image33.png

*Figure 26.
Final Bed Scour or Deposition.*

.. image:: ../img/Two_Phase_Flood_Routing_Guidelines/image34.png

*Figure 27.
Final Bed Scour or Deposition and Mudflow Cessation.*

If a channel exists downstream of the tailings dam breach, most of the mudflow breach discharge will enter and fill the channel.
Figure 28 shows that the floodplain inundation with channel overbank flow is limited compared with the overland flow in Figure 16 thru Figure 18
without the channel.
The final bed elevation in the channel (red line) in Figure 29 shows that sediment deposition raises the bed elevation throughout most of channel.
Yang’s sediment transport equation was used in this FLO-2D simulation.
Figure 29 also displays the maximum fluid or mudflow maximum surface that is higher than the top of bank elevation (cyan color).

.. image:: ../img/Two_Phase_Flood_Routing_Guidelines/image35.png

*Figure 28.
Maximum Flow Depth Combined Channel and Floodplain Flow.*

.. image:: ../img/Two_Phase_Flood_Routing_Guidelines/image36.png

*Figure 29.
Channel Bed and Maximum Fluid/Mudflow Surface Profile (PROFILES Program).*

Recommendations
===============

Data Collection
---------------

This tailings dam breach data collection discussion provides an overview of potential data needs to conduct a FLO-2D two phase flow breach simulation.
The data is cataloged as either required or optional in the following table.

.. image:: ../img/Two_Phase_Flood_Routing_Guidelines/Two042.png

The following component data is not required for modeling the
tailings dam breach. The FLO-2D model can simulate these components if
the downstream area of inundation of the tailings dam breach flooding is
required.

- Evaporation

- Storm drain and groundwater

- Multiple channels

To model the downstream area of inundation with these additional components, use the floodplain cross section component (HYCROSS.OUT) to generate the
tailings dam breach hydrograph below the dam or use the breach hydrograph (BREACH.OUT or PRESCRIBED_BREACHQ.OUT) as an inflow hydrograph (INFLOW.DAT)
to simulate the downstream flooding in a second model.

Sediment Transport Approach
---------------------------

Of the eleven available sediment transport equations, several are suggested for the first simulations.
All the equations can be applied in each tailings dam two phase flow breach model.
For given high flow hydraulics, some equations may generate higher sediment loads than other equations and conversely those same equations may predict
lower sediment loads at low flow conditions.
The SEDTRAN.OUT file lists the sediment discharge (cfs or cms) for all eleven equations for one selected grid element for each output interval.
Comparing the peak sediment loads in the SEDTRAN.OUT file for the grid element downstream of the tailings dam breach in the previous example project,
the following conclusions can be drawn:

- Low Peak Sediment Discharge Equations: Laursen, Toffaleti, Karim-Kennedy

- Moderate Peak Sediment Discharge Equations: Zeller-Fullerton, Yang, Ackers-White, MPM-Woo, MPM-Smart, Van Rijn

- High Peak Sediment Discharge Equations: Engelund-Hansen, Parker, Klingeman & McClean

There is roughly an order of magnitude difference between these three categories.
This can be misleading, however, since local conditions such as a steep slope or high depth can result in a large variation in the results (e.g., MPM-
Smart will generate a large sediment load for a steep slope).
Some of the equations may stop scouring depending on parameter thresholds.
Laursen, Toffaleti and Yang’s equations terminate the sediment transport much sooner than the other equations.
MPM-Smart, Engelund-Hansen and Parker, Klingeman & McClean sustain a high magnitude of sediment transport (orders of magnitude higher than the rest of
equations) until essentially the end of the discharge in the tracking cell.
The scour/deposition (bed elevation change) plots for all eleven sediment transport capacity equations applied to the project example are shown in
Appendix A.

It is recommended that initially a moderate sediment transport equation such as Yang’s be applied.
Then the SEDTRAN.OUT file can be reviewed for selection of other sediment transport equations to encompass the full range of sediment transport
response.
The maximum depths and area of inundation should also be reviewed to determine the impact of applying the different sediment transport capacity
equations.

Mudflow Parameters
------------------

.. math::
   :label:

   \eta = \alpha_i e^{\beta_i C_v}

.. math::
   :label:

   \tau_y = \alpha_i e^{\beta_i C_v}

Some practical guidelines for estimating the mudflow rheological parameters are presented in this section.
Mudflow yield stress τ\ :sub:`y` and viscosity η vary principally with sediment concentration.
The viscous stresses will not play a role in the flow hydraulics unless the sediment concentration by volume exceeds 20%.
If a rheological laboratory analysis of the mudflow site depositional material is available, the following empirical relationships can be used to
compute viscosity and yield stress:

where α\ :sub:`i` and β\ :sub:`i` are empirical coefficients defined by laboratory experiment (O'Brien and Julien, 1988).
The viscosity and yield stress are functions of the concentration of silts, clays and in some cases, fine sands, but not the larger clastic material
rafted along with the flow (See Appendix Table B.1 ).
The viscosity of the fluid matrix is also a function of the percent and type of clays and fluid temperature.
Very viscous mudflows may appear to be laminar, but laminar flows in nature are extremely rare.
Mud floods and virtually all non-flume mudflows are always turbulent.
To balance the turbulent/dispersive stresses with the viscous stresses, reasonable values of the laminar flow resistance K and Manning’s n-value can
be assumed overland water flow resistance.

Most tailings dam with water storage create mudflows with a distinct pattern.
Initially, relatively fluid flows may flow through the breach.
This may be followed by a surge or frontal wave of mud and debris (40 to 50% concentration by volume).
When the peak discharge is released, the average sediment concentration will decrease to the range of 30 to 40% by volume.
On the falling limb of the hydrograph, surges of higher sediment concentration may occur.

For a tailings dam breach, the storage volumes of water and tailings should be estimated along with any rainfall and flood inflow.
Several flooding scenarios may be necessary to generate a worst case or conservative flood event.
A seismic or static tailings dam breach may involve only a mudflow regime if there is no water storage or rainfall/flood inflow.
Conversely, a tailings dam failure with significant water storage may result in a water or very fluid mud flood event.
The scour, mixing, and mobilization of the tailings material will define nature of the mud flood or mudflow progression through the breach.

Each tailings dam material or layer has geologic and soil conditions that will exhibit unique rheological fluid properties.
Where resources are available, it is recommended that viscosity and yield stress as function of concentration be analyzed with a viscometer.
For most tailing dam flood hazard delineation projects, it may be outside the scope of work or budget to conduct a laboratory viscometer analysis.
Nevertheless, there are commercially available viscometers designed to accommodate very viscous samples such as asphalt at low speeds (e.g.,
Brookfield AMETEK…see website:

https://www.brookfieldengineering.com/products/viscometers).

Typically, these viscometers cost in the range from $4,000 to $6,000.
It is necessary to collect an undisturbed mudflow sample deposit and dry and sieve it to extract the fluid matrix.

In the absence of in-situ sample data, reasonable assumptions can made to estimate the rheological properties as a function of sediment concentration.
Fortunately, there have been rheological studies performed identifying that the viscosity and yield stress follow an exponential relationship with
sediment concentration by volume.
The variability of this data is primarily a function of the type and quantity of clay material in the sample.
If rheological laboratory investigations are performed, the data should fall within the banded range given the diverse range of data collected
worldwide (Figures B.1 and B.2 in Appendix B).
Recommendations for a tailings laboratory investigation are:

1. Collect undisturbed tailings deposit samples and sieve the samples for the clay-silt/sand split to determine the percentage of fine sediment in the
   flow material.
   Additional soil analyses such as the Plastic Index and Liquid Limit may also be informative.

2. Starting with a dry deposit sample of the fluid matrix material, re-wet the sample based on accurate measurements of the weight of the sediment sample
   and the added water to determine concentration by volume.
   Record the observations by referencing Table 1.
   By sloshing the rewetted tailings in a container, determine if the mudflow appears to be very viscous or rather dilute.
   Did the flow behave like wet cement or more like a mud flood?

3. Using a commercially available viscometer, determine the forces or stress required to initiate motion in the viscometer.
   This is the yield stress.
   Run the viscometer at low speeds (up to 10 sec\ :sup:`-1` - rotational speed) to measure the viscosity (line slope of the stress versus rate of strain
   plot) for the various sediment concentrations by volume.

4. Regress the viscosity and yield stress data as exponential function of the concentration as noted in the above equations.

If a subjective judgment is required to select a set of rheological relationships, the following approach is recommended:

1. Observe field or historical tailings dam conditions including depositional characteristics in the tailings deposits.
   Use available aerial photos.
   Determine if the tailings deposits appear to be very viscous or rather dilute.
   Did the flow behave like wet cement or like a fluid muddy flood? Did the inflow to the tailings pond cease immediately or continue flowing over the
   deposits? Are there frontal wave terminal berms or lateral berm deposits?

2. If it is determined that the potential tailings flow could be viscous with a moderate yield stress, select a sample from guidelines tables that will
   result in a viscosity and yield stress in an appropriate range in guideline figures.
   Glenwood 4 in Appendix Table B.1 is suggested as a typical type of tailings material that will behave like wet cement.
   Similarly, if it is assumed that the flow more resembled a mud flood with limited viscosity and yield stress, select parameters corresponding to a
   Table B.1 sample such as the Aspen Natural Soil.
   Compute the viscosity and yield stress for several different samples in the B.1 Tables and Figures B.1 and B.2 for a range of concentrations by volume
   and compare the results in a worksheet table.

3. Run several FLO-2D mudflow simulations with different sample viscosity and yield stress relationships and analyze the range of flow results such as
   area of inundation, maximum depths, maximum velocities, peak discharges, etc.
   Determine the worst-case scenario for your project conditions.

Tailings Dam Breach Methods
---------------------------

If a tailings dam with water storage breaches, initially the water is released and scours the stationary tailings material in reservoir at the breach
as the breach expands.
As the fluid supernatant flows through the tailings reservoir to the breach, fluid water and sediment mixture with a low concentration scours the
tailings material as it begins moving in the mudflow phase).
After the breach, the fluid phase continues to scour the downstream bed as the fluid races ahead of the mudflow until the sediment concentration
reaches the hyperconcentrated sediment mud flow level.
From the standpoint of identifying the downstream flood hazard, all three breach methods can be applied to evaluate the worst case: Instantaneous
breach, prescribed breach rates and breach erosion.

*Instantaneous Breach:* Intuitively, collapsing the tailings dam to the base elevation should create the fastest rising frontal wave.
Assigning more than one breach direction and grid element will intensify the breach wave progressing downstream.
The instantaneous breach is initiated by assigning the W-line in the LEVEE.DAT file.
Only the breach elevation (slightly lower than the water surface) is necessary to assign to start the instantaneous breach.

*Prescribed Failure Breach:* A prescribed rate of failure breach is orchestrated by assigning the vertical and horizontal breach rates in the same
W-line of the LEVEE.DAT file.
Suggested rates of failure in ft/hr or m/hr are not readily available in the literature.
A vertical breach rate of 10 ft/hr (3 m/hr) and a horizontal rate of 50 ft/hr (17 m/hr) can be initially applied, but the user is encouraged to
research potential tailings dam breach rates and experiment with various rates to attempt to maximize the breach peak discharge and timing.

*Stack Collapse – Instantaneous Static or Seismic Failure:* A collapse of the tailings facility can be simulated without using the prescribed breach
failure data in the LEVEE.DAT file.
This is accomplished by assigning tailings depths to the grid elements within tailings facility.
When the FLO-2D model is run with the levee dam cells removed, the storage tailings begin to move immediately.

To set up a stack failure, the tailings facility is initially assigned a levee dam with appropriate crest elevations encompassing all the tailings
storage cells (Figure 25).
The starting water surface and tailings surface (or just tailing surface with no supernatant fluid) are assigned in INFLOW.DAT R-Line:

R 28776 4506.00 4501.00 0.25

where: 28776 is a grid element inside the reservoir

4506.00 = water surface elevation

4501.00 = tailings surface elevation

0.250 = reservoir n-value

At this stage, run theFLO-2D model with SIMUL = 0.01 hrs and TOUT = 0.01 hrs and the model will start and stop.
Review the SUMMARY.OUT file for the reported volumes and adjust the grid element foundation or bed elevations until the tailing storage volume is
matched.
A new file is created by this short runtime simulation named TAILINGS_STACK_DEPTH.DAT containing all the grid elements, water depth on the surface of
the tailings and tailings depth.
If the tailings stack failure is only mudflow and not 2 phase flow, then only the tailings depth will be listed in this file.
This file can be imported to QGIS or opened in an ASCII file program editor (WordPad) to revise or contour the tailings depths and this will now
constitute the flow source volume.
The INFLOW.DAT is no longer necessary and can be renamed to INFLOW1.DAT or some other name.

.. image:: ../img/Two_Phase_Flood_Routing_Guidelines/image40.png

*Figure 30.
A Tailing Facility Created by Surround the Reservoir with Levee Elements.*

The next step is to make a copy of the original LEVEE.DAT and then remove or delete those levee elements that will represent the tailings failure
using QGIS or just by editing the LEVEE.DAT file.
If the tailings facility extends across a canyon, the LEVEE.DAT file could be renamed.
The deleted levee elements are the cells that would slough away or disintegrate with the static or seismic failure.
After removing these cells and creating the breach, reset the SIMUL (simulation time in CONT.DAT) and TOUT (output interval) to the original values
for the tailings collapse simulation.
Check the mudflow switch in CONT.DAT (MUD = 1 for mudflow or MUD = 2 for 2 phase flow), then run the model.
The tailings stack will mobilize at the start of the simulation and begin flow downs slope rapidly (Figures 26 and 27).

.. image:: ../img/Two_Phase_Flood_Routing_Guidelines/image41.png

*Figure 31.
The Tailings Mudflow is Mobilized at the Start of the Simulation.*

.. image:: ../img/Two_Phase_Flood_Routing_Guidelines/image42.png

*Figure 32.
The Tailings Facility is Draining after 0.45 hrs.*

*Breach Erosion:* The FLO-2D breach component involves potential overtopping the dam crest, piping erosion through the dam, pipe collapse into a
channel, and/or dam collapse as block failure.
Computing the tailings dam scour is requires more data and the following dam geometry parameters are required:

- Crest elevation

- Starting water surface elevation (or depth below crest) (ft or m)

- Cumulative duration of inundation at specified elevation prior to breach initiation (hr)

- Maximum breach width (ft or m)

- Prescribed initial pipe elevation (ft or m)

- Tailwater elevation (ft or m)

- Foundation or base elevation for vertical breach cessation (ft or m)

In addition, there are dam shell (and infrequently, a potential dam core) material parameters that are required.
These parameters have variable levels of sensitivity as presented in Table 4.

.. image:: ../img/Two_Phase_Flood_Routing_Guidelines/Two045.png

Simulating a tailings dam breach as a water storage reservoir
dam failure will probably result in a slower and longer duration failure
than an instantaneous breach failure. If the tailings dam has
significantly more water storage than tailings, it may make sense to
model the failure as dam erosion failure. Since this dam breach method
requires significant data compilation involving several sensitive and
difficult to analyze parameters, there may be no advantage to applying
this component over the prescribed breach failure mode, especially if
the focus is to maximize the tailings dam breach peak discharge and area
of inundation. If the project objective is to replicate an historic
event, then the breach erosion component should be considered. For more
information, please refer to the FLO-2D White Paper “Simulating Dam
Breach Erosion and Reservoir Drainage” available in your help folder and
at the FLO-2D website. There are also PowerPoint presentations on this
subject.

What to Review - Summary
------------------------

After the successful completion of a FLO-2D tailings dam breach two phase flow simulation the following output files and results listed in Table 5
below should be reviewed.
For more information on these specific review topics refer to the various appropriate White Papers and PowerPoint Presentations on troubleshooting
available for downloading at the FLO-2D website.
Table 5 is presented in a descending order of priority.
The SUMMARY.OUT (Figure 33) file reports on the initial tailings and water volumes in the tailings reservoir.

.. image:: ../img/Two_Phase_Flood_Routing_Guidelines/image44.png

*Figure 33.
Summary.out Inflow Volume.*

The tailings sediment is the bulked tailings minus the tailings water content (113,247 – 67,948.2 = 45,298.
8 m3).
These volumes can be compared with the tailings material that flows through the breach reported in DAMBREACH_VOLUME.OUT:

TOTAL TAILINGS SEDIMENT VOLUME THROUGH BREACH (AF OR CM): 27250.702

TAILINGS VOLUME LEFT IN RESERVOIR (AF OR CM): 18048.098

TOTAL SEDIMENT VOLUME: 45298.800

For this example, project, the percentage of tailings that flowed through the breach is 27,250.7/45,298.8 = 60%.
This should match the volume predicted by the Tailings Dam Tool shown in Figure 2.

.. image:: ../img/Two_Phase_Flood_Routing_Guidelines/Two046.png

References
==========

   Amoudry, L.O., 2008.
   “Two-Phase Modeling of Granular Sediment for Sheet Flows and Scour,” Ph.D.
   Dissertation, Cornell Univ.

   Bagnold, R.A., 1954.
   "Experiments on a gravity-free dispersion of large solid spheres in a Newtonian fluid under shear," *Proc.
   of the Royal Society of London*, Series A, V.
   249, 235-297.

   Cheng, Z.
   and T.J.
   Hsu, 2014.
   “A Multi-dimensional Two-Phase Eulerian Model for Sediment Transport,” Research Report NO.
   CACR-14-08, Center for Applied Coastal Research, Univ.
   of Delaware.

   FLO-2D Reference Manual, 2020.
   www.flo-2d.com

   Garg, R., 2009.
   “Modeling and Simulation of Two-Phase Flows,” Graduate Theses and Dissertations, Iowa State University.

   Keetels, G.H., J.C.
   Goeree, and C.
   van Rhee, 2017.
   “Advection-diffusion sediment models in a two-phase flow perspective.
   J. of Hydraulic Research, 56 (2018) (1), 136-140.

   O’Brien, J.S., 1986.
   "Physical processes, rheology and modeling of mudflows," Ph.D.
   Dissertation, Colorado State University, Fort Collins, Colorado.

   O'Brien, J.S.
   and P.Y.
   Julien, 1988.
   "Laboratory analysis of mudflow properties," *J.
   of Hyd.
   Eng.*, ASCE, 114(8), 877-887.

.. _section-3:

Appendix A. Sediment Transport Equations
========================================

Only one equation is selected to compute the sediment transport capacity in the tailings dam breach simulation, but one floodplain element can be
assigned to review and compare the sediment transport capacity results for all eleven equations by output interval in the SEDTRAN.OUT file.
Using this file, the range of sediment transport capacity and those equations that appear to be overestimating or underestimated the sediment load can
be determined.

Each sediment transport equation is briefly described in the following paragraphs.
The user is encouraged to research which equation is the most appropriate for a specific project.
When reviewing the SEDTRANS.OUT file, it might be observed that generally the Ackers-White and Engelund-Hansen equations compute the highest sediment
transport capacity; Yang and Zeller-Fullerton result in a moderate sediment transport quantity; and Laursen and Toffaleti calculate the lowest
sediment transport capacity.
This correlation, however, varies according to project conditions.
A brief discussion of each sediment transport equation in the FLO-2D model follows along with a plot of the final change in bed elevation (final scour
or deposition of the tailings dam breach project discussed in the document) for comparative purposes.
In the accompanying plots of the tailings dam downstream two phase flow simulation, the limiting scour was assigned as three meters.

*Ackers-White Method.* Ackers and White (1973) expressed sediment transport in terms of dimensionless parameters, based on Bagnold’s stream power
concept.
They proposed that only a portion of the bed shear stress is effective in moving coarse sediment.
Conversely for fine sediment, the total bed shear stress contributes to the suspended sediment transport.
A series of dimensionless parameters are required that include a mobility number, representative sediment number and sediment transport function.
The various coefficients were determined by best-fit curves of laboratory data involving sediment size greater than 0.04 mm and Froude numbers less
than 0.8.
The condition for coarse sediment incipient motion agrees well with Sheild’s criteria.
The Ackers-White approach tends to overestimate the fine sand transport (Julien, 1995).

.. image:: ../img/Two_Phase_Flood_Routing_Guidelines/Two047.png

*Figure A.1.
Plot of Final Scour/Deposition for the Ackers-White Equation.*

*Engelund-Hansen Method.* Bagnold’s stream power concept was applied with the similarity principle to derive a sediment transport function.
The method involves the energy slope, velocity, bed shear stress, median particle diameter, specific weight of sediment and water, and gravitational
acceleration.
In accordance with the similarity principle, the method should be applied only to flow over dune bed forms, but Engelund and Hansen (1967) determined
that it could be effectively used in both dune bed forms and upper regime sediment transport (plane bed) for particle sizes greater than 0.15 mm.

.. image:: ../img/Two_Phase_Flood_Routing_Guidelines/Two048.png

*Figure A.2.
Plot of Final Scour/Deposition for the Engelund-Hansen Equation.*

*Karim-Kennedy Equation.* The simplified Karim-Kennedy equation (F.
Karim, 1998) is a nonlinear multiple regression equation based on velocity, bed form, sediment size and friction factor using a large number of river
flume data sets.
The data includes sediment sizes ranging from 0.08 mm to 0.40 mm (river) and 0.18 mm to 29 mm (flume), slope ranging from 0.0008 to 0.0017 (river) and
0.00032 to 0.0243 (flume) and sediment concentrations by volume up to 50,000 ppm.
This equation is suggested for non-uniform riverbed conditions for typical large sand and gravel bed rivers.
It will yield results similar to Laursen’s and Toffaleti’s equations (lower sediment transport capacity).

.. image:: ../img/Two_Phase_Flood_Routing_Guidelines/Two049.png

*Figure A.3.
Plot of Final Scour/Deposition for the Karim-Kennedy Equation.*

*Laursen’s Transport Function.* The Laursen (1958) formula was developed for sediments with a specific gravity of 2.65 and had good agreement with
field data from small rivers such as the Niobrara River near Cody, Nebraska.
For larger rivers the correlation between measured data and predicted sediment transport was poor (Graf, 1971).
This set of equations involved a functional relationship between the flow hydraulics and sediment discharge.
The bed shear stress arises from the application of the Manning-Strickler formula.
The relationship between shear velocity and sediment particle fall velocity was based on flume data for sediment sizes less than 0.2 mm.
The shear velocity and fall velocity ratio expresses the effectiveness of the turbulence in mixing suspended sediments.
The critical tractive force in the sediment concentration equation is given by the Shield’s diagram.

.. image:: ../img/Two_Phase_Flood_Routing_Guidelines/Two050.png

*Figure A.4.
Plot of Final Scour/Deposition for the Laursen Equation.*

*MPM-Smart Equation.* This is a modified form of the Meyer-Peter-Mueller (MPM) bedload sediment transport equation (Smart, 1984) for steep channels
ranging from 3% to 20%.
The original MPM equation underestimated sediment transport capacity because of deficiencies in the roughness values.
This equation can be used for sediment sizes greater than 0.4 mm.
It was modified to incorporate the effects of nonuniform sediment distributions.
It will generate sediment transport rates approaching that computed by the Engelund-Hansen equation on steep slopes.

.. image:: ../img/Two_Phase_Flood_Routing_Guidelines/Two051.png

*Figure A.5.
Plot of Final Scour/Deposition for the MPM-Smart Equation.*

*MPM-Woo Relationship.* For computing the bed material load in steep sloped, sand bed channels such as arroyos, washes and alluvial fans, Mussetter,
et al.
(1994) linked Woo’s relationship for computing the suspended sediment concentration with the MPM bedload equation.
Woo et al.
(1988) developed an equation to account for the variation in fluid properties associated with high sediment concentration.
By estimating the bed material transport capacity for a range of hydraulic and bed conditions typical of the semi-arid Albuquerque, New Mexico area,
Mussetter et al.
(1994) derived a multiple regression relationship to compute the bed material load as a function of velocity, depth, slope, sediment size and
concentration of fine sediment.
The equation requires estimates of exponents and a coefficient and is applicable for velocities up to 20 fps (6 mps), a bed slope < 0.04, a D\
:sub:`50` < 4.0 mm, and a sediment concentration of less than 60,000 ppm.
This equation provides a method for estimating high bed material load in steep, sand bed channels that are beyond the hydraulic conditions for which
the other sediment transport equations may be applicable.

.. image:: ../img/Two_Phase_Flood_Routing_Guidelines/Two052.png

*Figure A.6.
Plot of Final Scour/Deposition for the MPM-Woo Equation.*

*Parker, Klingeman and McLean (1982).* This equation was derived primarily for gravel or sandy bed material load.
It was based on Milhous (1973, 1982) sediment transport measurements at Oak Creek, Oregon.
At low flows the equation generates sediment load that is entirely bedload.
For higher flows approaching bankfull discharge, the predicted bed material load is presumed to be mixed suspended and bedload for the smaller
sediment size fractions.
The substrate-based equation predicts individual size fraction transport rates for channel width average conditions which are then summed to get a
total bed load.

.. image:: ../img/Two_Phase_Flood_Routing_Guidelines/Two053.png

*Figure A.7.
Plot of Final Scour/Deposition for the Parker, Klingeman and McClean Equation.*

*Toffaleti’s Approach.* Toffaleti (1969) develop a procedure to calculate the total sediment load by estimating the unmeasured load.
Following the Einstein approach, the bed material load is given by the sum of the bedload discharge and the suspended load in three separate zones.
Toffaleti computed the bedload concentration from his empirical equation for the lower zone suspended load discharge and then computed the bedload.
The Toffaleti approach requires the average velocity in the water column, hydraulic radius, water temperature, stream width, D\ :sub:`65` sediment
size, energy slope and settling velocity.
Simons and Senturk (1976) reported that Toffaleti’s total load estimated compared well with 339 river and 282 laboratory data sets.
This equation has several empirical and poorly defined coefficients that may give poor results for highly variable conditions.

.. image:: ../img/Two_Phase_Flood_Routing_Guidelines/Two054.png

*Figure A.8.
Plot of Final Scour/Deposition for the Toffaleti Equation.*

*Van Rijn.* This equation predicts the total sediment discharge assuming a parabolic distribution of suspended sediment in the lower half of the flow
and a uniform distribution in the upper half of the flow.
The uniform sediment distribution in upper flow portion is based on the maximum value of the parabolic distribution from the lower flow.
The bedload discharge and suspended load is computed separately and added together to derive the total sediment load.
For a discussion between measured and predicted data for the equation using laboratory and field tests see Strum (2001).

.. image:: ../img/Two_Phase_Flood_Routing_Guidelines/Two055.png

*Figure A.9.
Plot of Final Scour/Deposition for the Van Rijn Equation.*

*Yang’s Method.* Yang (1973) determined that the total sediment concentration was a function of the potential energy dissipation per unit weight of
water (stream power) and the stream power was expressed as a function of velocity and slope.
In this equation, the total sediment concentration is expressed as a series of dimensionless regression relationships.
The equations were based on measured field and flume data with sediment particles ranging from 0.137 mm to 1.71 mm and flows depths from 0.037 ft to
49.9 ft.
Most of the data was limited to medium to coarse sands and flow depths less than 3 ft (Julien, 1995).
Yang’s equations can be applied to sand and gravel.

.. image:: ../img/Two_Phase_Flood_Routing_Guidelines/Two056.png

*Figure A.10.
Plot of Final Scour/Deposition for the Yang’s Equation.*

*Zeller-Fullerton Equation.* Zeller-Fullerton is a multiple regression sediment transport equation for a range of channel bed and alluvial floodplain
conditions.
This empirical equation is a computer-generated solution of the MPMuller bed-load equation combined with Einstein’s suspended load to generate a bed
material load (Zeller and Fullerton, 1983).
For a range of bed material from 0.1 mm to 5.0 mm and a gradation coefficient from 1.0 to 4.0.
Julien (1995) reported that this equation should be accurate with 10% of the combined MPM and Einstein equations.
The Zeller-Fullerton equation assumes that all sediment sizes are available for transport (no armoring).
The original Einstein method is assumed to work best when the bedload constitutes a significant portion of the total load (Yang, 1996).

.. image:: ../img/Two_Phase_Flood_Routing_Guidelines/Two057.png

*Figure A.11.
Plot of Final Scour/Deposition for the Zeller-Fullerton Equation.*

The above comparative plots (A.1 thru A.11) reveal that Laursen, Karim-Kennedy, and Zeller-Fullerton have the smallest variation in scour/deposition
and that Engelund-Hansen, MPM-Smart, and Parker, Klingeman & McClean are the most aggressive equations in generating a scour/deposition response.

In summary, Yang (1996) made several recommendations for the application of total load sediment transport formulas in the absence of measured data.
These recommendations for natural rivers are:

- Use Zeller and Fullerton equation when the bedload is a significant portion of the total load.

- Use Toffaleti’s method or the Karim-Kennedy equation for large sand-bed rivers.

- Use Yang’s equation for sand and gravel transport in natural rivers.

- Use Ackers-White or Engelund-Hansen for subcritical flow in lower sediment transport regime.

- Use Laursen’s formula for shallow rivers with silt and fine sand.

- Use MPM-Woo’s or MPM-Smart for steep slope, arroyo sand bed channels and alluvial fans.

Yang (1996) reported that ASCE ranked the equations (not including Toffaleti, MPM-Woo, Karin-Kennedy) in 1982 based on 40 field tests and 165 flume
measurements in terms of the best overall predictions as follows with Yang ranking the highest: Yang, Laursen, Ackers-White, Engelund-Hansen, and
combined Meyer-Peter, Muller and Einstein.

It is important to note that in applying these equations, the wash load is not included in the computations.
The wash load should be subtracted from any field data before comparing the field measurements with the predicted sediment transport results from the
equations.
It is also important to recognize if the field measurements are sediment supply limited.
If this is the case, any comparison with the sediment transport capacity equations may be inappropriate.

There are two other sediment transport options available in the FLO-2D model; assignment of rigid bed element and a limitation on the scour depth.
Rigid bed elements can be used to simulate a concrete apron in a channel below a culvert outlet, channel bed rock or a concrete lined channel reach.
The scour depth limitation is a control that can be invoked for sediment routing.


Appendix A – References
-----------------------

Ackers, P.
and W.R.
White, 1973.
“Sediment transport: new approach and analysis,” J.
of Hyd., ASCE, V.
99, no.
HY11, pp.
2041-2060.

Engelund, F.
and E.
Hansen, 1967.
“A monograph on sediment transport in alluvial streams,” Teknisk Forlag, Copenhagen.

Graf, W.H., 1971.
*Hydraulics of Sediment Transport*.
McGraw-Hill, New York, N.Y.

Julien, P.Y., 1995.
*Erosion and Sedimentation*.
Cambridge University Press, New York, N.Y.

Karim, F., 1998.
“Bed material discharge prediction for nonuniform bed sediments,” J.
of Hyd.
Eng., ASCE, 124(6), 597-604.

Laursen, E.M., 1958.
“The total sediment load of streams,” J.
of the Hyd.
Div., ASCE, V.
84, No HY1, 1530-1536.

Milhous, R.T., 1973.
"Sediment transport in a gravel-bottomed stream," Ph.D.
Dissertation, Dept.
of Civil Engineering, Oregon State Univ., Corvallis, OR.

Milhous, R.T., 1982.
"Effect of sediment transport and flow regulations of gravel-bed rivers," in Hay, R.D., J.C.
Bathurst and C.R.
Thorne (eds), *Gravel-bed rivers: Fluvial processes, engineering and management*.
Wiley-Interscience, Toronto.

Mussetter, R.A., P.F.
Lagasse, M.D.
Harvey, and C.A.
Anderson, 1994.
“Sediment and Erosion Design Guide.” Prepared for the Albuquerque Metropolitan Arroyo Flood Control Authority by Resource Consultants & Engineers,
Inc., Fort Collins, CO.

Parker, G., P.C.
Klingeman and D.G.
McLean, (1982).
"Bedload and size distribution in paved gravel-bed streams," J.
of Hyd.
Div., ASCE.
108(HY4), p.
544-571.

Simons, D.B.
and F.
Senturk, 1976.
*Sediment Transport Technology*, Water Resource Publications, Fort Collins, CO.

Smart, G.M., 1984.
“Sediment transport formula for steep channels,” J.
of Hydraulic Engineering, ASCE, 110(3), 267-275.

Strum, T.W., 2001.
"*Open Channel Hydraulics*," McGraw-Hill Education, NY, NY.

Toffaleti, F.B., 1969.
“Definitive computations of sand discharge in rivers,” J.
of the Hyd.
Div., ASCE, V.
95, no.
HY1, pp.
225-246.

Woo, H.S.
P.Y.
Julien, and E.V.
Richardson, 1988.
“Suspension of large concentrations of sand,” J.
Hyd.
Eng., ASCE, 114, no.
8, pp.
888-898.

Yang, C.T., 1973.
“Incipient motion and sediment transport,” J.
of Hyd Div.
ASCE, V.
99, no.
HY10, pp.
1679-1704.

Yang, C.T., 1996.
*Sediment Transport, Theory and Practice*,” McGraw-Hill, New York, N.Y.

Zeller, M.
E.
and W.
T.
Fullerton, 1983.
“A theoretically derived sediment transport equation for sand-bed channels in arid regions,” Proceedings of the D.
B.
Simons Symposium on Erosion and Sedimentation,
R. M.
Li and P.
F.
Lagasse, eds., Colorado State University and ASCE.

Appendix B. Tailings Dam Mudflows
=================================

Very viscous, hyperconcentrated sediment flows are referred to as mudflows.
Mudflows are nonhomogeneous, nonNewtonian, transient flood events whose fluid properties can change significantly as they flow down steep canyons and
floodplains below a tailings dam.
A mudflow will consist of a fine sediment fluid matrix that can support boulder transport and its behavior is a function of the fluid matrix
properties, flow area geometry, slope and roughness.
The fine sediment concentration (silt, clay and fine sands in the fluid matrix) controls the fluid properties including viscosity, density and yield
stress.
The dominant property of a mudflow is the high viscosity which results in velocities much slower than water floods on the same slope.
High fluid matrix density can increase the buoyancy of large sediment particles from gravel to boulders which are just along for the ride, often being
transported near the flow surface.
The yield stress is a measure of the internal fluid resistance to flow and will effect both flow initiation and cessation.

For a mudflow event, the average sediment concentration generally ranges between 20% and 35% by volume with peak concentrations approaching 50% (Table
1 in the main document).
If the tailings dam has relatively equal volumes of tailings and water storage, the breach hydrograph may contain too much water to produce a viscous
mudflow event.
Most tailings dam breach mudflows have a distinct pattern of flood evolution.
Initially, clear water flows may debouch from the reservoir which will be quickly followed by a surge wave of tailings mud (40 to 50% concentration by
volume).
When the breach peak discharge arrives, the average sediment concentration may decrease to the range of 30 to 40% concentration by volume if the water
storage is sufficient.
On the falling limb of the hydrograph, surges of higher sediment concentration may occur.

If the tailings mudflow was initiated by a seismic or static slope stability failure, the concentration by volume will be relatively uniform
throughout the mudflow event.
As the mudflow moves down the valley or canyon, dewatering may occur further increasing the concentration by volume.
The final area of inundation will depend on the volume and the flow cessation.

To simulate mudflows with the FLO-2D model, the viscosity and yield stress variables must be specified.
In most cases, local viscosity and yield stress data is not available and variables must be chosen from Table B.1 or some other source.
In the absence of any tailings laboratory data for a viscous mudflow, it is suggested that the Glenwood 4 viscosity and yield stress variables be
assigned.
The variables for this sample will result in a high viscosity and moderate yield stress with high sediment concentrations.
Other sample relationships in the following table can be evaluated to establish a range of hydraulic conditions.
If other viscosity and yield stress relationships are applied, it is recommended that the plotted relationships fall in the range of the bands shown
in Figures B.1 and B.2.
Data that falls outside the ranges in these figures may not yield representative flow results.

.. image:: ../img/Two_Phase_Flood_Routing_Guidelines/Two060.png

When routing the mud flood or mudflow progression from the tailings dam over the floodplain, the FLO-2D model preserves continuity for both the water
and sediment.
For every grid element and timestep, the change in the water and sediment volumes and the corresponding change in sediment concentration are computed.
At the end of the simulation, the model reports (SUMMARY.OUT) on the amount of water and sediment removed from the study area (outflow) and the amount
and location of the water and sediment remaining on the floodplain.
This total sediment volume should be reviewed to determine if this represents the tailings volume that flowed through the breach.
The areal extent of mudflow inundation and the maximum flow depths and velocities are a function of the available sediment.

.. image:: ../img/Two_Phase_Flood_Routing_Guidelines/Two058.png

*Figure B.1.
Dynamic Viscosity of Mudflow Samples vs Volumetric Concentration.
(From FLO-2D White Paper ‘Simulating Mudflow Guidelines’ after O’Brien and Julien, 1988).*

.. image:: ../img/Two_Phase_Flood_Routing_Guidelines/Two059.png

*Figure B.2.
Yield Stress of Mudflow Samples Versus Volumetric Concentration.
(From FLO-2D White Paper ‘Simulating Mudflow Guidelines’ after O’Brien and Julien, 1988)*

.. _section-4:

Appendix C. Model Speed and Numerical Stability Adjustments
===========================================================

Use the default Courant number (0.6) and TIME_ACCEL (0.1) for the initial simulation and then review the VELTIMEFP.OUT file that reports the maximum
velocities in descending order to determine if there are any unreasonable velocities.
Finally, verify the model stability by reviewing the SUPER.OUT file for high maximum Froude numbers.
Review the troubleshooting and numerical stability PowerPoint presentations in the FLO-2D help folder for more detailed information.
The following approach is suggested for adjusting slow down the model to eliminate numerical instability:

1. If the model has no numerical surging or unreasonable maximum velocities and it is desired to have the model run faster, increase the TIME_ACCEL
   parameter from 0.1 to 0.2 and run the model again.
   If the model runs faster and the results still do not indicate any numerical instability, then increase TIME_ACCEL to 0.25.
   Some numerical instability may begin to appear in VELTIMFP.OUT when TIME_ACCEL is 0.3 or higher.

2. When unreasonable velocities or Froude numbers are noted, decrease the TIME_ACCEL by 0.05.
   Review the model runtime at the end of the SUMMARY.OUT file and do the various numerical instability checks.
   At this point, a pattern will probably be apparent and the optimum Courant number and TIME_ACCEL parameter can be achieved.
   If the model becomes numerically stable with the decreased TIME_ACCEL, it may be possible to increase the Courant number to achieve a slightly faster
   model.

3. If the model has some initial numerical instability, leave the TIME_ACCEL at the default value of 0.1 and decrease the Courant Number from 0.6 to 0.5
   to 0.4 over several runs until the numerical instability is eliminated.
   Data adjustments to eliminate numerical surging might include increasing n-values using the limiting Froude number and the ROUGH.OUT file.
   Depressed grid elements, deep ponded water or steep slopes may also contribute to unreasonably high maximum velocities.

4. Following each flood simulation, the TIME.OUT file should be reviewed to determine which of the grid elements are frequently exceeding the Courant
   timestep and contributing to a slow model speed.
   For those grid elements with excessive timestep decrements, adjustments can be made to the node attributes such as topography, roughness, available
   surface area (area reduction values ARFs) or width reduction values (WRFs).


