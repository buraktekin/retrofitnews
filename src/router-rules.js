const routerRules = {
	inactiveUser: function(from, to) {
		// '/' -> '/authentication' is allowed,
		// '/' -> '/fields' is not allowed redirect to '/authentication',
		// '/' -> '/preview' is not allowed redirect to '/authentication',
		// '/authentication' -> '/' is allowed,
		// '/authentication' -> '/field' is allowed <=> user log in,
		// '/authentication' -> '/preview' is allowed <=> user log in + already passed field page,
		switch(from) {
			case '/':
				if(to === '/fields') { 
					return '/authentication' 
				} else if(to === '/preview') { 
					return '/authentication' 
				} else {
					return;
				} break;

			case '/authentication':
				if(to === '/fields') { 
					return '/fields' 
				} break;

			default:
				return;
		}
	},
	activeUser: function(from, to) {
		// '/fields' -> '/' is not allowed redirect to '/fields',
		// '/fields' -> '/authentication' is not allowed redirect to '/fields',
		// '/fields' -> '/preview' is not allowed if selection is not done yet redirect to '/fields',
		// '/preview' -> '/' is not allowed redirect to '/preview',
		// '/preview' -> '/field' is not allowed redirect to '/preview',
		// '/preview' -> '/authentication' is not allowed redirect to '/preview',
		switch(from) {
			case '/fields':
				if(to === '/') { 
					return '/fields' 
				} else if(to === '/preview') { 
					return '/fields' 
				} else if(to === '/authentication') { 
					return '/fields' 
				} else {
					return;
				} break;

			case '/preview':
				if(to === '/') { 
					return '/preview' 
				} else if(to === '/authentication') { 
					return '/preview' 
				} else if(to === '/fields') { 
					return '/preview'
				} else {
					return true
				} break;
		}
	}
}