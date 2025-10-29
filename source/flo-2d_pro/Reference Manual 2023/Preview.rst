.. vim: syntax=rst

   *A few comments on modeling free surface flows…*

Flood routing models are becoming very detailed.
While models have become larger and faster with higher resolution (smaller elements) and expanding GIS and digital terrain model (DTM) resources, the
accuracy of flood hazard delineation is still limited by hydrologic data (rainfall and flood inflow hydrographs).
When adding complex urban detail to a two-dimensional flood routing model, the user should try to find a balance between the data, model resolution,
computer resources and budget.
Reliable flood hazard delineation also requires a critical review of model component applicability and modeling assumptions.
Digital terrain models are becoming the foundation of high-resolution flood mapping, but post-flood event surveys of high-water marks and aerial
photography of the area of inundation for model calibration are often either unavailable or were collected long after the flood waters have receded.
Correlating the area of inundation with flood peak discharge can lead to the harsh realization that even the best gaging data has limited accuracy at
high flows.

With the advances in flood simulation, it may appear that model complexity is becoming overwhelming.
Please take heart in the comments of Cunge et al.
(1980):

   *“The modeler must resist the temptation to go back to one-dimensional schematization because of lack of data otherwise necessary for an accurate
   twodimensional model calibration.
   If the flow pattern is truly two-dimensional, a one-dimensional schematization will be useless as a predictive tool...” “It is better to have a two-
   dimensional model partially calibrated in such situations than a one-dimensional one which is unable to predict unobserved events.
   Indeed, the latter is of very little use while the former is an approximation which may always be improved by complimentary survey.”*

As a final word, please note that all software programs have bugs that are inherent part of the process of implementing model enhancements for detail,
speed and accuracy.
Even when a model engine is well tuned, adding components may introduce conflicts or perhaps uncover bugs that were previously undetected.
FLO-2D is certainly no exception.
The model is continually evolving and when comparing results with previous versions, you may note some differences.
While the current model results should be more accurate, we will address all questions and concerns over model application and accuracy.
On occasion a project application pushes the model to new limits which can lead to new developments that benefit all users.
The modeler is encouraged to share interesting projects with us and we will aspire to make the FLO2D model a comprehensive, affordable and flexible
tool.

**BRIEF OVERVIEW**

FLO-2D is a finite volume conservation flood routing model.
It is a valuable tool for delineating flood hazards, regulating floodplain zoning or designing flood mitigation.
The model will simulate river overbank flows, but it can also be used on unconventional flooding problems such as unconfined flows over complex
alluvial fan topography and roughness, split channel flows, mud/debris flows and urban flooding.
Its primary application is for urban flood simulation with buildings, streets, walls and storm drains.
FLO-2D is listed as FEMA approved hydrologic/hydraulic model.
Contact us for help with getting the model approved for local FIS studies in your community.

The FLO-2D software package includes a, FLO-2D Plugin, a grid developer system (GDS), a MAPPER Pro program that automates flood hazard delineation,
and three other processor programs: HYDROG, PROFILES and MAXPLOT.
The FLO-2D Plugin will provide complete GIS integration for generating the FLO-2D data files and mapping the model results.
The older GDS program will interpolate the DTM data, assign elevations to an assigned grid system and provide graphical interface to generate and edit
model component data.
The MAPPER Pro program automates flood hazard map delineation.
MAPPER Pro will generate incredibly detailed flood inundation color contour maps and shape files.
It will also replay flood animations.

The FLO-2D Reference Manual is devoted to model description, theory, and components.
The user is encouraged to read this manual to become familiar with the overall modeling approach, theory, and background.
The Data Input Manual is a separate manual subdivided into a series of data files with variable descriptions and comments.
There is a Data Input Manual appendix with White Papers that discuss specific component development guidelines.
There is also a separate Storm Drain Manual because of the detail and complexity of modeling the storm drain system.
Individual manuals are devoted to the application of the QGIS FLO-2D Plugin, GDS, and MAPPER.

The user can keep current on the FLO-2D model and processor program updates, training and other modeling news at the website: www.flo-2d.com.
