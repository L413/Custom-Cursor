javascript: if(document.getElementById('mymenu')) { document.getElementById('mymenu').remove(); }else{ var block_to_insert ; var container_block ; block_to_insert = document.createElement('div'); block_to_insert.id = 'mymenu'; block_to_insert.innerHTML = '<head> <link rel="stylesheet" href="https://l413.github.io/Cursor-Changer/style.css"> <script type="text/javascript" src="https://l413.github.io/Cursor-Changer/js/rainbow.js"></script></head><body><div class="btn-group"> <h3 class="embed">Cursor Changer</h3> <button class="button" onclick="rainbow()">Rainbow</button> <button class="button">Button</button> <button class="button">Button</button> <button class="button">Button</button></div></body>'; container_block = document.getElementsByTagName('body')[0]; container_block.appendChild(block_to_insert); mymenu.setAttribute('style', 'height:1px; width:1px; background-color:none; color:black; float:left; font-family:sans-serif; font-size:12px; z-index:10000; display: inline-block;line-height:unset!important; line-height:1!important; overflow:visible; position:fixed; top: 0; padding:none;'); }
