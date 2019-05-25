	validateMinAndMax(question){
			const vm = this;
			var value = vm.getInteger(question.value);
			if(question.rules){
				var rules = vm.getObject(question.rules);
				if(rules){
					if( (value < rules.min || value > rules.max) ){
						return false;
					}else {
						return true;
					}
				}
			}
		};
