FLORunner
=========

FLORunner allows you to batch run one or more FLO-2D projects in a controlled sequence.

1. Select the project folder.

   Click the **Folder** button and select the ``CONT.DAT`` file located in the FLO-2D project directory.

   .. figure:: img/select_cont.png
      :align: center

2. Select multiple project folders (optional).

   Click the **Multiple folders** button to select directories containing multiple FLO-2D projects.

   .. figure:: img/select_md.png
      :align: center

3. Review detected projects.

   FLORunner automatically detects all projects and displays their current status.

   .. figure:: img/selected_projects.png
      :align: center

   .. note::

      - Green check mark: project completed successfully.
      - Blue circle: project is on hold.
      - Red warning icon: project failed.

4. Set the execution order.

   Use the **Up Arrow** and **Down Arrow** buttons to define the run order.

   .. figure:: img/project_order.png
      :align: center

   .. note::

      - Order numbers must be unique.
      - Projects with order ``0`` will not run.

5. Run the simulations.

   Click the **Run** button to start the simulations in the defined order.
