var json = {
    'node': true,
    'camelcase': true,
    'indent': 4,
    'undef': true,
    'quotmark': 'single',
    'maxlen': 80,
    'trailing': true,
    'curly': true,
    'eqeqeq': true,
    'forin': true,
    'immed': true,
    'latedef': true,
    'newcap': true,
    'nonew': true,
    'unused': true,
    'strict': true
};

// -------------------------------- ARRAY 1 ----------------------------------------

var average = function(nums){
	var sum = 0, i;

	//get length of array
	var n = nums.length;

	for( i = 0; i < n; i++)
	{
		sum = sum + nums[i];
	}

	return (sum / n);

};

// -------------------------------- ARRAY 2 ----------------------------------------

var max = function(nums){

	var max, i = 0;

	//get length of array
	var n = nums.length;

	//make first item in array the max
	max = nums[i];

	for( ; i < n; i++)
	{

		if (nums[i] > max)
		{
			max = nums[i];
		}
	}

	return max;

};

// -------------------------------- ARRAY 3 ----------------------------------------

var isEven = function(nums){
	
	var i = 0, n, oneNumEven = false;

	n = nums.length;

	for (; i < n; i++)
	{
		if(nums[i] % 2 === 0)
		{
			oneNumEven = true;
		}
			
	}
	//if there is at least one number even, this will return true, otherwise false
	return oneNumEven;
};


// -------------------------------- ARRAY 4 ----------------------------------------

var isEveryNumEven = function(nums){
	
	var i = 0, n, oddNumber;

	n = nums.length;

	for (; i < n; i++)
	{
		if(nums[i] % 2 !== 0)
		{
			oddNumber = true;
		}	
	}

	if(oddNumber === true)
	{
		//return false since at least ONE NUMBER is odd
		return false;
	}
	else
		return true;
};

//returns true is all numbers are even, false if at least one number is odd


// -------------------------------- ARRAY 5 ----------------------------------------

var arrayContains = function(words, word)
{
	var i = 0, n, wordMatch = false;

	n = words.length;

	for (; i < n; i++)
	{
		if(words[i].toLowerCase() === word.toLowerCase())
		{
			wordMatch = true;
		}
	}
	
	if(wordMatch === true)
	{
		return true;
	}
	else
	{
		return false;
	}
};


// -------------------------------- ARRAY 6 ----------------------------------------

var arrayContainsTwo = function(words, word){
	
	var i = 0, n, count = 0;

	n = words.length;

	for (; i < n; i++)
	{
		if(words[i].toLowerCase() === word.toLowerCase())
		{
			count++;
		}
	}

	if(count >= 2)
	{
		return true;
	}
	else
		return false;
};


// --------------------------------------------------------------------------------------
//Server stuff


var express = require('express'),
	http = require('http'),
	app;

// Create our Express-powered HTTP server 
// and have it listen on port 3000
app = express(); 
app.use(express.static(__dirname +'/'));
http.createServer(app).listen(3000);

var bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());


app.post('/average', function (req, res) { 
	var array = JSON.parse(req.body.array);
	var answer = average(array);
	res.json({'answer': answer});
});

app.post('/max', function (req, res) { 
	var array2 = JSON.parse(req.body.array);
	var answer2 = max(array2);
	res.json({'answer': answer2});
});

app.post('/isEven', function (req, res) { 
	var array3 = JSON.parse(req.body.array);
	var answer3 = isEven(array3);
	res.json({'answer': answer3});
});

app.post('/isEveryNumEven', function (req, res) { 
	var array4 = JSON.parse(req.body.array);
	var answer4 = isEveryNumEven(array4);
	res.json({'answer': answer4});
});

app.post('/arrayContains', function (req, res) { 
	var array5 = req.body.array;
	var arg2 = req.body.arg2;

	var answer5 = arrayContains(array5,arg2);
	res.json({'answer': answer5});
});

app.post('/arrayContainsTwo', function (req, res) { 
	var array6 = req.body.array;
	var arg2 = req.body.arg2;

	var answer6 = arrayContainsTwo(array6,arg2);
	res.json({'answer': answer6});
});


