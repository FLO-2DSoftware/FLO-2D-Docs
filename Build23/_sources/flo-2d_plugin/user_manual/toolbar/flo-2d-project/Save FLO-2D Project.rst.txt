Save FLO-2D Project
===================

In the current FLO-2D Plugin version, the QGIS Project file (\*.qgz) is saved inside the GeoPackage.
This new method has many advantages in terms of portability, styling the symbology, and reducing
potential path errors. It is also allowed to save external user layers to the GeoPackage.

Save a new FLO-2D Project
-----------------------------

1. Click this button to save the FLO-2D Project.

.. image:: ../../../img/Buttons/savebutton.png

.. note:: This save method is different from the New and Open FLO-2D Project buttons.
    This is the native QGIS save button, located at the top left of QGIS.

2. If no error was found and no external layers were added to the project, the following message will appear on QGIS
   toolbar showing that the project was correctly saved.

.. image:: ../../../img/Flo-2D-Project/saveproject001.png

Saving external layers into the geopackage
-------------------------------------------

1. If external layers are present in the project, The save operation is modified when a FLO-2D project is loaded.

.. image:: ../../../img/Flo-2D-Project/saveext001.png

2. Select **Yes** will open the GeoPackage Manager.  To protect a layer and keep it with the project.  Move the layer to the
   left window.  This will commit the layer to the geopackage and disconnect it from the external file.

3. If the layer is only needed once consider keeping it on the right side and then remove it from the project once it
   is no longer required.

4. Things like Google Maps, Server Connected Layers, MapCrafter Layers are not allowed on the left.  Leave them on
   the right.

.. image:: ../../../img/Flo-2D-Project/saveext002.png

5. If **No** is selected, all layers will be saved as paths.  If this method is used and a project is moved to another
   location or computer, the file paths must be reconnected and the external files may need to be moved too.

6. Layers such as Google Maps, MapCrafter layers will not become part of the GeoPackage.  They will be saved to the
   QGZ system.

.. image:: ../../../img/Flo-2D-Project/saveproject002.png

.. note:: The current version only supports vectors and rasters to be saved to the geopackage. CSV files and basemaps
          are not allowed.  If a basemap or other file is loaded, it may still be able to save in the QGZ storage table
          that is packaged in the GeoPackage.

QGZ System
-------------------------------------------

1. QGZ files are now stored as part of the GeoPackage.  Access the Geopackage structure with the Browse Panel.

.. image:: ../../../img/Flo-2D-Project/qgz001.png

2. Right click the GeoPackage and click New Connection

.. image:: ../../../img/Flo-2D-Project/qgz002.png

3. Load the geopackage from the project folder.

.. image:: ../../../img/Flo-2D-Project/qgz003.png

4. Expand the geopackage layer and review the structure of the geopackage.

5. Notice how the Elevation layer and the QGZ system are now part of the Geopackage.

.. image:: ../../../img/Flo-2D-Project/qgz004.png

Removing Layers
--------------------------

1. If the layer is listed on the right side of the GeoPackage Manager, remove the layer using the
   Right Click >> Remove layer method.

.. image:: ../../../img/Flo-2D-Project/special001.png

2. If the layer is on the left side of the window, use the Geopackage Manager Delete button to remove the layer.

.. image:: ../../../img/Flo-2D-Project/special002.png

3. The MapCrafter Layers are saved to the QGZ not the Geopackage.

4. If a MapCrafter group or layer is removed with the
   Right Click >> Remove Layer method.

.. image:: ../../../img/Flo-2D-Project/special003.png

