/* jshint browser: true, jquery: true, camelcase: true, indent: 2, undef: true, quotmark: single, maxlen: 80, trailing: true, curly: true, eqeqeq: true, forin: true, immed: true, latedef: true, newcap: true, nonew: true, unused: true, strict: true */

var main = function () 
{ 
	'use strict';
    var url = '';

	var addCommentFromInputBox = function () 
    {
		var input = $('.route input').val();

    	if ( input === '/average' || input === '/max' || input === '/isEven' || input === '/isEveryNumEven' ) 
        {
        	
        	url = 'http://localhost:3000';
            url = url + input;

            $.ajax(
            {
    			url: url, 
    			type: 'post',
            	dataType: 'json',
            	data: JSON.stringify({"array": "[1,2,3,4,5]" }),
            	contentType: 'application/json',
            	success: function(data)
                {
                	$('#two').val(data.answer);
       			}
			});
        }

        else if( input === '/arrayContains' )
        {
            url = 'http://localhost:3000';
            url = url + input;
        	
            $.ajax(
            {
    			url: url, 
    			type: 'post',
            	dataType: 'json',
            	data: JSON.stringify({"array":"['hello','world']", "arg2":"hello"}),
            	contentType: 'application/json',
            	success: function(data)
                {
                    $('#two').val(data.answer);
       			}
			});

        }

        else if( input === '/arrayContainsTwo' )
        {
            url = 'http://localhost:3000';
            url = url + input;
        	
            $.ajax(
            {
    			url: url, 
    			type: 'post',
            	dataType: 'json',
            	data: JSON.stringify({"array":"['a','b','a','c']", "arg2":"c"}),
            	contentType: 'application/json',
            	success: function(data)
                {
                	$('#output-result').val(data.answer);
       			}
			});
        }

        //resets the input box to default string
        $('#input-function').val('');

	};


	$('.route button').on('click', function (event) 
    {
    	addCommentFromInputBox();
	});
    
    url = '';
};

$(document).ready(main);
