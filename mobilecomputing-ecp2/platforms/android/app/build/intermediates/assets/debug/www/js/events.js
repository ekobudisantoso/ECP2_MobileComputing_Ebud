$(function() {
            
            $('#tombolku')//.on('tapstart', function (e) { konten( 'tapstart'); })
                            //.on('tapend', function(e) { konten( 'tapend'); })
                            .on('taphold', function(e) { konten( 'taphold'); })
                            .on('tap', function(e) { konten( 'tap'); })
                            .on('doubletap', function(e) { konten( 'doubletap'); })
            
        });

        // Log an event to the console:
        function konten( eventName )
        {
            var $p = $('<p class="nama">RANDY ANWAR ROMADHONY - 04315079</p>');
            var $i = $('<img class="gambar">');
            $("#konten").empty();
            if( eventName == 'doubletap' )
            {
            	$("#konten").empty();
                $i.attr('src','img/ayas.jpg')
                $p.appendTo( '#konten' );
            	$i.appendTo( '#konten' );
            } else if (eventName == 'taphold')
            {
            	$("#konten").empty();
				$i.attr('src','img/ayas2.jpg')
                $p.appendTo( '#konten' );
            	$i.appendTo( '#konten' );
            } else if (eventName == 'tap') {
            	$('#konten').empty();
            } else {
            	$('#konten').remove();
            }
        }
        