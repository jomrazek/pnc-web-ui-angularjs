/*
 * JBoss, Home of Professional Open Source.
 * Copyright 2014-2020 Red Hat, Inc., and individual contributors
 * as indicated by the @author tags.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
(function () {
  'use strict';

  angular.module('pnc.scm-repositories').component('pncScmRepositoriesListPage', {
    bindings: {
      /**
       * array of SCM Repositories: The list of SCM Repositories to display.
       */
      scmRepositories: '<'
    },
    templateUrl: 'scm-repositories/list/pnc-scm-repositories-list-page.html',
    controller: ['filteringPaginator', 'SortHelper', Controller]
  });

  function Controller(filteringPaginator, SortHelper) {
    var $ctrl = this;

    const PAGE_NAME = 'scmRepositoriesList';

    // -- Controller API --
    $ctrl.scmRepositoriesFilteringFields = [{
      id: 'internalUrl',
      title: 'Internal URL',
      placeholder: 'string | !string | s?ring | st*ng',
      filterType: 'text'
    }, {
      id: 'externalUrl',
      title: 'External URL',
      placeholder: 'string | !string | s?ring | st*ng',
      filterType: 'text'
    }];

    $ctrl.scmRepositoriesSortingFields = [{
//      id: 'name',
//      title: 'Name',
//    },{
      id: 'internalUrl',
      title: 'Internal URL',
    }, {
      id: 'externalUrl',
      title: 'External URL',
    }];

    // --------------------

    $ctrl.$onInit = function () {
      $ctrl.scmRepositoriesFilteringPage = filteringPaginator($ctrl.scmRepositories);

      $ctrl.scmRepositoriesSortingConfigs = SortHelper.getSortConfig(PAGE_NAME);

    };

  }

})();
