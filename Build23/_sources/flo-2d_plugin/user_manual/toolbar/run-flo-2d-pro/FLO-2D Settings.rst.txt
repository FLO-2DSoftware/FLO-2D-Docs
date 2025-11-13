FLO-2D Plugin Settings
======================

.. important:: To ensure proper execution of executables/plugins, it is essential to install the executables in the
               correct FLO-2D folder, the plugins in QGIS, and configure the paths accurately within the
               FLO-2D Plugin Settings.

The FLO-2D Plugin Settings tool has several functions:

- Define the simulation path.

- Connect to simulation results.

- Start a Debug run.

- Show hidden layers.

Define Simulation Path
------------------------

1. Click on the
   FLO-2D Plugin Settings tool button.

.. image:: ../../../img/Buttons/run001.png

2. Click on the button to select the FLO-2D PRO folder.

.. image:: ../../../img/Flo-2D-Plugin-Settings/pluginsettings001.png

3. Navigate to the FLO-2D PRO folder.

.. image:: ../../../img/Flo-2D-Plugin-Settings/pluginsettings002.png

.. note:: The default path is: "C:\\Program Files (x86)\\FLO-2D PRO"

4. Click OK to select the FLO-2D PRO folder.

.. image:: ../../../img/Flo-2D-Plugin-Settings/pluginsettings003.png

5. Click on the button to select the FLO-2D Project folder.

.. image:: ../../../img/Flo-2D-Plugin-Settings/pluginsettings004.png

.. note:: This is the folder where FLO-2D PRO is going to run and generate the \*.OUT files.

6. Click OK select the FLO-2D Project folder.

.. image:: ../../../img/Flo-2D-Plugin-Settings/pluginsettings005.png

7. Click OK to save the settings.

.. image:: ../../../img/Flo-2D-Plugin-Settings/pluginsettings006.png

.. note:: The FLO-2D Project folder is updated everytime that files are exported. Double check the FLO-2D Project folder
          prior running a simulation.

Connect to Results
------------------------

Follow the same method shown in Define Simulation Path to connect the FLO-2D Plugin to Simulation results.

.. image:: ../../../img/Flo-2D-Plugin-Settings/outfiles.png

Once the
plugin is connected to a folder with a completed simulation, a project review system is activated.

.. image:: ../../../img/Flo-2D-Plugin-Settings/results.png


See more info on this system here: `FLO-2D Info and Results <../flo-2d-info-tool/FLO-2D%20Info%20Tool.html#info-tool>`__


Start a Debug Run
------------------------

See `Debug Tool <../flo-2d-project-review/Debug.html>`__ for the Debug Run.

.. image:: ../../../img/Flo-2D-Plugin-Settings/pluginsettings007.png

Show Hidden Layers
---------------------

The FLO-2D Plugin v1.0.0 and later hides layers that do not need to be viewed by most end users.  However, it is
possible to show these layers for troubleshooting purposes.

.. image:: ../../../img/Flo-2D-Plugin-Settings/pluginsettings008.png

Uncheck the checkbox to hide the layers again.

.. image:: ../../../img/Flo-2D-Plugin-Settings/pluginsettings009.png
