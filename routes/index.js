/*
 * GET home page.
 */

exports.view = function(req, res){
  res.render('index', {
	'projects': [
		{ 	'name': 'Communicating With Family Members',
		    'image': 'lorempixel.people.1.jpeg',
		    'id': 'project1',
		    'summmary' : 'HIHIHI'
		},
		{ 	'name': 'Carpooling Communication',
			'image': 'lorempixel.city.1.jpeg',
			'id': 'project2',
			'summmary' : 'HIHIHI'
		},
		{ 	'name': 'Communication Across Cultures/Languages',
			'image': 'lorempixel.technics.1.jpeg',
			'id': 'project3',
			'summmary' : 'HIHIHI'
		},
		{ 	'name': 'Music Recommendation Communication',
			'image': 'lorempixel.technics.1.jpeg',
			'id': 'project4',
			'summmary' : 'HIHIHI'
		}   	
	]
  });
};
