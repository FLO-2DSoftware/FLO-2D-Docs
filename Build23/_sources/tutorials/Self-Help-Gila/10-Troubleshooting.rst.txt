Troubleshooting
==================================

Common issues and mistakes that happen during this training activity.

Cell Size Issue
-------------------------------

If an error appears related to the variable cell_size.  Check the Attribute Table of Computational Domain and make
sure the cell size field is appropriately assigned.

Next Issue
-------------------------------


FAQ - Webinar
==================

This section contains a list of frequently asked questions (FAQs) from various webinars.

**Q: What is the difference between QuickRun and regular run?**
A: Quick Run exports and runs the engine. Regular run runs the engine on the Project Folder.

**Q: When you apply an inflow line, does the hydrograph apply to each cell, or is it divided evenly amongst each cell?**
A: In the latest version, the hydrograph is divided by each cell during the export process. This only happens on line BCs.

**Q: Can you please show how to add inflow (external inflow) to a channel or storm drain?**
A:
- External inflow to a channel is done via a channel inflow node. This is shown in the Self Help Channel Lesson.
- Storm drain nodes can also be assigned an external inflow using the Storm Drain Inlet Junction Attribute Editor.
To access this, click the FLO Info button and then click any storm drain inlet/junction. Change the external inflow
to "Yes" and access the Inflow dialog. You can enter an inflow table or a base flow. It's pretty self-explanatory once you open the window.

**Q: Doesn't the Gila Plugin need Interpolate.exe for channels anymore?**
A: All the processes on the channels are done automatically on the backend. It still requires interpolate.exe, but you don't see it in action. You will get an error message if interpolate.exe isn't in the FLO-2D Pro folder or if you are pointing to the wrong flopro.exe folder.

**Q: Does the boundary polygon select the last/bounding grids and eliminate stacked outflow nodes?**
A: Yes, it does. The polygon tool will eliminate stacked nodes. Robson also improved this tool's speed, so it won't take a long time to calculate the boundary anymore.

**Q: Should the outflow polygon be placed anywhere there is flow leaving the computational domain?**
A: Yes, you should place a boundary anywhere the boundary causes an artificial ponded water condition.

**Q: Will this recording be available at a later stage?**
A: Yes, the recording will be available in the ShareFile webinar series Self-Help Kit.

**Q: For channel outflow, can we set up outflow with a hydrograph to obtain a hydrograph to transfer to a downstream model where the channel continues further downstream?**
A: No, that is not possible. Get the channel outflow from hychan.out just upstream of the outflow node.

**Q: I saw that the tutorial schedule does not cover non-Newtonian flooding. Will the tutorial on this topic be updated soon?**
A: The tutorial is available by request. Sorry, we have not had time to get it on the new system.

**Q: Where did you pull this storm drain component window?**
A: The "Select Component from Shapefile" button is the second button from the left on the Storm Drain Editor.

**Q: I'm getting an error attempting to connect multiple conduits to one outfall. Is this bad modeling practice even if it contradicts field conditions?**
A: Only one conduit is allowed to be connected to an outfall. To fix this, add a junction that receives water from multiple conduits and then connect the outfall to the junction.

**Q: I assume the outfall elevation is irrelevant if outfalling outside the project domain and assigning discharge off the grid?**
A: The outfall elevation, conduit length, and geometry are important to set the hydraulic conditions accurately at the outfall. It isn’t important to position them correctly, but their other attributes are important.

**Q: If the outfall is outside the computation domain, can it be a free outfall with a true elevation (below grid elevation) since it is outside the domain?**
A: If you assign it as "Free," then the flow will leave the outfall as if there is no head on the system. You may want to assign a water surface that represents something valid in that case. Good question! I will study it and hopefully remember to post it to the Basin Example.

**Q: If a storm drain continues to downstream domains, can we set up outflow as time-discharge to obtain a hydrograph and then transfer it to the downstream domain?**
A: Use the reported results for the outfall to transfer a hydrograph or time series inflow to the downstream model. It isn’t necessary to define the outfall as a Time Series outfall—the information is already reported.

**Q: Do the FLO-2D manuals have a reference table for roughness coefficients, especially for 1D channels?**
A: This question was answered live during the session.

**Q: Can we import multiple culvert equations using a text file to assign multiple at once, similar to HYSTRUCT?**
A: This is a wishlist item.

**Q: I read the manual but wanted to confirm that the surcharge depth applied to the junctions is related to the depth at the manhole. Does "Type 5" become affected by the flow depth? Can you provide some insight on typical depths used?**
A: The surcharge depth and flow depth represent the total pressure that must be exceeded to pop a manhole.

**Q: Do you have a process to run old projects with SWMM components using the new exe? One of the changes is that no subcatchments are needed with the new exe. Are there any other checks?**
A: I’ll need to do some research, but the engine should use both types. However, QGIS and the plugin might ignore subcatchments.

**Q: Which .OUT file has channel cross-section outflow hydrographs if we are to transfer flows between domains where the channel continues in downstream domains?**
A: Use the discharge at the next upstream node. You can get that from the QGIS reporting tool or from hycross.out.
