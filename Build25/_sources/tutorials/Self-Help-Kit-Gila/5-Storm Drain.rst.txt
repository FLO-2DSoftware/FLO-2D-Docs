Storm Drain
============

.. dropdown:: Storm Drain Lectures


    .. raw:: html

        <h2>Data and Resources</h2>

    This lesson provides an introduction to the storm drain data used by FLO-2D.

    .. raw:: html

       <iframe width="560" height="315" src="https://www.youtube.com/embed/YGHUA2fgIFA?si=hJIfJgNR7BOciJuL"
       title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media;
       gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>


    **Resources**

    1. FLO-2D Storm Drain Manual :ref:`Storm drain Guidelines <sdguidelines>`. 
    2. FLO-2D Plugin User Manual :ref:`Storm Drain Editor <sdeditor>`.

    3. EPA SWMM Documentation 5.0 is installed with EPA SWMM.

        C:\\Program Files (x86)\\EPA SWMM 5.0\\epaswmm5.chm

    4. Open SWMM Documentation and Forum is an excellent resource for general storm drain modeling questions.

        .. raw:: html

            <a href="https://www.openswmm.org/" target="_blank">Open SWMM</a>

    5. ChatGPT is an excellent quick reference but be careful because it often uses the wrong version of a software when it
       provides help.

        .. raw:: html

            <a href ="https://chat.openai.com/" target="_blank">Chat GPT 3.5</a>

    6. Use the contact form if these resources do not provide a solution to a FLO-2D storm drain modeling problem.

        .. raw:: html

            <a href ="https://flo-2d.com/contact/" target="_blank">Contact FLO-2D Support</a>

    
    **Storm Drain Units**

    FLO-2D uses the following units for storm drain modeling.

    ====================  ============================  ===============================
    **Parameter**         **Units (Imperial)**          **Units (Metric)**
    ====================  ============================  ===============================
    Discharge             cubic feet per second (cfs)   cubic meters per second (cms)
    Volume                cubic feet (ft³)              cubic meters (m³)
    Depth                 feet (ft)                     meters (m)
    Area                  square feet (ft²)             square meters (m²)
    Elevation             feet (ft)                     meters (m)
    Velocity              feet per second (ft/s)        meters per second (m/s)
    Time                  hours (hr)                    hours (hr)
    Date                  MM/DD/YYYY                    MM/DD/YYYY
    Time Series           HH:MM                         HH:MM
    ====================  ============================  ===============================

    .. raw:: html

        <h3>Storm Drain Feature Overview</h3>

    - **Point features** (nodes): inlets, junctions, manholes, outfalls, storage units
    - **Polyline features** (links): conduits, pumps, orifices

    .. raw:: html

        <h4>Node Overview - Inlet, Junction</h4>

    This lesson explains how to review and interpret inlet and junction shapefile data for storm drain modeling in FLO-2D.
    Inlet and junction nodes contain attributes that define how they interact with the grid and storm drain network.

    .. raw:: html

       <iframe width="560" height="315" src="https://www.youtube.com/embed/KzIdcyYZKpQ?si=a3u6R2X0fQH_HiuQ"
       title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media;
       gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>


    **Documentation**

    - Use the **Storm Drain Guidelines** (Chapter 2) to understand inlet types:

      - Type 0: Junction (no interaction with surface)
      - Type 1: Curb opening
      - Type 2: Curb with gutter
      - Type 3: Grate
      - Type 4: Unique (e.g. headwall)
      - Type 5: Manhole

    .. raw:: html

        <h4>Node Overview - Outfall, Storage Unit</h4>

    This lesson explains how to review and configure outfalls and storage units in storm drain shapefiles.

    .. raw:: html

       <iframe width="560" height="315" src="https://www.youtube.com/embed/D-tWFxOMdXE?si=DjCLC3GfiyyMzqsu"
       title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media;
       gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

    .. raw:: html

        <h4>Link Overview - Conduits</h4>

    This lesson explains how to review and configure conduits in storm drain shapefiles.

    .. raw:: html

       <iframe width="560" height="315" src="https://www.youtube.com/embed/ZReLFF5yfYQ?si=K1QSmsJcsPRt9Hr-"
       title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media;
       gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

    .. raw:: html

        <h4>Link Overview - Pump, Orifice, Weir</h4>

    This lesson explains how to review and configure pumps, orifices, and weirs in storm drain shapefiles.

    .. raw:: html

       <iframe width="560" height="315" src="https://www.youtube.com/embed/FQhkxsgntPY?si=CWEW6rvhRHw51-NA"
       title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media;
       gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

    

.. dropdown:: Simple Storm Drain Tutorial

    .. raw:: html

        <h2>Create a Storm Drain from Shapefiles</h2>

    This simple lesson shows how to create a simple storm drain from Shapefiles.

    .. Note:: It will be easier to view these videos on YouTube.

        Set the video playback speed to 2x to complete the lessons faster.

        The videos are more detailed whereas the text gives the minimum steps needed
        to complete the project.

    .. raw:: html

        <iframe width="560" height="315" src="https://www.youtube.com/embed/C6xeIRDMeMg?si=-kFK9glCNNb5-YDH" 
        title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; 
        gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>


    This lesson walks through building a simple storm drain system from shapefiles.

    .. raw:: html

        <h3> Step 1: Load Shapefiles </h3>

    - Open the **Simple Storm Drain Layers** folder.
    - Drag and drop the appropriate shapefiles into QGIS.

    .. image:: ../img/shg/5a/shg_sstorm001.jpg

    - Save the project and when prompted to save the layers to the GeoPackage, select **No**.  
    - These layers can be removed when no longer needed.
    - These features will be copied to the Storm Drain User Layers and are no longer needed when that process is complete and 
      the test run is successful.

    .. raw:: html

        <h3> Step 2: Assign Shapefile Fields </h3>

    Open the **Storm Drain Editor** and click **Select Components from Shapefile**.

    .. image:: ../img/shg/5a/shg_sstorm002.jpg

    - Point layers like inlets and outfalls will show up in the dropdown.
    - Assign each required field from the shapefile attributes:

      - Example: `Inlet Name` → `name`, `Type` → `type`, etc.

    - Turn off unused or null-value fields to avoid unnecessary entries.

    .. image:: ../img/shg/5a/shg_sstorm003.jpg

    .. image:: ../img/shg/5a/shg_sstorm004.jpg

    .. image:: ../img/shg/5a/shg_sstorm005.jpg

    Click **Assign Selected Fields**, then click **OK** for the warning that follows.

    .. image:: ../img/shg/5a/shg_sstorm006.jpg

    .. raw:: html

        <h3> Step 3: Assign Nodes to Links </h3>

    Click the **Auto-Assign Links and Nodes** button.

    .. image:: ../img/shg/5a/shg_sstorm007.jpg

    - This assigns start and end nodes to each conduit.
    - Uses the closest node within a 3-ft radius from the first and last vertex of a conduit.

    .. warning::
       - Make sure conduit directions are correct using the **Reverse Line Tool** in the **Advanced Digitizing Toolbar**.
       - Use the **Snapping Tool** to ensure precise vertex-node connections.

    Check the **Simulate Storm Drain** box to turn it on.

    .. image:: ../img/shg/5a/shg_sstorm008.jpg

    .. raw:: html

        <h3> Step 4: Add Type 4 Rating Tables and Culverts </h3>

    - Go to the **Type 4 Table Editor**.

    .. image:: ../img/shg/5a/shg_sstorm009.jpg

    - Import rating tables for one type 4 inlet.

    .. image:: ../img/shg/5a/shg_sstorm010.jpg

    - File names must match inlet names (e.g., ``41.txt`` for inlet 41).
    - Format for rating tables: Depth on the left, Discharge on the right.

    .. raw:: html

        <h3> Step 5: Set Storm Drain Control Parameters </h3>

    - Set the **start and end time** of the simulation (e.g., 10 hours).
    - Ensure it matches any time series used.
    - Adjust the **report step**, **flow units** (CFS/CMS), and **routing method**.
    - Leave advanced defaults unless needed.

    .. image:: ../img/shg/5a/shg_sstorm011.jpg

    .. raw:: html

        <h3> Step 6: Schematize and Run </h3>

    - Click **Schematize Storm Drain** to export ``SWMM.OUTF``, ``SWMM.FLOW``, ``DROPBOX.DAT``, etc.

    .. image:: ../img/shg/5a/shg_sstorm012.jpg

    - Click **Quick Run** to simulate.
    - Output files will populate the designated folder.

    .. image:: ../img/shg/5a/shg_sstorm013.jpg

    .. image:: ../img/shg/5a/shg_sstorm014.jpg

    .. tip::
       If errors occur, check the shapefile connections, field assignments, or go to a **FLO-2D Troubleshooting** video in the series.



.. dropdown:: Advanced Storm Drain Tutorial


    This advanced lesson shows how to create a storm drain from Shapefiles.  
    It uses more complex shapefiles and features than the simple storm drain lesson. 


    .. Note:: It will be easier to view these videos on YouTube.

       Set the video playback speed to 2x to complete the lessons faster.

       The videos are more detailed whereas the text gives the minimum steps needed
       to complete the project.

    Storm drain checklist.

    Here is a checklist of tasks that need to be completed to successfully build the advanced storm drain model.

    - [ ] Inspect shapefile fields carefully.  A single incorrect field assignment can cause the storm drain to fail or run incorrectly.
    - [ ] Auto-assign nodes.
    - [ ] Adjust outfall locations so all outfalls are placed on a left bank node.
    - [ ] Check channel outfall elevations and ensure they are at or slightly higher than the channel invert elevation.
    - [ ] Ensure conduit length is a minimum of 30 ft, which is the cell size.
    - [ ] Add Type 4 rating tables and culverts to the Type 4 inlets.
    - [ ] Add a pump table and assign it to `P1`.
    - [ ] Create a storage unit volume table and assign `Storage1` to all storage units.
    - [ ] Add the Grover Street junction external inflow data.
    - [ ] Check storm drain control settings.
    - [ ] Schematize the network.
    - [ ] Perform a test run.

    .. raw:: html

        <h2>Create a Storm Drain from Shapefiles - Advanced</h2>

    .. raw:: html

       <iframe width="560" height="315" src="https://www.youtube.com/embed/DNxhqBgOfuY?si=D67eo3YLWYpqs0x4"
       title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media;
       gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>


    This lesson walks through building an entire storm drain system from shapefiles, defining rating tables, storage units, and pump curves, and then running the simulation.

    .. raw:: html

        <h3>Step 1: Load Shapefiles</h3>

    - Open the **Advanced Storm Drain Layers** folder.
    - Drag and drop the appropriate shapefiles into QGIS.

    .. image:: ../img/shg/5b/shg_storm001.jpg
    
    - Save the project and when prompted to save the layers to the GeoPackage, select **No**.  
    - These layers can be removed when no longer needed.
    - These features will be copied to the Storm Drain User Layers and are no longer needed when that process is complete and 
      the test run is successful.

    .. raw:: html

        <h3>Step 2: Assign Shapefile Fields</h3>

    Open the **Storm Drain Editor** and click **Select Components from Shapefile**.

    .. image:: ../img/shg/5b/shg_storm002.jpg

    - Point layers like inlets, outfalls, and storage units will show up in the dropdown.
    - Assign each required field from the shapefile attributes:
      - Example: `Inlet Name` → `name`, `Type` → `type`, etc.
    - Turn off unused or null-value fields to avoid unnecessary entries.

    .. image:: ../img/shg/5b/shg_storm003.jpg

    .. image:: ../img/shg/5b/shg_storm004.jpg

    .. image:: ../img/shg/5b/shg_storm005.jpg

    .. image:: ../img/shg/5b/shg_storm006.jpg

    .. image:: ../img/shg/5b/shg_storm021.jpg

    .. image:: ../img/shg/5b/shg_storm022.jpg

    .. image:: ../img/shg/5b/shg_storm023.jpg

    Click **Assign Selected Fields**, then click **OK** for the warning that follows.

    .. image:: ../img/shg/5b/shg_storm024.jpg

    .. image:: ../img/shg/5b/shg_storm007.jpg

    .. warning::
        **Warning 1**
        The yellow warning bar is normal with respect to the advanced storm drain system.  It has 1 junctions and 4 outfalls
        that are positioned outside of the grid area.  This is done intentionally to demonstrate that it is OK to have 
        these feature outside of the grid area so long as they do not need to connect to the surface.  Those outfalls 
        should be set to Sink or 0 in the Allow Discharge field. The junctions should have a name that doesn't start with
        "I" because they do not interact with the surface.
        
        **Warning 2**
        The Warning dialog box is also normal because the node names were not filled during the field assignment step.
        The fields will be filled in the next step.


    .. raw:: html

        <h3>Step 3: Auto-Assign Nodes to Links</h3>

    Click the **Auto-Assign Links and Nodes** button.

    .. image:: ../img/shg/5b/shg_storm008.jpg

    - This assigns start and end nodes to each conduit.
    - Uses the closest node within a 3-ft radius from the first and last vertex of a conduit.

    .. warning::
       - Make sure conduit directions are correct using the **Reverse Line Tool** in the **Advanced Digitizing Toolbar**.
       - Use the **Snapping Tool** to ensure precise vertex-node connections.

    Check the **Simulate Storm Drain** box to turn it on.

    .. image:: ../img/shg/5b/shg_storm010.jpg

    .. raw:: html

        <h3>Step 4: Check Outfalls</h3>

    - Ensure every outfall that is near the channel is aligned to a left bank grid.
    - Move outfalls and conduit vertices as needed to ensure they are contained by a left bank grid element.
    - Select the outfall and conduit layers and click the Edit Pencil.
    - Use the **Snapping Tool** to ensure precise vertex-node connections.
    - Click the vertex to pick it up.  Move the cursor to the left bank grid and click again to drop it.

    .. image:: ../img/shg/5b/shg_storm001.gif

    - Outfalls should have the same an elevation that is the same or slightly higher than the channel cross section.
    
    .. image:: ../img/shg/5b/shg_storm032.jpg
        
    .. raw:: html

        <h3>Step 5: Check Conduit Length</h3>

    - Open the Conduits attribute table.
    - Sort the table by the `length` field.
    - Select the conduits than are less than 30 ft long.
    - Set the field editor to the `length` field.
    - Set the length of the conduits to 30 ft.
    - Apply 30 ft to the selected conduits.

    .. image:: ../img/shg/5b/shg_storm033.jpg

    .. raw:: html

        <h3>Step 6: Add Type 4 Rating Tables and Culverts</h3>

    - Go to the **Type 4 Table Editor**.

    .. image:: ../img/shg/5b/shg_storm011.jpg

    - Import rating tables or culvert equations for each type 4 inlet.

    .. image:: ../img/shg/5b/shg_storm012.jpg

    - The rating table file names must match inlet names (e.g., ``I4-47-32-26-1.txt`` matches inlet ``I4-47-32-26-1``).
    - Format for rating tables: Depth on the left, Discharge on the right.

    .. image:: ../img/shg/5b/shg_storm013.jpg

    - The culvert equations are set for type 4 inlets.
    - The culvert data needs to be written to a file names TYPE4CULVERT.txt.
    - The format of the file is important. 

    .. image:: ../img/shg/5b/shg_storm013c.jpg

    - After the import is complete, review the warning text file to check for any issues.

    .. image:: ../img/shg/5b/shg_storm013a.jpg

    .. raw:: html

        <h3>Step 7: Add Pump Curve Data</h3>

    - Add a pump curve via the Pump Table interface.

    .. image:: ../img/shg/5b/shg_storm014.jpg

    - Name it to match the pump (e.g., ``P1``).

    .. image:: ../img/shg/5b/shg_storm015.jpg

    - Enter a depth-discharge pair (e.g., ``1,10``, ``2,20``).

    .. image:: ../img/shg/5b/shg_storm016.jpg

    - Data is saved automatically when the table is modified.

    .. raw:: html

        <h3>Step 8: Add Storage Unit Curves</h3>

    - Open **Storage Units** attribute table.

    .. image:: ../img/shg/5b/shg_storm025.jpg

    Zoom to the storage units.

    .. image:: ../img/shg/5b/shg_storm025a.jpg

    - Use the **FLO-2D Info Tool** to open the storage curve editor.

    .. image:: ../img/shg/5b/shg_storm026.jpg

    - Import a tab-delimited text file or paste Excel values.

    .. image:: ../img/shg/5b/shg_storm027.jpg

    - Repeat the select feature process for the other two storage units.  
    - They should already be set because they had the correct curve name in the attribute table field.
    - All three storage units will use the same storage curve named `Storage1`.

    .. raw:: html

        <h3>Step 9: Set External Inflow for Grover Street Junction</h3>

    - Zoom to the northeast corner of the storm drain system.

    .. image:: ../img/shg/5b/shg_storm028.jpg

    - Use the **FLO-2D Info Tool** to open the junction editor of the junction that is outside the grid area.
    - Set the `Grover Street` junction to have an external inflow = Yes.

    .. image:: ../img/shg/5b/shg_storm029.jpg

    - Click the Blue button to open the time series editor.
    - Click the three dots next to `Time Series` to open the time series editor.
    - Assign the Time Series Name and Description as shown in the image below.
    - Add one blank line to the table.
    - Copy the time series data from the `GroverTimeSeries.txt` file.
    - Paste the data into the time series table.
    - Close both editors.

    .. image:: ../img/shg/5b/shg_storm030.jpg

    .. image:: ../img/shg/5b/shg_storm031.jpg 


    .. raw:: html

        <h3>Step 10: Set Storm Drain Control Parameters</h3>

    - Set the **start and end time** of the simulation (e.g., 10 hours).
    - Ensure the start time and end time matches any time series data used. (Grover Street Time Series)
    - Check the **report step**, **flow units** (CFS/CMS), and **routing method**.
    - The Hardwired parameters are not editable in this dialog.  If they are modified in the swmm.inp file, they will be
      ignored by the FLO-2D Storm Drain engine. 


    .. image:: ../img/shg/5b/shg_storm017.jpg

    .. raw:: html

        <h3>Step 11: Schematize and Run</h3>

    - Click **Schematize Storm Drain** to export ``SWMM.OUTF``, ``SWMM.FLOW``, ``DROPBOX.DAT``, etc.

    .. image:: ../img/shg/5b/shg_storm018.jpg

    - Click **Quick Run** to simulate.
    - Output files will populate the designated folder.

    .. image:: ../img/shg/5b/shg_storm019.jpg

    .. image:: ../img/shg/5b/shg_storm020.jpg

    .. tip::
       If errors occur, check the shapefile connections, field assignments, or go to a **FLO-2D Troubleshooting** video in the series.

.. raw:: html

    <h2>Summary and Review Results</h2>

This lesson shows the process to review results and confirm that a storm drain model is set up and working correctly.

.. raw:: html

        <iframe width="560" height="315" src="https://www.youtube.com/embed/n_DxnlHc0kY?si=K3L090c8i3lBXzid" 
        title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; 
        gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

.. raw:: html

    <h2>Storm Drain from SWMM.INP</h2>

Coming Soon