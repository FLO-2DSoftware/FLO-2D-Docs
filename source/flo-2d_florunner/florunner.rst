FLORunner
=========

FLORunner allows you to batch run one or more FLO-2D projects in a controlled sequence.

1. Select the project folder
   Click the **Folder** button and select the ``CONT.DAT`` file located in the FLO-2D project directory.

   .. figure:: img/select_cont.png
      :align: center

2. Select multiple project folders (optional)
   To run multiple projects, click the **Multiple folders** button and select the directories containing FLO-2D projects.

   .. figure:: img/select_md.png
      :align: center

3. Review detected projects
   After selecting the folder or folders, FLORunner automatically detects all FLO-2D projects and lists them in the main window along with their current status.

   .. figure:: img/selected_projects.png
      :align: center

   .. note::

      - A green check mark indicates that the project completed successfully.
      - A blue circle indicates that the project is on hold.
      - A red warning icon indicates that the project failed.

4. Set the execution order
   The last column shows the order in which projects will be executed. Adjust the order using the **Up Arrow** and **Down Arrow** buttons.

   .. figure:: img/project_order.png
      :align: center

   .. note::

      - Order numbers must be unique.
      - Projects with order ``0`` will not be executed.

5. Run the simulations
   Once the execution order is defined, click the **Run** button to start the simulations in the specified sequence.
