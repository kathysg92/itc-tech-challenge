'use strict';

/* Controllers */

techChallenge
.controller('CompanyController', function ($location, $window, $log, $scope, $routeParams, $http, $templateCache, $mdToast, Card, Company) {
    function init() {
		$scope.validImage = false;
		$scope.card = new Card();
        $scope.company = {};        
        $window.scrollTo(0, 0);
        $http.get('partials/card-content.html').then(function (resp) {
            var template = resp.data;
            $templateCache.put('cardContentTemplate.html', template);
        });
	}
	
	function showToast(msg, delay, isLoading) {
		var toastTemplate = '<md-toast class="md-capsule"><span>' + msg + '</span></md-toast>';
		if (!delay) {
			delay = 0;
		}
        if (isLoading) {
            toastTemplate = '<md-toast class="md-capsule"><md-progress-circular md-diameter="24" md-mode="indeterminate"></md-progress-circular><span>' + msg + '</span></md-toast>';
        }
        return $mdToast.show({
            template : toastTemplate,
            hideDelay : delay,
            position : 'bottom left'
        });
	}
	
	function showErrorMessage(e, msg) {
		var errorMsg = msg || '';
		if (e) {
			if (e.data) {
				$log.error('HTTP error ' + e.status + ' ' + e.statusText + ': ' + e.data.message);
				errorMsg.concat(': ' + e.data.message + ' (status ' + e.status + ' ' + e.statusText + ')');
			} else {
				$log.error('HTTP error ' + e.status + ' ' + e.statusText);
				errorMsg.concat(': ' + ' status ' + e.status + ' ' + e.statusText);
			}			
		}
		showToast(errorMsg, 0);
	}
	
	function loadCompanyCard() {
		showToast("Loading company info...", 3000, true);
		if ((!isNaN($routeParams.id)) && (Number($routeParams.id) % 1 === 0)) {
			Card.get({
				cardId : $routeParams.id
			}).$promise.then(function (r) {
				showToast('Company info loaded!', 5000);
				$scope.company = Company.fromCard(r);
				$scope.card = r;		
				$log.debug($scope.card);
			}, function (e) {
				showErrorMessage(e, 'Error loading company page');
			});
		} else {
			showErrorMessage(null, $routeParams.id + ' is not a valid id.');
		}
	}
	
	function createCompanyCard() {
		$scope.card.$create(function (r) {
			$log.info('Card created: ' + JSON.stringify(r));
			showToast('Company card saved: ' + r.id + '!', 5000);
			init();
			$scope.companyForm.$setUntouched();
		}, function (e) {
			showErrorMessage(e, 'Error creating company page');
		});
	}
	
	function updateCompanyCard() {
		$scope.card.$update(function (r) {			
			$log.info('Card updated.');
			showToast('Company card updated!', 5000);				
			loadCompanyCard();
		}, function (e) {
			showErrorMessage(e, 'Error saving company page');
		});
	}

	$scope.cancel = function () {
		if ($routeParams.id) {
			loadCompanyCard();
		} else {
			init();
			$scope.companyForm.$setUntouched();
		}
	};
	
	$scope.validateImage = function () {
		if ($scope.company.logoImgUrl) {
			if (!$scope.company.logoImgUrl.indexOf('http') == 0) {
				$scope.company.logoImgUrl = 'http://'.concat($scope.company.logoImgUrl);
			}
		}
		$scope.syncCardModel();
	};
	
	$scope.isCompanyValid = function () {
		if ($scope.companyForm.$pristine) {
			return false;
		}
		if ($scope.companyForm.$invalid) {
			return false;
		}
		return true;
	};
	
	$scope.saveCompany = function(company) {		
		var comp = Company.create(company);		
		console.log(comp)
		console.log(comp.$promise.$$state.status)
		var failed = 0;
		comp.$promise.catch(function(){
			showToast("Failed to add company, make sure you are logged in, company name and country must be filled up!", 5000, true);
			failed = 1;
		}).then(function(){
			if(failed == 0){
				showToast("Company added!", 5000, true);
				$location.path( "/" );		
			}
		});
	}

	$scope.companies = Company.get();

    init();
    if ($routeParams.id) {
		loadCompanyCard();
    }

})
.controller('CompanyListController', function ($log, $scope, $routeParams, Company) {
	$scope.companies = Company.get();
	// console.log($routeParams.id);
	$scope.company = Company.getOne({"id" : $routeParams.id});
})
.controller('ProductListController', function ($log, $scope, $routeParams, Product) {
	$scope.products = Product.get();
	$scope.product = Product.getOne({"id" : $routeParams.id});

})
.controller('PrincipalController', function ($window, $log, $scope, $routeParams, $http, $templateCache, $mdToast, Card, Company) {
	$('.mdh-toggle-search').click(function() {
    // No search bar is currently shown
    if ($(this).find('i').text() == 'search') {
      $(this).find('i').text('cancel');
      $(this).removeClass('mdl-cell--hide-tablet mdl-cell--hide-desktop'); // Ensures the close button doesn't disappear if the screen is resized.

      $('.mdl-layout__drawer-button, .mdl-layout-title, .mdl-badge, .mdl-layout-spacer').hide();
      $('.mdl-layout__header-row').css('padding-left', '16px'); // Remove margin that used to hold the menu button
      $('.mdh-expandable-search').removeClass('mdl-cell--hide-phone').css('margin', '0 16px 0 0');
      
    }
    // Search bar is currently showing
    else {
      $(this).find('i').text('search');
      $(this).addClass('mdl-cell--hide-tablet mdl-cell--hide-desktop');
      
      $('.mdl-layout__drawer-button, .mdl-layout-title, .mdl-badge, .mdl-layout-spacer').show();
      $('.mdl-layout__header-row').css('padding-left', '');
      $('.mdh-expandable-search').addClass('mdl-cell--hide-phone').css('margin', '0 50px');
    }

    
  });
})
.controller('BlogController', function ($window, $log, $scope, $routeParams, $http, $templateCache, $mdToast, Card, Company) {
	function init() {
		
	}
})
.controller('EntryController', function ($window, $log, $scope, $routeParams, $http, $templateCache, $mdToast, Card, Company) {
	function init() {
		
	}
})
.controller('EntryController2', function ($window, $log, $scope, $routeParams, $http, $templateCache, $mdToast, Card, Company) {
	function init() {
		
	}
})
.controller('EntryController3', function ($window, $log, $scope, $routeParams, $http, $templateCache, $mdToast, Card, Company) {
	function init() {
		
	}
})
.controller('EntryController4', function ($window, $log, $scope, $routeParams, $http, $templateCache, $mdToast, Card, Company) {
	function init() {
		
	}
})
.controller('AboutController', function ($window, $log, $scope, $routeParams, $http, $templateCache, $mdToast, Card, Company) {
	function init() {
		
	}
})
.controller('LoginController', function ($scope, $mdDialog, User) {
	$scope.status = '  ';
	$scope.showLogin = function(ev) {
		$mdDialog.show({
		  parent: angular.element(document.body),
		  controller: 'LoginController',
		  templateUrl: 'partials/_login.html',
		  targetEvent: ev,
		  clickOutsideToClose:true
		})
	};

	$scope.hide = function() {
		$mdDialog.hide();
	};

	$scope.cancel = function() {
		$mdDialog.cancel();
	};
	
	$scope.answer = function(answer) {
		$mdDialog.hide(answer);
	};
})
.controller('EmailController', function ($scope, $mdDialog) {
	$scope.status = '  ';
	$scope.showEmail = function(ev) {
		$mdDialog.show({
		  parent: angular.element(document.body),
		  controller: 'EmailController',
		  templateUrl: 'partials/_email.html',
		  targetEvent: ev,
		  clickOutsideToClose:true
		})
		.then(function(answer) {
	      // $scope.status = 'You said the information was "' + answer + '".';
	      //if answer == send : send email 
	      console.log(answer)
	    }, function() {
	    	console.log(answer)
	      // $scope.status = 'You cancelled the dialog.';
	    });
	};
})

	 //  $scope.showProdDetail = function(ev) {
  //   	$mdDialog.show({
		//   parent: angular.element(document.body),
		//   controller: 'ProdDetailController',
		//   templateUrl: 'partials/_prodDetail.html',
		//   targetEvent: ev,
		//   clickOutsideToClose:true
		// })
  //   };
function submitLogin(){
	document.forms["LoginForm"].submit();
}

