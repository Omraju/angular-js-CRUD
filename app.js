angular
.module('myApp', [])
.controller('myCtr', function($scope){
    $scope.contacts = [{id: '1', name: 'omraju', email:'omraju@gmail.com',number:'7550352040'},{id:2, name:'gokul', email:'goku@gmail.com', number:'7550352040'},{id:3, name:'Modhana', email:'modhu@gmail.com', number:'0987654321'},{id:4, name:'chitra', email:'chitra@gmail.com', number:'9488829453'}];

    $scope.add =function(){
        $scope.contacts.push({
            id:$scope.id,
            name:$scope.name,
            email:$scope.email,
            number:$scope.number          
        });

        $scope.id='';
        $scope.name='';
        $scope.email='';
        $scope.phone='';
    };
    $scope.del=function(x){
        $scope.contacts.splice(x, 1)
    };

    function select(id){
        for(let i=0; i<$scope.contacts.length; i++){
            if($scope.contacts[i].id==id){
                return i;
            }
        }
        return -1;
    };

    $scope.edit=function(id){
        let index=select(id);
        let x= $scope.contacts[index];
        $scope.id=x.id;
        $scope.name=x.name;
        $scope.email=x.email;
        $scope.number=x.number;
    };

    $scope.save=function(){
        let index = select($scope.id);
        $scope.contacts[index].name=$scope.name;
        $scope.contacts[index].email=$scope.email;
        $scope.contacts[index].number=$scope.number;
        // $scope.contacts[index].name=$scope.name;
        $scope.id='';
        $scope.name='';
        $scope.email='';
        $scope.number='';


    };

    // $scope.save=finction(){
    //     let index= select($scope)
    // }
 })