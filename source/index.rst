.. version: Build 25
.. This is the documentation for Build 25

FLO-2D Pro Documentation – Build 25
====================================

.. raw:: html

   <div style="text-align:center">
     <img id="flo2dimg" src="_static/docshome.png" usemap="#flo2dmap" style="max-width:100%; height:auto;">
     <map name="flo2dmap">
       <!-- Installation -->
       <area shape="rect" coords="120,760,380,860" href="setup/index.html" alt="Installation">
       <!-- Reference Manuals -->
       <area shape="rect" coords="430,760,740,860" href="flo-2d_pro/index.html" alt="Reference Manuals">
       <!-- Plugin Docs -->
       <area shape="rect" coords="780,760,1060,860" href="flo-2d_plugin/index.html" alt="Plugin Docs">
       <!-- Tutorials -->
       <area shape="rect" coords="1100,760,1380,860" href="tutorials/index.html" alt="Tutorials">
     </map>

     <script>
     (function() {
       var img = document.getElementById('flo2dimg');
       // Store original coords from natural image size
       var areas = img.parentElement.querySelector('map').querySelectorAll('area');
       var origCoords = Array.from(areas).map(a => a.getAttribute('coords'));
       var naturalW = 1200;

       function scaleCoords() {
         if (!naturalW) naturalW = img.naturalWidth;
         if (!naturalW) return;
         var scale = img.clientWidth / naturalW;
         areas.forEach(function(area, i) {
           var scaled = origCoords[i].split(',').map(function(n) {
             return Math.round(parseFloat(n) * scale);
           }).join(',');
           area.setAttribute('coords', scaled);
         });
       }

       if (img.complete) {
         scaleCoords();
       } else {
         img.addEventListener('load', scaleCoords);
       }
       window.addEventListener('resize', scaleCoords);
     })();
     </script>
   </div>


Welcome to the Build 25 version of the FLO-2D Documentation.

.. toctree::
   :maxdepth: 1
   :caption: Contents:

   setup/index
   flo-2d_pro/index
   flo-2d_plugin/index
   flo-2d_mapcrafter/index
   flo-2d_florunner/index
   tutorials/index
