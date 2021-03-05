const app = angular.module('hailoc', []);

(() => {
    const controller = ($scope) => {

        const total = 240;
        const filter = [
            '004', '007', '010', '011', '012', '013', '015', '017', '022', '023',
            '024', '025', '029', '030', '036', '040', '041', '051', '056', '060',
            '065', '074', '077', '085', '086', '087', '090', '091', '095', '101',
            '102', '108', '109', '110', '112', '116', '117', '120', '128', '129',
            '132', '134', '142', '145', '147', '150', '154', '159', '167', '171',
            '180', '187', '190', '192', '195', '200', '211', '213', '228', '235',
            '213', '016', '174', '145', '197', '227', '034', '181', '105', '039',
            '225', '080', '236', '239', '044', '079', '072', '032', '123'
        ];

        /**
         * init
         */
        $scope.init = () => {
            $scope.next();
        };

        $scope.next = () => {
            let number = Math.floor(Math.random() * Math.floor(total)) + 1,
                image = number < 10 ? `00${number}` : number < 100 ? `0${number}` : `${number}`;

            console.log(image);
            filter.includes(image) ? $scope.next() : $scope.image = image;
        }

    };

    controller.$inject = ['$scope'];
    app.controller("hailoc", controller());
})();